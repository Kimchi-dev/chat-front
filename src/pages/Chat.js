import React,{ useRef } from 'react'

function Chat({ messages, currentUser }) {

    const formattingTimeStamp = (timestamp) => {
        const date = new Date(timestamp);

        let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

        return `${hour}:${min}`;
    }

    return (
        <div className="chat-middle"  >
            <ui className="middle-ul">
            {messages.map((msg) => (
                <li
                    className={`chat-bubble ${msg.author === currentUser.name ? "send" : "receive"
                        }`}
                >
                    {msg.author === currentUser.name &&
                        <div>
                            <div className="time-area">
                                <span className="chat-time">{formattingTimeStamp(msg.timestamp)}</span>
                            </div>
                            <span className="chat-content">{msg.content}</span>
                        </div>
                    }
                    {msg.author !== currentUser.name &&
                        <div>
                            <span className="chat-author">{msg.author}</span>
                            <div>
                                <span className="chat-content">{msg.content}</span>
                                <div className="time-area">
                                    <span className="chat-time">{formattingTimeStamp(msg.timestamp)}</span>
                                </div>
                            </div>
                        </div>
                    }


                </li>
            ))}
            </ui>
        </div>
    )
}

export default Chat;