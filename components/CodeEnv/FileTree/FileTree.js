import styles from "/components/CodeEnv/FileTree/FileTree.module.css";
import Image from "next/image";
import { useState } from "react";

const TreeElement = ({element}) => {
    const [openTree, setOpenTree] = useState(false);
    return (
        <div>
            <div key={element.id} className={styles.fileTab} onClick={() => { setOpenTree(!openTree) }}><div className={styles.folderIcon}><Image src={"/static/codeenv/folder.png"} fill={true} /></div> {element.name}</div>
            {
                openTree && <FileTree filetree={element.children} />
            }
        </div>
    )
}

const FileTree = ({ filetree }) => {

    return (
        <div className={styles.FileTree}>
            {
                filetree.map(element => {
                    if (element.type == "folder") {
                        return <TreeElement element={element}/>
                    }
                    else if (element.type == "file") {
                        return <div className={styles.fileTab}><div className={styles.fileIcon}><Image src={"/static/codeenv/file.png"} fill={true} /></div> {element.name}</div>
                    }
                })
            }
        </div>
    )

    // if(filetree.type=="folder")
    // {
    //     return(
    //         <div>
    //             <div key={filetree.id}>📂 {filetree.name}</div>
    //             {
    //                 filetree.children.map((element)=>{
    //                     return <FileTree filetree={element} />
    //                 })
    //             }
    //         </div>
    //     )
    // }
    // else if(filetree.type=="file")
    // {
    //     return <div key={filetree.id}>🗋 {filetree.name}</div>
    // }
}

export default FileTree;