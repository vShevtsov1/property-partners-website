import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/auditing.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Help from "../components/Help"
import checkBrown from "../assets/minland/checkbox-circle-fill-brown.svg";
import checkFill from "../assets/check-fill.png";
import egypt from "../assets/minLand/egypt.svg";
import turkey from "../assets/minLand/turkey.svg";
import usa from "../assets/minLand/usa.svg";
import GetConsult from "../components/GetConsult"
import ConsulatingBaner from "../components/ConsulatingBaner"

import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../assets/teams/qr/qr-alex.svg";
import alekseiShyianName from "../assets/teams/aleksei-shyian-min.jpg";
import alekseiShyian from "../assets/teams/qr/aleksei-shyian.png";
import tykhovaTatianaName from "../assets/teams/tykhova-tatiana-min.jpg";
import tykhovaTatiana from "../assets/teams/qr/tykhova-tatiana.png";
import kristinaSokolovskayaName from "../assets/teams/kristina-sokolovskaya-min.jpg";
import kristinaSokolovskaya from "../assets/teams/qr/kristina-sokolovskaya.png";
import pavelDyninName from "../assets/teams/pavel-dynin-min.jpg";
import propertyPartnersDynin from "../assets/teams/qr/property-partners-dynin.png";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../assets/teams/qr/anna-horshunova.png";
import allaGerassimovaName from "../assets/teams/alla-gerassimova-min.jpg";
import allaGerassimova from "../assets/teams/qr/alla-gerassimova.png";
import dmitriyKoltsovName from "../assets/teams/dmitriy-koltsov-min.jpg";
import dmitriyKoltsov from "../assets/teams/qr/dmitriy-koltsov.png";
import RequestModal from "../components/RequestModal.jsx";

function Auditing() {
    const { t } = useTranslation();
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 8));

    const team = [
        {
            "image": alexLogachevName, "name": "Alex Logachev", "position": "CEO", "qr": qrAlex,
            "social": {
                "telegram": "https://t.me/oleksandr_logachev",
                "instagram": "https://www.instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971588395135&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d"
            }
        },
        {
            "image": alekseiShyianName, "name": "Aleksei Shyian", "position": "Business Developer", "qr": alekseiShyian,
            "social": {
                "instagram": "https://www.instagram.com/dubai_oleksii_shyian",
                "telegram": "https://t.me/brodubai"
            }
        },
        {
            "image": tykhovaTatianaName, "name": "Tykhova Tatiana", "position": "Real estate broker", "qr": tykhovaTatiana,
            "social": {
                "instagram": "https://www.instagram.com/taffeeta",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971522419898&text&type=phone_number&app_absent=0"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName, "name": "Kristina Sokolovskaya", "position": "CEO Kristal Business Experts", "qr": kristinaSokolovskaya,
            "social": {
                "telegram": "https://t.me/+971529568%20390",
            }
        },
        {
            "image": pavelDyninName, "name": "Pavel Dynin", "position": "Real estate broker", "qr": propertyPartnersDynin,
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://www.instagram.com/pavel.dynin?igshid=OGQ5Z%20Dc2ODk2ZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585622362&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ%204d"
            }
        },
        {
            "image": annaHorshunovaName, "name": "Anna Horshunova", "position": "Real estate broker", "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
        {
            "image": allaGerassimovaName, "name": "Alla Gerassimova", "position": "Marketer, content maker", "qr": allaGerassimova,
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://www.instagram.com/a11gep?igshid=NTc4MTIw+NjQ2YQ%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971555728933&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": dmitriyKoltsovName, "name": "Dmitriy Koltsov", "position": "Real estate broker", "qr": dmitriyKoltsov,
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://www.instagram.com/brokervdubae",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585589938&text&type=phone_number&app_absent=0",
            }
        },
    ]
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState({
        tittleText: "Our expert will reach you out",
        buttonText: "Get a free consultation"
    });

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="auditing-wrapper ">
            <Header></Header>
            <div className="auditing-container">
                <div className="auditing-baner-guide">
                    <ConsulatingBaner
                        img={accountaingBaner}
                        title="Accounting and auditing services in the UAE"
                        description={['Building management reporting and all administrative issues related to taxes and accounting']}
                        setShowModal="showModal"
                    />
                    <div className="guide-blocks">
                        <div className="guide-block">
                            <div>We will submit the reports on time and without errors</div>
                            <div>Reports, declarations, contributions and taxes under control</div>
                        </div>
                        <div className="guide-block">
                            <div>We will process any number of primary</div>
                            <div>Let's show which documents are missing, and which ones affect the tax</div>
                        </div>
                        <div className="guide-block">
                            <div>We will close all personnel tasks</div>
                            <div>We will calculate the salary, find a job, arrange a vacation and hand over the reports correctly</div>
                        </div>
                        <div className="guide-block">
                            <div>Checking counterparties</div>
                            <div>We check the counterparties for reliability, we will inform you about risky transactions</div>
                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="title">Why us</div>
                    <div className="process-block-container">
                        <div className="process-block-title">
                            Why us
                        </div>
                        <div className="process-block">
                            <div>1</div>
                            <div className="description">
                                <div>Accounting and VAT support</div>
                                <div>Accounting and VAT Assistance</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>2</div>
                            <div className="description">
                                <div>Outsourcing of all personnel issues</div>
                                <div>Outsourcing Solutions</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>3</div>
                            <div className="description">
                                <div>Management accounting system</div>
                                <div>Quick Turnaround</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>4</div>
                            <div className="description">
                                <div>Legal support</div>
                                <div>Your Trusted Legal Support Companion</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>5</div>
                            <div className="description">
                                <div>Advocacy of interests</div>
                                <div>In tax and judicial authorities</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="additional">
                    <div className="title">
                        Additional services
                    </div>

                    <div className="content-container">
                        <div className="block">
                            <div>Registration of a company with the Dubai Municipality and other state bodies for the certification of goods or services and obtaining a permit for operating in the UAE, permits for import, distribution</div>
                            <div>from $550 (AED 2000)</div>
                        </div>

                        <div className="blocks">
                            <div className="block">
                                <div>Company registration in DubaiCustoms and obtaining a customs number</div>
                                <div>from $550 (AED 2000)</div>
                            </div>
                            <div className="block">
                                <div>Obtaining visas, employment cards, health insurance and national identity cards for all employees</div>
                                <div>from $3000 (AED 11000)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="get-consult-box">
                    <GetConsult></GetConsult>
                </div>

                <div className="other-services">
                    <div className="process-block-container">
                        <div className="process-block">
                            <div>1</div>
                            <div className="description">
                                <div>Documentation legalization</div>
                                <div>Simplified Documentation Processes</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>2</div>
                            <div className="description">
                                <div>Trademark registration, protection</div>
                                <div>Protecting Your Ideas and Brands</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>3</div>
                            <div className="description">
                                <div>Business advisory</div>
                                <div>Trusted Business Guidance</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>4</div>
                            <div className="description">
                                <div>Attestations at various institutions</div>
                                <div>Effortless Institutional Attestations</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>5</div>
                            <div className="description">
                                <div>Drafting legal agreements</div>
                                <div>Precise Legal Agreement Drafting</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>6</div>
                            <div className="description">
                                <div>Out-of-court dispute resolution</div>
                                <div>Seamless Dispute Resolutiong</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-services">
                    <div className="title">
                        The main services of the company
                    </div>

                    <div className="guide-blocks">
                        <div className="guide-block">
                            <div>01</div>
                            <div>Business setup and structuring in the UAE</div>
                        </div>
                        <div className="guide-block">
                            <div>02</div>
                            <div>Tax planning and optimization</div>
                        </div>
                        <div className="guide-block">
                            <div>03</div>
                            <div>Support of commercial and operationa in UAE</div>
                        </div>
                        <div className="guide-block">
                            <div>04</div>
                            <div>Services for business owners</div>
                        </div>
                    </div>
                </div>

                <div className="numbers">
                    <div className="clients">
                        <div>20</div>
                        <div>Employees</div>
                    </div>
                    <div className="employees-companies">
                        <div className="block">
                            <div>200 +</div>
                            <div>Clients</div>
                        </div>

                        <div className="block">
                            <div>30+</div>
                            <div>Companies services for business owners</div>
                        </div>
                    </div>
                </div >

                <div className="offices">
                    <div className="offices-page-title">
                        Offices in three countries
                    </div>

                    <div className="countries">
                        <div className="country-block">
                            <img src={egypt} alt="" />
                            <div className="text">
                                <div>UAE,
                                    Dubai</div>
                                <div>IFZA Business Center, Building A, office 301</div>
                            </div>
                        </div>
                        <div className="country-block">
                            <img src={turkey} alt="" />
                            <div className="text">
                                <div>Turkey, Istanbul</div>
                                <div>Sinpaş Queen Bomonti Rezidans, 37nd floor</div>
                            </div>
                        </div>
                        <div className="country-block">
                            <img src={usa} alt="" />
                            <div className="text">
                                <div>UAE,
                                    Dubai</div>
                                <div>Opening soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default Auditing
