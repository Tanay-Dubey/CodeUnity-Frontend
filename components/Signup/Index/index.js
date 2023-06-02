import styles from "/components/Signup/Index/index.module.css";

const Index = () => {
    return (
        <div className={styles.Index}>
            <div className={styles.signupSection}>
                <div className={styles.join}>
                    Join For Free
                </div>
                <div className={styles.logInText}>
                    Create New Account
                </div>
                <div className={styles.noAccount}>
                    Already have an account? &nbsp; Log In
                </div>
                <div className={styles.nameArea}>
                    <div className={styles.firstNameBox}>
                        <div className={styles.firstNameText}>FirstName:</div>
                        <input type="text" className={styles.firstNameField}></input>
                    </div>
                    <div className={styles.lastNameBox}>
                        <div className={styles.lastNameText}>LastName:</div>
                        <input type="text" className={styles.lastNameField}></input>
                    </div>
                </div>
                <div className={styles.emailBox}>
                    <div className={styles.emailText}>Email:</div>
                    <input type="email" className={styles.emailField}></input>
                </div>
                <div className={styles.passwordBox}>
                    <div className={styles.passwordText}>Password:</div>
                    <input type="password" className={styles.passwordField}></input>
                </div>
                <button type="submit" className={styles.submitBtn}>Sign Up</button>
            </div>
        </div>
    )
}

export default Index;