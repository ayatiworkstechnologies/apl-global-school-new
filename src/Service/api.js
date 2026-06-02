import axios from "axios";

const BASE_URL = "https://www.aplglobalschool.com/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,

  // Let axios throw real errors for 4xx / 5xx
  validateStatus: (status) => status >= 200 && status < 300,

  transformResponse: [
    (data) => {
      if (data == null) return null;
      if (typeof data !== "string") return data;

      const trimmed = data.trim();
      if (!trimmed) return null;

      try {
        return JSON.parse(trimmed);
      } catch {
        return trimmed;
      }
    },
  ],
});

function normalizeApiData(data) {
  if (data == null) {
    return {
      success: false,
      status: "error",
      message: "Empty response from server.",
    };
  }

  if (typeof data === "string") {
    return {
      success: false,
      status: "error",
      message: data.trim() || "Empty response from server.",
      raw: data,
    };
  }

  return data;
}

function isSuccessResponse(data) {
  return (
    data?.success === true ||
    data?.status === true ||
    data?.status === "success" ||
    data?.status === "Success"
  );
}

function getApiErrorMessage(err) {
  return (
    err?.response?.data?.message ||
    err?.response?.data?.error ||
    err?.response?.data?.msg ||
    err?.message ||
    "Something went wrong. Please try again later."
  );
}

/**
 * POST enquiry form data to send-enquiry.php
 */
export const postEnquiry = async (formData) => {
  try {
    const { data: rawData } = await api.post("/send-enquiry.php", formData);
    const data = normalizeApiData(rawData);
    return data;
  } catch (err) {
    throw new Error(getApiErrorMessage(err));
  }
};

/**
 * POST contact form data to contact-enquiry.php
 */
export const contactEnquiry = async (payload) => {
  try {
    const { data: rawData } = await api.post("/contact-enquiry.php", payload);
    const data = normalizeApiData(rawData);

    if (!isSuccessResponse(data)) {
      throw new Error(data?.message || data?.error || "Contact submission failed.");
    }

    return data;
  } catch (err) {
    throw new Error(getApiErrorMessage(err));
  }
};

/**
 * POST careers form data to careers.php
 * Uses native fetch for better debugging after Next.js static export migration.
 */
export const careersData = async (payload) => {
  try {
    const response = await fetch(`${BASE_URL}/careers.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    let data;
    try {
      data = responseText ? JSON.parse(responseText) : null;
    } catch {
      data = {
        success: false,
        status: "error",
        message: responseText || "Invalid server response.",
        raw: responseText,
      };
    }

    console.log("Careers API status:", response.status);
    console.log("Careers API response:", data);

    if (!response.ok) {
      throw new Error(
        data?.message ||
          data?.error ||
          `Careers API failed with status ${response.status}`
      );
    }

    const normalizedData = normalizeApiData(data);

    if (!isSuccessResponse(normalizedData)) {
      throw new Error(
        normalizedData?.message ||
          normalizedData?.error ||
          "Career application submission failed."
      );
    }

    return normalizedData;
  } catch (err) {
    console.error("Careers API Error:", err);
    throw new Error(err?.message || "Career application submission failed.");
  }
};

/**
 * POST individual form data to individual.php
 */
export const individualData = async (payload) => {
  try {
    const { data: rawData } = await api.post("/individual.php", payload);
    const data = normalizeApiData(rawData);

    if (!isSuccessResponse(data)) {
      throw new Error(data?.message || data?.error || "Individual submission failed.");
    }

    return data;
  } catch (err) {
    throw new Error(getApiErrorMessage(err));
  }
};

/**
 * POST institution form data to institution.php
 */
export const InstitutionData = async (payload) => {
  try {
    const { data: rawData } = await api.post("/institution.php", payload);
    const data = normalizeApiData(rawData);

    if (!isSuccessResponse(data)) {
      throw new Error(data?.message || data?.error || "Institution submission failed.");
    }

    return data;
  } catch (err) {
    throw new Error(getApiErrorMessage(err));
  }
};