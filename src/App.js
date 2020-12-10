import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [emojisList, setEmojisList] = useState([]);
  const [emojiValue, setEmojiValue] = useState("");
  const [emojiTitle, setEmojiTitle] = useState("");
  const [emoji, setEmoji] = useState("");

  const data = {
    "😀": "Happy",
    "😍": "Love Face",
    "👏": "Clapping",
    "💃": "Dancing Women",
    "👨‍💻": "Coding",
  };
  useEffect(() => {
    console.log(Object.keys(data));
    setEmojisList(Object.keys(data));
  }, []);

  const inputHandler = (e) => {
    let emoji = e.target.value;
    setEmoji(emoji);
    console.log(emoji);
    emojisList.map((item) => {
      console.log();
      if (data[emoji]) {
        setEmojiValue(data[emoji]);
        return;
      }
      if (!data[emoji]) {
        setEmojiValue("Not Found !!");
      }
    });
  };

  const emojiHandler = (item) => {
    // console.log(data[item]);
    setEmojiTitle(data[item]);
  };

  return (
    <div className="container">
      <h1>Inside Out !!</h1>
      <div>
        <input className="input-field" onChange={inputHandler} />
      </div>
      <p className="text-title">{emoji}</p>
      <p className="text-title">{emojiValue}</p>
      {emojisList.map((item, index) => {
        return (
          <span
            className="emojis"
            key={index}
            onClick={() => emojiHandler(item)}
          >
            {item}
          </span>
        );
      })}
      <p className="text-title">{emojiTitle}</p>
    </div>
  );
};
export default App;
