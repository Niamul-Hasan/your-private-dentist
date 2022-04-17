import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else {
        return children;
    }
};

export default RequireAuth;