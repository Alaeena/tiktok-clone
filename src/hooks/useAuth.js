import { UserContext } from "@/config";
import { useContext } from "react";

function useAuth() {
    const { state, action } = useContext(UserContext);
    
    return { state, action };
}

export default useAuth;