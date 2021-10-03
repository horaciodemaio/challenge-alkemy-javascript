import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home"
import AllRegister from "./components/allRegister/allRegister"

function App() {
  return (
    <BrowserRouter>
    <Route exact path ="/allregister" component={AllRegister}/>
    <Route exact path ="/" component={Home}/>
    
    </BrowserRouter>
  );
}

export default App;
