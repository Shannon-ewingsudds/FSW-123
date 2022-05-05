import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './Routes/Home';
import Pokemons from './Routes/Pokemons';
import Giphy from './Routes/Giphy';
import NoMatch from './Routes/NoMatch';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <li className="links"><Link to="/">Home</Link></li>
          <li className="links"><Link to="/pokemons">Pokemons</Link></li>
          <li className="links"><Link to="/giphy">Giphy</Link></li>
        </header>
        <main>
          <Routes>
            <Route exact ={true} path ="/" element={<Home/>}/>
            <Route path="/pokemons" element={<Pokemons/>}/>
            <Route path="/giphy" element={<Giphy initialQuery="Bulbasaur"/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
