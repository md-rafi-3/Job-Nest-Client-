import React, { useState } from 'react';
import { useParams } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();

    const [isEditable, setIsEditable] = useState(false);
    const [name, setName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');

    const handleCheckboxChange = () => {
        setIsEditable(!isEditable);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const github = form.github.value;
        const linkedin = form.linkedin.value;
        const resume = form.resume.value;

        const applicationData = {
            jobId,
            applicant:name,
            email,
            github,
            linkedin,
            resume,
            status:"Pending"
        };



        console.log("Submitted Application:", applicationData);
        // submit to backend

        axios.post('http://localhost:3000/applications',applicationData).then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
  position: "center",
  icon: "success",
  title: "Your application has been submitted",
  showConfirmButton: false,
  timer: 1500
});
            }
        }).catch(error=>{
            console.log(error.message)
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
            <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Apply for this Job
                </h2>

                <div className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        id="editCheckbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                        checked={isEditable}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="editCheckbox" className="text-sm text-gray-700">
                        Enable manual input for name and email
                    </label>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            readOnly={!isEditable}
                            className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                isEditable ? 'bg-white border-gray-300' : 'bg-gray-100 border-gray-200 cursor-not-allowed'
                            }`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly={!isEditable}
                            className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                isEditable ? 'bg-white border-gray-300' : 'bg-gray-100 border-gray-200 cursor-not-allowed'
                            }`}
                        />
                    </div>

                    {/* GitHub */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">GitHub Profile</label>
                        <input
                            type="url"
                            name="github"
                            required
                            placeholder="https://github.com/yourusername"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* LinkedIn */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">LinkedIn Profile</label>
                        <input
                            type="url"
                            name="linkedin"
                            required
                            placeholder="https://linkedin.com/in/yourusername"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Resume */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Resume Link</label>
                        <input
                            type="url"
                            name="resume"
                            required
                            placeholder="https://drive.google.com/your-resume"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
