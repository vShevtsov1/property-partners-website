import Concierge from "./pages/Concierge.jsx";
import Home from "./pages/Home.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ContactUsModal from "./components/ContactUsModal.jsx";
import PDFmodal from "./components/PDFmodal.jsx";
import { useState } from "react";
import Agent from "./pages/Agent.jsx";
import Accounting from "./pages/Accounting.jsx"
import ConsiergeFreezone from "./pages/ConsiergeFreezone.jsx"
import BankAccount from "./pages/BankAccount.jsx"
import PowerOfAttorney from "./pages/PowerOfAttorney.jsx"
import MinLand from "./pages/MinLand.jsx"
import Visa from "./pages/Visa.jsx"
import Auditing from "./pages/Auditing.jsx"
import TradeMark from "./pages/TradeMark.jsx"
import Areas from "./pages/Areas.jsx";
import BusinessPage from "./pages/Areas/BusinessBay.jsx";
import Palm from "./pages/Areas/Palm.jsx";
import MBR from "./pages/Areas/MBR.jsx";
import Creek from "./pages/Areas/Creek.jsx";
import Marina from "./pages/Areas/Marina.jsx";
import Lagoons from "./pages/Areas/Lagoons.jsx";
import JLT from "./pages/Areas/JLT.jsx";
import MJL from "./pages/Areas/MJL.jsx";
import Mudon from "./pages/Areas/Mudon.jsx";
import Bluewaters from "./pages/Areas/Bluewaters.jsx";
import CentalPark from "./pages/Areas/CentalPark.jsx";
import DamacHills from "./pages/Areas/DamacHills.jsx";
import DubaiHills from "./pages/Areas/DubaiHills.jsx";
import SupportChat from "./components/SupportChat.jsx";


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
      <SupportChat/>
      <ContactUsModal />
      <PDFmodal closeModal={closePDFModal} showModal={isPDFModalOpen} />
      <Routes>
        <Route path="/" element={<Home openModal={openPDFModal} />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/project/:id" element={<ProjectCard />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/consiergefreezone" element={<ConsiergeFreezone />} />
        <Route path="/bank-account" element={<BankAccount />} />
        <Route path="/power-of-attorney" element={<PowerOfAttorney />} />
        <Route path="/main-land" element={<MinLand />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/auditing" element={<Auditing />} />
        <Route path="/trademark" element={<TradeMark />} />
        <Route path="/areas" element={<Areas />} />

        <Route path="/business-bay" element={<BusinessPage />} />
        <Route path="/palm-jumeirah" element={<Palm />} />
        <Route path="/mbr-city" element={<MBR />} />
        <Route path="/creek-harbour" element={<Creek />} />

        <Route path="/dubai-marina" element={<Marina />} />
        <Route path="/damac-lagoons" element={<Lagoons />} />
        <Route path="/jlt" element={<JLT />} />
        <Route path="/mjl" element={<MJL />} />
        <Route path="/mudon" element={<Mudon />} />

        <Route path="/bluewaters" element={<Bluewaters />} />
        <Route path="/cental-park" element={<CentalPark />} />
        <Route path="/damac-hills" element={<DamacHills />} />
        <Route path="/dubai-hills" element={<DubaiHills />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App
