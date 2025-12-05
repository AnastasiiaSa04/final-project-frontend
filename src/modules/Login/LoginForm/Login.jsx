import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import {
  selectAuthRequest,
  selectIsAuthenticated,
} from "../../store/auth/authSelectors";
import { loginUser } from "../../store/auth/authOperations";

const Login = () => {
  const { error, loading } = useSelector(selectAuthRequest);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const dispatch = useDispatch();

  const onLogin = (payload) => {
    dispatch(loginUser(payload));
  };

  if (isAuthenticated) return <Navigate to="/main" />;

  return (
    <div>
      <LoginForm submitForm={onLogin} requestErrors={error} />
      {loading && <p>Login request...</p>}
    </div>
  );
};

export default Login;
