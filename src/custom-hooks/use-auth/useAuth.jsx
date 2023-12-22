import { useContext } from "react";
import { UserAuth } from "../../provider/auth-provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(UserAuth);
    return auth;
};

export default useAuth;