"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { contactEnquiry } from "./Service/api";
import {
  getRecaptchaToken,
  initializeRecaptcha,
} from "@/utils/recaptcha";

export default function ContactUsPage() {
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

      const recaptchaToken = await getRecaptchaToken(
        "contact_form"
      );

      if (!recaptchaToken) {
        throw new Error(
          "Security verification failed"
        );
      }

      // =========================================
      // STEP 2: Prepare form payload
      // =========================================

      const payload = {
        name: (formData.name ?? "").trim(),

        email: (formData.email ?? "").trim(),

        phone: (formData.phone ?? "").trim(),

        enquiryfor: (
          formData.enquiryfor ?? ""
        ).trim(),

        message:
          (formData.message ?? "-").trim() ||
          "-",

        // reCAPTCHA token sent to PHP backend
        recaptchaToken,
      };

      // =========================================
      // STEP 3: Send data to PHP API
      // =========================================

      const result = await contactEnquiry(
        payload
      );

      // =========================================
      // STEP 4: Handle successful submission
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
            "Submission failed"
        );
      }
    } catch (err) {
      console.error(
        "Contact form error:",
        err
      );

      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Submission failed";

      toast.error(msg, {
        className:
          "bg-primary text-white font-semibold",
      });
    }
  };

  return (
    <section
      className="w-full font-sans"
      style={{
        backgroundImage:
          'url("/assets/about-graph.svg")',
        backgroundSize: "cover",
      }}
    >
      {/* =============================
          TOP SECTION
      ============================== */}

      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-10">
        <div className="text-sm text-black">
          <h2 className="text-3xl font-primary font-semibold text-primary border-b-2 border-secondary inline-block uppercase mb-4">
            Contact Us
          </h2>

          <h3 className="font-bold font-primary text-xl uppercase text-primary">
            APL Global School
          </h3>

          <p>
            No 697/3, Anand Nagar Main Road,
          </p>

          <p>Thoraipakkam,</p>

          <p>Chennai 600 097, India</p>

          <p>Ph: 044 4076 1199</p>

          <p>Email: admin@apl.edu.in</p>

          <p>
            Website: www.aplglobalschool.com
          </p>

          <div className="mt-6">
            <p className="font-primary uppercase text-primary text-xl">
              Office open hours
            </p>

            <p>
              Monday to Friday: 7:30 AM to
              3:00 PM
            </p>

            <p>
              Saturday: 9 AM to 12 Noon
            </p>
          </div>

          <p className="mt-4 uppercase text-lg">
            <strong>
              For all enquiries, please call
              us:{" "}
            </strong>

            <a
              href="tel:+917338744475"
              className="text-primary font-semibold"
            >
              +91 73387 44475
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/assets/Curriculum.webp"
            alt="APL Global School"
            className="object-contain"
          />
        </div>
      </div>

      {/* =============================
          CONTACT FORM
      ============================== */}

      <div className="relative bg-third text-white overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 items-end relative z-10">
          <div className="bg-third text-white p-6 md:p-10 w-full">
            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="space-y-4"
            >
              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
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
                    <p className="text-secondary text-sm mt-1">
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
                    className="block text-sm font-medium mb-1"
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
                    <p className="text-secondary text-sm mt-1">
                      {
                        errors.email
                          .message
                      }
                    </p>
                  )}
                </div>
              </div>

              {/* PHONE + ENQUIRY */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Contact Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required:
                        "Contact number is required",
                    })}
                    placeholder="Enter your phone number"
                    className="input"
                  />

                  {errors.phone && (
                    <p className="text-secondary text-sm mt-1">
                      {
                        errors.phone
                          .message
                      }
                    </p>
                  )}
                </div>

                {/* ENQUIRY */}

                <div>
                  <label
                    htmlFor="enquiryfor"
                    className="block text-sm font-medium mb-1"
                  >
                    Enquiry For
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

                    <option value="Admissions">
                      Admissions
                    </option>

                    <option value="Careers">
                      Careers
                    </option>

                    <option value="Partnerships">
                      Partnerships
                    </option>

                    <option value="General">
                      General
                    </option>
                  </select>

                  {errors.enquiryfor && (
                    <p className="text-secondary text-sm mt-1">
                      {
                        errors
                          .enquiryfor
                          .message
                      }
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
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
                  <p className="text-secondary text-sm mt-1">
                    {
                      errors.message
                        .message
                    }
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}

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

          {/* RIGHT IMAGE */}

          <div className="flex items-end justify-center">
            <img
              src="/assets/school-girl.webp"
              alt="APL Global School student"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
