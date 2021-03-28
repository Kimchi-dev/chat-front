import React from 'react'


function Chat({ messages, currentUser }){
    const formattingTimeStamp = (timestamp) => {
        const date = new Date(timestamp);

        let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

        return `${hour}:${min}`;
    }

    return(
        <div className="chat-middle">
            {messages.map((msg) => (
                <li
                    className={`chat-bubble ${
                        msg.author == currentUser.name ? "send" : "receive"
                    }`}
                    >
                        <span className="chat-author">{msg.author}</span>
                        <span className="chat-content">{msg.content}</span>
                        <span className="chat-time">{formattingTimeStamp(msg.timestamp)}</span>
                    </li>
            ))}
        </div>
    )
}

export default Chat;