import React from "react";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";

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

const NonAcademicForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="min-h-screen bg-third py-10 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">CAREERS</h1>
        <p className="mb-6">
          Please fill out this form to initiate your application and review
          process.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* GENERAL INFORMATION */}
          <div>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>Full Name</label>
                <input
                  {...register("fname")}
                  placeholder="Full Name"
                  className="input"
                />
              </div>
              <div>
                <label>Date of Birth</label>
                <input {...register("dob")} type="date" className="input" />
              </div>
              <div>
                <label>Gender</label>
                <select {...register("gender")} className="input">
                  <option value="">Select Gender</option>
                  {genderOptions.map((g, i) => (
                    <option key={i} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="input"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  {...register("email")}
                  placeholder="Primary Email ID"
                  className="input"
                />
              </div>
              <div>
                <label>Languages Known</label>
                <input
                  {...register("language")}
                  placeholder="Languages Known"
                  className="input"
                />
              </div>
              <div>
                <label>Country</label>
                <select {...register("country")} className="input">
                  <option value="">Select Country</option>
                  {countryOptions.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-3">
                <label>Address</label>
                <textarea
                  {...register("address")}
                  placeholder="Your Address"
                  rows={2}
                  className="input w-full"
                />
              </div>
            </div>
          </div>

          {/* POSITION APPLIED FOR */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Position Applied For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>Position</label>
                <select {...register("position")} className="input">
                  <option value="">Select Position</option>
                  {positionOptions.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Grade Level</label>
                <select {...register("gread")} className="input">
                  <option value="">Grade Level</option>
                  {qualificationOptions.map((q, i) => (
                    <option key={i} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* CURRENT ORGANISATION */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Current Organisation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>Designation</label>
                <select {...register("currentDesignation")} className="input">
                  <option value="">Current Designation</option>
                  {designationOptions.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Department</label>
                <select {...register("department")} className="input">
                  <option value="">Department</option>
                  {departmentOptions.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Years of Experience</label>
                <select {...register("experienceYear")} className="input">
                  <option value="">Years of Experience</option>
                  {experienceOptions.map((e, i) => (
                    <option key={i} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* QUALIFICATIONS & MORE */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              Additional Information
            </h2>

            <div>
              <label>Academic Qualifications</label>
              <textarea
                {...register("qualifications")}
                placeholder="Year From-To / Course / Qualification / % of marks / Distinction/Awards if any"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Personal Qualifications</label>
              <textarea
                {...register("personalQualifications")}
                placeholder="Workshops / Certifications / Other Courses"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Work Experience</label>
              <textarea
                {...register("workExperience")}
                placeholder="Serial No. - From (Month/Year) - To (Month/Year) - Institution - Position"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Responsibilities in Current Job</label>
              <textarea
                {...register("responsibilities")}
                placeholder="Major responsibilities in your current job"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Achievements</label>
              <textarea
                {...register("achievements")}
                placeholder="Significant achievements"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Interests</label>
              <textarea
                {...register("interests")}
                placeholder="Interests / Activities / Memberships"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Career Aspirations</label>
              <textarea
                {...register("goals")}
                placeholder="What are your career aspirations and goals?"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Reason for Applying</label>
              <textarea
                {...register("reasons")}
                placeholder="Why are you applying to APL?"
                className="input w-full"
                rows={3}
              />
            </div>

            <div>
              <label>Other Information</label>
              <textarea
                {...register("otherNotes")}
                placeholder="Any other matter you want to specify"
                className="input w-full"
                rows={3}
              />
            </div>
          </div>

          {/* REFERENCES */}
          <div>
            <h2 className="text-xl font-semibold mb-4">References</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>Reference 1 Name</label>
                <input
                  {...register("ref1Name")}
                  placeholder="Reference 1 Name"
                  className="input"
                />
              </div>
              <div>
                <label>Reference 1 Number</label>
                <input
                  {...register("ref1Number")}
                  placeholder="Reference 1 Number"
                  className="input"
                />
              </div>
              <div>
                <label>Reference 1 Email</label>
                <input
                  {...register("ref1Email")}
                  placeholder="Reference 1 Email"
                  className="input"
                />
              </div>
              <div>
                <label>Reference 2 Name</label>
                <input
                  {...register("ref2Name")}
                  placeholder="Reference 2 Name"
                  className="input"
                />
              </div>
              <div>
                <label>Reference 2 Number</label>
                <input
                  {...register("ref2Number")}
                  placeholder="Reference 2 Number"
                  className="input"
                />
              </div>
              <div>
                <label>Reference 2 Email</label>
                <input
                  {...register("ref2Email")}
                  placeholder="Reference 2 Email"
                  className="input"
                />
              </div>
            </div>
          </div>

          {/* RESUME UPLOAD */}
          <div>
            <label htmlFor="resume" className="text-sm block mb-2 font-medium">
              Upload Resume
            </label>

            <div className="flex items-center gap-4">
              <label
                htmlFor="resume"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80 transition-colors"
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
              {...register("resume")}
              className="hidden"
              onChange={(e) => {
                const fileName = e.target.files[0]?.name || "No file chosen";
                document.getElementById("fileName").textContent = fileName;
              }}
            />
          </div>

          {/* SUBMIT */}
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

export default NonAcademicForm;


