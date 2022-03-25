import { useState } from "react";

let initialMessage = ""

const TextBox = () => {
    let [message, setMessage] = useState(initialMessage);

    const handleChange = (e) =>{
        setMessage(e.target.value)
    }

    const sendMessage = (e) =>{
        setMessage(initialMessage)
    }


    return (
        <section>
            <input type="text" name="message" placeholder="Write your message..." onChange={handleChange} value={message}/>  
            <button onClick={sendMessage}>Send</button>     
        </section>
     );
}

export default TextBox;