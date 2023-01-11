import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import { RefExample } from "./components/RefExample";
import { RefSecondExp } from "./components/RefSecondExp";

function App() {
  const personName = {
    firstName: "Shraddha",
    lastName: "tendulkar",
  };
  return (
    <div className="App">
      <Greet name="kusum" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <RefExample />
      {/* <RefSecondExp /> */}
    </div>
  );
}

export default App;
