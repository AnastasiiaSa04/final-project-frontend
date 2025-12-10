import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUp from "../../modules/SignUp/SignUp";
import styles from "./SignUpPage.module.css";
import ichgram from "../../assets/images/ICHGRA2.png";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={ichgram} alt="ichgram" />
        <div className={styles.column}>
          <p>Sign up to see photos and videos</p>
          <p>from your friends.</p>

          <SignUp />

          {loading && <p>Registering...</p>}

          <p className={styles.haveAccount}>
            Have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "#0095f6" }}
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
