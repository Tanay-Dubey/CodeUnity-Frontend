import styles from "/components/CodeEnv/Editor/Editor.module.css";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const AceEditor = dynamic(async () => {
  const ace = await import('react-ace');
  await import('ace-builds/src-noconflict/mode-javascript');
  await import('ace-builds/src-noconflict/theme-twilight');
  return ace;
}, { ssr: false });

const Editor = () => {

  return (
    <div className={styles.Editor}>
      <div className={styles.activeFileContainer}>
        <div className={styles.activeFile}>filename.js</div>
        <div className={styles.runButton}>
          <div className={styles.run}>
            <Image src={"/static/codeenv/run.png"} fill={true} />
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AceEditor
          mode={"javascript"}
          placeholder="Write your code here"
          theme="twilight"
          fontSize={14}
        />
      </Suspense>
    </div>
  )
}

export default Editor;