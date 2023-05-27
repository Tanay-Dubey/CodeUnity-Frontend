import styles from "/components/MyProjects/Options/Options.module.css";
import Image from "next/image";

const Options = () => {
    return (
        <div className={styles.Options}>
            <div className={styles.option}>
                <div className={styles.optionContent}>
                    <div className={styles.newProjectImg}>
                        <Image src={"/static/myprojects/newproject.png"} fill={true} />
                    </div>
                    <div className={styles.optionText}>
                        <div className={styles.optionHead}>
                            New Project
                        </div>
                        <div className={styles.optionDesc}>
                            Create And Edit
                        </div>
                    </div>
                </div>
                <div className={styles.plusIcon}>
                    <Image src={"/static/myprojects/plus.png"} fill={true} />
                </div>
            </div>
            <div className={styles.option}>
                <div className={styles.optionContent}>
                    <div className={styles.importImg}>
                        <Image src={"/static/myprojects/importImg.png"} fill={true} />
                    </div>
                    <div className={styles.optionText}>
                        <div className={styles.optionHead}>
                            Import Project
                        </div>
                        <div className={styles.optionDesc}>
                            Bring In From Your Device
                        </div>
                    </div>
                </div>
                <div className={styles.plusIcon}>
                    <Image src={"/static/myprojects/plus.png"} fill={true} />
                </div>
            </div>
        </div>
    )
}

export default Options;