import { useState } from "react";
import className from "./App.css"
import Countdown from "./components/Countdown/Countdown";
const App = () => {

  const [a, setA] = useState(randomNumber(50));
  const [b, setB] = useState(randomNumber(50));
  const [c, setC] = useState(randomNumber(50));
  const [answer, setAnswer] = useState("?");
  const [countdown, setCountdown] = useState(20);
  const [deistvie, setDeistvie] = useState("+");

  function randomNumber(limit) {
    return Math.round(Math.random() * limit);
  }

  function checkAnswer() {
    const f = a + b - c;
    if (f == answer) {
      setA(randomNumber(50));
      setB(randomNumber(50));
      setC(randomNumber(50));
      setAnswer("?");
      setCountdown(20);
    }
    else {
      alert("No");
    }
  }
  // function randomDeist() {
  //   const randDeist = ["+","-","*","/"];
  //   let arr = [];
  //   arr[Math.floor(Math.random() * randDeist.length)];
  //   setDeistvie(randDeist[arr])
  // }

  let userInput = null;
  if (countdown > 0) {
    userInput = (
      <>
      <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} />
      <button onClick={() => checkAnswer()}>Ok</button>
      </>
    )
  }

  
  return (
    <div className="App">
      {a} + {b} - {c} = {answer}
      <Countdown countdown={countdown} setCountdown={setCountdown} />
      {userInput}
    </div>
  );
}
export default App;
