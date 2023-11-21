import { memo, useRef, useState } from "react";
import ChatApp from "./ChatApp";
import ChatUser from "./ChatUser";
import { useEffect } from "react";
import { fetchData } from "../../api";

const ChatPage = () => {
  const [selectedRecipient, setSelectedRecipient] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState<any[]>([]);
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      fetchData()
      .then((data: any) => {
        setUserData(data);
      })
      .catch((error: any) => {
        console.error(error);
      });
      isMounted.current = false;
    }
 
  }, []);

  const handleRecipientSelect = (name: any) => {
    setSelectedRecipient(name);
    setIsModalVisible(false);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: 500,
        justifyContent: "center ",
        alignItems: "center",
      }}
    >
      <div style={{ width: 200, height: 400 }}>
        {" "}
        <ChatUser
          user={userData}
          handleRecipientSelect={handleRecipientSelect}
        />
      </div>
      <div style={{ width: 800, height: 400 }}>
        <ChatApp
          userData={userData}
          setUserData={setUserData}
          selectedRecipient={selectedRecipient}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      </div>
    </div>
  );
};

const MemoizedChatPage = memo(ChatPage);

export default MemoizedChatPage;