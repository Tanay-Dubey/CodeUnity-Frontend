import Image from "next/image";
import styles from "/components/MyProjects/ProjectBox/ProjectBox.module.css";

const ProjectBox = () => {
    return (
        <div className={styles.ProjectBox}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={"/static/myprojects/logo.png"} fill={true} />
                </div>
                <div className={styles.projectOptions}>
                    <Image src={"/static/myprojects/projectOptions.png"} fill={true} />
                </div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.projectName}>
                    Project Name
                </div>

            </div>
        </div>
    )
}

export default ProjectBox;