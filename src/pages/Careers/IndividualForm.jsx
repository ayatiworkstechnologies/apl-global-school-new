import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { toast } from "react-toastify";
import { individualData } from "../../Service/api"; // ✅ adjust path if needed

const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/svg+xml",
  "image/webp",
];

export default function IndividualForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const [photoName, setPhotoName] = useState("No file chosen");
  const watchPhoto = watch("photo");

  const onSubmit = async (data) => {
    const file = data.photo?.[0];
    if (!file) {
      toast.error("Please upload a passport-size photo.");
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/svg+xml",
      "image/webp",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Unsupported file type");
      return;
    }

    try {
      const base64Photo = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // full data URL
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // ✅ Map only what backend accepts; exclude FileList "photo"
      const payload = {
        fullName: (data.fullName ?? "").trim(),
        email: (data.email ?? "").trim(),
        mobile: (data.mobile ?? "").trim(),
        message: "-", // optional on backend; send safe default
        address: (data.address ?? "").trim(),
        age: String(data.age ?? "").trim(),
        dob: (data.dob ?? "").trim(),
        experience: (data.experience ?? "").trim(),
        gender: (data.gender ?? "").trim(),
        isAPL: !!data.isAPL, // PHP casts to 1/0
        students: (data.students ?? "").trim(),
        subjects: (data.subjects ?? "").trim(),
        teachingIn: (data.teachingIn ?? "").trim(),
        qualification: data.qualification ?? [],
        write: (data.write ?? "").trim(),
        photoName: file.name,
        photo_base64: base64Photo, // ✅ send only this, not FileList
      };

      const result = await individualData(payload); // should return { status, message }
      toast.success(result.message || "Submitted successfully");
    } catch (err) {
      // Show the real server error if present
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Submission failed";
      toast.error(msg);
      // Optional: console.log for quick debugging
      console.error("Submit error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto p-6 sm:p-10 font-secondary space-y-12 bg-third text-white rounded-xl shadow-lg"
    >
      {/* SECTION 1 – PERSONAL PARTICULARS */}
      <div>
        <h2 className="text-xl font-bold border-b border-white/30 pb-2 mb-4">
          SECTION 1 – PERSONAL PARTICULARS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="input bg-white text-black"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="input bg-white text-black"
            />
            {errors.dob && (
              <p className="text-red-400 text-sm">{errors.dob.message}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1">Age</label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Must be at least 18" },
              })}
              className="input bg-white text-black"
              placeholder="Age"
            />
            {errors.age && (
              <p className="text-red-400 text-sm">{errors.age.message}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="input bg-white text-black"
            >
              <option value="">-- Select Gender --</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-400 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1">Mobile Number</label>
            <input
              type="text"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="input bg-white text-black"
              placeholder="Mobile Number"
            />
            {errors.mobile && (
              <p className="text-red-400 text-sm">{errors.mobile.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email ID</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="input bg-white text-black"
              placeholder="Email ID"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mt-4">
          <label className="block mb-1">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            rows={3}
            className="input mt-2 w-full bg-white text-black"
            placeholder="Address"
          ></textarea>
          {errors.address && (
            <p className="text-red-400 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Checkbox */}
        <div className="mt-2">
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              {...register("isAPL", {
                required: "You must confirm APL/World ORIDON affiliation.",
              })}
              className="peer w-5 h-5 accent-secondary"
            />
            <span className="text-white peer-checked:text-secondary font-medium transition duration-300">
              APL/World ORIDON schools
            </span>
          </label>
          {errors.isAPL && (
            <p className="text-red-400 text-sm mt-1">{errors.isAPL.message}</p>
          )}
        </div>
      </div>

      {/* SECTION 2 – ACADEMIC / PROFESSIONAL QUALIFICATION */}
      <div>
        <h2 className="text-xl font-bold border-b border-white/30 pb-2 mb-4">
          SECTION 2 – ACADEMIC / PROFESSIONAL QUALIFICATION DETAILS
        </h2>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-5 gap-3 text-sm font-semibold mb-2 text-white">
            <span>Passed Year</span>
            <span>Qualification</span>
            <span>Institution</span>
            <span>Subjects Studied</span>
            <span>Class / Grade</span>
          </div>
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="grid grid-cols-5 gap-3 mb-2">
              <input
                type="text"
                {...register(`qualification[${idx}].year`)}
                className="input bg-white text-black"
              />
              <input
                type="text"
                {...register(`qualification[${idx}].qualification`)}
                className="input bg-white text-black"
              />
              <input
                type="text"
                {...register(`qualification[${idx}].institution`)}
                className="input bg-white text-black"
              />
              <input
                type="text"
                {...register(`qualification[${idx}].subjects`)}
                className="input bg-white text-black"
              />
              <input
                type="text"
                {...register(`qualification[${idx}].grade`)}
                className="input bg-white text-black"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3 – TEACHING EXPERIENCE */}
      <div>
        <h2 className="text-xl font-bold border-b border-white/30 pb-2 mb-4">
          SECTION 3 – TEACHING EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Total teaching experience"
            {...register("experience")}
            className="input bg-white text-black"
          />
          <input
            type="text"
            placeholder="Currently teaching in"
            {...register("teachingIn")}
            className="input bg-white text-black"
          />
          <input
            type="text"
            placeholder="Subjects & Grades"
            {...register("subjects")}
            className="input bg-white text-black"
          />
          <input
            type="text"
            placeholder="Number of students"
            {...register("students")}
            className="input bg-white text-black"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-1">Write Up</label>
          <textarea
            {...register("write", { required: "WriteUp is required" })}
            rows={3}
            className="input mt-2 w-full bg-white text-black"
            placeholder="(Please share a 100-word write-up on why you are interested in doing  a professional development programme. Kindly refrain from using Generative AI tools to complete this section)"
          ></textarea>
          {errors.write && (
            <p className="text-red-400 text-sm">{errors.write.message}</p>
          )}
        </div>
        {/* Upload Photo */}
        {/* Upload Photo */}
        <div className="relative w-full mt-6">
          <label className="flex items-center gap-2 w-fit px-4 py-2 bg-[#4ab4f8] text-white rounded-md cursor-pointer hover:bg-blue-400 transition">
            <UploadCloud className="w-5 h-5" />
            Upload Passport Photo
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.svg,.webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) {
                  setPhotoName("No file chosen");
                  return;
                }

                const validTypes = [
                  "image/jpeg",
                  "image/png",
                  "image/jpg",
                  "image/svg+xml",
                  "image/webp",
                ];

                if (!validTypes.includes(file.type)) {
                  setPhotoName("No file chosen");
                  toast.error(
                    "Only jpg, jpeg, png, svg, or webp files are allowed"
                  );
                  return;
                }

                // Manually set value in react-hook-form
                setPhotoName(file.name);
              }}
              {...register("photo", {
                required: "Passport-size photo is required",
                validate: {
                  acceptedFormats: (value) => {
                    const file = value?.[0];
                    if (!file) return "Passport-size photo is required";
                    const allowed = [
                      "image/jpeg",
                      "image/png",
                      "image/jpg",
                      "image/svg+xml",
                      "image/webp",
                    ];
                    return (
                      allowed.includes(file.type) ||
                      "Only jpg, jpeg, png, svg, webp allowed"
                    );
                  },
                },
              })}
            />
          </label>

          <span className="ml-4 text-sm text-white">
            {watchPhoto?.[0]?.name || photoName}
          </span>

          {errors.photo && (
            <p className="text-red-400 text-sm mt-1">{errors.photo.message}</p>
          )}
        </div>
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
