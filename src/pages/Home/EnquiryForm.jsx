"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  getRecaptchaToken,
  initializeRecaptcha,
} from "@/utils/recaptcha";
import { postEnquiry } from "../../Service/api";

export default function EnquiryForm() {
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
          "enquiry_form"
        );

      if (!recaptchaToken) {
        throw new Error(
          "Security verification failed"
        );
      }

      // =========================================
      // STEP 2: Create payload
      // =========================================

      const payload = {
        parentName:
          (formData.parentName ?? "").trim(),

        studentName:
          (formData.studentName ?? "").trim(),

        applyFor:
          (formData.applyFor ?? "").trim(),

        email:
          (formData.email ?? "").trim(),

        grade:
          (formData.grade ?? "").trim(),

        phone:
          (formData.phone ?? "").trim(),

        // Important
        recaptchaToken,
      };

      // =========================================
      // STEP 3: Send to PHP API
      // =========================================

      const result =
        await postEnquiry(payload);

      // =========================================
      // STEP 4: Success
      // =========================================

      toast.success(
        result?.message ||
          "Submitted successfully!",
        {
          className:
            "bg-secondary text-white font-semibold",
        }
      );

      reset();
    } catch (error) {
      console.error(
        "Enquiry form error:",
        error
      );

      toast.error(
        error?.message ||
          "Submission failed. Try again.",
        {
          className:
            "bg-primary text-white font-semibold",
        }
      );
    }
  };

  return (
    <div className="relative w-full font-secondary flex items-center justify-end">
      <div className="bg-third text-secondary p-6 rounded-2xl shadow-xl max-w-md w-full space-y-4">

        <h2 className="text-lg text-secondary font-semibold">
          Enquire Now - We're Happy to Help!
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

          {/* =====================================
              PARENT NAME + STUDENT NAME
          ====================================== */}

          <div className="grid grid-cols-2 gap-3">

            <div>
              <input
                type="text"
                {...register("parentName", {
                  required:
                    "Parent Name is required",
                })}
                placeholder="Parent Name"
                className="
                  bg-primary
                  placeholder-white
                  text-white
                  p-2
                  rounded
                  font-secondary
                  border-none
                  outline-none
                  w-full
                  focus:ring-2
                  focus:ring-secondary
                "
              />

              {errors.parentName && (
                <p className="text-xs text-secondary mt-1">
                  {
                    errors.parentName
                      .message
                  }
                </p>
              )}
            </div>


            <div>
              <input
                type="text"
                {...register("studentName", {
                  required:
                    "Student Name is required",
                })}
                placeholder="Student Name"
                className="
                  bg-primary
                  placeholder-white
                  text-white
                  p-2
                  rounded
                  font-secondary
                  border-none
                  outline-none
                  w-full
                  focus:ring-2
                  focus:ring-secondary
                "
              />

              {errors.studentName && (
                <p className="text-xs text-secondary mt-1">
                  {
                    errors.studentName
                      .message
                  }
                </p>
              )}
            </div>

          </div>


          {/* =====================================
              ENQUIRY FOR + EMAIL
          ====================================== */}

          <div className="grid grid-cols-2 gap-3">

            <div>
              <select
                {...register("applyFor", {
                  required:
                    "Please select an option",
                })}
                className="
                  bg-primary
                  text-white
                  p-2
                  rounded
                  font-secondary
                  border-none
                  w-full
                  outline-none
                  focus:ring-2
                  focus:ring-secondary
                "
              >
                <option value="">
                  -- Select Enquiry --
                </option>

                <option value="Admission">
                  Admission
                </option>

                <option value="School Tour">
                  School Tour
                </option>
              </select>

              {errors.applyFor && (
                <p className="text-xs text-secondary mt-1">
                  {
                    errors.applyFor
                      .message
                  }
                </p>
              )}
            </div>


            <div>
              <input
                type="email"
                {...register("email", {
                  required:
                    "Email is required",

                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                    message:
                      "Enter a valid email",
                  },
                })}
                placeholder="Email"
                className="
                  bg-primary
                  placeholder-white
                  text-white
                  p-2
                  rounded
                  font-secondary
                  border-none
                  outline-none
                  w-full
                  focus:ring-2
                  focus:ring-secondary
                "
              />

              {errors.email && (
                <p className="text-xs text-secondary mt-1">
                  {
                    errors.email
                      .message
                  }
                </p>
              )}
            </div>

          </div>


          {/* =====================================
              GRADE + PHONE
          ====================================== */}

          <div className="grid grid-cols-2 gap-3">

            <div>
              <select
                {...register("grade", {
                  required:
                    "Please select an option",
                })}
                className="
                  bg-primary
                  text-white
                  p-2
                  rounded
                  font-secondary
                  border-none
                  w-full
                  outline-none
                  focus:ring-2
                  focus:ring-secondary
                "
              >
                <option value="">
                  -- Select Grade --
                </option>

                <option value="Primary">
                  Primary
                </option>

                <option value="Middle School">
                  Middle School
                </option>

                <option value="High School">
                  High School
                </option>

                <option value="Cambridge">
                  Cambridge
                </option>

                <option value="NIOS">
                  NIOS
                </option>
              </select>

              {errors.grade && (
                <p className="text-xs text-secondary mt-1">
                  {
                    errors.grade
                      .message
                  }
                </p>
              )}
            </div>


            <div>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                {...register("phone", {
                  required:
                    "Phone number is required",

                  pattern: {
                    value:
                      /^[0-9]{10}$/,

                    message:
                      "Enter a valid 10-digit phone number",
                  },
                })}
                placeholder="Phone No"
                className="
                  bg-primary
                  placeholder-white
                  text-white
                  p-2
                  rounded
                  font-secondary
                  border-none
                  outline-none
                  w-full
                  focus:ring-2
                  focus:ring-secondary
                "
              />

              {errors.phone && (
                <p className="text-xs text-secondary mt-1">
                  {
                    errors.phone
                      .message
                  }
                </p>
              )}
            </div>

          </div>


          {/* =====================================
              SUBMIT
          ====================================== */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              bg-secondary/80
              text-white
              font-secondary
              font-semibold
              p-2
              rounded
              hover:bg-secondary
              transition
              uppercase
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
    </div>
  );
}
