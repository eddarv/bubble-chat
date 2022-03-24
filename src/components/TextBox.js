import { useState } from "react";

let initialMessage = ""

const TextBox = () => {
    const [message, setMessage] = useState(initialMessage);

    const handleChange = (e) =>{
        setMessage(e.target.value)
    }

    return (
        <section>
            <input type="text" name="message" placeholder="Write your message..." onChange={handleChange} value={message}/>  
            <button>Send</button>     
        </section>
     );
}

export default TextBox;