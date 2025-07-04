import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaBookmark, FaPaperPlane } from 'react-icons/fa';

const JobDetails = () => {
  const {
    title,
    company,
    company_logo,
    location,
    jobType,
    salaryRange,
    applicationDeadline,
    description,
    responsibilities,
    requirements,
    hr_name,
    hr_email,
    category,
    _id
  } = useLoaderData();

  const handleSave = () => {
    // Placeholder logic – you can integrate localStorage or backend later
    alert('Job saved to your list!');
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <img
            src={company_logo}
            alt={company}
            className="w-20 h-20 rounded-xl object-contain border border-gray-200 shadow-sm"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600">{company} • {location}</p>
            <p className="text-sm text-indigo-600 font-medium mt-1">{category} | {jobType}</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Info Boxes */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border border-gray-300 rounded-xl p-5 bg-gray-50 hover:border-indigo-400 transition">
            <p className="text-sm text-gray-500">💰 Salary Range</p>
            <p className="font-semibold text-gray-800 mt-1">
              {salaryRange.min.toLocaleString()} – {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl p-5 bg-gray-50 hover:border-indigo-400 transition">
            <p className="text-sm text-gray-500">📅 Application Deadline</p>
            <p className="font-semibold text-gray-800 mt-1">{applicationDeadline}</p>
          </div>
        </div>

        {/* HR Contact */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">HR Contact</h2>
          <p className="text-gray-700">
            {hr_name} – <a href={`mailto:${hr_email}`} className="text-indigo-600 hover:underline">{hr_email}</a>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
         <Link to={`/jobApply/${_id}`}>
          <button
           
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <FaPaperPlane />
            Apply Now
          </button></Link>
          <button
            onClick={handleSave}
            className="inline-flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            <FaBookmark />
            Save Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
