import React, { use } from 'react';
import JobsCard from './JobsCard';

const HotJobs = ({jobsPromise}) => {
    
    console.log(jobsPromise)
    const jobs=use(jobsPromise)
    console.log(jobs)
    
    return (
        <div className='mt-40 p-3 max-w-7xl mx-auto '>

            <h2 className='text-4xl font-bold'>Hot Jobs of the Day</h2>
          
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3 mt-5'>
            {jobs.map(job=><JobsCard job={job}></JobsCard>)}
          </div>
            
        </div>
    );
};

export default HotJobs;