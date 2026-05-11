import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postEnquiry } from "../../Service/api"; // Adjust path if needed

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (formData) => {
    try {
      const result = await postEnquiry(formData); // ✅ send JSON
      toast.success(result?.message || "Submitted successfully!", {
        className: "bg-secondary text-white font-semibold",
      });
      reset(); // ✅ clear only after success
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Submission failed. Try again.",
        { className: "bg-primary text-white font-semibold" }
      );
    }
  };

  return (
    <div className="relative w-full font-secondary flex items-center justify-end">
      <div className="bg-third text-secondary p-6 rounded-2xl shadow-xl max-w-md w-full space-y-4">
        <h2 className="text-lg text-secondary font-semibold">
          Enquire Now - We're Happy to Help!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Parent & Student Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                {...register("parentName", {
                  required: "Parent Name is required",
                })}
                placeholder="Parent Name"
                className="bg-primary placeholder-white text-white p-2 rounded font-secondary border-none outline-none w-full focus:ring-2 focus:ring-secondary"
              />
              {errors.parentName && (
                <p className="text-xs text-secondary mt-1">
                  {errors.parentName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("studentName", {
                  required: "Student Name is required",
                })}
                placeholder="Student Name"
                className="bg-primary placeholder-white text-white p-2 rounded font-secondary border-none outline-none w-full focus:ring-2 focus:ring-secondary"
              />
              {errors.studentName && (
                <p className="text-xs text-secondary mt-1">
                  {errors.studentName.message}
                </p>
              )}
            </div>
          </div>

          {/* Enquiry For & Email */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <select
                {...register("applyFor", {
                  required: "Please select an option",
                })}
                className="bg-primary text-white p-2 rounded font-secondary border-none w-full outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">-- Select Enquiry --</option>
                <option value="Admission">Admission</option>
                <option value="School Tour">School Tour</option>
              </select>
              {errors.applyFor && (
                <p className="text-xs text-secondary mt-1">
                  {errors.applyFor.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="Email"
                className="bg-primary placeholder-white text-white p-2 rounded font-secondary border-none outline-none w-full focus:ring-2 focus:ring-secondary"
              />
              {errors.email && (
                <p className="text-xs text-secondary mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Grade & Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <select
                {...register("grade", {
                  required: "Please select an option",
                })}
                className="bg-primary text-white p-2 rounded font-secondary border-none w-full outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">-- Select Grade --</option>
                <option value="Primary">Primary</option>
                <option value="Middle School">Middle School</option>
                <option value="High School">High School</option>
                <option value="Cambridge">Cambridge</option>
                <option value="NIOS">NIOS</option>
              </select>
              {errors.grade && (
                <p className="text-xs text-secondary mt-1">
                  {errors.grade.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                placeholder="Phone No"
                className="bg-primary placeholder-white text-white p-2 rounded font-secondary border-none outline-none w-full focus:ring-2 focus:ring-secondary"
              />
              {errors.phone && (
                <p className="text-xs text-secondary mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary/80 text-white font-secondary font-semibold p-2 rounded hover:bg-secondary transition uppercase disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
