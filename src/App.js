import { Route, BrowserRouter, Switch } from 'react-router-dom';
/* import Header from './components/Header/Header'; */
import ShowRecipes from './components/ShowRecipes/ShowRecipes';
import ShowFullRecipe from './components/ShowFullRecipe/ShowFullRecipe';
import Authors from './components/Authors/Authors';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path='/recipes/:id' exact component={ShowFullRecipe} />
          <Route path='/author/:name' exact component={Authors} />
          <Route path='/' component={ShowRecipes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
