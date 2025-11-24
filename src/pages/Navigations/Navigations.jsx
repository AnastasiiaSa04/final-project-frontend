import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import RegisterPage from "../RegisterPage/RegisterPage"
import ResetPage from "../ResetPage/ResetPage";
import SignUpError from "../SignUpErrorPage/SignUpErrorPage";

const Navigations = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/not-found" element={< NotFoundPage />} />
      <Route path="/registration" element={<RegisterPage/>}/>
      <Route path="/reset" element={<ResetPage/>}/>
      <Route path="/sign-up-error" element={<SignUpError/>}/>
    </Routes>
  );
};

export default Navigations;
