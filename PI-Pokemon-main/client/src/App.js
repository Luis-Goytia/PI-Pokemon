import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchPokemon from "./Components/SearchPokemon/SearchPokemon"
import DetailPokemon from "./Components/DetailPokemon/DetailPokemon";
import CreatePokemon from "./Components/CreatePokemon/CreatePokemon";
import PathNotFound from "./Components/ToolComponents/PathNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/results/:name" component={SearchPokemon} />
          <Route path="/pokemons/create" component={CreatePokemon} />
          <Route path="/pokemons/:id" component={DetailPokemon} />
          <Route component={PathNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
