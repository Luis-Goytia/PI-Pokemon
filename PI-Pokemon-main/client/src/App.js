import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchPokemon from "./Components/SearchPokemon/SearchPokemon"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/results/:name" component={SearchPokemon}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
