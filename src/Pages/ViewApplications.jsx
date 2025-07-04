import { useLoaderData } from 'react-router';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applicantsData = useLoaderData();

    const handleStatusChange=(e,applicantId)=>{
        console.log(e.target.value,applicantId)

        // update in database
        axios.patch(`http://localhost:3000/applications/${applicantId}`,{status:e.target.value}).then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                Swal.fire({
  position: "center",
  icon: "success",
  title: "Application status updated successfully",
  showConfirmButton: false,
  timer: 1500
});
            }
        }).catch(error=>{
            console.log(error.message)
        })
    }



    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-sky-700">Applicants List</h2>

            {/* Large screen: Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border border-sky-300 rounded-xl shadow-md overflow-hidden">
                    <thead className="bg-sky-600 text-white">
                        <tr>
                            <th className="py-3 px-4 border border-sky-300">#</th>
                            <th className="py-3 px-4 border border-sky-300">Name</th>
                            <th className="py-3 px-4 border border-sky-300">Email</th>
                            <th className="py-3 px-4 border border-sky-300">GitHub</th>
                            <th className="py-3 px-4 border border-sky-300">LinkedIn</th>
                            <th className="py-3 px-4 border border-sky-300">Resume</th>
                            <th className="py-3 px-4 border border-sky-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicantsData && applicantsData.length > 0 ? (
                            applicantsData.map((applicant, index) => (
                                <tr key={index} className="hover:bg-sky-50 transition">
                                    <td className="py-2 px-4 border border-sky-200 text-center">{index + 1}</td>
                                    <td className="py-2 px-4 border border-sky-200">{applicant.applicant}</td>
                                    <td className="py-2 px-4 border border-sky-200">{applicant.email}</td>
                                    <td className="py-2 px-4 border border-sky-200 text-center text-sky-600">
                                        <a href={applicant.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="inline-block text-xl" />
                                        </a>
                                    </td>
                                    <td className="py-2 px-4 border border-sky-200 text-center text-sky-600">
                                        <a href={applicant.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="inline-block text-xl" />
                                        </a>
                                    </td>
                                    <td className="py-2 px-4 border border-sky-200 text-center text-sky-600">
                                        <a href={applicant.resume} target="_blank" rel="noopener noreferrer">
                                            <FaFileAlt className="inline-block text-xl" />
                                        </a>
                                    </td>
                                    <td className="py-2 px-4 border border-sky-200 text-center">
                                        <select onChange={(e)=>handleStatusChange(e,applicant._id)} defaultValue={applicant.status} className="select">
                                            <option disabled={true}>Update Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Accepted">Accepted</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="py-4 text-center text-gray-500">
                                    No applicants found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Small screen: Cards */}
            <div className="md:hidden space-y-4">
                {applicantsData && applicantsData.length > 0 ? (
                    applicantsData.map((applicant, index) => (
                        <div
                            key={index}
                            className="bg-white border border-sky-200 shadow-md rounded-xl p-4"
                        >
                            <h3 className="text-lg font-semibold mb-2 text-sky-800">
                                {index + 1}. {applicant.applicant}
                            </h3>
                            <p className="text-sm mb-1 text-gray-700">
                                <span className="font-medium">Email:</span> {applicant.email}
                            </p>
                            <div className="flex gap-5 mt-2 text-sky-600 text-xl">
                                <a href={applicant.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href={applicant.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href={applicant.resume} target="_blank" rel="noopener noreferrer">
                                    <FaFileAlt />
                                </a>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <select  onChange={(e)=>handleStatusChange(e,applicant._id)}  defaultValue={applicant.status} className="select">
                                    <option disabled={true}>Update Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>


                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No applicants found.</p>
                )}
            </div>
        </div>
    );
};

export default ViewApplications;
