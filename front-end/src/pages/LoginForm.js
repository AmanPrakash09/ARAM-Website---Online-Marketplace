import styles from "./LoginForm.module.css";

const LoginForm = () => {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self")
  }

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self")
  }

  return (
    <div className={styles.loginForm}>
      <button className={styles.facebookButton} onClick={facebook}>
        <img className={styles.facebookIcon} alt="" src="/facebook.png" />
      </button>
      <button className={styles.githubButton} onClick={github}>
        <img className={styles.facebookIcon} alt="" src="/github.png" />
      </button>
      <b className={styles.chooseHowTo}>Choose how to login/sign up</b>
      <button className={styles.googleButton} onClick={google}>
        <img className={styles.googleIcon} alt="" src="/google.png" />
      </button>
    </div>
  );
};

export default LoginForm;
