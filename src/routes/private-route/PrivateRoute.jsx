import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../../custom-hooks/use-auth/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    // console.log(location.pathname);
    if(loading){
        <p className="text-center text-lg font-bold font-comforta">loading...</p>
        return;
    }
    if(user){
        return children;
    }
    return (
        <>
            <Navigate state={location.pathname} to={`/login`}></Navigate>
        </>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;