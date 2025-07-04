import React, { useState } from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaClock,
  FaTags,
  FaCalendarAlt,
  FaDollarSign,
  FaFileAlt,
  FaUserTie,
  FaEnvelope,
  FaListUl,
  FaTasks,
} from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
    const {user}=UseAuth()
    console.log(user)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "",
    category: "",
    applicationDeadline: "",
    salaryRange: { min: "", max: "", currency: "" },
    description: "",
    company: "",
    requirements: [""],
    responsibilities: [""],
    status: "",
    hr_name: "",
    hr_email: "",
    company_logo: "",
  
  });

  const [isHrEditable, setIsHrEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["min", "max", "currency"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        salaryRange: { ...prev.salaryRange, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayField = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayField = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Job submitted! Check console.");

    //  add to data base
    axios.post("http://localhost:3000/jobs",formData).then(res=>{
      console.log(res)
      if(res.data.insertedId){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Job added successfully!",
  showConfirmButton: false,
  timer: 1500
});
      }
    }).catch(error=>{
      console.log(error)
    })
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 border-b pb-4 flex items-center gap-3">
        <FaFileAlt /> Add New Job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Job Title */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaTags /> Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Company */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaBuilding /> Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Location */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Company Logo */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaBuilding /> Company Logo URL
          </label>
          <input
            type="url"
            name="company_logo"
            value={formData.company_logo}
            onChange={handleChange}
            placeholder="https://example.com/logo.png"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaClock /> Job Type
          </label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="" disabled>
              Select Job Type
            </option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaTags /> Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option>Software Development</option>
            <option>Data Science</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Human Resources</option>
            <option>Customer Support</option>
            <option>Product Management</option>
            <option>Sales</option>
            <option>Other</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaCalendarAlt /> Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <FaDollarSign /> Minimum Salary
            </label>
            <input
              type="number"
              name="min"
              value={formData.salaryRange.min}
              onChange={handleChange}
              placeholder="Minimum Salary"
              min="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <FaDollarSign /> Maximum Salary
            </label>
            <input
              type="number"
              name="max"
              value={formData.salaryRange.max}
              onChange={handleChange}
              placeholder="Maximum Salary"
              min="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        {/* Currency */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaDollarSign /> Currency
          </label>
          <select
            name="currency"
            value={formData.salaryRange.currency}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="" disabled>
              Select Currency
            </option>
            <option value="bdt">BDT (৳ Bangladeshi Taka)</option>
            <option value="usd">USD ($ US Dollar)</option>
            <option value="eur">EUR (€ Euro)</option>
            <option value="gbp">GBP (£ British Pound)</option>
            <option value="inr">INR (₹ Indian Rupee)</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaFileAlt /> Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Job description..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaListUl /> Requirements
          </label>
          {formData.requirements.map((req, i) => (
            <div key={i} className="flex gap-3 mb-3 items-center">
              <input
                type="text"
                value={req}
                onChange={(e) =>
                  handleArrayChange("requirements", i, e.target.value)
                }
                placeholder="Requirement"
                className="flex-grow rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
              {formData.requirements.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("requirements", i)}
                  className="text-red-600 font-semibold hover:text-red-800 transition"
                  aria-label="Remove requirement"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("requirements")}
            className="text-indigo-600 font-semibold hover:underline"
          >
            + Add Requirement
          </button>
        </div>

        {/* Responsibilities */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaTasks /> Responsibilities
          </label>
          {formData.responsibilities.map((res, i) => (
            <div key={i} className="flex gap-3 mb-3 items-center">
              <input
                type="text"
                value={res}
                onChange={(e) =>
                  handleArrayChange("responsibilities", i, e.target.value)
                }
                placeholder="Responsibility"
                className="flex-grow rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
              {formData.responsibilities.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("responsibilities", i)}
                  className="text-red-600 font-semibold hover:text-red-800 transition"
                  aria-label="Remove responsibility"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("responsibilities")}
            className="text-indigo-600 font-semibold hover:underline"
          >
            + Add Responsibility
          </button>
        </div>

        {/* HR Name & Email */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <FaUserTie /> HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              defaultValue={user.displayName}
              onChange={handleChange}
              readOnly={!isHrEditable}
              className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none transition ${
                isHrEditable
                  ? "border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  : "border-gray-300 bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope /> HR Email
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user.email}
              onChange={handleChange}
              readOnly={!isHrEditable}
              className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none transition ${
                isHrEditable
                  ? "border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  : "border-gray-300 bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>
        </div>

        {/* Editable toggle */}
        <div className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            id="edit-hr"
            checked={isHrEditable}
            onChange={() => setIsHrEditable(!isHrEditable)}
            className="w-4 h-4"
          />
          <label
            htmlFor="edit-hr"
            className="text-gray-600 select-none cursor-pointer"
          >
            Edit HR details manually
          </label>
        </div>

        {/* Status */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaTags /> Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
