import { useState } from "react";
import styles from "/components/Login/Index/index.module.css";
import { loginUser } from "/components/constants/url";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Alert } from "reactstrap";

const Index = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [viewPass, setViewPass] = useState(false);
    const [warning, setWarning] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        if (!email || !password) {
            setWarning("Empty Fields Are Not Allowed");
            return;
        }
        try {
            setLoading(true);
            var header = new Headers();
            header.append("Content-Type", "application/json");
            var body = JSON.stringify({
                email,
                password
            });
            console.log(body);
            const response = await fetch(loginUser, {
                method: "POST",
                headers: header,
                body: body,
                credentials: 'include'
            });
            const data = await response.json();
            if (data.result == true) {
                setSuccess("Authenticated Successfully");
            }
            else {
                setError(data.message);
                return;
            }

            setLoading(false);
            router.push("/myprojects");
        }
        catch (err) {
            setError("Unattended Error");
        }
    }


    return (
        <div className={styles.Index}>
            <div className={styles.loginSection}>
                <div className={styles.welcome}>
                    Welcome Back!
                </div>
                <div className={styles.logInText}>
                    Log In To Your Account.
                </div>
                <div className={styles.noAccount}>
                    Don't have an account? &nbsp; <Link href={"/register"} >Sign Up</Link>
                </div>
                <div className={styles.emailBox}>
                    <div className={styles.emailText}>Email:</div>
                    <input type="email" className={styles.emailField} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className={styles.passwordBox}>
                    <div className={styles.passwordSection}>
                        <div className={styles.passwordText}>Password:</div>
                        <input type={viewPass ? "text" : "password"} className={styles.passwordField} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className={styles.viewPassImg} onClick={() => setViewPass(!viewPass)}>
                        <Image src={"/static/login/viewPass.png"} alt="" fill={true} />
                    </div>
                </div>
                <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>Log In</button>
            </div>
            <div className={styles.alertSection}>

                <Alert className={styles.alertBar} color="warning" isOpen={warning} toggle={() => setWarning("")}>{warning}</Alert>
                <Alert className={styles.alertBar} color="danger" isOpen={error} toggle={() => setError("")}>{error}</Alert>
                <Alert className={styles.alertBar} color="success" isOpen={success} toggle={() => setSuccess("")}>{success}</Alert>

            </div>
        </div>
    )
}

export default Index;