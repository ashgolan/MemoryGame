import "./App.css";
import { randomCards } from "./Utils/utils";
import { Gameboard } from "./components/Gameboard";
function App() {
  const refreshedArr = randomCards();
  console.log(refreshedArr);
  return (
    <div>
      <Gameboard randomCards={refreshedArr}></Gameboard>
    </div>
  );
}

export default App;
