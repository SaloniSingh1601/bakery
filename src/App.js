import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" component={Cart}/>
          <Route exact path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
