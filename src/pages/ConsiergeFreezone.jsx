import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/consiergeFreezone.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
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
import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../assets/teams/qr/qr-alex.svg";
import RequestModal from "../components/RequestModal.jsx";
import alarm from "../assets/alarm.png";
import arrowRight from "../assets/arrow-right-circle-fill.svg";
import shareBox from "../assets/share-box-fill.png";
import infoFill from "../assets/information-fill.png";
import checkBox from "../assets/checkbox-circle-fill.png";
import showHide from "../assets/show-hide-arrow.png";
import telegramIcon from "../assets/telegram-icon.png";
import arrowButton from "../assets/arrow-left.png";

import box from "../assets/freezone/box.svg";
import companies from "../assets/freezone/companies.svg";
import document from "../assets/freezone/document.svg";
import headset from "../assets/freezone/headset.svg";
import legal from "../assets/freezone/legal.svg";
import over from "../assets/freezone/over.svg";
import world from "../assets/freezone/world.svg";

import lock from "../assets/freezone/lock.svg";
import heart from "../assets/freezone/heart.svg";
import lineUp from "../assets/freezone/line-up.svg";
import GetAdvice from "../components/GetAdvice"
import GetConsult from "../components/GetConsult"
import Help from "../components/Help"
import ConsulatingBaner from "../components/ConsulatingBaner"

import CostOfService from "../components/CostOfService";

function ConsiergeFreezone() {
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
    const [activeKind, setActiveKind] = useState(null);
    const closeModal = () => {
        setShowModal(false);
    };

    const handleTypeClick = (kind) => {
        setActiveKind((prevActiveKind) => (prevActiveKind === kind ? null : kind));
    };

    return (<div className="cons-free-wrapper">
        <Header />
        <div className="cons-free-container">
            <div className="cons-baner-guide">
                <ConsulatingBaner
                    img={accountaingBaner}
                    title={t("header")}
                    description={[t("subheader")]}
                />
                <div className="guide-blocks">
                    <div className="guide-block">
                        <div>01</div>
                        <div>{t("box_1_title")}</div>
                    </div>
                    <div className="guide-block">
                        <div>02</div>
                        <div>{t("box_2_title")}</div>
                    </div>
                    <div className="guide-block">
                        <div>03</div>
                        <div>{t("box_3_title")}</div>
                    </div>
                    <div className="guide-block">
                        <div>04</div>
                        <div>{t("box_4_title")}</div>
                    </div>
                </div>

            </div>
            <div className="registring">
                <div className="title">
                    <div>{t("main_title")}</div>
                    <div>{t("main_paragraph")}</div>
                </div>
                <div className="resolve-container">
                    <div className="resolve-card">
                        <div className="resolve-title">
                            <div>1</div>
                            <div>
                                <img src={alarm} alt="" />
                                2-4 {t("days")}
                            </div>
                        </div>
                        <div className="resolve-description">
                            <div>{t("service_1_title")}</div>
                            <div>{t("service_1_description")}</div>
                        </div>
                    </div>
                    <div className="resolve-card">
                        <div className="resolve-title">
                            <div>2</div>
                            <div>
                                <img src={alarm} alt="" />
                                7-14 {t("days")}
                            </div>
                        </div>
                        <div className="resolve-description">
                            <div>{t("service_2_title")}</div>
                            <div>{t("service_2_description")}</div>
                        </div>
                    </div>
                    <div className="resolve-card">
                        <div className="resolve-title">
                            <div>3</div>
                            <div>
                                <img src={alarm} alt="" />
                                7-14 {t("days")}
                            </div>
                        </div>
                        <div className="resolve-description">
                            <div>{t("service_3_title")}</div>
                            <div>{t("service_3_description")}</div>
                        </div>
                    </div>
                    <div className="resolve-card">
                        <div className="resolve-title">
                            <div>4</div>
                            <div>
                                <img src={alarm} alt="" />
                                21-28 {t("days")}
                            </div>
                        </div>
                        <div className="resolve-description">
                            <div>{t("service_4_title")}</div>
                            <div>{t("service_4_description")}</div>
                        </div>
                    </div>
                    <div className="resolve-card">
                        <div className="resolve-title">
                            <div>5</div>
                            <div>
                                <img src={alarm} alt="" />
                                2-4 {t("days")}
                            </div>
                        </div>
                        <div className="resolve-description">
                            <div>{t("service_5_title")}</div>
                            <div>{t("service_5_description")}</div>
                        </div>
                    </div>
                    <div className="resolve-card">
                        <div className="resolve-title">
                            <div>6</div>
                            <div>
                                <img src={alarm} alt="" />
                                7-14 {t("days")}
                            </div>
                        </div>
                        <div className="resolve-description">
                            <div>{t("service_6_title")}</div>
                            <div>{t("service_6_description")}</div>
                        </div>
                    </div>
                </div>
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

            <div className="mob-none">
                <GetConsult />
            </div>

            <CostOfService />

            <div className="support-discount">
                <div className="support">
                    <div className="support-text">
                        {t("name45")}
                    </div>
                    <div className="support-button">
                        <img src={arrowRight} alt="" />
                        {t("name46")}
                    </div>
                </div>
                <div className="discount">
                    <div className="title">
                        <div>{t("name471")}</div>
                        <div>{t("name47")} <span>{t("name472")}</span></div>
                    </div>
                    <div className="title">
                        <div>{t("name481")}</div>
                        <div>{t("name48")} <span>{t("name482")}</span></div>
                    </div>
                </div>
            </div>


            <div className="big-info-card">
                <div className="info-card-container">
                    <div className="info-card">
                        <div className="top-content">
                            <div className="title">
                                <div className="name">
                                    <img src={shareBox} alt="" />
                                    {t("name49")}
                                </div>
                                <div className="cost">
                                    <div>
                                        {t("name50")} <span> from $8 000</span>
                                    </div>
                                    <img src={infoFill} alt="" />
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">{t("name65")}</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.1")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.2")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.3")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.4")}
                                    </div>
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">{t("name51.7")}</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.5")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.6")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="content">
                                <div className="paragraph">
                                    <div>{t("name69")}</div>
                                    <div>{t("name53.1")}</div>
                                </div>
                                <div className={`paragraph
                            ${activeKind === 0 ? '' : 'unactive'}`}>
                                    <div>{t("name54")}</div>
                                    <div>{t("name55")}
                                    </div>
                                </div>
                            </div>
                            <div className="show-hide" onClick={() => handleTypeClick(0)}>
                                {activeKind === 0 ? t("hideText") : t("showAllText")}
                                <img src={showHide} className={`${activeKind === 0 ? '' : 'rotate180'}`} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="top-content">
                            <div className="title">
                                <div className="name">
                                    <img src={shareBox} alt="" />
                                    {t("name49")}
                                </div>
                                <div className="cost">
                                    <div>
                                        {t("name50")} <span> from $10 000</span>
                                    </div>
                                    <img src={infoFill} alt="" />
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">{t("name65")}</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name58.1")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name60")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.1")}
                                    </div>
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">{t("name51.7")}</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.5")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.6")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="content">
                                <div className="paragraph">
                                    <div>{t("name69")}</div>
                                    <div>{t("name53.1")} 300 000 AED</div>
                                </div>
                                <div className={`paragraph
                            ${activeKind === 0 ? '' : 'unactive'}`}>
                                    <div>{t("name54")}</div>
                                    <div>{t("name63")}
                                    </div>
                                </div>
                            </div>
                            <div className="show-hide" onClick={() => handleTypeClick(0)}>
                                {activeKind === 0 ? t("hideText") : t("showAllText")}
                                <img src={showHide} className={`${activeKind === 0 ? '' : 'rotate180'}`} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="top-content">
                            <div className="title">
                                <div className="name">
                                    <img src={shareBox} alt="" />
                                    {t("name56")}
                                </div>
                                <div className="cost">
                                    <div>
                                        {t("name50")} <span> from $10 000</span>
                                    </div>
                                    <img src={infoFill} alt="" />
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">{t("name65")}</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name58.1")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name60")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.1")}
                                    </div>
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">{t("name51.7")}</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name51.5")}
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        {t("name68")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="content">
                                <div className="paragraph">
                                    <div>{t("name69")}</div>
                                    <div>{t("name53.1")} 300 000 AED</div>
                                </div>
                                <div className={`paragraph
                            ${activeKind === 0 ? '' : 'unactive'}`}>
                                    <div>{t("name54")}</div>
                                    <div>{t("name63")}
                                    </div>
                                </div>
                            </div>
                            <div className="show-hide" onClick={() => handleTypeClick(0)}>
                                {activeKind === 0 ? t("hideText") : t("showAllText")}
                                <img src={showHide} className={`${activeKind === 0 ? '' : 'rotate180'}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="consult-help">
                <GetConsult />
            </div>


            <div className="transparent">
                <div className="content">
                    <div className="title">
                        <div>{t("transparentTitle")}</div>
                        <div>{t("transparentDiscount")}</div>
                    </div>
                    <div className="descr">
                        {t("transparentDescription")}
                    </div>
                </div>
                <div className="image">
                </div>
                <div className="image tg">
                </div>
                <div className="content">
                    <div className="title title-tg">
                        <div>{t("communityTitle")}</div>
                        <div><img src={telegramIcon} alt="" /></div>
                    </div>
                    <div className="descr">
                        {t("communityDescription")}
                    </div>
                </div>
                <div className="image mob-tg">
                </div>
            </div>


            <div className="our-services">
                <div className="title">
                    <div>{t("name72")}</div>
                    <div className="buttons-container">
                        <div className="button">
                            <img src={arrowButton} alt="" />
                        </div>
                        <div className="button rotate180deg">
                            <img src={arrowButton} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="content">
                            <div>{t("name73")}</div>
                            <div>{t("name74")}</div>
                        </div>
                        <div className="button">
                            {t("readMore")}
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div>{t("name75")}</div>
                            <div>{t("name76")}</div>
                        </div>
                        <div className="button">
                            {t("readMore")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="reliable-partner">
                <div className="title">{t("name77")}</div>
                <div className="blocks-container">
                    <div className="block">
                        <img src={companies} alt="" />
                        <div className="descr">
                            <div>{t("name78")}</div>
                            <div>{t("name79")}</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={over} alt="" />
                        <div className="descr">
                            <div>{t("name80.1")}</div>
                            <div>{t("name80.2")}</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={headset} alt="" />
                        <div className="descr">
                            <div>{t("name81")}</div>
                            <div>{t("name82")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="access">
                <div className="title">{t("name83")}</div>
                <div className="blocks-container">
                    <div className="block">
                        <img src={box} alt="" />
                        <div className="descr">
                            <div>{t("name84")}</div>
                            <div>{t("name85")}</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={world} alt="" />
                        <div className="descr">
                            <div>{t("name86")}</div>
                            <div>{t("name87")}</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={document} alt="" />
                        <div className="descr">
                            <div>{t("name88")}</div>
                            <div>{t("name89")}</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={legal} alt="" />
                        <div className="descr">
                            <div>{t("name90")}</div>
                            <div>{t("name91")}</div>
                        </div>
                    </div>
                </div>
            </div>


            <GetAdvice />

            <div className="no-taxes">
                <div className="content">
                    <div className="title">
                        <div>{t("name92")}</div>
                        <div>{t("name93")}</div>
                    </div>
                    <div className="list">
                        <div className="list-elem">
                            <img src={lock} alt="" />
                            <div>{t("name97.2")}</div>
                        </div>
                        <div className="list-elem">
                            <img src={heart} alt="" />
                            <div>{t("name98.1")}</div>
                        </div>
                        <div className="list-elem">
                            <img src={lineUp} alt="" />
                            <div>{t("name99")}</div>
                        </div>
                    </div>
                </div>
                <div className="procent">
                    <div className="procent-elem">
                        <div className="number">{t("name94.1")}</div>
                        <div className="line"></div>
                        <div className="descr">{t("name94.2")}</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">{t("name95.1")}</div>
                        <div className="line"></div>
                        <div className="descr">{t("name95.2")}</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">{t("name96.1")}</div>
                        <div className="line"></div>
                        <div className="descr">{t("name96.2")}</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">{t("name100.1")}</div>
                        <div className="line"></div>
                        <div className="descr">{t("name100.2")}</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">{t("name101.1")}</div>
                        <div className="line"></div>
                        <div className="descr">{t("name101.2")}</div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
    </div >
    )
}

export default ConsiergeFreezone
