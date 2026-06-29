"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { careersData } from "../../Service/api";
import { toast } from "react-toastify";
import StaticBanner from "../../../components/StaticBanner";

const academicPositionOptions = [
  "ICT/IT/Data Entry",
  "Teacher",
  "Assistant Teacher",
  "Coordinator",
  "HOD",
];

const nonAcademicPositionOptions = [
  "IT Assistant",
  "Admin Assistant",
  "Office Assistant",
  "Accounts Assistant",
  "Transport Coordinator",
  "Lab Assistant",
];

const gradeOptions = [
  "Primary",
  "Upper Primary",
  "Lower Secondary (Gr 6 – 8)",
  "Senior (Gr 8 – 12)",
];

const experienceOptions = [
  "0-1 Years",
  "1-3 Years",
  "3-5 Years",
  "5-10 Years",
  "10+ Years",
];

const slides = [
  {
    desktop: "/banners/apl-careers.jpg",
    mobile: "/assets/Careers-Mob.jpg",
  },
];

const AcademicForm = () => {
  const [roleType, setRoleType] = useState("Academic");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const [resumeFile, setResumeFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fname: "",
      email: "",
      language: "",
      address: "",
      dob: "",
      age: "",
      phone: "",

      organisationName: "",
      organisationDesignation: "",
      organisationExperience: "",

      roleType: "Academic",
      position: "",
      gread: "",
      additionalSubjects: "",

      academicQualifications: "",
      professionalQualifications: "",
      workExperience: "",
      responsibilities: "",
      achievements: "",
      interests: "",
      goals: "",
      reasons: "",
      otherNotes: "",

      ref1Name: "",
      ref1Email: "",
      ref1Number: "",
      ref2Name: "",
      ref2Email: "",
      ref2Number: "",

      resume: null,
    },
  });

  const inputClass =
    "input w-full px-4 py-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary";

  const labelClass = "block mb-2 text-sm font-medium text-white";

  const renderError = (field) =>
    errors[field] && (
      <p className="text-secondary text-sm mt-1">
        {errors[field]?.message}
      </p>
    );

  const renderInput = (label, name, type = "text", required = true) => (
    <div>
      <label className={labelClass}>{label}</label>
      <input
        type={type}
        {...register(name, required ? { required: `${label} is required` } : {})}
        className={inputClass}
      />
      {renderError(name)}
    </div>
  );

  const renderTextarea = (label, name, required = true) => (
    <div>
      <label className={labelClass}>{label}</label>
      <textarea
        {...register(name, required ? { required: `${label} is required` } : {})}
        className={inputClass}
        rows={3}
      />
      {renderError(name)}
    </div>
  );

  const renderSelect = (label, name, options, required = true) => (
    <div>
      <label className={labelClass}>{label}</label>
      <select
        {...register(name, required ? { required: `${label} is required` } : {})}
        className={inputClass}
      >
        <option value="">Select {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {renderError(name)}
    </div>
  );

  const handleRoleChange = (value) => {
    setRoleType(value);
    setValue("roleType", value);
    setValue("position", "");
    setValue("gread", "");
    setValue("additionalSubjects", "");
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Unable to read the selected file."));
      reader.readAsDataURL(file);
    });

  const onSubmit = async (data) => {
    const file = resumeFile;

    if (!file) {
      toast.error("Resume is required");
      return;
    }

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      toast.error("Invalid file type. Upload PDF or Word files.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be below 5MB.");
      return;
    }

    setIsSubmitting(true);

    try {
      const resumeBase64 = await fileToBase64(file);
      const { resume, ...cleanData } = data;

      const payload = {
        ...cleanData,
        roleType,

        position: cleanData.position || "",
        gread: roleType === "Academic" ? cleanData.gread || "" : "",
        additionalSubjects:
          roleType === "Academic" ? cleanData.additionalSubjects || "" : "",

        resume_base64: resumeBase64,
        resumeName: file.name,
        date: new Date().toLocaleDateString("en-IN"),
      };

      const result = await careersData(payload);

      toast.success(result?.message || "Application submitted successfully");

      reset();
      setRoleType("Academic");
      setResumeFile(null);
      setSelectedFileName("No file chosen");

      const fileInput = document.getElementById("resume");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      toast.error(error?.message || error?.error || "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = () => {
    toast.error("Please fill all required fields.");
  };

  return (
    <>
      <StaticBanner slides={slides} alt="APL Careers Banner" />

      <div className="min-h-screen bg-third py-10 px-4 md:px-20 text-white">
        <h2 className="text-2xl md:text-4xl text-center font-semibold text-secondary mb-6">
          Careers
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <label className="mr-4 font-medium">Select Role Type:</label>

            <select
              value={roleType}
              onChange={(e) => handleRoleChange(e.target.value)}
              className={inputClass}
            >
              <option value="Academic">Academic</option>
              <option value="Non-Academic">Non-Academic</option>
            </select>
          </div>

          <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                General Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderInput("Name", "fname")}
                {renderInput("Primary Email Id", "email", "email")}
                {renderInput("Language Known", "language")}
                {renderInput("Date of Birth", "dob", "date")}
                {renderInput("Age", "age", "number")}
                {renderInput("Phone Number", "phone")}
              </div>

              <div className="mt-4">{renderTextarea("Address", "address")}</div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Previous / Current Organisation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderInput("Name of Organisation", "organisationName")}
                {renderInput("Designation", "organisationDesignation")}
                {renderInput("Experience (years/months)", "organisationExperience")}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Position Applied For
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderInput("I wish to apply", "position")}

                {roleType === "Academic" &&
                  renderSelect("Grade Levels", "gread", gradeOptions)}
              </div>

              {roleType === "Academic" && (
                <div className="mt-4">
                  {renderTextarea(
                    "Subjects I can additionally teach are",
                    "additionalSubjects",
                    false
                  )}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Qualifications
              </h3>

              <div className="space-y-4">
                {renderTextarea("Academic Qualifications", "academicQualifications")}
                {renderTextarea(
                  "Professional Qualifications",
                  "professionalQualifications"
                )}
                {renderTextarea("Work Experience", "workExperience")}
                {renderTextarea(
                  "Major responsibilities in your current job",
                  "responsibilities"
                )}
                {renderTextarea("Significant Achievements", "achievements")}
                {renderTextarea(
                  "Interests and Other Activities/Memberships",
                  "interests"
                )}
                {renderTextarea(
                  "What are your career aspirations and goals?",
                  "goals"
                )}
                {renderTextarea(
                  "What are your reasons for applying to APL?",
                  "reasons"
                )}
                {renderTextarea(
                  "Any other matter you want to specify",
                  "otherNotes",
                  false
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                References
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderInput("Referrer 1 Name", "ref1Name")}
                {renderInput("Referrer 1 Email Id", "ref1Email", "email")}
                {renderInput("Referrer 1 Phone Number", "ref1Number")}

                {renderInput("Referrer 2 Name", "ref2Name")}
                {renderInput("Referrer 2 Email Id", "ref2Email", "email")}
                {renderInput("Referrer 2 Phone Number", "ref2Number")}
              </div>
            </div>

            <div>
              <label className="text-sm block mb-2 font-medium">
                Upload Resume *
              </label>

              <div className="flex items-center gap-4 flex-wrap">
                <label
                  htmlFor="resume"
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80"
                >
                  <UploadCloud className="w-5 h-5" />
                  <span>Choose File</span>
                </label>

                <span className="text-sm text-gray-300">{selectedFileName}</span>
              </div>

              <input
                type="file"
                id="resume"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setResumeFile(file);

                  if (file) {
                    setValue("resume", file, {
                      shouldValidate: false,
                      shouldDirty: true,
                    });
                    clearErrors("resume");
                    setSelectedFileName(file.name);
                  } else {
                    setValue("resume", null);
                    setSelectedFileName("No file chosen");
                  }
                }}
              />

              {renderError("resume")}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary hover:bg-secondary/80 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded"
            >
              {isSubmitting ? "Submitting..." : "Apply Now"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AcademicForm;