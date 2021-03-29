import { useState } from "react";
import MiniGame from "./components/MiniGame/MiniGame";
import Person from "./components/Person/Person";
import PersonList from "./components/PersonList/PersonList";

function App() {

  const [miniGame, setMiniGame] = useState(20);
  const [a, setA] = useState(randomNmber(50));
  const [b, setB] = useState(randomNmber(50));
  const [c, setC] = useState("?");

  function randomNmber(limit) {
    return Math.round(Math.random() * limit);
  }

  function reset() {
    setA(randomNmber(50));
    setB(randomNmber(50));
    setC("?");
    setMiniGame(20);
  }

  function checkAnswer() {
    if (a + b == c) {
      reset();
    } 
    else {
      alert("No!");
    }
  }

  return (
    <div className="App">
      {a} + {b} = {c}
      <MiniGame miniGame={miniGame} setMiniGame={setMiniGame} />
      <input type="number" onChange={({ target }) => setC(target.value)} />
      <button onClick={checkAnswer}>Ok</button>
    </div>
  );
}

export default App;
