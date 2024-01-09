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
import checkFill from "../assets/check-fill.png";
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
        console.log(123);
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
                                2-4 days
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
                                7-14 days
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
                                7-14 days
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
                                21-28 days
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
                                2-4 days
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
                                7-14 days
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

            <div className="cost-service">
                <div className="title">
                    <div>{t("name23")}</div>
                    <div>{t("name24")}</div>
                </div>
                <div className="setups-container">
                    <div className="setup">
                        <div className="setup-name">{t("name27")}</div>
                        <div className="setup-content">
                            <div className="setup-list">
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name25")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name26")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name28")}
                                </div>
                            </div>
                            <div className="setup-price">
                                <div>{t("name29")}</div>
                            </div>
                        </div>
                    </div>

                    <div className="setup">
                        <div className="setup-name">{t("name30")}</div>
                        <div className="setup-content">
                            <div className="setup-list">
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name31")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name32")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name33")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name39")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name40")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name41")}
                                </div>
                            </div>
                            <div className="setup-price">
                                <div>{t("name34")}</div>
                            </div>
                        </div>
                    </div>

                    <div className="setup">
                        <div className="setup-name blue">{t("name35")}</div>
                        <div className="setup-content">
                            <div className="setup-list">
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name36")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name37")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name38")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name39")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name40")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name41")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name42")}
                                </div>
                                <div className="setup-list-elem">
                                    <img src={checkFill} alt="" />
                                    {t("name43")}
                                </div>
                            </div>
                            <div className="setup-price">
                                <div>{t("name44")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
                        <div>{t("name47")}</div>
                        <div>{t("name48")}</div>
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
                                    Silicon Oasis
                                </div>
                                <div className="cost">
                                    <div>
                                        The cost of company setup: from<span> $8 000</span>
                                    </div>
                                    <img src={infoFill} alt="" />
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">Types of activities</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Consulting
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Consulting
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Consulting
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Consulting
                                    </div>
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">Opportunities</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Real and virtual offices
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Multi-purpose warehousing and manufacturing
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="content">
                                <div className="paragraph">
                                    <div>Authorized capital</div>
                                    <div>from 10 000 AED</div>
                                </div>
                                <div className={`paragraph
                            ${activeKind === 0 ? '' : 'unactive'}`}>
                                    <div>Relocate UAE Assessment</div>
                                    <div>Dubai Silicon Oasis is a free zone, as well as a large business and residential complex in Dubai. This is one of the most attractive places to start a business in the UAE.
                                        It serves as a technological center for industrial, research and development enterprises.
                                        The price/opportunity ratio is the best in the UAE. Suitable for almost any type of business.
                                        It is also part of the DIEZ – an association of the 3 largest free economic zones of Dubai (Silicon Oasis, Dubai Airport Free Zone, Dubai Commerce), which allows you to enjoy all the advantages of the Dubai Airport Free Zone and Dubai Commerce zones.
                                    </div>
                                </div>
                            </div>
                            <div className="show-hide" onClick={() => handleTypeClick(0)}> {activeKind === 0 ? 'Hide' : 'Show All'}
                                <img src={showHide} className={`${activeKind === 0 ? '' : 'rotate180'}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="top-content">
                            <div className="title">
                                <div className="name">
                                    <img src={shareBox} alt="" />
                                    Dubai International Financial Center
                                </div>
                                <div className="cost">
                                    <div>
                                        The cost of company setup: <span> from $15 000</span>
                                    </div>
                                    <img src={infoFill} alt="" />
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">Types of activities</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Banking and brokerage services, money management
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Capital markets
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Consulting
                                    </div>
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">Opportunities</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Real and virtual offices
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Use of British judicial law
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="content">
                                <div className="paragraph">
                                    <div>Authorized capital</div>
                                    <div>from 300 000 AED</div>
                                </div>
                                <div className={`paragraph
                            ${activeKind === 1 ? '' : 'unactive'}`}>
                                    <div>Relocate UAE Assessment</div>
                                    <div>Dubai International Financial Center (DIFC) is a leading financial center in the Middle East, South Asia, Africa and South Asia, governed by private legislation and an independent judicial system.
                                        In this zone, the register of shareholders is open and British law is partially used (in terms of the judicial system)
                                        Great for registering holding structures.
                                    </div>
                                </div>
                            </div>
                            <div className="show-hide" onClick={() => handleTypeClick(1)}>
                                {activeKind === 1 ? 'Hide' : 'Show All'}
                                <img src={showHide} className={`${activeKind === 1 ? '' : 'rotate180'}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="top-content">
                            <div className="title">
                                <div className="name">
                                    <img src={shareBox} alt="" />
                                    Meydan Free Zone
                                </div>
                                <div className="cost">
                                    <div>
                                        The cost of company setup: from <span> from $10 000</span>
                                    </div>
                                    <img src={infoFill} alt="" />
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">Types of activities</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Consulting
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Service sector
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Commerce
                                    </div>
                                </div>
                            </div>
                            <div className="top-content-descr">
                                <div className="title-descr">Opportunities</div>
                                <div className="descr-temp-container">
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        Real and virtual offices
                                    </div>
                                    <div className="descr-temp">
                                        <img src={checkBox} alt="" />
                                        There is an residential complex on the territory of the zone
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="content">
                                <div className="paragraph">
                                    <div>Authorized capital</div>
                                    <div>from 100 000 AED</div>
                                </div>
                                <div className={`paragraph
                            ${activeKind === 2 ? '' : 'unactive'}`}>
                                    <div>Relocate UAE Assessment</div>
                                    <div>A modern economic free zone in the heart of Dubai, Meydan is located near the most important sights of the emirate, which gives investors a number of strategic advantages.
                                        It offers open office space and fully serviced offices accommodating all types of businesses, including commercial, consulting, investment and administrative companies, as well as a selection of elite residences. The free zone also has a 5-star
                                    </div>
                                </div>
                            </div>
                            <div className="show-hide" onClick={() => handleTypeClick(2)}>
                                {activeKind === 2 ? 'Hide' : 'Show All'}
                                <img src={showHide} className={`${activeKind === 2 ? '' : 'rotate180'}`} alt="" />
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
                        <div>Transparent
                            pricing</div>
                        <div>25%</div>
                    </div>
                    <div className="descr">
                        is in touch and accompanies during the whole process and advises on emerging issues
                    </div>
                </div>
                <div className="image">
                </div>
                <div className="image tg">
                </div>
                <div className="content">
                    <div className="title title-tg">
                        <div>Community of entrepreneurs</div>
                        <div><img src={telegramIcon} alt="" /></div>
                    </div>
                    <div className="descr">
                        All our clients get access to a <span> closed Telegram group </span> to exchange experience, useful information and help in doing business in the UAE
                    </div>
                </div>
                <div className="image mob-tg">
                </div>
            </div>

            <div className="our-services">
                <div className="title">
                    <div>Our services</div>
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
                            <div>Business structuring in new realities</div>
                            <div>Selection of the optimal zone in the UAE for company setup Development of an optimal corporate structure with a simultaneous presence in the UAE and Russia</div>
                        </div>
                        <div className="button">
                            Read more
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div>Commercial and operational</div>
                            <div>Development of a commercialization model and cash flow structure Assessment of the need to obtain licenses, permits, membership in SROs for certain types of activities</div>
                        </div>
                        <div className="button">
                            Read more
                        </div>
                    </div>
                </div>
            </div>
            <div className="reliable-partner">
                <div className="title">Reliable partner</div>
                <div className="blocks-container">
                    <div className="block">
                        <img src={companies} alt="" />
                        <div className="descr">
                            <div>20 companies</div>
                            <div>Opened and registermonthly in the UAE </div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={over} alt="" />
                        <div className="descr">
                            <div>Over 90%</div>
                            <div>of the largest Free Zones have accredited us as a partner</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={headset} alt="" />
                        <div className="descr">
                            <div>Company support</div>
                            <div>More than 100 clients trust us with business accounting in the UAE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="access">
                <div className="title">We provide access to a database of reliable counterparties in the UAE that will help you solve your problems in the following areas</div>
                <div className="blocks-container">
                    <div className="block">
                        <img src={box} alt="" />
                        <div className="descr">
                            <div>Logistics</div>
                            <div>Streamlined Supply Chain Solutions</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={world} alt="" />
                        <div className="descr">
                            <div>Customs</div>
                            <div>Hassle-Free Customs Clearance</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={document} alt="" />
                        <div className="descr">
                            <div>Licensing</div>
                            <div>Expertise in Licensing Procedures</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={legal} alt="" />
                        <div className="descr">
                            <div>Legal</div>
                            <div>Knowledgeable Legal Support</div>
                        </div>
                    </div>
                </div>
            </div>

            <GetAdvice />

            <div className="no-taxes">
                <div className="content">
                    <div className="title">
                        <div>There are no taxes on income, personal income and dividends in the UAE.</div>
                        <div>The UAE has an excellent geographical location, developed infrastructure and the national currency, which is pegged to the dollar and has not changed for 20 years</div>
                    </div>
                    <div className="list">
                        <div className="list-elem">
                            <img src={lock} alt="" />
                            <div>Does not provide tax information to other countries</div>
                        </div>
                        <div className="list-elem">
                            <img src={heart} alt="" />
                            <div>There are no international treaties on legal assistance in civil arbitration cases</div>
                        </div>
                        <div className="list-elem">
                            <img src={lineUp} alt="" />
                            <div>To support innovation, growth and business, Dubai continues to invest in smart strategies such as Dubai Data Strategy, Dubai 10X, Smart Dubai 2021, Dubai Blockchain Strategy and Dubai Pulse Platform</div>
                        </div>
                    </div>
                </div>
                <div className="procent">
                    <div className="procent-elem">
                        <div className="number">0%</div>
                        <div className="line"></div>
                        <div className="descr">Income tax up to 375,000 AED (~100,000$)</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">9%</div>
                        <div className="line"></div>
                        <div className="descr">Income tax over 375,000 AED</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">0%</div>
                        <div className="line"></div>
                        <div className="descr">Payroll tax</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">0%</div>
                        <div className="line"></div>
                        <div className="descr">Tax on dividends</div>
                    </div>
                    <div className="procent-elem">
                        <div className="number">0%</div>
                        <div className="line"></div>
                        <div className="descr">Capital gains tax</div>
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
