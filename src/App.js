import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

function App() {
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID="03cd2a5e-e5f7-4a7a-b630-a86f03466dfe"
      userName="sandeep"
      userSecret="Sand@1234"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
