import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/trademark.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import GetConsult from "../components/GetConsult"
import alarm from "../assets/alarm.png";


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
import ConsulatingBaner from "../components/ConsulatingBaner"

function TradeMark() {
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
        <div className="trademark-wrapper">
            <Header></Header>
            <div className="trademark-container">
                <div className="trademark-baner-guide">
                    <ConsulatingBaner
                        img={accountaingBaner}
                        title="Trademark registration"
                        description={['Assistance in opening a turnkey business in the UAE and its further support. Company registration and obtaining a residence permit, obtaining all permits and certificates, administrative and accounting support.',
                            'If you want to protect your intellectual property and establish the rights to your trademark in the UAE, then you are in the right place.']
                        }
                        setShowModal="showModal"
                    />
                </div>
                <div className="registering-trademark">
                    <div className="page-title">Registering a trademark is an important step for business in the UAE </div>
                    <div>Legislation and trademark registration requirements can be complicated and confusing, so having professional support is a key success factor. Our company offers expert trademark registration services in the UAE to help you protect your brand identity and maximize your competitiveness in the market.</div>
                </div>
                <div className="register-cost">
                    <div className="registring">
                        <div className="title">
                            <div>Registering a trademark is an important step for business in the UAE</div>
                        </div>
                        <div className="resolve-container">
                            <div className="resolve-card">
                                <div className="resolve-title">
                                    <div>1</div>
                                    <div>
                                        <img src={alarm} alt="" />
                                        1-2 weeks
                                    </div>
                                </div>
                                <div className="resolve-description">
                                    <div>Experience and expertise in the UAE real estate market</div>
                                </div>
                            </div>
                            <div className="resolve-card">
                                <div className="resolve-title">
                                    <div>2</div>
                                    <div>
                                        <img src={alarm} alt="" />
                                        4-10 weeks
                                    </div>
                                </div>
                                <div className="resolve-description">
                                    <div>COST TRANSPARENCY</div>
                                </div>
                            </div>
                            <div className="resolve-card">
                                <div className="resolve-title">
                                    <div>3</div>
                                    <div>
                                        <img src={alarm} alt="" />
                                        1 month
                                    </div>
                                </div>
                                <div className="resolve-description">
                                    <div>Publication in the media</div>
                                </div>
                            </div>
                            <div className="resolve-card">
                                <div className="resolve-title">
                                    <div>4</div>
                                    <div>
                                        <img src={alarm} alt="" />
                                        2 weeks
                                    </div>
                                </div>
                                <div className="resolve-description">
                                    <div>Issue of a trademark certificate</div>
                                </div>
                            </div>
                            <div className="resolve-card">
                                <div className="resolve-title">
                                    <div>5</div>
                                    <div>
                                        <img src={alarm} alt="" />
                                        2-4 days
                                    </div>
                                </div>
                                <div className="resolve-description">
                                    <div>BUSINESS NETWORKING</div>
                                </div>
                            </div>
                            <div className="resolve-card">
                                <div className="resolve-title">
                                    <div>6</div>
                                    <div>
                                        <img src={alarm} alt="" />
                                        7-14 days
                                    </div>
                                </div>
                                <div className="resolve-description">
                                    <div>Construction consulting</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cost">
                        Cost: <span>25,000 AED</span>
                    </div>
                </div>
                <div className="interesting-facts">
                    <div className="title">
                        Interesting facts about the UAE
                    </div>
                    <div className="block-fact-container">
                        <div className="block-fact">
                            <div className="elem">
                                <div>01</div>
                                <div>Top 5 best cities in the world</div>
                            </div>
                            <div className="elem">
                                <div>02</div>
                                <div>Top 3 safest countries in the world</div>
                            </div>
                            <div className="elem">
                                <div>03</div>
                                <div>350 sunny days a yea</div>
                            </div>
                            <div className="elem">
                                <div>04</div>
                                <div>Top 5 most visited cities in the world</div>
                            </div>
                        </div>
                        <div className="block-fact">
                            <div className="elem">
                                <div>05</div>
                                <div>Logistics center</div>
                            </div>
                            <div className="elem">
                                <div>06</div>
                                <div>Top 1 in terms of money spent by tourists</div>
                            </div>
                            <div className="elem">
                                <div>07</div>
                                <div>Dubai Airport Top 5 in terms of passenger traffic (plan Top 1)</div>
                            </div>
                            <div className="elem">
                                <div>08</div>
                                <div>Top 6 Medical Tourism Index</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="get-consult-box">
                    <GetConsult></GetConsult>
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default TradeMark
