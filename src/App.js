import "./App.css";
import { randomCards } from "./Utils/utils";
import { Gameboard } from "./components/Gameboard";
function App() {
  const refreshedArr = randomCards();
  return (
    <div>
      <Gameboard randomCards={refreshedArr}></Gameboard>
    </div>
  );
}

export default App;
