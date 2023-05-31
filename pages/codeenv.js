import styles from "/styles/codeenv.module.css";
import Index from "/components/CodeEnv/Index/index.js";

export default function CodeEnv(props){
    return(
        <div className={styles.CodeEnv}>
            <Index/>
        </div>
    )
}