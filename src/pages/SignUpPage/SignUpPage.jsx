import { useNavigate } from "react-router-dom";
import SignUpForm from "../../modules/SignUp/SignUpForm"; 
import styles from "../SignUpPage/SignUpPage.module.css"
import ichgram from "../../assets/images/ICHGRA 2.png";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>

      <div className={styles.content}>
        <img src={ichgram} alt="ichgram" />
        <div className={styles.column}>
          <p>Sign up to see photos and videos</p>
          <p>from your friends.</p>
          <SignUpForm className={styles.imput} /> 

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
