import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import registerLottie from '../assets/Lotties/register.json';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import SocialLogin from '../Components/SocialLogin';
import { Link } from 'react-router';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-4 bg-gray-50">
      {/* Lottie Animation */}
      <div className="md:w-1/2 flex justify-center">
        <Lottie animationData={registerLottie} loop style={{ height: 300 }} />
      </div>

      {/* Register Form */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Register Now</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="w-full input input-bordered pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <span
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full btn btn-neutral mt-2 hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
       
        {/* Login Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </p>
        

        {/* Social Login */}
        <div className="flex justify-center">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
