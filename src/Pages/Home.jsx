import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import HotJobs from '../Components/HotJobs';
import JobCategories from '../Components/Category';


 const jobsPromise=fetch("http://localhost:3000/jobs").then(res=>res.json());
const Home = () => {
   
    console.log(jobsPromise)
    return (
        <div>
           <Banner></Banner>
          <JobCategories></JobCategories>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}><HotJobs jobsPromise={jobsPromise}></HotJobs></Suspense>
        </div>
    );
};

export default Home;