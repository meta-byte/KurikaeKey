import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [key, setKey] = useState<string>("Key");
  const [word] = useState<string>("test");
  const [keyIndex, setKeyIndex] = useState<number>(-1);

  const split: string[] = word.split("");
  useEffect(() => {
    if (keyIndex <= split.length) {
      console.log(split[keyIndex]);
      if (split[keyIndex] == key) {
        console.log("pass");
      } else {
        console.log("miss");
      }
    }
  }, [keyIndex]);

  onkeydown = (e) => {
    setKey(e.key);
    setKeyIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="main">
      <h1>{word}</h1>
      <h1>{key}</h1>
    </div>
  );
}

export default App;
