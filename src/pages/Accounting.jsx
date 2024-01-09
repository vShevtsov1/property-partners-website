import "../styles/accounting.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import visa from "../assets/visa.jpg"
import emiratesId from "../assets/emiratesId.jpg"
import labourCard from "../assets/labourCard.png"
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

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import ConsulatingBaner from "../components/ConsulatingBaner"


const Accounting = () => {
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
    return (<div className="accounting-wrapper">
        <Header />
        <div className="accounting-container">
            <div className="accounting-guide">
                <ConsulatingBaner
                    img={accountaingBaner}
                    title="Employment of employees in the UAE and obtaining a residence permit"
                    description={['Registration of employees in a company registered in the Mainland or Free Zone']}
                />
                <div className="guide-blocks">
                    <div className="guide-block">
                        <div>{t("j_text1")}</div>
                    </div>
                    <div className="guide-block">
                        <div>{t("j_text2")}</div>
                    </div>
                    <div className="guide-block">
                        <div>{t("j_text3")}</div>
                    </div>
                    <div className="guide-block">
                        <div>{t("j_text4")}</div>
                    </div>
                </div>
            </div>

            <div className="cost-of-epmloyment">
                <div className="title">
                    <div>{t("j_title2")}</div>
                    <div>{t("j_title3")}</div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <div className="content">
                            <div className="count">
                                01
                            </div>
                            <div className="title-card">
                                <div>{t("j_title4")}</div>
                                <div>{t("j_title5")}</div>
                            </div>
                        </div>
                        <div className="image">
                            <img src={labourCard} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="count">
                                02
                            </div>
                            <div className="title-card">
                                <div>{t("j_title8")}</div>
                                <div>{t("j_title9")}</div>
                            </div>
                        </div>
                        <div className="image">
                            <img src={emiratesId} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="count">
                                03
                            </div>
                            <div className="title-card">
                                <div>{t("j_title6")}</div>
                                <div>{t("j_title7")}</div>
                            </div>
                        </div>
                        <div className="image">
                            <img src={visa} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="free-consult">
                <div className="image">
                    <img src={team[randomNumber].image} alt="" />
                </div>
                <div className="free-consult-form">
                    <div className="contact-us-form">
                        <div className="texts">
                            <div>{t("j_title41")}</div>
                        </div>
                        <div className="form">
                            <div className="form-input">
                                <input placeholder={t("j_title42")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-input">
                                <input placeholder={t("j_title43")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-input">
                                <input placeholder={t("j_title44")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-input">
                                <input placeholder={t("j_title45")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM11 14V16H13V14H11ZM8.567 8.813L10.529 9.206C10.5847 8.92743 10.7183 8.6704 10.9144 8.46482C11.1104 8.25923 11.3608 8.11354 11.6364 8.04471C11.912 7.97587 12.2015 7.98671 12.4712 8.07597C12.7409 8.16523 12.9797 8.32924 13.1598 8.54891C13.34 8.76858 13.454 9.03489 13.4887 9.31684C13.5234 9.5988 13.4773 9.8848 13.3558 10.1416C13.2343 10.3984 13.0423 10.6154 12.8023 10.7673C12.5623 10.9193 12.2841 11 12 11H11V13H12C12.6628 12.9998 13.3119 12.8114 13.8718 12.4568C14.4317 12.1021 14.8794 11.5958 15.1628 10.9967C15.4462 10.3976 15.5537 9.73028 15.4727 9.07248C15.3917 8.41467 15.1257 7.79337 14.7055 7.28085C14.2852 6.76833 13.7281 6.38567 13.0989 6.17736C12.4698 5.96906 11.7944 5.94368 11.1513 6.10418C10.5083 6.26468 9.92403 6.60447 9.46653 7.084C9.00903 7.56354 8.69709 8.16312 8.567 8.813Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-button">
                                {t("j_title46")}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="agree-terms">
                            {t("j_title47")}
                        </div>
                    </div>
                </div>
            </div>

            <div className="lower-blocks-additional">
                <div className="lower-blocks-container">
                    <div className="lower-block">
                        <div className="count">
                            <div>1</div>
                            <div>{t("j_title12")}</div>
                        </div>

                        <div className="text-container">
                            <div className="left-text">
                                <div className="title">{t("j_title13")}</div>
                                <div className="secr-box">
                                    <div className="description">{t("j_title14")}</div>
                                    <div className="description">{t("j_title14")}</div>
                                </div>
                            </div>

                            <div className="right-text">
                                <div className="title-box">
                                    <div className="title">{t("j_title15")}</div>
                                    <div className="description">{t("j_title16")}</div>
                                </div>
                                <div className="title-box">
                                    <div className="title">{t("j_title17")}</div>
                                    <div className="description">{t("j_title18")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-block">
                        <div className="count">
                            <div>2</div>
                            <div>{t("j_title23")}</div>
                        </div>
                        <div className="text-container">
                            <div className="left-text">
                                <div className="title">{t("j_title20")}</div>
                                <div className="secr-box">
                                    <div className="description">{t("j_title21")}</div>
                                    <div className="description">{t("j_title22")}</div>
                                    <div className="description">{t("j_title21")}</div>
                                </div>
                            </div>

                            <div className="right-text">
                                <div className="title-box">
                                    <div className="title">{t("j_title28")}</div>
                                    <div className="description">{t("j_title49")}</div>
                                </div>
                                <div className="title-box">
                                    <div className="title">{t("j_title30")}</div>
                                    <div className="description">{t("j_title31")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-block">
                        <div className="count">
                            <div>3</div>
                            <div>{t("j_title33")}</div>
                        </div>
                        <div className="text-container">
                            <div className="left-text">
                                <div className="title">{t("j_title31")}</div>
                                <div className="secr-box">
                                    <div className="description">{t("j_title25")}</div>
                                    <div className="description">{t("j_title26")}</div>
                                    <div className="description">{t("j_title51")}</div>
                                </div>
                            </div>

                            <div className="right-text">
                                <div className="title-box">
                                    <div className="title">{t("j_title28")}</div>
                                    <div className="description">{t("j_title49")}</div>
                                </div>
                                <div className="title-box">
                                    <div className="title">{t("j_title30")}</div>
                                    <div className="description">{t("j_title31")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-block">
                        <div className="count">
                            <div>4</div>
                            <div>{t("j_title50")}</div>
                        </div>
                        <div className="text-container">
                            <div className="left-text">
                                <div className="title">{t("j_title34")}</div>
                                <div className="secr-box">
                                    <div className="description">{t("j_title35")}</div>
                                </div>
                            </div>

                            <div className="right-text">
                                <div className="title-box">
                                    <div className="title">{t("j_title36")}</div>
                                    <div className="description">{t("j_title37")}</div>
                                </div>
                                <div className="title-box">
                                    <div className="title">{t("j_title38")}</div>
                                    <div className="description">{t("j_title31")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
        <Footer />
    </div>
    )
}

export default Accounting
