import styles from "/components/CodeEnv/Index/index.module.css";
import Header from "/components/CodeEnv/Header/Header.js";
import Explorer from "/components/CodeEnv/Explorer/Explorer.js";
import Editor from "/components/CodeEnv/Editor/Editor";
import { useState,useEffect } from "react";

const Index=()=>{
    const [width,setWidth]=useState(250);

    return(
        <div className={styles.Index}>
            <Header/>
            <div className={styles.gridContainer} style={{gridTemplateColumns:`${width}px auto 250px`}}>
                <Explorer width={width} setWidth={setWidth} />
                <Editor/>
                <div className={styles.other}>

                </div>
            </div>
        </div>
    )
}

export default Index;