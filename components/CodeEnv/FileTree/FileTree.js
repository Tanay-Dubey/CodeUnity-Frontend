import styles from "/components/CodeEnv/FileTree/FileTree.module.css";
import Image from "next/image";

const FileTree = ({ filetree }) => {
    // console.log(filetree)

    return (
        <div className={styles.FileTree}>
            {
                filetree.map(element => {
                    if (element.type == "folder") {
                        return <div>
                            <div key={element.id}>📂 {element.name}</div>
                            <FileTree filetree={element.children} />
                        </div>
                    }
                    else if(element.type=="file")
                    {
                        return <div>🖹 {element.name}</div>
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