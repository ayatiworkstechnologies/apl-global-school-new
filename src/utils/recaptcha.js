const DEFAULT_SITE_KEY = "6Lcf7KItAAAAAChFBeqD8DFpG_lrONMjXF-CC2UO";
const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || DEFAULT_SITE_KEY;
const LOAD_TIMEOUT_MS = 10000;

let scriptPromise = null;

function hasRecaptchaApi() {
  return Boolean(
    window.grecaptcha?.ready && window.grecaptcha?.execute
  );
}

function waitForRecaptchaApi() {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const checkApi = () => {
      if (hasRecaptchaApi()) {
        resolve();
        return;
      }

      if (Date.now() - startedAt >= LOAD_TIMEOUT_MS) {
        reject(new Error("reCAPTCHA did not become ready in time"));
        return;
      }

      window.setTimeout(checkApi, 50);
    };

    checkApi();
  });
}

function loadRecaptchaScript() {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("reCAPTCHA can only run in the browser")
    );
  }

  if (!SITE_KEY) {
    return Promise.reject(
      new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing")
    );
  }

  if (hasRecaptchaApi()) {
    return Promise.resolve();
  }

  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = (async () => {
    const existingScript = document.querySelector(
      'script[src*="google.com/recaptcha/api.js"]'
    );

    if (!existingScript) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        const timeoutId = window.setTimeout(() => {
          script.remove();
          reject(new Error("Timed out while loading reCAPTCHA"));
        }, LOAD_TIMEOUT_MS);

        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(
          SITE_KEY
        )}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          window.clearTimeout(timeoutId);
          resolve();
        };
        script.onerror = () => {
          window.clearTimeout(timeoutId);
          script.remove();
          reject(new Error("Failed to load reCAPTCHA"));
        };

        document.head.appendChild(script);
      });
    }

    await waitForRecaptchaApi();
  })().catch((error) => {
    scriptPromise = null;
    throw error;
  });

  return scriptPromise;
}

export function initializeRecaptcha() {
  return loadRecaptchaScript();
}

export async function getRecaptchaToken(action) {
  if (!/^[A-Za-z0-9/_]+$/.test(action)) {
    throw new Error("Invalid reCAPTCHA action name");
  }

  await loadRecaptchaScript();

  return new Promise((resolve, reject) => {
    const timeoutId = window.setTimeout(
      () => reject(new Error("reCAPTCHA verification timed out")),
      LOAD_TIMEOUT_MS
    );

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(SITE_KEY, {
          action,
        });

        window.clearTimeout(timeoutId);

        if (!token) {
          reject(new Error("reCAPTCHA returned an empty token"));
          return;
        }

        resolve(token);
      } catch (error) {
        window.clearTimeout(timeoutId);
        reject(error);
      }
    });
  });
}
