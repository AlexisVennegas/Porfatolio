import { Routes, Route } from "react-router-dom"

import "./App.css"
import { Inicio } from "./Componentes/Inicio.jsx"
import { Works } from  "./Componentes/Works"
import { About } from  "./Componentes/About"
import { Contact } from  "./Componentes/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="Works" element={<Works />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
