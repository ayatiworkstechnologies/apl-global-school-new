"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { careersData } from "../../Service/api";
import { toast } from "react-toastify";
import StaticBanner from "../../../components/StaticBanner";

const genderOptions = ["Male", "Female", "Other"];
const countryOptions = ["India", "USA", "UK", "Australia"];
const positionOptions = ["Teacher", "Assistant", "Administrator"];
const qualificationOptions = ["B.Ed", "M.Ed", "Ph.D", "M.A", "B.A"];
const experienceOptions = ["0-1 years", "1-3 years", "3-5 years", "5+ years"];
const designationOptions = ["Senior Teacher", "Junior Teacher", "HOD"];
const departmentOptions = [
  "Mathematics",
  "Science",
  "English",
  "Social Studies",
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
      dob: "",
      gender: "",
      phone: "",
      email: "",
      language: "",
      country: "",
      address: "",
      position: "",
      gread: "",
      currentDesignation: "",
      department: "",
      experienceYear: "",
      qualifications: "",
      personalQualifications: "",
      workExperience: "",
      responsibilities: "",
      achievements: "",
      interests: "",
      goals: "",
      reasons: "",
      otherNotes: "",
      ref1Name: "",
      ref1Number: "",
      ref1Email: "",
      ref2Name: "",
      ref2Number: "",
      ref2Email: "",
      resume: null,
    },
  });

  const inputClass = "input";

  const renderError = (field) =>
    errors[field] && (
      <p className="text-secondary text-sm mt-1">{errors[field].message}</p>
    );

  const renderInput = (label, name, type = "text") => (
    <div>
      <label>{label}</label>
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        className={inputClass}
      />
      {renderError(name)}
    </div>
  );

  const renderSelect = (label, name, options) => (
    <div>
      <label>{label}</label>
      <select
        {...register(name, { required: `${label} is required` })}
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

  const onSubmit = async (data) => {
    const file = data.resume;

    if (!file) {
      toast.error("Resume is required");
      return;
    }

    if (roleType === "Academic") {
      if (!data.position || !data.department) {
        toast.error("Position and Department are required.");
        return;
      }
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

    const maxFileSize = 5 * 1024 * 1024;

    if (file.size > maxFileSize) {
      toast.error("File size should be below 5MB.");
      return;
    }

    setIsSubmitting(true);

    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const { resume, ...cleanData } = data;

        const payload = {
          ...cleanData,

          // Backend requires these fields always
          position:
            roleType === "Academic"
              ? cleanData.position || ""
              : "Non-Academic",

          department:
            roleType === "Academic"
              ? cleanData.department || ""
              : "Non-Academic",

          // Academic-only fields
          gread: roleType === "Academic" ? cleanData.gread || "" : "",
          currentDesignation:
            roleType === "Academic" ? cleanData.currentDesignation || "" : "",
          experienceYear:
            roleType === "Academic" ? cleanData.experienceYear || "" : "",

          resume_base64: reader.result,
          resumeName: file.name,
          roleType,
          date: new Date().toLocaleDateString("en-IN"),
        };

        console.log("Career payload:", payload);

        const result = await careersData(payload);

        toast.success(result?.message || "Application submitted successfully");

        reset();
        setSelectedFileName("No file chosen");

        const fileInput = document.getElementById("resume");
        if (fileInput) {
          fileInput.value = "";
        }
      } catch (error) {
        console.error("Career form error:", error);
        toast.error(error?.message || error?.error || "Submission failed");
      } finally {
        setIsSubmitting(false);
      }
    };

    reader.onerror = () => {
      setIsSubmitting(false);
      toast.error("Unable to read the selected file.");
    };

    reader.readAsDataURL(file);
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
              onChange={(e) => setRoleType(e.target.value)}
              className="input"
            >
              <option value="Academic">Academic</option>
              <option value="Non-Academic">Non-Academic</option>
            </select>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {renderInput("Full Name", "fname")}
              {renderInput("Date of Birth", "dob", "date")}
              {renderSelect("Gender", "gender", genderOptions)}
              {renderInput("Phone", "phone")}
              {renderInput("Email", "email", "email")}
              {renderInput("Languages Known", "language")}
              {renderSelect("Country", "country", countryOptions)}
            </div>

            <div>
              <label>Address</label>
              <textarea
                {...register("address", { required: "Address is required" })}
                rows={2}
                className={inputClass}
              />
              {renderError("address")}
            </div>

            {roleType === "Academic" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderSelect("Position", "position", positionOptions)}
                  {renderSelect("Grade Level", "gread", qualificationOptions)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderSelect(
                    "Current Designation",
                    "currentDesignation",
                    designationOptions
                  )}
                  {renderSelect("Department", "department", departmentOptions)}
                  {renderSelect(
                    "Years of Experience",
                    "experienceYear",
                    experienceOptions
                  )}
                </div>
              </>
            )}

            {[
              "qualifications",
              "personalQualifications",
              "workExperience",
              "responsibilities",
              "achievements",
              "interests",
              "goals",
              "reasons",
              "otherNotes",
            ].map((field, i) => (
              <div key={i}>
                <label className="capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>

                <textarea
                  {...register(field, {
                    required: `${field.replace(/([A-Z])/g, " $1")} is required`,
                  })}
                  className="input w-full"
                  rows={3}
                />

                {renderError(field)}
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {renderInput("Reference 1 Name", "ref1Name")}
              {renderInput("Reference 1 Number", "ref1Number")}
              {renderInput("Reference 1 Email", "ref1Email", "email")}
              {renderInput("Reference 2 Name", "ref2Name")}
              {renderInput("Reference 2 Number", "ref2Number")}
              {renderInput("Reference 2 Email", "ref2Email", "email")}
            </div>

            <div>
              <label className="text-sm block mb-2 font-medium">
                Upload Resume *
              </label>

              <div className="flex items-center gap-4">
                <label
                  htmlFor="resume"
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80"
                >
                  <UploadCloud className="w-5 h-5" />
                  <span>Choose File</span>
                </label>

                <span className="text-sm text-gray-300">
                  {selectedFileName}
                </span>
              </div>

              <input
                type="file"
                id="resume"
                name="resume"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setValue("resume", file, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });

                    clearErrors("resume");
                    setSelectedFileName(file.name);
                  }
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary hover:bg-secondary/80 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded"
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