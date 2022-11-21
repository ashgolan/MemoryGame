import "./App.css";
import { randomCards } from "./Utils/utils";
import { Gameboard } from "./components/Gameboard";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [Loading, setLoading] = useState(false);
  const refreshedArr = randomCards();
  return (
    <div>
      {Loading && <div className="spinner">Loading...</div>}
      <Header></Header>
      <Gameboard randomCards={refreshedArr} loading={setLoading}></Gameboard>
    </div>
  );
}

export default App;
