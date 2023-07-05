import styles from "/components/CodeEnv/Index/index.module.css";
import Header from "/components/CodeEnv/Header/Header.js";
import Explorer from "/components/CodeEnv/Explorer/Explorer.js";
import Editor from "/components/CodeEnv/Editor/Editor";
import Operations from "/components/CodeEnv/Operations/Operations";
import { useState,useEffect } from "react";

const Index=()=>{
    const [expwidth,setExpWidth]=useState(250);
    const [opwidth,setOpWidth]=useState(250);

    return(
        <div className={styles.Index}>
            <Header/>
            <div className={styles.gridContainer} style={{gridTemplateColumns:`${expwidth>160?expwidth:160}px auto ${opwidth>230?opwidth:230}px`}}>
                <Explorer width={expwidth} setWidth={setExpWidth} />
                <Editor/>
                <Operations width={opwidth} setWidth={setOpWidth} />
            </div>
        </div>
    )
}

export default Index;