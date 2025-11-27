import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SignUp from "../SignUpPage/SignUpPage"
import ResetPage from "../ResetPage/ResetPage";
import SignUpError from "../SignUpErrorPage/SignUpErrorPage";
import MainPage from "../MainPage/MainPage";
import PrivateRoute from "./PrivateRoute";

import ExplorePage from "../ExplorePage/ExplorePage";
import MainLayout from "../../layouts/MainLayout";



const Navigations = () => {
  const isAuth = true;
  return (
    <Routes>

<Route
  path="/"
  element={
    <MainLayout>
      <MainPage />
    </MainLayout>
  }
/>

<Route
  path="/explore"
  element={
    <PrivateRoute isAuth={isAuth}>
      <MainLayout>
        <ExplorePage />
      </MainLayout>
    </PrivateRoute>
  }
/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/registration" element={<SignUp />} />
      <Route path="/reset" element={<ResetPage />} />
      <Route path="/sign-up-error" element={<SignUpError />} />
    </Routes>
  );
};

export default Navigations;
