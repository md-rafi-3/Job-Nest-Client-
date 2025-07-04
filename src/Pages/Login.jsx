import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Lottie from 'lottie-react';
import loginLottie from '../assets/Lotties/Login.json';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import SocialLogin from '../Components/SocialLogin';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-4 bg-gray-50">
      {/* Lottie Animation */}
      <div className="md:w-1/2 flex justify-center">
        <Lottie animationData={loginLottie} loop style={{ height: 300 }} />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login Now</h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
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

          {/* Forgot password */}
          <div className=" text-sm">
            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full btn btn-neutral mt-2 hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
<p className="text-center text-sm mt-4 text-gray-600">
  Don’t have an account?{' '}
  <Link to="/register" className="text-indigo-600 font-medium hover:underline">
    Register
  </Link>
</p>


       

        {/* Centered Social Login */}
        <div className="flex justify-center">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
