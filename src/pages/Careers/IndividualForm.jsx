"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { toast } from "react-toastify";
import { individualData } from "../../Service/api";

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;

const ALLOWED_PHOTO_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const EMPTY_QUALIFICATION = {
  year: "",
  qualification: "",
  institution: "",
  subjects: "",
  grade: "",
};

const EMPTY_EXPERIENCE = {
  institution: "",
  duration: "",
  position: "",
};

const inputClass =
  "w-full rounded-md bg-white px-3 py-2.5 text-black outline-none transition placeholder:text-gray-500 focus:ring-2 focus:ring-secondary";

const errorClass = "mt-1 text-sm text-red-300";

const qualificationFields = [
  {
    key: "year",
    label: "Passed Year",
    placeholder: "Passed Year",
  },
  {
    key: "qualification",
    label: "Qualification",
    placeholder: "Qualification",
  },
  {
    key: "institution",
    label: "Institution",
    placeholder: "Institution",
  },
  {
    key: "subjects",
    label: "Subjects Studied",
    placeholder: "Subjects Studied",
  },
  {
    key: "grade",
    label: "Class / Grade",
    placeholder: "Class / Grade",
  },
];

const experienceFields = [
  {
    key: "institution",
    label: "Name of institution",
    placeholder: "Name of institution",
  },
  {
    key: "duration",
    label: "Duration",
    placeholder: "Duration",
  },
  {
    key: "position",
    label: "Position held",
    placeholder: "Position held",
  },
];

function normalizeDobInput(value) {
  const numbers = String(value || "")
    .replace(/\D/g, "")
    .slice(0, 8);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
  }

  return `${numbers.slice(0, 2)}-${numbers.slice(
    2,
    4
  )}-${numbers.slice(4)}`;
}

function calculateAgeFromDob(value) {
  if (!/^\d{2}-\d{2}-\d{4}$/.test(value || "")) {
    return "";
  }

  const [day, month, year] = value.split("-").map(Number);
  const dateOfBirth = new Date(year, month - 1, day);
  const today = new Date();

  const isValidDate =
    dateOfBirth.getFullYear() === year &&
    dateOfBirth.getMonth() === month - 1 &&
    dateOfBirth.getDate() === day;

  if (!isValidDate || dateOfBirth > today) {
    return "";
  }

  let age = today.getFullYear() - year;

  const birthdayPassed =
    today.getMonth() > month - 1 ||
    (today.getMonth() === month - 1 &&
      today.getDate() >= day);

  if (!birthdayPassed) {
    age -= 1;
  }

  return age >= 0 ? String(age) : "";
}

function getWordCount(value) {
  const text = String(value || "").trim();

  if (!text) {
    return 0;
  }

  return text.split(/\s+/).length;
}

function hasAnyValue(row) {
  return Object.values(row || {}).some(
    (value) => String(value || "").trim() !== ""
  );
}

function hasAllValues(row) {
  return Object.values(row || {}).every(
    (value) => String(value || "").trim() !== ""
  );
}

function cleanRows(rows) {
  return (rows || [])
    .map((row) =>
      Object.fromEntries(
        Object.entries(row || {}).map(([key, value]) => [
          key,
          String(value || "").trim(),
        ])
      )
    )
    .filter(hasAnyValue);
}

function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);

    reader.onerror = () => {
      reject(new Error("Unable to read the selected photo."));
    };

    reader.readAsDataURL(file);
  });
}

export default function IndividualForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      dob: "",
      age: "",
      mobile: "",
      email: "",
      address: "",

      qualification: Array.from({ length: 5 }, () => ({
        ...EMPTY_QUALIFICATION,
      })),

      teachingExperience: Array.from({ length: 5 }, () => ({
        ...EMPTY_EXPERIENCE,
      })),

      contextTeacherEmployed: false,
      contextFullAcademicYear: false,
      contextMinimumSixLearners: false,

      write: "",
      photo: null,
    },
  });

  const [photoName, setPhotoName] = useState("No file chosen");
  const [qualificationError, setQualificationError] = useState("");
  const [experienceError, setExperienceError] = useState("");

  const dobValue = watch("dob");
  const writeValue = watch("write");

  const wordCount = useMemo(
    () => getWordCount(writeValue),
    [writeValue]
  );

  useEffect(() => {
    const calculatedAge = calculateAgeFromDob(dobValue);

    setValue("age", calculatedAge, {
      shouldValidate: Boolean(dobValue),
      shouldDirty: Boolean(dobValue),
    });
  }, [dobValue, setValue]);

  const onSubmit = async (data) => {
    setQualificationError("");
    setExperienceError("");

    const qualifications = cleanRows(data.qualification);

    if (qualifications.length === 0) {
      const message =
        "Please enter at least one academic or professional qualification.";

      setQualificationError(message);
      toast.error(message);
      return;
    }

    const hasIncompleteQualification = qualifications.some(
      (row) => !hasAllValues(row)
    );

    if (hasIncompleteQualification) {
      const message =
        "Please complete all fields in each qualification row that you have entered.";

      setQualificationError(message);
      toast.error(message);
      return;
    }

    const teachingExperience = cleanRows(
      data.teachingExperience
    );

    const hasIncompleteExperience = teachingExperience.some(
      (row) => !hasAllValues(row)
    );

    if (hasIncompleteExperience) {
      const message =
        "Please complete all fields in each teaching experience row that you have entered.";

      setExperienceError(message);
      toast.error(message);
      return;
    }

    const photoFile = data.photo?.[0];

    if (!photoFile) {
      setError("photo", {
        type: "required",
        message: "Passport-size photo is required.",
      });

      toast.error("Please upload a passport-size photo.");
      return;
    }

    if (!ALLOWED_PHOTO_TYPES.includes(photoFile.type)) {
      setError("photo", {
        type: "validate",
        message:
          "Only JPG, JPEG, PNG or WEBP files are allowed.",
      });

      toast.error(
        "Only JPG, JPEG, PNG or WEBP files are allowed."
      );
      return;
    }

    if (photoFile.size > MAX_PHOTO_SIZE) {
      setError("photo", {
        type: "validate",
        message: "The photo must be 5 MB or smaller.",
      });

      toast.error("The photo must be 5 MB or smaller.");
      return;
    }

    try {
      const base64Photo =
        await convertFileToBase64(photoFile);

      const payload = {
        fullName: String(data.fullName || "").trim(),
        dob: String(data.dob || "").trim(),
        age: String(data.age || "").trim(),
        mobile: String(data.mobile || "").trim(),
        email: String(data.email || "").trim(),
        address: String(data.address || "").trim(),

        qualification: qualifications,
        teachingExperience,

        applicability: {
          teacherEmployed: Boolean(
            data.contextTeacherEmployed
          ),
          fullAcademicYear: Boolean(
            data.contextFullAcademicYear
          ),
          minimumSixLearners: Boolean(
            data.contextMinimumSixLearners
          ),
        },

        write: String(data.write || "").trim(),

        photoName: photoFile.name,
        photo_base64: base64Photo,

        /*
         * These fields are sent for compatibility with the
         * existing PHP database structure.
         */
        experience: JSON.stringify(teachingExperience),

        teachingIn: data.contextTeacherEmployed
          ? "Yes"
          : "No",

        subjects: data.contextFullAcademicYear
          ? "Yes"
          : "No",

        students: data.contextMinimumSixLearners
          ? "Yes"
          : "No",

        gender: "",
        isAPL: false,
        message: "-",
      };

      const result = await individualData(payload);

      toast.success(
        result?.message ||
          "Registration submitted successfully."
      );

      reset();
      setPhotoName("No file chosen");
      setQualificationError("");
      setExperienceError("");
    } catch (error) {
      console.error(
        "Individual registration error:",
        error
      );

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Submission failed. Please try again.";

      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-6xl space-y-12 rounded-xl bg-third p-6 font-secondary text-white shadow-lg sm:p-10"
    >
      {/* SECTION 1 */}
      <section>
        <h2 className="mb-5 border-b border-white/30 pb-2 text-xl font-bold">
          SECTION 1 - PERSONAL INFORMATION
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1 block">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Full Name"
              className={inputClass}
              {...register("fullName", {
                required: "Full name is required.",
              })}
            />

            {errors.fullName && (
              <p className={errorClass}>
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block">
              Date of Birth
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={10}
              placeholder="dd-mm-yyyy"
              className={inputClass}
              {...register("dob", {
                required:
                  "Date of birth is required.",

                pattern: {
                  value:
                    /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,

                  message:
                    "Enter date of birth in dd-mm-yyyy format.",
                },

                validate: (value) =>
                  calculateAgeFromDob(value) !== "" ||
                  "Enter a valid date of birth.",

                onChange: (event) => {
                  event.target.value =
                    normalizeDobInput(
                      event.target.value
                    );
                },
              })}
            />

            {errors.dob && (
              <p className={errorClass}>
                {errors.dob.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block">Age</label>

            <input
              type="number"
              readOnly
              placeholder="Age"
              className={`${inputClass} cursor-not-allowed bg-gray-100`}
              {...register("age", {
                required:
                  "Age could not be calculated.",
              })}
            />

            {errors.age && (
              <p className={errorClass}>
                {errors.age.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block">
              Mobile Number
            </label>

            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Mobile Number"
              className={inputClass}
              {...register("mobile", {
                required:
                  "Mobile number is required.",

                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    "Enter a valid 10-digit mobile number.",
                },

                onChange: (event) => {
                  event.target.value =
                    event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                },
              })}
            />

            {errors.mobile && (
              <p className={errorClass}>
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block">
              Email ID
            </label>

            <input
              type="email"
              placeholder="Email ID"
              className={inputClass}
              {...register("email", {
                required: "Email ID is required.",

                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                  message:
                    "Enter a valid email ID.",
                },
              })}
            />

            {errors.email && (
              <p className={errorClass}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block">
              Address
            </label>

            <textarea
              rows={4}
              placeholder="Address"
              className={inputClass}
              {...register("address", {
                required: "Address is required.",
              })}
            />

            {errors.address && (
              <p className={errorClass}>
                {errors.address.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section>
        <h2 className="border-b border-white/30 pb-2 text-xl font-bold">
          SECTION 2 - ACADEMIC / PROFESSIONAL
          QUALIFICATION
        </h2>

        <p className="mb-5 mt-2 text-sm text-white/80">
          (Start with the most recent or relevant)
        </p>

        <div className="hidden grid-cols-5 gap-3 pb-2 text-sm font-semibold lg:grid">
          {qualificationFields.map((field) => (
            <span key={field.key}>
              {field.label}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {Array.from({ length: 5 }).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 gap-3 rounded-lg border border-white/20 p-4 sm:grid-cols-2 lg:grid-cols-5 lg:border-0 lg:p-0"
              >
                <p className="font-semibold text-secondary sm:col-span-2 lg:hidden">
                  Qualification {rowIndex + 1}
                </p>

                {qualificationFields.map(
                  (field) => (
                    <div key={field.key}>
                      <label className="mb-1 block text-sm lg:hidden">
                        {field.label}
                      </label>

                      <input
                        type="text"
                        placeholder={
                          field.placeholder
                        }
                        className={inputClass}
                        {...register(
                          `qualification.${rowIndex}.${field.key}`
                        )}
                      />
                    </div>
                  )
                )}
              </div>
            )
          )}
        </div>

        {qualificationError && (
          <p className={errorClass}>
            {qualificationError}
          </p>
        )}
      </section>

      {/* SECTION 3 */}
      <section>
        <h2 className="border-b border-white/30 pb-2 text-xl font-bold">
          SECTION 3 - TEACHING EXPERIENCE
        </h2>

        <p className="mb-5 mt-2 text-sm text-white/80">
          (Start from current work)
        </p>

        <div className="hidden grid-cols-3 gap-3 pb-2 text-sm font-semibold md:grid">
          {experienceFields.map((field) => (
            <span key={field.key}>
              {field.label}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {Array.from({ length: 5 }).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 gap-3 rounded-lg border border-white/20 p-4 md:grid-cols-3 md:border-0 md:p-0"
              >
                <p className="font-semibold text-secondary md:hidden">
                  Teaching Experience{" "}
                  {rowIndex + 1}
                </p>

                {experienceFields.map(
                  (field) => (
                    <div key={field.key}>
                      <label className="mb-1 block text-sm md:hidden">
                        {field.label}
                      </label>

                      <input
                        type="text"
                        placeholder={
                          field.placeholder
                        }
                        className={inputClass}
                        {...register(
                          `teachingExperience.${rowIndex}.${field.key}`
                        )}
                      />
                    </div>
                  )
                )}
              </div>
            )
          )}
        </div>

        {experienceError && (
          <p className={errorClass}>
            {experienceError}
          </p>
        )}
      </section>

      {/* SECTION 4 */}
      <section>
        <h2 className="mb-5 border-b border-white/30 pb-2 text-xl font-bold">
          SECTION 4 - TICK IF APPLICABLE TO YOUR
          CONTEXT
        </h2>

        <div className="space-y-4">
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/20 p-4 transition hover:border-secondary">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-secondary"
              {...register(
                "contextTeacherEmployed"
              )}
            />

            <span>
              Be a full or part-time teacher
              employed in an educational
              institution.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/20 p-4 transition hover:border-secondary">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-secondary"
              {...register(
                "contextFullAcademicYear"
              )}
            />

            <span>
              Teach in your current institution
              over a full academic year, for a
              minimum of 24 weeks and a minimum
              of six hours per week.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/20 p-4 transition hover:border-secondary">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-secondary"
              {...register(
                "contextMinimumSixLearners"
              )}
            />

            <span>
              Teach a group with a minimum of six
              learners.
            </span>
          </label>
        </div>
      </section>

      {/* SECTION 5 */}
      <section>
        <h2 className="border-b border-white/30 pb-2 text-xl font-bold">
          SECTION 5
        </h2>

        <p className="mt-4 leading-7 text-white/90">
          Please share a 100-word write-up on why
          you are interested in doing a
          professional development programme.
          Kindly refrain from using Generative AI
          tools to complete this section.
        </p>

        <div className="mt-5">
          <label className="mb-1 block">
            Write-up
          </label>

          <textarea
            rows={7}
            placeholder="Enter your write-up here"
            className={inputClass}
            {...register("write", {
              required:
                "The write-up is required.",

              validate: (value) =>
                getWordCount(value) <= 100 ||
                "The write-up must not exceed 100 words.",
            })}
          />

          <div className="mt-2 flex items-center justify-between gap-4 text-sm">
            <div>
              {errors.write ? (
                <p className="text-red-300">
                  {errors.write.message}
                </p>
              ) : (
                <span className="text-white/70">
                  Maximum 100 words
                </span>
              )}
            </div>

            <span
              className={
                wordCount > 100
                  ? "text-red-300"
                  : "text-white/70"
              }
            >
              {wordCount}/100 words
            </span>
          </div>
        </div>

        <div className="mt-7">
          <label className="mb-3 block font-semibold uppercase">
            Upload Passport Size Photo
          </label>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <label className="flex w-fit cursor-pointer items-center gap-2 rounded-md bg-[#4ab4f8] px-4 py-2.5 text-white transition hover:bg-blue-400">
              <UploadCloud className="h-5 w-5" />

              Choose Photo

              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                className="hidden"
                {...register("photo", {
                  required:
                    "Passport-size photo is required.",

                  validate: {
                    fileType: (files) => {
                      const file = files?.[0];

                      if (!file) {
                        return "Passport-size photo is required.";
                      }

                      return (
                        ALLOWED_PHOTO_TYPES.includes(
                          file.type
                        ) ||
                        "Only JPG, JPEG, PNG or WEBP files are allowed."
                      );
                    },

                    fileSize: (files) => {
                      const file = files?.[0];

                      if (!file) {
                        return true;
                      }

                      return (
                        file.size <=
                          MAX_PHOTO_SIZE ||
                        "The photo must be 5 MB or smaller."
                      );
                    },
                  },

                  onChange: (event) => {
                    const selectedFile =
                      event.target.files?.[0];

                    setPhotoName(
                      selectedFile?.name ||
                        "No file chosen"
                    );

                    clearErrors("photo");
                  },
                })}
              />
            </label>

            <span className="break-all text-sm text-white/90">
              {photoName}
            </span>
          </div>

          <p className="mt-2 text-xs text-white/70">
            Accepted formats: JPG, JPEG, PNG and
            WEBP. Maximum file size: 5 MB.
          </p>

          {errors.photo && (
            <p className={errorClass}>
              {errors.photo.message}
            </p>
          )}
        </div>
      </section>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-white px-8 py-2.5 font-semibold text-primary shadow transition hover:bg-secondary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Submitting..."
            : "Submit"}
        </button>
      </div>
    </form>
  );
}