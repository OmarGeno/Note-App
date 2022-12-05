import logo from "./logo.svg";
import "./App.css";
import { NoteContainer } from "./components/main/NoteContainer";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center">
          <img src={logo} className="App-logo " alt="logo" />
      </div>
      <NoteContainer />
    </>
  );
}

export default App;
