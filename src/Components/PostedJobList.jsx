import React, { use } from "react";
import {
  FaEdit,
  FaTrash,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router";

const PostedJobList = ({ jobCreatedByPromise }) => {
  const jobs = use(jobCreatedByPromise);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      {/* TABLE VIEW for md and up */}
      <div className="hidden md:block">
        <div className="rounded-xl border border-indigo-300 bg-white shadow-lg overflow-hidden">
          <table className="table w-full text-sm">
            <thead className="bg-indigo-100 text-indigo-800 font-semibold text-base border-b-2 border-indigo-300">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Logo</th>
                <th className="p-3 text-left">Job Title</th>
                <th className="p-3 text-left">Company & Location</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Salary</th>
                <th className="p-3 text-left">Applications</th> {/* ✅ New Column */}
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={job._id}
                  className="hover:bg-indigo-50 border-b border-indigo-200 transition-all"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={job.company_logo}
                      alt="logo"
                      className="w-10 h-10 rounded border border-indigo-200"
                    />
                  </td>
                  <td className="p-3 font-medium text-indigo-700">
                    {job.title}
                  </td>
                  <td className="p-3">
                    <p className="font-medium">{job.company}</p>
                    <p className="flex items-center text-sm text-gray-600 gap-1">
                      <FaMapMarkerAlt className="text-indigo-500" />
                      {job.location}
                    </p>
                  </td>
                  <td className="p-3">{job.category}</td>
                  <td className="p-3 flex items-center gap-1">
                    <FaClock className="text-indigo-500" />
                    {job.applicationDeadline}
                  </td>
                  <td className="p-3">
                    <span
                      className={`badge badge-sm ${
                        job.status === "active"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {job.salaryRange.min} - {job.salaryRange.max}{" "}
                    {job.salaryRange.currency.toUpperCase()}
                  </td>
                  <td className="p-3 text-center">
                    {job.application_count|| 0}
                  </td> {/* ✅ New Cell */}
                  <td className="p-3">
                    <div className="flex justify-center gap-2 flex-wrap">
                      <button className="btn btn-xs bg-[#1447e6] hover:bg-[#0f3cc9] text-white flex items-center gap-1 border-none">
                        <FaEdit /> Edit
                      </button>
                      
                      <Link to={`/applications/${job._id}`}>
                        <button className="btn btn-xs bg-[#1447e6] hover:bg-[#0f3cc9] text-white flex items-center gap-1 border-none">
                          <FaEye /> View Applications
                        </button>
                      </Link>
                      <button className="btn btn-xs bg-red-500 hover:bg-red-600 text-white flex items-center gap-1 border-none">
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CARD VIEW for small devices */}
      <div className="block md:hidden space-y-5 mt-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="card border border-indigo-300 shadow-md rounded-xl bg-white"
          >
            <div className="card-body space-y-2 p-4">
              <div className="flex items-center gap-4">
                <img
                  src={job.company_logo}
                  alt="logo"
                  className="w-12 h-12 rounded border border-indigo-200"
                />
                <div>
                  <h2 className="text-lg font-semibold text-indigo-700">
                    {job.title}
                  </h2>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <p className="flex items-center gap-1 text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-indigo-500" />
                    {job.location}
                  </p>
                </div>
              </div>
              <p className="flex items-center gap-2 text-sm">
                <FaBriefcase className="text-indigo-500" />
                {job.category}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <FaClock className="text-indigo-500" />
                {job.applicationDeadline}
              </p>
              <p className="text-sm">
                <strong>Status:</strong>{" "}
                <span
                  className={`badge badge-sm ${
                    job.status === "active"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {job.status}
                </span>
              </p>
              <p className="text-sm">
                <strong>Salary:</strong> {job.salaryRange.min} -{" "}
                {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
              </p>
              <p className="text-sm">
                <strong>Applications:</strong> {job.applicationCount || 0}
              </p> {/* ✅ New in Card View */}
              <div className="flex justify-end gap-2 pt-2 flex-wrap">
                <button className="btn btn-xs btn-info text-white flex items-center gap-1">
                  <FaEdit /> Edit
                </button>
                <button className="btn btn-xs btn-success text-white flex items-center gap-1">
                  <FaInfoCircle /> Details
                </button>
                <Link to={`/applications/${job._id}`}>
                  <button className="btn btn-xs bg-[#1447e6] hover:bg-[#0f3cc9] text-white flex items-center gap-1 border-none">
                    <FaEye /> View Applications
                  </button>
                </Link>
                <button className="btn btn-xs btn-error text-white flex items-center gap-1">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedJobList;
