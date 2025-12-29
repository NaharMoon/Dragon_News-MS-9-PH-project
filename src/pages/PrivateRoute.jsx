import React, { useContext } from 'react';
import NewsDetailsPage from './NewsDetailsPage';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = () => {
    const location = useLocation();
    // console.log(location);
    const { user,loading } = useContext(AuthContext);
    if (loading){
        return (
            <Loading></Loading>
        );
    }
    else if (user && user.email) {
        return <NewsDetailsPage></NewsDetailsPage>;
    }
    else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    }

};

export default PrivateRoute;