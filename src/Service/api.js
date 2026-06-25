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
  const url = `${BASE_URL}/careers.php`;

  console.log("Careers API URL:", url);
  console.log("Careers Payload:", payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Careers response status:", response.status);

    const text = await response.text();
    console.log("Careers raw response:", text);

    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      throw new Error("Invalid JSON from PHP: " + text);
    }

    if (!response.ok) {
      throw new Error(data?.message || "Careers API failed");
    }

    return data;
  } catch (error) {
    console.error("Careers fetch failed:", error);
    throw error;
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