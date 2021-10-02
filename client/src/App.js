import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path ="/home" component={Home}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
