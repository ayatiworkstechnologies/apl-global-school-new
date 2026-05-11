import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { careersData } from "../../Service/api";
import { toast } from "react-toastify";

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
import StaticBanner from "../../../components/StaticBanner";



const slides = [{ desktop: "/banners/apl-careers.jpg", mobile: "/assets/Careers-Mob.jpg" }];

const AcademicForm = () => {

  const [roleType, setRoleType] = useState("Academic");

  const {
    register,
    handleSubmit,
    reset,
    setValue, // ✅ Add this
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const file = data.resume;
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

    const reader = new FileReader();
    reader.onload = async () => {
      const payload = {
        ...data,
        resume_base64: reader.result,
        resumeName: file.name,
        roleType,
        date: new Date().toLocaleDateString("en-IN"),
      };

      try {
        const result = await careersData(payload);
        toast.success(result.message);
        reset();
        document.getElementById("fileName").textContent = "No file chosen";
      } catch (error) {
        toast.error(error?.error || "Submission failed");
      }
    };

    reader.readAsDataURL(file);
  };

  const inputClass = "input";

  const renderError = (field) =>
    errors[field] && (
      <p className="text-secondary text-sm">{errors[field].message}</p>
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

  return (
    <>
      {/* Banner Section */}
       {/* Auto-Rotating Banner */}
            <StaticBanner slides={slides} alt="APl Careers Banner" />
      
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
              {renderInput("Email", "email")}
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
              {renderInput("Reference 1 Email", "ref1Email")}
              {renderInput("Reference 2 Name", "ref2Name")}
              {renderInput("Reference 2 Number", "ref2Number")}
              {renderInput("Reference 2 Email", "ref2Email")}
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
                <span className="text-sm text-gray-300" id="fileName">
                  No file chosen
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
                    setValue("resume", file); // ✅ Set file manually in react-hook-form
                    document.getElementById("fileName").textContent = file.name;
                  }
                }}
              />
            </div>

            <button
              type="submit"
              className="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-6 rounded"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AcademicForm;
