import { useEffect, useRef, useState } from "react";
import styles from "/components/CodeEnv/Operations/Operations.module.css";
import ChatSection from "/components/CodeEnv/ChatSection/ChatSection";

const Operations = ({ width, setWidth }) => {
    const [dragging, setDragging] = useState(false);
    const resizeBarRef = useRef(null);
    const startX = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        setDragging(true);
        startX.current = e.clientX;
    }

    const handleMouseMove = (e) => {
        e.preventDefault();
        if (!dragging) return;
        const diff = e.clientX - startX.current;
        const newWidth = width - diff;
        setWidth(newWidth);
    }

    const handleMouseUp = (e) => {
        e.preventDefault();
        if (!dragging) return;
        setDragging(false);
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
    }, [dragging])

    return (
        <div className={styles.container}>
            <div className={styles.Operations}>
                <div className={styles.resizeBar} ref={resizeBarRef} onMouseDown={handleMouseDown}></div>
                <div className={styles.operationContent}>
                    <button className={styles.saveFile} >Save File</button>
                    <hr className={styles.line} />
                    <input className={styles.commitMessage} />
                    <button className={styles.commitBtn}>Commit Changes</button>
                </div>
            </div>
            <div className={styles.chatContainer}>
                <ChatSection />
            </div>
        </div>
    )
}

export default Operations;