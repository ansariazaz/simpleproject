import Image from "./components/Image";
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App">
      <div className="left">
        <Signup />
      </div>
      <div className="right">
        <Image />
      </div>
    </div>
  );
}

export default App;
