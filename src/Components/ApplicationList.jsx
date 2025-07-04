import React, { use } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaUserCircle,
  FaEnvelope,
} from "react-icons/fa";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
        <FaFileAlt className="text-blue-500" /> My Job Applications
      </h2>

      {/* Table layout for desktop */}
      <div className="hidden md:block">
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-4 px-5 text-left">Company</th>
                <th className="py-4 px-5 text-left">Job Title</th>
                <th className="py-4 px-5 text-left">Applicant</th>
                <th className="py-4 px-5 text-left">Email</th>
                <th className="py-4 px-5 text-left">Links</th>
                <th className="py-4 px-5 text-left">Status</th>
                <th className="py-4 px-5 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {applications.map((app) => (
                <tr
                  key={app._id}
                  className="hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="px-5 py-4 flex items-center gap-3">
                    <img
                      src={app.company_logo}
                      alt={app.company}
                      className="h-10 w-10 object-contain shadow-2xl rounded-md"
                    />
                    <span className="font-medium">{app.company}</span>
                  </td>
                  <td className="px-5 py-4">{app.title}</td>
                  <td className="px-5 py-4">{app.applicant}</td>
                  <td className="px-5 py-4 text-gray-500">{app.email}</td>
                  <td className="px-5 py-4">
                    <div className="flex gap-3 text-blue-600 text-lg">
                      <a href={app.github} target="_blank" rel="noreferrer" title="GitHub">
                        <FaGithub color="black" />
                      </a>
                      <a href={app.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href={app.resume} target="_blank" rel="noreferrer" title="Resume">
                        <FaFileAlt />
                      </a>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        app.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : app.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs"
                      onClick={() => alert(`Withdraw application: ${app._id}`)}
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile card layout */}
      <div className="block md:hidden space-y-5 mt-4">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={app.company_logo}
                alt={app.company}
                className="h-12 w-12 object-contain border rounded"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                <p className="text-sm text-gray-500">{app.company}</p>
              </div>
            </div>

            <div className="text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2 text-gray-700">
                <FaUserCircle className="text-gray-500" /> {app.applicant}
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaEnvelope className="text-gray-500" /> {app.email}
              </p>
            </div>

            <div className="flex gap-5 text-blue-600 text-lg mb-3">
              <a href={app.github} target="_blank" rel="noreferrer">
                <FaGithub color="black" />
              </a>
              <a href={app.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={app.resume} target="_blank" rel="noreferrer">
                <FaFileAlt />
              </a>
            </div>

            <div className="flex justify-between items-center">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  app.status === "Accepted"
                    ? "bg-green-100 text-green-700"
                    : app.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {app.status}
              </span>

              <button
                className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs"
                onClick={() => alert(`Withdraw application: ${app._id}`)}
              >
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
