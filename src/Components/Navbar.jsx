import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { MdOutlineHome, MdLogin, MdLogout } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { LuUsersRound } from 'react-icons/lu';
import { FaUserCircle, FaRegUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import { FaRegFileAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: 'Logged Out!',
              text: 'You have been successfully logged out.',
              icon: 'success',
              confirmButtonColor: '#4f46e5',
            });
            setTimeout(() => navigate('/login'), 1000);
          })
          .catch((error) => {
            Swal.fire({
              title: error.code || 'Error',
              icon: 'error',
              draggable: true,
            });
          });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-600 font-semibold flex items-center gap-2'
              : 'text-gray-700 hover:text-indigo-500 flex items-center gap-2 transition'
          }
        >
          <MdOutlineHome className="text-xl" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-600 font-semibold flex items-center gap-2'
              : 'text-gray-700 hover:text-indigo-500 flex items-center gap-2 transition'
          }
        >
          <IoSearchOutline className="text-xl" />
          Find A Job
        </NavLink>
      </li>

      {/* for recruiters */}
     {user&& <li>
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-600 font-semibold flex items-center gap-2'
              : 'text-gray-700 hover:text-indigo-500 flex items-center gap-2 transition'
          }
        >
          <LuUsersRound className="text-xl" />
          Add Job
        </NavLink>
      </li>}
     {user&& <li>
        <NavLink
          to="/myPostedJobs"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-600 font-semibold flex items-center gap-2'
              : 'text-gray-700 hover:text-indigo-500 flex items-center gap-2 transition'
          }
        >
          <LuUsersRound className="text-xl" />
          My Posted Jobs
        </NavLink>
      </li>}
      {/* for aplicant role as well */}
    {user && (
  <li>
    <NavLink
      to="/myApplications"
      className={({ isActive }) =>
        isActive
          ? 'text-indigo-600 font-semibold flex items-center gap-2'
          : 'text-gray-700 hover:text-indigo-500 flex items-center gap-2 transition'
      }
    >
      <FaRegFileAlt className="text-xl" /> {/* New icon here */}
      My Applications
    </NavLink>
  </li>
)}
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-50 bg-white shadow-md px-5 py-3 flex items-center justify-between">
      {/* Left side: Hamburger + Brand */}
      <div className="flex items-center ">
        {/* Hamburger menu only on small screens */}
        <div className="dropdown dropdown-start lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost p-2 rounded-md hover:bg-indigo-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-white rounded-box w-52 space-y-2"
          >
            {navLinks}
            {!user && (
              <li>
                <NavLink
                  to="/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-indigo-500 transition"
                >
                  <MdLogin className="text-lg" />
                  Login / Sign Up
                </NavLink>
              </li>
            )}

            
            
          </ul>
        </div>

        {/* Brand always visible */}
        <Link
          to="/"
          className="text-3xl font-bold text-indigo-600 tracking-wide btn btn-ghost"
        >
          JobNest
        </Link>
      </div>

      {/* Desktop nav links */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal gap-8">{navLinks}</ul>
      </div>

      {/* Right side: User icon on small devices and user/auth buttons on md+ */}
      <div className="flex items-center gap-3">
        {/* User icon on small devices */}
        {user && (
          <div className="dropdown dropdown-end lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar cursor-pointer"
            >
              <div className="w-10 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2">
                <img
                  id="user-tooltip-mobile"
                  src={user.photoURL || 'https://i.ibb.co/4pDNDk1/avatar-placeholder.png'}
                  alt={user.displayName || 'User Avatar'}
                  referrerPolicy="no-referrer"
                />
              </div>
            </label>

            <Tooltip
              anchorSelect="#user-tooltip-mobile"
              place="left"
              content={user.displayName || 'User'}
            />

            <ul
  tabIndex={0}
  className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-white rounded-box w-56 space-y-3 border border-indigo-200"
>
  <li>
    <div className="flex flex-col gap-1">
      <h3 className="text-sm font-semibold text-gray-800">
        {user.displayName || (
          <span className="italic text-gray-400">Name not available</span>
        )}
      </h3>
      <p className="text-xs text-gray-500 truncate">
        {user.email || (
          <span className="italic text-gray-400">Email not available</span>
        )}
      </p>
    </div>
  </li>
  <li>
    <Link
      to="/myApplications"
      className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
    >
      <FaRegUser className="text-base" />
      My Profile
    </Link>
  </li>
  <li>
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold transition"
    >
      <MdLogout className="text-base" />
      Sign Out
    </button>
  </li>
</ul>
          </div>
        )}

        {/* Auth buttons on md+ */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2">
                  <img
                    id="user-tooltip"
                    src={user.photoURL || 'https://i.ibb.co/4pDNDk1/avatar-placeholder.png'}
                    alt={user.displayName || 'User Avatar'}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </label>

              <Tooltip anchorSelect="#user-tooltip" place="left" content={user.displayName || 'User'} />

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-white rounded-box w-56 space-y-3 border border-indigo-200"
              >
                <li>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {user.displayName || <span className="italic text-gray-400">Name not available</span>}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </li>
                <li>
                  <Link
                    to="/myApplications"
                    className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
                  >
                    <FaRegUser className="text-base" />
                    My Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold transition"
                  >
                    <MdLogout className="text-base" />
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="btn btn-outline border-indigo-500 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 transition flex items-center gap-2"
              >
                <FaRegUser />
                Register
              </Link>
              <Link
                to="/login"
                className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 transition"
              >
                <MdLogin />
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
