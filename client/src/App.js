import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home"


function App() {
  return (
    <BrowserRouter>
    
    <Route exact path ="/" component={Home}/>
    
    </BrowserRouter>
  );
}

export default App;
