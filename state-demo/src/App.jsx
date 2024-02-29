import "./App.css";
import Counter from "./Counter.component";
import EmojiClicker from "./EmojiClicker.component";
import ScoreKeeper from "./ScoreKeeper.component";

function App() {
  return (
    <>
      <div>
        <Counter />
        <EmojiClicker/>
        <h1>State demo</h1>
        <ScoreKeeper />
      </div>
    </>
  );
}

export default App;

