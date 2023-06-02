import styles from "/styles/login.module.css";
import Index from "/components/Login/Index/index.js";

export default function Login(props){
    return(
        <div className={styles.Login}>
            <Index/>
        </div>
    )
}