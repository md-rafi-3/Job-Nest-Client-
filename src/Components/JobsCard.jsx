import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const {
        title,
        company,
        company_logo,
        location,
        jobType,
        description,
        requirements,
        salaryRange,
    } = job;

    return (
        <div className="
            border border-gray-200 rounded-xl shadow-md p-5
            transition-all duration-300 transform
            hover:shadow-xl hover:border-blue-400 hover:scale-[1.03]
            cursor-pointer
        ">
            {/* Header */}
            <div className="flex items-center gap-3">
                <img src={company_logo} alt={company} className="w-12 h-12 rounded" />
                <div>
                    <h3 className="font-semibold text-lg">{company}</h3>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mt-4">{title}</h2>

            {/* Job Info */}
            <div className="flex items-center text-gray-500 text-sm gap-3 mt-2">
                <span>📌 {jobType}</span>
                <span>🕒 Just now</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm line-clamp-3">{description}</p>

            {/* Requirements */}
            <div className="flex flex-wrap gap-2 mt-3">
                {requirements.map((skill, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {skill}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-5">
                <p className="text-indigo-600 font-bold text-lg">
                    ৳{salaryRange.min.toLocaleString()} - ৳{salaryRange.max.toLocaleString()}/month
                </p>
              <Link to={`/jobs/${job._id}`}>  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                   Details
                </button></Link>
            </div>
        </div>
    );
};

export default JobCard;
