import styles from "/components/CodeEnv/Header/Header.module.css";
import Image from "next/image";

const Header=()=>{
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={"/static/myprojects/logoname.png"} fill={true} ></Image>
            </div>
        </div>
    )
}

export default Header;