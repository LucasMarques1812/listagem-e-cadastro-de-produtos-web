import './App.css';
import { Home } from './Pages/home';
import { Cadastro } from './Pages/cadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>

    //<Navbar/>
    //<Cadastro/>
  );
}

export default App;
