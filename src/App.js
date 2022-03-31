import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <h2>Which word would you like to search for?</h2>
      <Search />
      <p className="footer">
        {" "}
        <a href="https://github.com/Htibbs14/dictionary-project">
          Open-source code
        </a>{" "}
        by Hailey Tibbens
      </p>
    </div>
  );
}

export default App;
