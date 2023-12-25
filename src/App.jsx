import Concierge from "./pages/Concierge.jsx";
import Home from "./pages/Home.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Modal from "react-modal";
import ContactUsModal from "./components/ContactUsModal.jsx";
import PDFmodal from "./components/PDFmodal.jsx";
import { useState } from "react";
import Agent from "./pages/Agent.jsx";
import Accounting from "./pages/Accounting.jsx"


function App() {
  const [isPDFModalOpen, setPDFModalOpen] = useState(false);

  const openPDFModal = () => {
    setPDFModalOpen(true);
  };

  const closePDFModal = () => {
    setPDFModalOpen(false);
  };
  return (

    <BrowserRouter>
      <ScrollToTop />
      <ContactUsModal />
      <PDFmodal closeModal={closePDFModal} showModal={isPDFModalOpen} />
      <Routes>
        <Route path="/" element={<Home openModal={openPDFModal} />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/project/:id" element={<ProjectCard />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/accounting" element={<Accounting />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
