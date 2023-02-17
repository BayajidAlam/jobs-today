import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-80">
          Loading...
      </div>
    );
  }
  
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
