import styles from "/components/Register/Index/index.module.css";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useState } from "react";
import { Registration } from "/components/constants/url";

const Index = () => {

    const [loading, setLoading] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies([
        "firstname",
        "lastname",
        "accessToken",
        "refreshToken",
        "accessTokenExpires",
        "refreshTokenExpires"
    ])

    const handleSubmit = async () => {
        try {
            setLoading(true);
            var data={
                firstname,
                lastname,
                email,
                password
            }
            console.log(data);
            const response=await fetch(Registration,{
                method:"POST",
                body:data
            });
            const result = await response.data;
            setLoading(false);
        }
    }

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
                    Already have an account? &nbsp; <Link href={"/login"} >Log In</Link>
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