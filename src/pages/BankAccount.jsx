import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/bankaccount.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import GetConsult from "../components/GetConsult"
import GetAdvice from "../components/GetAdvice"

import play from "../assets/bank/play.svg";
import people from "../assets/bank/people.svg";

import inflation from "../assets/bank/inflation.png";
import stable1 from "../assets/bank/stable1.png";
import stable2 from "../assets/bank/stable2.png";

import blogImage1 from "../assets/bank/blog-image1.png";
import blogImage2 from "../assets/bank/blog-image2.png";
import blogImage3 from "../assets/bank/blog-image3.png";
import blogImage4 from "../assets/bank/blog-image4.png";
import imageLink from "../assets/bank/image-link.png";
import forbse from "../assets/bank/forbse.svg";
import forbseBg from "../assets/bank/bank-bg.jpg";

import box from "../assets/freezone/box.svg";
import companies from "../assets/freezone/companies.svg";
import document from "../assets/freezone/document.svg";
import headset from "../assets/freezone/headset.svg";
import legal from "../assets/freezone/legal.svg";
import over from "../assets/freezone/over.svg";
import world from "../assets/freezone/world.svg";
import ConsulatingBaner from "../components/ConsulatingBaner"

import arrowButton from "../assets/arrow-left.png";

import lock from "../assets/freezone/lock.svg";
import heart from "../assets/freezone/heart.svg";
import lineUp from "../assets/freezone/line-up.svg";

function BankAccount() {
    const { t } = useTranslation();
    return (
        <div className="bank-acc-wrapper">
            <Header></Header>
            <div className="bank-acc-container">
                <div className="bank-baner-guide">
                    <ConsulatingBaner
                        img={accountaingBaner}
                        title={t("name102")}
                        description={[t("name103")]}
                        setShowModal="showModal"
                    />
                    <div className="guide-blocks">
                        <div className="guide-block">
                            <div>01</div>
                            <div>{t("name105")}</div>
                        </div>
                        <div className="guide-block">
                            <div>02</div>
                            <div>{t("name106")}</div>
                        </div>
                        <div className="guide-block">
                            <div>03</div>
                            <div>{t("name107")}</div>
                        </div>
                        <div className="guide-block">
                            <div>04</div>
                            <div>{t("name108")}</div>
                        </div>
                    </div>
                </div>


                <div className="banc-learn-more">
                    <div className="card-container">
                        <div className="card">
                            <div className="content">
                                <div>{t("name109.1")}</div>
                                <div>{t("name109.2")}</div>
                                <div className="descr">{t("name109.3")}</div>
                            </div>
                            <div className="button">
                                {t("name111")}
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div>{t("name110.1")}</div>
                                <div>{t("name110.2")}</div>
                                <div className="descr">{t("name110.3")}</div>
                            </div>
                            <div className="button">
                                {t("name111")}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="percent-hours">
                    <div className="time-perc">
                        <div className="title">24/7</div>
                        <div className="content">
                            <div>{t("name112")}</div>
                            <div>{t("name113")}</div>
                        </div>
                    </div>

                    <div className="time-perc">
                        <div className="title">100%</div>
                        <div className="content">
                            <div>{t("name114")}</div>
                            <div>{t("name115")}</div>
                        </div>
                    </div>
                </div>


                <div className="get-consult-block">
                    <GetConsult />
                </div>

                <div className="forbse-container">
                    <div className="forbse">
                        <div className="bg">

                            <div className="bout-us">About Us</div>
                            <div className="forbse">
                                <img src={forbse} alt="" />
                            </div>
                            <div className="read">
                                <img src={imageLink} alt="" />
                                Read
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
                    <div className="title">{t("name121")}</div>
                    <div className="blocks-container">
                        <div className="block">
                            <img src={box} alt="" />
                            <div className="descr">
                                <div>{t("name122")}</div>
                                <div>{t("name125")}</div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={world} alt="" />
                            <div className="descr">
                                <div>{t("name123")}</div>
                                <div>{t("name126")}</div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={document} alt="" />
                            <div className="descr">
                                <div>{t("name124")}</div>
                                <div>{t("name127")}</div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={legal} alt="" />
                            <div className="descr">
                                <div>{t("name128")}</div>
                                <div>{t("name129")}</div>
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

                <div className="interesting-facts">
                    <div className="title">{t("name147")}</div>
                    <div className="block-fact-container">
                        <div className="block-fact">
                            <div className="elem">
                                <div>01</div>
                                <div>{t("name148")}</div>
                            </div>
                            <div className="elem">
                                <div>02</div>
                                <div>{t("name149")}</div>
                            </div>
                            <div className="elem">
                                <div>03</div>
                                <div>{t("name150")}</div>
                            </div>
                            <div className="elem">
                                <div>04</div>
                                <div>{t("name151")}</div>
                            </div>
                        </div>
                        <div className="block-fact">
                            <div className="elem">
                                <div>05</div>
                                <div>{t("name152")}</div>
                            </div>
                            <div className="elem">
                                <div>06</div>
                                <div>{t("name153")}</div>
                            </div>
                            <div className="elem">
                                <div>07</div>
                                <div>{t("name154")}</div>
                            </div>
                            <div className="elem">
                                <div>08</div>
                                <div>{t("name155")}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fortune">
                    <div className="title">{t("name156")}</div>
                    <div className="stat-container">
                        <div className="inflation">
                            <div className="inflation-title">{t("name157")}</div>
                            <img src={inflation} alt="" />
                        </div>
                        <div className="stable">
                            <div className="stable-title">{t("name158")}</div>
                            <div className="image-cont">
                                <img src={stable1} alt="" />
                                <img src={stable2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <GetConsult />

                <div className="blog">
                    <div className="title">Blog</div>

                    <div className="blog-card-container">
                        <div className="blog-card">
                            <div className="blog-content">
                                <div>How to apply for a student visa in the UAE</div>
                                <div>20.11.2023</div>
                            </div>
                            <div className="blog-image">
                                <img src={blogImage1} alt="" />
                                <img src={imageLink} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="blog-card-container">
                        <div className="blog-card">
                            <div className="blog-content">
                                <div>How to apply for a student visa in the UAE</div>
                                <div>20.11.2023</div>
                            </div>
                            <div className="blog-image">
                                <img src={blogImage2} alt="" />
                                <img src={imageLink} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="blog-card-container">
                        <div className="blog-card">
                            <div className="blog-content">
                                <div>The new Dubai Hills neighborhood – should investors consider?</div>
                                <div>13.11.2023</div>
                            </div>
                            <div className="blog-image">
                                <img src={blogImage3} alt="" />
                                <img src={imageLink} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="blog-card-container">
                        <div className="blog-card">
                            <div className="blog-content">
                                <div>How to open an account with First Abu Dhabi Bank (FAB)</div>
                                <div>06.11.2023</div>
                            </div>
                            <div className="blog-image">
                                <img src={blogImage4} alt="" />
                                <img src={imageLink} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div >
    )
}

export default BankAccount
