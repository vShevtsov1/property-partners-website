import Concierge from "./pages/Concierge.jsx";
import Home from "./pages/Home.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Modal from "react-modal";
import ContactUsModal from "./components/ContactUsModal.jsx";


function App() {

  return (

      <BrowserRouter>
          <ScrollToTop />
          <ContactUsModal/>
        <Routes>


          <Route path="/" element={<Home/>}/>
          <Route path="/real-estate" element={<RealEstate/>}/>
          <Route path="/concierge" element={<Concierge/>}/>
          <Route path="/project/:id" element={<ProjectCard/>}/>


        </Routes>

      </BrowserRouter>

  )
}

export default App
