import React, { useState } from "react";
import { useForm } from "react-hook-form";
import studentImg from "/assets/ContantBanner.webp";

const tabs = [
  { id: "general", label: "GENERAL INFORMATION" },
  { id: "academic", label: "ACADEMICS INFORMATION" },
  { id: "parent", label: "PARENTAL INFORMATION" },
  { id: "other", label: "OTHER INFORMATION" },
];

// Form components using react-hook-form
const ContactForm = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("General Info:", data);
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
          className="bg-primary p-2 rounded w-full text-white"
        />
        {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message}</p>}
      </div>

      <div>
        <input
          {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
          className="bg-primary p-2 rounded w-full text-white"
        />
        {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message}</p>}
      </div>

      <button type="submit" className="bg-secondary text-white px-6 py-2 rounded mt-4">
        Save & Continue
      </button>
    </form>
  );
};

const AcademicForm = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Academic Info:", data);
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("school", { required: "School name is required" })}
          placeholder="School Name"
          className="bg-primary p-2 rounded w-full text-white"
        />
        {errors.school && <p className="text-red-400 text-sm">{errors.school.message}</p>}
      </div>

      <div>
        <input
          {...register("class", { required: "Class is required" })}
          placeholder="Class"
          className="bg-primary p-2 rounded w-full text-white"
        />
        {errors.class && <p className="text-red-400 text-sm">{errors.class.message}</p>}
      </div>

      <button type="submit" className="bg-secondary text-white px-6 py-2 rounded mt-4">
        Save & Continue
      </button>
    </form>
  );
};

const ParentForm = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Parental Info:", data);
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("parentName", { required: "Parent name is required" })}
          placeholder="Parent Name"
          className="bg-primary p-2 rounded w-full text-white"
        />
        {errors.parentName && <p className="text-red-400 text-sm">{errors.parentName.message}</p>}
      </div>

      <div>
        <input
          {...register("mobile", {
            required: "Mobile is required",
            pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10-digit number" },
          })}
          placeholder="Mobile Number"
          className="bg-primary p-2 rounded w-full text-white"
        />
        {errors.mobile && <p className="text-red-400 text-sm">{errors.mobile.message}</p>}
      </div>

      <button type="submit" className="bg-secondary text-white px-6 py-2 rounded mt-4">
        Save & Continue
      </button>
    </form>
  );
};

const OtherForm = () => {
  const { register } = useForm();

  return (
    <div className="space-y-4">
      <input {...register("hobbies")} placeholder="Hobbies" className="bg-primary p-2 rounded w-full text-white" />
      <input {...register("languages")} placeholder="Languages Known" className="bg-primary p-2 rounded w-full text-white" />
      <p className="text-sm italic">All steps completed!</p>
    </div>
  );
};

// Main Component
export default function ContactFormTabs() {
  const [activeTab, setActiveTab] = useState("general");
  const [completedTabs, setCompletedTabs] = useState(["general"]);

  const goToNextTab = (nextTabId) => {
    setCompletedTabs((prev) => [...new Set([...prev, nextTabId])]);
    setActiveTab(nextTabId);
  };

  const renderForm = () => {
    switch (activeTab) {
      case "general":
        return <ContactForm onComplete={() => goToNextTab("academic")} />;
      case "academic":
        return <AcademicForm onComplete={() => goToNextTab("parent")} />;
      case "parent":
        return <ParentForm onComplete={() => goToNextTab("other")} />;
      case "other":
        return <OtherForm />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold font-primary uppercase text-primary">Contact us</h2>
        <div className="mt-4 flex justify-center flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (completedTabs.includes(tab.id)) setActiveTab(tab.id);
              }}
              className={`px-4 py-2 border border-primary rounded-lg font-medium text-xs sm:text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-secondary text-white"
                  : completedTabs.includes(tab.id)
                  ? "bg-white text-primary"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } transition`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-third p-6 sm:p-10 text-white relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h3>
            {renderForm()}
          </div>

          <div className="hidden md:flex justify-center items-center">
            <img
              src={studentImg}
              alt="Student"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
