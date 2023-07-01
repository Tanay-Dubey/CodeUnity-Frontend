import styles from "/components/CodeEnv/Header/Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={"/static/codeenv/logo.png"} fill={true} ></Image>
            </div>
            <div className={styles.projectName}>
                Project Name
            </div>
            <div className={styles.allAccounts}>
                <div className={styles.noOfOnlines}>
                    6 Online
                </div>
                <div className={styles.account}>
                    <span className={styles.accountLetter}>T</span>
                </div>
            </div>
        </div>
    )
}

export default Header;