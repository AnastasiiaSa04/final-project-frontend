import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";
import styles from "././LoginPage.module.css";
import background from "../../assets/images/Background.png";
import ichgram from "../../assets/images/ICHGRA 2.png";
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <img src={background} alt="background" />
      </div>
      <div className={styles.TextField}>
        <img src={ichgram} alt="ichgram" />
        <div className={styles.column}>
          <TextField
            className={styles.input}
            name="username"
            placeholder="Username, or Email"
            register={() => {}}
          />
          <TextField
            className={styles.input}
            name="password"
            placeholder="Password"
            register={() => {}}
          />
          <Button>Log In</Button>

          <div className={styles.separator}>
            <div className={styles.line}></div>
            <span className={styles.or}>OR</span>
            <div className={styles.line}></div>
          </div>
          <p className={styles.forgot}>
            <a>Forgot password?</a>
          </p>
        </div>
      </div>
      <div className={styles.notHaveAccount}>
        <p className={styles.signup}>
          Don’t have an account?{" "}
          <span
          onClick={() => navigate("/registration")}
          >
            <a>Sign up</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
