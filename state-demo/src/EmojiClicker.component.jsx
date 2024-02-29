import { v4 as uuid } from "uuid";
import { useState } from "react";

function randomEmoji() {
  const choices = ["🤓", "👋", "😒", "⭐", "🍒", "💲", "🔷", "🔹", "❓", "🫶"];
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const delEmoji = (id) => {
    //del Emoji wiht the specified ID
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id); // returns an array with not ! having the element we want to delete
    });
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => delEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
