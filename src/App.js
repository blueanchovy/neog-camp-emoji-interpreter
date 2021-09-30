import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "✔️": "Check Mark",
  "😂": "Face with Tears of Joy",
  "🥺": "Pleading Face",
  "🥰": "Smiling Face with Heart",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face"
};

const emojisWeKnow = Object.keys(emojiDictionary);
var meaning;

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];

    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Inside Out...</h1>
      <input id="emoji" onChange={emojiInputHandler}></input>
      <h2>Meaning : {emojiMeaning}</h2>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              padding: "1rem 0.5rem",
              cursor: "pointer",
              display: "inline"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
