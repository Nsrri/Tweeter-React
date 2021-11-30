import { Navigate } from "react-router";
const LogOut = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
};
export default LogOut;
