import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/minLand.scss"
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

function MinLand() {
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

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="minland-wrapper ">
            <Header></Header>
            <div className="minland-container">
                <div className="minland-baner-guide">
                    <ConsulatingBaner
                        img={accountaingBaner}
                        title="Set up of a local company in the UAE"
                        description={['We open a company remotely and prepare for the launch of operational activities']}
                        scroll="process-of-setuping"
                        setShowModal="showModal"
                    />
                    <div className="guide-blocks">
                        <div className="guide-block">
                            <div>01</div>
                            <div>Initial approval & Trade name reservation</div>
                        </div>
                        <div className="guide-block">
                            <div>02</div>
                            <div>Memorandum Of Assosiation registration</div>
                        </div>
                        <div className="guide-block">
                            <div>03</div>
                            <div>License</div>
                        </div>
                        <div className="guide-block">
                            <div>04</div>
                            <div>Annual support</div>
                        </div>
                    </div>
                </div>
                <div id="process-of-setuping" className="process-of-setuping">
                    <div className="page-title">The process of setuping and administering a business in the Mainland is different from the Free zone </div>
                    <div>In the case of Free Zone, the registrar and the supervisory authority are loyal private companies that manage free zones. In the case of Mainland, the registering and controlling body is a state structure – the economic department of the relevant emirate. In this regard, doing business on the Mainland is subject to much more control and regulation.</div>
                </div>
                <div className="table">
                    <div className="table-row">
                        <div className="first-table-row">Type</div>
                        <div className="second-table-row">Free Zone</div>
                        <div className="third-table-row">Mainland</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>
                                Ownership
                            </div>
                        </div>
                        <div className="second-table">
                            100 % ownership of foreign <br />
                            citizens or legal <br />
                            persons
                        </div>
                        <div className="third-table">
                            M100 % ownership of foreign citizens <br />
                            or legal entities. Maybe <br />
                            Adding a local agent to simplify <br />
                            proceduresainland
                        </div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>
                                Geography
                                activities
                            </div>
                        </div>
                        <div className="second-table">
                            Activities outside the UAE: <br />
                            There are no restrictions within the UAE: <br />
                            There are restrictions
                        </div>
                        <div className="third-table">
                            Activities outside the UAE: <br />
                            There are no restrictions within the UAE: there are no restrictions
                        </div>
                    </div>

                    <div className="table-row">
                        <div className="first-table"><div>Taxes and
                            Reporting</div></div>
                        <div className="second-table">
                            9 % income tax starting with <br />
                            2023r. <br />
                            Annual reporting
                        </div>
                        <div className="third-table">
                            9 % income tax starting from 2023. 5 % VAT (VAT) <br />
                            Annual reporting
                        </div>
                    </div>

                    <div className="table-row">
                        <div className="first-table"><div>Visas for
                            employees</div></div>
                        <div className="second-table">
                            The cost of employee registration is from $ 2.600 per 2 years
                        </div>
                        <div className="third-table">
                            The cost of employee registration is from $ 2.000 by 2 years
                        </div>
                    </div>

                    <div className="table-row">
                        <div className="first-table"><div>Regulator</div> </div>
                        <div className="second-table">
                            The regulatory body is Frizona
                        </div>
                        <div className="third-table">
                            The regulatory body is the Economic Department of the Emirate in <br />
                            which is registered
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="first-table"><div>Extension Lycens</div></div>
                        <div className="second-table">
                            Anually

                        </div>
                        <div className="third-table">
                            Anually
                        </div>
                    </div>
                </div>

                <div className="accompany">
                    <div className="page-title">We accompany you at every stage, starting with the company setup, ending with obtaining all permits and starting your business</div>

                    <div className="accompany-blocks-container">
                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>Stage 1</div>
                                    <div>Getting initial approval</div>
                                </div>
                                <div className="accompany-paragraph">
                                    <div>Description</div>
                                    <div>Obtaining primary approval for doing business. Includes selection and coordination of activities, reservation of the company's trade name and receipt of the Initial approval package from the Dubai Economic Department required for office rental and subsequent registration of a legal entity</div>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">What you need from the client</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Initial Approval Certificate
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            30 minutes to fill out our brief
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            If the client has never visited the UAE before, then a physical presence will be required
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">Cost and terms</div>
                                    <div className="list-lower">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Initial Approval Certificate
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            30 minutes to fill out our brief
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">

                            <div className="left-content">
                                <div className="stage-title">
                                    <div>Stage 2</div>
                                    <div>Help with Ejari for office or showroom</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">Description</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Selection of an object for request
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Legal audit of the lease agreement
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Full transaction support
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Assistance in making payments/issuing checks to the owner
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Registration of a lease agreement in Ejari
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">What you need from the client</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Initial Approval Certificate
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Memorandum of assosiation
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">Cost and terms</div>
                                    <div className="list-lower">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            1-20 bussines days depends on property
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            from 7000 aed per year
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>Stage 3</div>
                                    <div>Company setup</div>
                                </div>
                                <div className="accompany-paragraph">
                                    <div>Description</div>
                                    <div>
                                        <span className="big-description">Preparation of all documents by the Dubai Economic Department,
                                            obtaining a Trade license and a certificate for a trade name.
                                            Company setup in the Ministry of Human Resources and issue of <span className="underline">electronic
                                                signature</span> and <span className="underline" >labor card</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">What you need from the client</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            One visit to the TasHeel Center to obtain an e-Signature and launch the process of obtaining an Emirates ID for the founders
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">WCost and terms</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            2-3 days after receiving Ejari
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            The licence cost depend from ejari type and rent cost. Starts from 15,000 aed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">

                            <div className="left-content">
                                <div className="stage-title">
                                    <div>Stage 4.1</div>
                                    <div>Visa registration process</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">Description</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Issue of a labor card and registration of an employment contract in WPS
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Getting a Visa Permit
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Record for a medical test and biometrics
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Annual insurance (VMI)
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Emirates ID Issue
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">What you need from the client</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Passport data
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Contract details for employee
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            E-signature
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">Cost and terms</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            4-7 working days depends on immigration
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            from 5000 aed for Investor
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            from 7,000 aed for employee
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>Stage 4.2</div>
                                    <div>Obtaining permits from regulatory authorities</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">We get permissions from</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Food Safety Department
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Dubai Municipality
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Dubai Land Department
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Roads and Transport Authority
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">What you need from the client</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            14-28 days
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Depending on the type of business from 5 000 to 25 000 AED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>Stage 5</div>
                                    <div>Opening a bank account, enabling acquiring</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">Description</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            Preparation of all documents and passing the AML/KYC procedure
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">Deadlines</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            3-6 weeks
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="get-consult-block">
                    <GetConsult></GetConsult>
                </div>


                <div className="cost-service">
                    <div className="title">
                        <div className="page-title">Cost of services</div>
                        <div>Company setup and its preparation for commercial and operational activities</div>
                    </div>
                    <div className="setups-container">
                        <div className="setup">
                            <div className="setup-name">
                                Company setup
                            </div>
                            <div className="setup-content">
                                <div className="setup-list">
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Prior authorization
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Rent a virtual office
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining a license
                                    </div>
                                </div>
                                <div className="setup-price">
                                    <div>From $6,000</div>
                                    <div>(AED 20,500)</div>
                                </div>
                            </div>
                        </div>

                        <div className="setup">
                            <div className="setup-name">
                                Company registration + Visa processing
                            </div>
                            <div className="setup-content">
                                <div className="setup-list">
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Prior authorization
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Rent a virtual office
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining a license
                                    </div>

                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining an immigration card / establishment card
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining a labor card
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Issuance of investor / partner visa
                                    </div>
                                </div>
                                <div className="setup-price">
                                    <div>From $8,800</div>
                                    <div>((AED 32,000))</div>
                                </div>
                            </div>
                        </div>

                        <div className="setup">
                            <div className="setup-name blue">
                                Company registration + Visa processing + Bank account opening
                            </div>
                            <div className="setup-content">
                                <div className="setup-list">
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Prior authorization
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Renting a virtual office
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining a license
                                    </div>

                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining an immigration card / establishment card
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Obtaining a labor card
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Investor / partner visa issuance
                                    </div>

                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        KYC walkthrough
                                    </div>
                                    <div className="setup-list-elem">
                                        <img src={checkFill} alt="" />
                                        Opening an account with a UAE bank
                                    </div>
                                </div>
                                <div className="setup-price">
                                    <div>From $12,500</div>
                                    <div>(AED 20,500)</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pro-part">
                    <div className="content">
                        <div>ProPart Consulting</div>
                        <div>Companies setup and business support in the UAE. We help international companies to obtain the necessary financial, legal, tax and geopolitical benefits of the UAE jurisdiction.</div>
                    </div>
                    <div className="image">
                    </div>
                </div>

                <div className="numbers">
                    <div className="clients">
                        <div>40+</div>
                        <div>Clients</div>
                    </div>
                    <div className="employees-companies">
                        <div className="block">
                            <div>22</div>
                            <div>Employees</div>
                        </div>

                        <div className="block">
                            <div>30+</div>
                            <div>Companies services for business owners</div>
                        </div>
                    </div>
                </div >
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default MinLand
