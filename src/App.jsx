import Concierge from "./pages/Concierge.jsx";
import Home from "./pages/Home.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  return (

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/real-estate" element={<RealEstate/>}/>
          <Route path="/concierge" element={<Concierge/>}/>


        </Routes>

      </BrowserRouter>

  )
}

export default App
