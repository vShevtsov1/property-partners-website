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

import CostOfService from "../components/CostOfService";


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
                        title={t("name159.1")}
                        description={[t("name159.1")]}
                        scroll="process-of-setuping"
                        setShowModal="showModal"
                    />
                    <div className="guide-blocks">
                        <div className="guide-block">
                            <div>01</div>
                            <div>{t("name160")}</div>
                        </div>
                        <div className="guide-block">
                            <div>02</div>
                            <div>{t("name161")}</div>
                        </div>
                        <div className="guide-block">
                            <div>03</div>
                            <div>{t("name162")}</div>
                        </div>
                        <div className="guide-block">
                            <div>04</div>
                            <div>{t("name164")}</div>
                        </div>
                    </div>
                </div>

                <div id="process-of-setuping" className="process-of-setuping">
                    <div className="page-title">{t("name165.1")} </div>
                    <div>{t("name165.2")}</div>
                </div>

                <div className="table">
                    <div className="table-row">
                        <div className="first-table-row">{t("name1")}</div>
                        <div className="second-table-row">{t("name2")}</div>
                        <div className="third-table-row">{t("name4")}</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>{t("name3")}</div>
                        </div>
                        <div className="second-table">{t("name5")}</div>
                        <div className="third-table">{t("name5")}</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>{t("name6")}</div>
                        </div>
                        <div className="second-table">{t("name9")}</div>
                        <div className="third-table">{t("name9")}</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>{t("name7")}</div>
                        </div>
                        <div className="second-table">{t("name11")}</div>
                        <div className="third-table">{t("name14")}</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>{t("name8")}</div>
                        </div>
                        <div className="second-table">{t("name12")}</div>
                        <div className="third-table">{t("name15")}</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>{t("name16")}</div>
                        </div>
                        <div className="second-table">{t("name19")}</div>
                        <div className="third-table">{t("name21")}</div>
                    </div>

                    <div className="table-row">
                        <div className="first-table">
                            <div>{t("name17")}</div>
                        </div>
                        <div className="second-table">{t("name20")}</div>
                        <div className="third-table">{t("name22")}</div>
                    </div>
                </div>

                <div className="accompany">
                    <div className="page-title">{t("name190")}</div>
                    <div className="accompany-blocks-container">
                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name191")}</div>
                                    <div>{t("name192")}</div>
                                </div>
                                <div className="accompany-paragraph">
                                    <div>{t("name193")}</div>
                                    <div>{t("name194")}</div>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">{t("name195")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name196")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name197")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name198")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">{t("name199")}</div>
                                    <div className="list-lower">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name200")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name201")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name202")}</div>
                                    <div>{t("name203")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">{t("name204")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name205")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name206")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name207")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name208")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name209")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">{t("name210")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name211")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name212")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">{t("name213")}</div>
                                    <div className="list-lower">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name214")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name215")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name216")}</div>
                                    <div>{t("name217")}</div>
                                </div>
                                <div className="accompany-paragraph">
                                    <div>{t("name218")}</div>
                                    <div>
                                        <span className="big-description">
                                            {t("name219")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">{t("name220")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name221")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">{t("name222")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name223")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name224")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name225")}</div>
                                    <div>{t("name226")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">{t("name227")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name228")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name229")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name230")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name231")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name232")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">{t("name233")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name234")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name235")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name236")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <div className="list-title">{t("name237")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name238")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name239")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name240")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name241")}</div>
                                    <div>{t("name242")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">{t("name243")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name244")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name245")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name246")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name247")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">{t("name248")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name249")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name250")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name251")}</div>
                                    <div>{t("name252")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-title">{t("name253")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name254")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <div className="list-title">{t("name255")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt="" />
                                            {t("name256")}
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


                <CostOfService />

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
                        <div>{t("name283")}</div>
                        <div>{t("name284")}</div>
                    </div>
                    <div className="employees-companies">
                        <div className="block">
                            <div>{t("name289")}</div>
                            <div>{t("name290")}</div>
                        </div>
                        <div className="block">
                            <div>{t("name291")}</div>
                            <div>{t("name292")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default MinLand
