import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./components/ProtectRoutes";
import DetailPokemon from "./pages/DetailPokemon";
import Backgroud from "./components/Backgroud";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route element={<Backgroud />}>
            <Route path="/" element={<Home />} />
            {/* //rutas protegidas */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokedex/:id" element={<DetailPokemon />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
