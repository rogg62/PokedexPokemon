import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Componentes & Pages
import SearchAppBar from "./Components/NavBar";
import Footer from "./Components/footer";
import Principal from "./Pages/Home"
import Primeira from "./Pages/Primeira";
import Segunda from "./Pages/Segunda";
import Terceira from "./Pages/Terceira";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/Primeira" element={<Primeira />} />
          <Route path="/Segunda" element={<Segunda />} />
          <Route path="/Terceira" element={<Terceira />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
