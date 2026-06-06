import { useState } from "react";
import { comparisons } from "./chatbotData";

function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Hi! I'm your Insurance Assistant.\nAsk me to compare insurance products.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const query = input
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    let response =
      "❌ Sorry, I don't know that comparison yet.";

    if (
      query.includes("term") &&
      query.includes("health")
    ) {
      response =
        comparisons["term insurance vs health insurance"];
    } else if (
      query.includes("sip") &&
      query.includes("mutual")
    ) {
      response =
        comparisons["sip vs mutual fund"];
    } else if (
      query.includes("mediclaim")
    ) {
      response =
        comparisons["health insurance vs mediclaim"];
    }

    const botMessage = {
      sender: "bot",
      text: response,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "#2563eb",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            height: "550px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "15px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>InsurancePro AI Assistant</span>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              background: "#f9fafb",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    background:
                      msg.sender === "user"
                        ? "#2563eb"
                        : "#ffffff",
                    color:
                      msg.sender === "user"
                        ? "#fff"
                        : "#111827",
                    padding: "12px",
                    borderRadius: "12px",
                    border:
                      msg.sender === "bot"
                        ? "1px solid #e5e7eb"
                        : "none",
                  }}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              type="text"
              value={input}
              placeholder="Ask a comparison..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;