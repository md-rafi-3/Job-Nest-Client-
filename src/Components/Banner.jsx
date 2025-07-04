import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import team1 from '../assets/Photo/photo-1 .jpg';
import team2 from '../assets/Photo/photo-2.jpg';
import team3 from '../assets/Photo/photo-3.jpg';

const Banner = () => {
    return (
        <div className="bg-base-200 py-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4">
                
                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 100 }}
                            className="text-blue-600 block"
                        >
                            Latest Jobs
                        </motion.span>

                        <span className="text-gray-700">
                            For&nbsp;
                            <span className="text-indigo-600">
                                <Typewriter
                                    words={['You!', 'Developers!', 'Designers!', 'Everyone!']}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
                    >
                        Discover thousands of remote, hybrid and in-office jobs tailored to your skills.
                        Let your career take off with us today!
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex flex-col items-center gap-6 w-full sm:max-w-lg">
                    {/* Top two images side-by-side on md+, stacked on small */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            src={team1}
                            alt="Team 1"
                            className="w-64 sm:w-44 md:w-52 lg:w-56 rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-500 shadow-lg"
                        />
                        <motion.img
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            src={team2}
                            alt="Team 2"
                            className="w-64 sm:w-44 md:w-52 lg:w-56 rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-500 shadow-lg"
                        />
                    </div>

                    {/* Centered third image */}
                    <motion.img
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        src={team3}
                        alt="Team 3"
                        className="w-64 sm:w-48 md:w-56 lg:w-60 rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-500 shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
