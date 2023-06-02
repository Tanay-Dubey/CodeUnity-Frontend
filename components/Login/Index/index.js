import styles from "/components/Login/Index/index.module.css";

const Index=()=>{
    return(
        <div className={styles.Index}>
            <div className={styles.loginSection}>
                <div className={styles.welcome}>
                    Welcome Back!
                </div>
                <div className={styles.logInText}>
                    Log In To Your Account.
                </div>
                <div className={styles.noAccount}>
                    Don't have an account? &nbsp; Sign Up
                </div>
                <div className={styles.emailBox}>
                    <div className={styles.emailText}>Email:</div>
                    <input type="email" className={styles.emailField}></input>
                </div>
                <div className={styles.passwordBox}>
                    <div className={styles.passwordText}>Password:</div>
                    <input type="password" className={styles.passwordField}></input>
                </div>
                <button type="submit" className={styles.submitBtn}>Log In</button>
            </div>
        </div>
    )
}

export default Index;