import styles from "/components/CodeEnv/Editor/Editor.module.css"
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