import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import Indicadores from './pages/indicadores/Indicadores';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/indicadores"  element={<Indicadores />} />
            
      </Routes>
    </>
  );
}

export default App;
