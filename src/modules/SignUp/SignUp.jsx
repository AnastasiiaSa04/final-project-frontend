import SignUpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth/authOperations";
import { clearError } from "../../store/auth/authSlice";
import { Navigate } from "react-router-dom";
import { selectAuthRequest } from "../../store/auth/authSelectors";

const SignUp = () => {
  const { error, loading, isRegisterSuccess } = useSelector(selectAuthRequest);
  const dispatch = useDispatch();

  const onRegister = (payload) => {
    dispatch(registerUser(payload));
  };

  const handleFieldChange = () => {
    if (error) dispatch(clearError());
  };

  // Преобразуем error в безопасную строку для пользователя
  const normalizedErrors =
    error && typeof error === "object"
      ? ["Something went wrong. Please try again."]
      : error
        ? [error]
        : [];

  if (isRegisterSuccess) return <Navigate to="/login" />;

  return (
    <div>
      <SignUpForm
        submitForm={onRegister}
        requestErrors={normalizedErrors}
        onChangeField={handleFieldChange}
      />
      {loading && <p>Register request...</p>}
    </div>
  );
};

export default SignUp;
