import Image from "next/image";
import styles from "/components/MyProjects/ProjectBox/ProjectBox.module.css";

const ProjectBox=()=>{
    return(
        <div className={styles.ProjectBox}>
            <div className={styles.logobox}>
                <div className={styles.logoImg}>
                    <Image src={"/static/myprojects/logo.png"} fill={true} />
                </div>
            </div>
            <div className={styles.projectDesc}>
                <div className={styles.projectHead}>
                    <div className={styles.projectTitle}>
                        Project Name
                    </div>
                    <div className={styles.projectOptions}>
                        <Image src={"/static/myprojects/projectOptions.png"} fill={true} />
                    </div>
                </div>
                <div className={styles.editedAt}>
                    Last Edited At:
                </div>
            </div>  
        </div>
    )
}

export default ProjectBox;