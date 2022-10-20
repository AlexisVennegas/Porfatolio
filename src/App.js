import { Routes, Route } from "react-router-dom"

import "./App.css"
import { Main } from "./Componentes/Main.jsx"
import { Works } from  "./Componentes/Works"
import { About } from  "./Componentes/About"
import { Contact } from  "./Componentes/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portafolio" element={<Main />}></Route>
        <Route path="/portafolio/Works" element={<Works />}></Route>
        <Route path="/portafolio/About" element={<About />}></Route>
        <Route path="/portafolio/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
