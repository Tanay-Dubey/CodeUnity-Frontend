import { useState } from "react";
import styles from "/components/CodeEnv/ChatSection/ChatSection.module.css";
import Image from "next/image";

const ChatSection = () => {

    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div className={styles.chatSection}>
            <div className={styles.chatHeader} onClick={() => { setChatOpen(!chatOpen) }} >
                <div className={styles.chatTitle}>
                    <div className={styles.chaticon}>
                        <Image src={"/static/codeenv/chaticon.png"} fill={true} />
                    </div>
                    <div className={styles.chatText}>
                        Chat
                    </div>
                </div>
                {
                    chatOpen ? <div className={styles.arrow}>
                        <Image src={"/static/codeenv/downarrow.png"} fill={true} />
                    </div>:<div className={styles.arrow}>
                        <Image src={"/static/codeenv/uparrow.png"} fill={true} />
                    </div>
                    
                }
            </div>
            {
                chatOpen &&
                <div className={styles.chatArea}>
                    Chat with the collaborators
                </div>
            }
        </div>
    )
}

export default ChatSection;