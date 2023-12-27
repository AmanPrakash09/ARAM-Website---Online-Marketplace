import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <button className={styles.facebookButton}>
        <img className={styles.facebookIcon} alt="" src="/facebook.png" />
      </button>
      <button className={styles.githubButton}>
        <img className={styles.facebookIcon} alt="" src="/github.png" />
      </button>
      <b className={styles.chooseHowTo}>Choose how to login/sign up</b>
      <button className={styles.googleButton}>
        <img className={styles.googleIcon} alt="" src="/google.png" />
      </button>
    </div>
  );
};

export default LoginForm;
