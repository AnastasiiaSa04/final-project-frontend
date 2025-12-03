import SignUpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth/authOperations.js";
import { Navigate } from "react-router-dom";
import { selectAuthRequest } from "../../store/auth/authSelectors.js";

const SignUp = () => {
  const { error, loading, isRegisterSuccess } = useSelector(selectAuthRequest);

  const dispatch = useDispatch();
  const noRegister = async (payload) => {
    dispatch(registerUser(payload));
  };

  if (isRegisterSuccess) return <Navigate to="/login" />;

  return (
    <div>
      <SignUpForm
        requestErrors={error}
        isSubmitSuccess={isRegisterSuccess}
        submitForm={noRegister}
      />
      {loading && <p>Register request...</p>}
      {error && <p style={{ color: "red" }}>{error.email}</p>}
    </div>
  );
};

export default SignUp;
