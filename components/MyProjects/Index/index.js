import styles from "/components/MyProjects/Index/index.module.css";
import Header from "/components/MyProjects/Header/Header.js";
import Options from "/components/MyProjects/Options/Options.js";
import ProjectBox from "/components/MyProjects/ProjectBox/ProjectBox.js";

const Index = () => {
    const list=[1,2,3,4,5,6,7]
    return (
        <div className={styles.Index}>
            <Header />
            <div className={styles.optionContainer}>
                <Options/>
            </div>
            <div className={styles.projectContainer}>
                {
                    list.map((element)=>{
                        return(
                            <ProjectBox key={element} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Index;