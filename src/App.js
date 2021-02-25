import BiggerNumber from "./components/BiggerNumber";
import LiseItems from "./components/LizeItems";
import RandomNumbers from "./components/RandomNumbers";
import Sum from "./components/Summa";

function App() {
  return (
    <div className="App">
     <Sum a={5} b={7} />
     <RandomNumbers min={5} max={10} />
     <BiggerNumber a={5} b={7} />
     <LiseItems list = {['Apple', 'Pear', 'Limon', 'Tomato', "Ananas", "Banana"]}></LiseItems>
    </div>
  );
}

export default App;
