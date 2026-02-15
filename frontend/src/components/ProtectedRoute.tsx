import { Navigate , Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    //Agar token nahi hai m toh wapas login pe bhej do 
    if(!token){
        return <Navigate to="/login" replace/>;
    }

    //Agar token hai toh jo page maang ra hai (Dashboard) wo dikhao

    return <Outlet/>
    
}


export default ProtectedRoute;