import styles from "/styles/myprojects.module.css";
import Index from "/components/MyProjects/Index/index.js";

export default function MyProjects(props){
    return(
        <div className={styles.MyProjects}>
            <Index/>
        </div>
    )
}