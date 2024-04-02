import { useEffect, useMemo, useState } from "react";
import "./index.css";

function App() {
  const [key, setKey] = useState<string>("Key");
  const [word] = useState<string>(
    "the quick brown fox jumped over the lazy dog"
  );
  const [keyIndex, setKeyIndex] = useState<number>(-1);
  const [matchingIndices, setMatchingIndices] = useState<number[]>([]);
  const [missingIndices, setMissingIndices] = useState<number[]>([]);
  const split: string[] = word.split("");

  useEffect(() => {
    if (keyIndex <= split.length) {
      console.log(split[keyIndex]);
      if (split[keyIndex] == key) {
        setMatchingIndices((prevMatching) => [...prevMatching, keyIndex])
      } else {
        setMissingIndices((prevMissing) => [...prevMissing, keyIndex])
      }
    }
  }, [keyIndex]);

  useEffect(() => {}, []);
  onkeydown = (e) => {
    setKey(e.key);
    setKeyIndex((prevIndex) => prevIndex + 1);
  };

  const coloredString = useMemo(() => {
    console.log(matchingIndices)
    return split.map((char, index) => {
      const isMatch = matchingIndices.includes(index);
      const isMiss = missingIndices.includes(index);
      return (
        <span key={index} className={isMatch ? "black" : isMiss ? "red" : ""}>
          {char}
        </span>
      );
    });
  }, [word, matchingIndices, missingIndices]);

  return (
    <div className="main">
      <div className="word-box">
        <h1>{coloredString}</h1>
      </div>
      <h1>{key}</h1>
    </div>
  );
}

export default App;
