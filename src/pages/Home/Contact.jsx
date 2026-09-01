"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { contactEnquiry } from "@/Service/api";
import {
  getRecaptchaToken,
  initializeRecaptcha,
} from "@/utils/recaptcha";

export default function ContactUs() {
  useEffect(() => {
    initializeRecaptcha().catch((error) => {
      console.error("Unable to initialize reCAPTCHA:", error);
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (formData) => {
    try {
      // =========================================
      // STEP 1: Generate reCAPTCHA token
      // =========================================

      const recaptchaToken =
        await getRecaptchaToken(
          "contact_form"
        );

      if (!recaptchaToken) {
        throw new Error(
          "Security verification failed"
        );
      }

      // =========================================
      // STEP 2: Prepare payload
      // =========================================

      const payload = {
        name:
          (formData.name ?? "").trim(),

        email:
          (formData.email ?? "").trim(),

        phone:
          (formData.phone ?? "").trim(),

        enquiryfor:
          (
            formData.enquiryfor ?? ""
          ).trim(),

        message:
          (
            formData.message ?? ""
          ).trim(),

        // reCAPTCHA
        recaptchaToken,
      };

      // =========================================
      // STEP 3: Send to backend
      // =========================================

      const result =
        await contactEnquiry(payload);

      // =========================================
      // STEP 4: Success
      // =========================================

      if (
        String(
          result?.status
        ).toLowerCase() === "success"
      ) {
        toast.success(
          result?.message ||
            "Submitted successfully!",
          {
            className:
              "bg-secondary text-white font-semibold",
          }
        );

        reset();
      } else {
        throw new Error(
          result?.message ||
            "Something went wrong."
        );
      }
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Submission failed. Try again.";

      toast.error(msg, {
        className:
          "bg-primary text-white font-semibold",
      });
    }
  };

  return (
    <div className="bg-white px-4 sm:px-8 py-10">

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-10">
        Contact Us
      </h2>

      <div className="bg-third rounded-xl max-w-6xl mx-auto shadow-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">

          {/* =====================================
              LEFT - CONTACT FORM
          ====================================== */}

          <div className="p-6 sm:p-10 flex items-center">

            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="space-y-4 w-full text-white"
            >

              {/* =====================================
                  NAME + EMAIL
              ====================================== */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm mb-1 font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    {...register("name", {
                      required:
                        "Name is required",
                    })}
                    placeholder="Enter your name"
                    className="input"
                  />

                  {errors.name && (
                    <p className="text-secondary text-sm">
                      {
                        errors.name
                          .message
                      }
                    </p>
                  )}

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 font-medium"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required:
                        "Email is required",

                      pattern: {
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                        message:
                          "Invalid email address",
                      },
                    })}
                    placeholder="Enter your email"
                    className="input"
                  />

                  {errors.email && (
                    <p className="text-secondary text-sm">
                      {
                        errors.email
                          .message
                      }
                    </p>
                  )}

                </div>

              </div>


              {/* =====================================
                  PHONE + ENQUIRY
              ====================================== */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* PHONE */}

                <div>

                  <label
                    htmlFor="phone"
                    className="block text-sm mb-1 font-medium"
                  >
                    Contact Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    {...register("phone", {
                      required:
                        "Contact number is required",
                    })}
                    placeholder="Enter your phone number"
                    className="input"
                  />

                  {errors.phone && (
                    <p className="text-secondary text-sm">
                      {
                        errors.phone
                          .message
                      }
                    </p>
                  )}

                </div>


                {/* ENQUIRY FOR */}

                <div>

                  <label
                    htmlFor="enquiryfor"
                    className="block text-sm mb-1 font-medium"
                  >
                    Enquiry for
                  </label>

                  <select
                    id="enquiryfor"
                    {...register(
                      "enquiryfor",
                      {
                        required:
                          "Please select an enquiry type",
                      }
                    )}
                    className="input"
                  >

                    <option value="">
                      Please choose an option
                    </option>

                    <option value="Admission">
                      Admission
                    </option>

                    <option value="Careers">
                      Careers
                    </option>

                    <option value="Others">
                      Others
                    </option>

                  </select>

                  {errors.enquiryfor && (
                    <p className="text-secondary text-sm">
                      {
                        errors
                          .enquiryfor
                          .message
                      }
                    </p>
                  )}

                </div>

              </div>


              {/* =====================================
                  MESSAGE
              ====================================== */}

              <div>

                <label
                  htmlFor="message"
                  className="block text-sm mb-1 font-medium"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  {...register("message", {
                    required:
                      "Message is required",
                  })}
                  placeholder="Enter your message"
                  rows={4}
                  className="input"
                />

                {errors.message && (
                  <p className="text-secondary text-sm">
                    {
                      errors.message
                        .message
                    }
                  </p>
                )}

              </div>


              {/* =====================================
                  SUBMIT
              ====================================== */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  bg-secondary
                  text-white
                  uppercase
                  font-bold
                  px-6
                  py-2
                  rounded
                  hover:brightness-110
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit"}
              </button>

            </form>

          </div>


          {/* =====================================
              RIGHT IMAGE
          ====================================== */}

          <div className="hidden md:block h-full w-full">

            <img
              src="/assets/school-girl.webp"
              alt="School Girl"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </div>
  );
}
