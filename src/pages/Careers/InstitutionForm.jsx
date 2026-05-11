import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { InstitutionData } from "../../Service/api"; // Adjust the import path as necessary

export default function InstitutionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const res = await InstitutionData(data); // call your PHP API

    // Match backend shape: { status: "success", message: "..." }
    if (res?.status?.toLowerCase() === "success") {
      toast.success(res?.message || "Form submitted successfully!");
    } else {
      toast.error(res?.message || "Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("Form submission error:", err);
    const msg =
      err?.response?.data?.message ||
      err?.message ||
      "Failed to submit. Server error.";
    toast.error(msg);
  }
};


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-6 sm:p-10 font-secondary space-y-8 bg-third rounded-xl shadow-md text-white"
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Name of your institution</label>
          <input
            type="text"
            {...register("institution", {
              required: "Institution name is required",
            })}
            className="input bg-white text-black placeholder:text-white"
            placeholder="Institution Name"
          />
          {errors.institution && (
            <p className="text-red-500 text-sm mt-1">
              {errors.institution.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Name of contact person</label>
          <input
            type="text"
            {...register("contactPerson", {
              required: "Contact person name is required",
            })}
            className="input bg-white text-black placeholder:text-white"
            placeholder="Full Name"
          />
          {errors.contactPerson && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactPerson.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Mobile number</label>
          <input
            type="text"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
            className="input bg-white text-black placeholder:text-white"
            placeholder="Mobile number"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email ID</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email",
              },
            })}
            className="input bg-white text-black placeholder:text-white"
            placeholder="Email ID"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block mb-1">Address</label>
        <textarea
          {...register("address", { required: "Address is required" })}
          className="input w-full bg-white text-black placeholder:text-white"
          placeholder="Address"
          rows={3}
        ></textarea>
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* Training Focus */}
      <div>
        <label className="block mb-1">Training focus / requirements</label>
        <textarea
          {...register("trainingFocus", {
            required: "Training focus is required",
          })}
          className="input w-full bg-white text-black placeholder:text-white"
          placeholder="Training Focus"
          rows={3}
        ></textarea>
        {errors.trainingFocus && (
          <p className="text-red-500 text-sm mt-1">
            {errors.trainingFocus.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1">
          Brief description of your institution / context of the training need
          (optional)
        </label>
        <textarea
          {...register("description")}
          className="input w-full bg-white text-black placeholder:text-white"
          placeholder="Optional Description"
          rows={3}
        ></textarea>
      </div>

      {/* Candidate Count */}
      <div>
        <label className="block mb-1">Approximate number of candidates</label>
        <input
          type="number"
          {...register("candidateCount", {
            required: "Candidate count is required",
            min: { value: 1, message: "At least 1 candidate required" },
          })}
          className="input bg-white text-black placeholder:text-white"
          placeholder="Number of Candidates"
        />
        {errors.candidateCount && (
          <p className="text-red-500 text-sm mt-1">
            {errors.candidateCount.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-left">
        <button
          type="submit"
          className="px-6 py-2 bg-white text-primary font-semibold rounded-full shadow hover:bg-secondary hover:text-white transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
