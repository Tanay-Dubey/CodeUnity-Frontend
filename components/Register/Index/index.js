import styles from "/components/Register/Index/index.module.css";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "/components/constants/url";
import { useRouter } from "next/router";
import Image from "next/image";
import { Alert } from "reactstrap";

const Index = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [viewPass, setViewPass] = useState(false);
    const [warning, setWarning] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies([
        "firstname",
        "lastname"
    ])

    const handleSubmit = async () => {
        if (!firstname || !lastname || !email || !password) {
            setWarning("Empty Fields Are Not Allowed");
            return;
        }

        try {
            setLoading(true);
            var header = new Headers();
            header.append("Content-Type", "application/json");
            var body = JSON.stringify({
                firstname,
                lastname,
                email,
                password
            });
            console.log(body);
            const response = await fetch(registerUser, {
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
                        <input type="text" className={styles.firstNameField} value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                    </div>
                    <div className={styles.lastNameBox}>
                        <div className={styles.lastNameText}>LastName:</div>
                        <input type="text" className={styles.lastNameField} value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
                    </div>
                </div>
                <div className={styles.emailBox}>
                    <div className={styles.emailText}>Email:</div>
                    <input type="email" className={styles.emailField} value={email} onChange={(e) => setEmail(e.target.value)}></input>
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
                <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>Sign Up</button>
            </div>
            <div className={styles.alertSection}>

                <Alert className={styles.alertBar} color="warning" isOpen={warning} toggle={()=>setWarning("")}>{warning}</Alert>
                <Alert className={styles.alertBar} color="danger" isOpen={error} toggle={()=>setError("")}>{error}</Alert>
                <Alert className={styles.alertBar} color="success" isOpen={success} toggle={()=>setSuccess("")}>{success}</Alert>

            </div>
        </div>
    )
}

export default Index;