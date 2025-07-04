import React from 'react';
import { FaUsers, FaChartBar, FaPenNib, FaTools, FaLock, FaSearch, FaLaptop, FaHeadset, FaStore, FaBuilding } from 'react-icons/fa';

const categories = [
    { title: "Marketing & Sale", jobs: 1526, icon: <FaChartBar className="text-3xl text-blue-600" /> },
    { title: "Finance", jobs: 168, icon: <FaBuilding className="text-3xl text-blue-600" /> },
    { title: "Human Resource", jobs: 165, icon: <FaUsers className="text-3xl text-blue-600" /> },
    { title: "Retail & Products", jobs: 563, icon: <FaStore className="text-3xl text-blue-600" /> },
    { title: "Content Writer", jobs: 142, icon: <FaPenNib className="text-3xl text-blue-600" /> },
    { title: "Customer Help", jobs: 185, icon: <FaHeadset className="text-3xl text-blue-600" /> },
    { title: "Software", jobs: 1856, icon: <FaLaptop className="text-3xl text-blue-600" /> },
    { title: "Management", jobs: 965, icon: <FaTools className="text-3xl text-blue-600" /> },
    { title: "Security Analyst", jobs: 254, icon: <FaLock className="text-3xl text-blue-600" /> },
    { title: "Market Research", jobs: 532, icon: <FaSearch className="text-3xl text-blue-600" /> },
];

const CategorySection = () => {
    return (
        <section className="bg-white py-14 px-5">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Browse by category</h2>
                <p className="text-gray-500 mb-10">Find the job that’s perfect for you. About 800+ new jobs everyday</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 p-5 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 shadow-sm transition-all duration-200"
                        >
                            {category.icon}
                            <div className="text-left">
                                <h3 className="font-semibold text-lg text-gray-700">{category.title}</h3>
                                <p className="text-sm text-gray-500">{category.jobs} Jobs Available</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
