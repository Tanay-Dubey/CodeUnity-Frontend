import styles from "/components/CodeEnv/Explorer/Explorer.module.css";
import filetree from "/components/CodeEnv/filetree.js";
import FileTree from "/components/CodeEnv/FileTree/FileTree.js";
import { useRef, useState, useEffect } from "react";

const Explorer = ({ width, setWidth }) => {
  const [dragging, setDragging] = useState(false);
  const resizeBarRef = useRef(null);
  const startXRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const diffX = e.clientX - startXRef.current;
    const newWidth = width + diffX;
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
  };

  useEffect(() => {
    // console.log("Mount")
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {  //Return function is used to cleanup previous effects
        // console.log("Unmount")
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className={styles.Explorer}>
      <div className={styles.explorerContent}>
        <div className={styles.projectTitle}>Main File</div>
        <FileTree filetree={filetree} />
      </div>
      <div
        className={styles.resizeBar1}
        ref={resizeBarRef}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default Explorer;
