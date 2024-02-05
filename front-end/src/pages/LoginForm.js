import styles from "./LoginForm.module.css";

const LoginForm = () => {

  const google = () => {
    window.open("https://marketplace.a-ramcreatives.com/auth/google", "_self")
  }

  const github = () => {
    window.open("https://marketplace.a-ramcreatives.com/auth/github", "_self")
  }

  const facebook = () => {
    window.open("https://marketplace.a-ramcreatives.com/auth/facebook", "_self")
  }

  return (
    <div className={styles.loginForm}>
      <button className={styles.facebookButton} onClick={facebook}>
        <img className={styles.facebookIcon} alt="" src="/facebook.png" />
      </button>
      <button className={styles.githubButton} onClick={github}>
        <img className={styles.facebookIcon} alt="" src="/github.png" />
      </button>
      <b className={styles.chooseHowTo}>choose how to login/sign up</b>
      <button className={styles.googleButton} onClick={google}>
        <img className={styles.googleIcon} alt="" src="/google.png" />
      </button>
    </div>
  );
};

export default LoginForm;
