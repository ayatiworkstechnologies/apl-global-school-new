import React from "react";

export default function ParentForm() {
  return (
    <div className="space-y-4">

      <div className="grid grid-cols sm:grid-cols gap-4">
        {[
          { label: "Academic Year", type: "text" },
          
        ].map((field, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-sm mb-1">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.label}
              className="bg-primary placeholder-white text-white p-2 rounded border-none w-full focus:outline-none"
            />
          </div>
        ))} 
        </div>     

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          
          { label: "First Name", type: "text" },
          { label: "Middle Name", type: "text" },
          { label: "Last Name", type: "text" },
        ].map((field, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-sm mb-1">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.label}
              className="bg-primary placeholder-white text-white p-2 rounded border-none w-full focus:outline-none"
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label className="text-sm mb-1">Gender</label>
          <select className="bg-primary text-white p-2 rounded border-none w-full focus:outline-none">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Date of Birth</label>
          <input
            type="date"
            className="bg-primary text-white p-2 rounded border-none w-full focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Age</label>
          <input
            placeholder="Age"
            className="bg-primary placeholder-white text-white p-2 rounded border-none w-full focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Nationality</label>
          <select className="bg-primary text-white p-2 rounded border-none w-full focus:outline-none">
            <option>Nationality</option>
            <option>India</option>
          </select>
        </div>
      </div>

      {/* Text Areas */}
      {[
        { label: "Address", rows: 3 },
      ].map((field, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="text-sm mb-1">{field.label}</label>
          <textarea
            placeholder={field.label}
            rows={field.rows}
            className="bg-primary placeholder-white text-white p-2 rounded border-none w-full focus:outline-none"
          />
        </div>
      ))}

      {/* Email & Code */}
      {["Primary Email ID", "Validation Code",].map(
        (label, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-sm mb-1">{label}</label>
            <input
              placeholder={label}
              className="bg-primary placeholder-white text-white p-2 rounded border-none w-full focus:outline-none"
            />
          </div>
        )
      )}

      <button className="bg-secondary text-white px-6 py-2 rounded mt-4">
        Save & Continue
      </button>
    </div>
  );
}
