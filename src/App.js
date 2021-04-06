import "./App.css";
import Button from "./components/button/button";
import Input from "./components/input/input";
import TODO from "./components/todo/todo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TODO />
            </header>
        </div>
    );
}

export default App;
