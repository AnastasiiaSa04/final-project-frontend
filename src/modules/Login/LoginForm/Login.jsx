import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import {
  selectAuthRequest,
  selectIsAuthenticated,
} from "../../store/auth/authSelectors";
import { loginUser } from "../../store/auth/authOperations";
import { clearError } from "../../store/auth/authSlice";

const Login = () => {
  const { error, loading } = useSelector(selectAuthRequest);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const onLogin = (payload) => {
    dispatch(loginUser(payload));
  };

  const handleFieldChange = () => {
    if (error) dispatch(clearError());
  };

  if (isAuthenticated) return <Navigate to="/main" />;

  return (
    <div>
      <LoginForm
        submitForm={onLogin}
        requestErrors={error ? [error] : []}
        onChangeField={handleFieldChange}
      />

      {loading && <p>Login request...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
