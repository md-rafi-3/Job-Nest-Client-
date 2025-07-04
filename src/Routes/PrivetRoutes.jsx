import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }
    if(!user){
       return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoutes;