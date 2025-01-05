import { useContext } from "react";
import { AuthContext } from "./AouthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (<div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>)
    }

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} replace to='/login'></Navigate>
};

export default PrivateRoute;