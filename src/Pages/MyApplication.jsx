import React, { Suspense } from 'react';
import ApplicationList from '../Components/ApplicationList';
import ApplicationStatus from '../Components/PostedJobList';
import UseAuth from '../Hooks/UseAuth';
import { myApplicationPromise } from '../DAta/applicationApi';


const MyApplication = () => {
    const {user}=UseAuth()

    return (
        <div>
          
           <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
             <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}>
                
             </ApplicationList>
           </Suspense>
            
        </div>
    );
};

export default MyApplication;