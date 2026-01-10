
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Inventario from './pages/inventario';
import Registro from './pages/registro';  
import Registrar from './pages/registrar';
import { useEffect } from 'react';

import { inicializarUsuariosPorDefecto } from "./componentes/store/usuarios";
import { inicializarMobiliariosPorDefecto } from "./componentes/store/mobiliarios";

function App() {

  useEffect(() => {
    inicializarUsuariosPorDefecto();
    inicializarMobiliariosPorDefecto()
  }, []);


  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inventario" element={<Inventario />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/registrar" element={<Registrar />} />
      
    </Routes>

  );
}

export default App;
