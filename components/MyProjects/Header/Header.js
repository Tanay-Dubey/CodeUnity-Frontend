import styles from "/components/MyProjects/Header/Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={"/static/myprojects/logoname.png"} fill={true} ></Image>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.searchBox}>
                        <div className={styles.searchIcon}>
                            <Image src={"/static/myprojects/searchIcon.png"} fill={true} />
                        </div>
                    </div>
                    <input placeholder="Search Projects..." type="text" className={styles.search} ></input>
                </div>
            </div>
            <div className={styles.account}>
                <span className={styles.accountLetter}>T</span>
            </div>
        </div>
    )
}

export default Header;