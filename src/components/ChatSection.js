import Conversation from "./Conversation";
import Menu2 from "./Menu2";
import SearchBar2 from "./SearchBar2";
import TextBox from "./TextBox";

const ChatSection = () => {

    return (
        <section>
            <SearchBar2/>
            <Menu2/>
            <Conversation/>
            <TextBox/>
        </section>
     );
}

export default ChatSection;