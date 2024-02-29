import "./App.css";
import Counter from "./Counter.component";
import EmojiClicker from "./EmojiClicker.component";
import ScoreKeeper from "./ScoreKeeper.component";
import WhoWins from "./WhoWins.component";

function App() {
  return (
    <>
      <div>
        <WhoWins numPlayers={5} target={3} />
        
      </div>
      
    </>
  );
}

export default App;
