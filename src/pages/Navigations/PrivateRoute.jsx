import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/" replace />; 
  }

  return children; 
};

export default PrivateRoute;

