import ReactQuill from "react-quill";
import { useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import "../orders/orders.css";
import { Button, Input, List } from "antd";
import { sendMessage } from "../../api";
import { formats, modules } from "../../quill/quill";

const ChatApp = ({
  selectedRecipient,
  setIsModalVisible,
  isModalVisible,
}: any) => {
  const reactQuillRef = useRef<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [plainText, setPlainText] = useState<string>("");
  const [richText, setRichText] = useState<string>("");

  const handleSend = async () => {
    if (
      selectedRecipient &&
      (plainText.trim() !== "" || richText.trim() !== "")
    ) {
      try {
        const response = await sendMessage({
          sender: selectedRecipient,
          plainText: plainText,
          richText: richText,
          timestamp: new Date().toLocaleTimeString(),
        });
        const newMessage = {
          sender: response.sender,
          plainText: response.plainText,
          richText: response.richText,
          timestamp: response.timestamp,
          id: response.id,
        };
        setMessages([...messages, newMessage]);
        setPlainText("");
        setRichText("");
        setIsModalVisible(false);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
    if (
      selectedRecipient &&
      (plainText.trim() !== "" || richText.trim() !== "")
    ) {
      const newMessage = {
        sender: selectedRecipient,
        plainText: plainText,
        richText: richText,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setPlainText("");
      setRichText("");
      setIsModalVisible(false);
    }
  };
  return (
    <div className="messages-quill-box">
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        style={{ width: 800, height: 40 }}
      >
        new message
      </Button>

      <div className="oll-box">
        {isModalVisible && (
          <div className="input-subject-box">
            <span className="input-subject">SUBJECT</span>

            <Input
              value={plainText}
              onChange={(e: any) => setPlainText(e.target.value)}
              className="input-subject-text"
            />
          </div>
        )}
        {isModalVisible && (
          <div className="custom-quill">
            <span className="message-title-input">MESSAGE</span>
            <ReactQuill
              ref={reactQuillRef}
              value={richText}
              onChange={(html: any) => setRichText(html)}
              formats={formats}
              modules={{
                ...modules,
                "emoji-toolbar": true,
                "emoji-textarea": false,
                "emoji-shortname": true,
              }}
            />
          </div>
        )}
        {isModalVisible && (
          <div className="submit-box-send">
            <div className="submit-box">
              <Button onClick={handleSend} className="submit-buttom">
                SUBMIT
              </Button>
            </div>
            <div className="box-send">
              <Button
                className="submit-buttom"
                onClick={() => setIsModalVisible(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        style={{ marginTop: 20 }}
        dataSource={messages}
        renderItem={(item) => (
          <List.Item>
            <b>{item.sender}:</b>
            {item.plainText}
            <p
              style={{ fontSize: 13, color: "black", fontWeight: "200" }}
              dangerouslySetInnerHTML={{ __html: item.richText }}
            ></p>
            <span style={{ marginLeft: 8, fontSize: 12 }}>
              {" "}
              {item.timestamp}
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChatApp;
