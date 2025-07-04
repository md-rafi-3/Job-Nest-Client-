import React, { Suspense } from 'react';
import UseAuth from '../Hooks/UseAuth';
import PostedJobList from '../Components/PostedJobList';
import { jobsCreatedByPromise } from '../DAta/JobsApi';

const MyPostedJobs = () => {
    const {user}=UseAuth();

    return (
        <div>
            <h2>My Posted jobs</h2>
            <Suspense>
                <PostedJobList jobCreatedByPromise={jobsCreatedByPromise(user.email)}></PostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;