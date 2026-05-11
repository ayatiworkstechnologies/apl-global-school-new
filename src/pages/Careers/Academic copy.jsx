import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { UploadCloud } from "lucide-react";

const AcademicForm = () => {
  const [roleType, setRoleType] = useState("Academic");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const file = data.resume?.[0];

    const templateParams = {
      fname: data.fname,
      email: data.email,
      phone: data.phone,
      dob: data.dob,
      gender: data.gender,
      language: data.language,
      country: data.country,
      address: data.address,
      roleType,
      position: data.position || "-",
      gread: data.gread || "-",
      currentDesignation: data.currentDesignation || "-",
      department: data.department || "-",
      experienceYear: data.experienceYear || "-",
      qualifications: data.qualifications || "-",
      personalQualifications: data.personalQualifications || "-",
      workExperience: data.workExperience || "-",
      responsibilities: data.responsibilities || "-",
      achievements: data.achievements || "-",
      interests: data.interests || "-",
      goals: data.goals || "-",
      reasons: data.reasons || "-",
      otherNotes: data.otherNotes || "-",
      ref1Name: data.ref1Name || "-",
      ref1Number: data.ref1Number || "-",
      ref1Email: data.ref1Email || "-",
      ref2Name: data.ref2Name || "-",
      ref2Number: data.ref2Number || "-",
      ref2Email: data.ref2Email || "-",
      resumeName: file?.name || "No file uploaded",
      date: new Date().toLocaleDateString("en-IN"),
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        templateParams.resume_base64 = reader.result;
        sendEmail(templateParams);
      };
      reader.readAsDataURL(file);
    } else {
      sendEmail(templateParams);
    }
  };

  const sendEmail = (params) => {
    emailjs
      .send("service_ufzio7t", "template_sd7wn9r", params, "EsFxZwS00BPG3G4Rr")
      .then(() => {
        alert("Form submitted successfully!");
        reset();
        document.getElementById("fileName").textContent = "No file chosen";
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        alert("Submission failed. Try again.");
      });
  };

  const inputClass = "input";

  const renderInput = (label, name, required = false) => (
    <div>
      <input
        {...register(name, required ? { required: `${label} is required` } : {})}
        placeholder={label}
        className={inputClass}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );

  const renderSelect = (label, name, options, required = false) => (
    <div>
      <select
        {...register(name, required ? { required: `${label} is required` } : {})}
        className={inputClass}
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );

  const genderOptions = ["Male", "Female", "Other"];
  const countryOptions = ["India", "USA", "UK", "Australia"];
  const positionOptions = ["Teacher", "Assistant", "Administrator"];
  const qualificationOptions = ["B.Ed", "M.Ed", "Ph.D", "M.A", "B.A"];
  const experienceOptions = ["0-1 years", "1-3 years", "3-5 years", "5+ years"];
  const designationOptions = ["Senior Teacher", "Junior Teacher", "HOD"];
  const departmentOptions = ["Mathematics", "Science", "English", "Social Studies"];

  return (
    <div className="py-10 px-4 text-white bg-third rounded-md">
      <div className="max-w-5xl mx-auto">
        {/* Role Type */}
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

        {/* Form Start */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* General Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {renderInput("Full Name", "fname", true)}
            {renderInput("Phone", "phone", true)}
            {renderInput("Email", "email", true)}
            {renderInput("Languages Known", "language", true)}
            {renderSelect("Gender", "gender", genderOptions, true)}
            {renderSelect("Country", "country", countryOptions, true)}

            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="input"
            />
            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

            <textarea
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
              className="input md:col-span-3"
            />
            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
          </div>

          {/* Academic-Only Section */}
          {roleType === "Academic" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderSelect("Position", "position", positionOptions, true)}
                {renderSelect("Grade Level", "gread", qualificationOptions, true)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderSelect("Current Designation", "currentDesignation", designationOptions)}
                {renderSelect("Department", "department", departmentOptions)}
                {renderSelect("Experience", "experienceYear", experienceOptions)}
              </div>
            </>
          )}

          {/* Shared textareas */}
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
              <textarea
                {...register(field)}
                placeholder={field}
                className="input w-full"
                rows={3}
              />
            </div>
          ))}

          {/* References */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["ref1", "ref2"].flatMap((ref, i) => [
              renderInput(`Reference ${i + 1} Name`, `${ref}Name`),
              renderInput(`Reference ${i + 1} Number`, `${ref}Number`),
              renderInput(`Reference ${i + 1} Email`, `${ref}Email`),
            ])}
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="text-sm block mb-2 font-medium">Upload Resume</label>
            <div className="flex items-center gap-4">
              <label
                htmlFor="resume"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80"
              >
                <UploadCloud className="w-5 h-5" />
                <span>Choose File</span>
              </label>
              <span className="text-sm text-gray-300" id="fileName">No file chosen</span>
            </div>
            <input
              type="file"
              id="resume"
              {...register("resume")}
              className="hidden"
              onChange={(e) => {
                const fileName = e.target.files[0]?.name || "No file chosen";
                document.getElementById("fileName").textContent = fileName;
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-6 rounded"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AcademicForm;
