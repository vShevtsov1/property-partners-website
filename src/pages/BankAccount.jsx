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


import arrowButton from "../assets/arrow-left.png";

import lock from "../assets/freezone/lock.svg";
import heart from "../assets/freezone/heart.svg";
import lineUp from "../assets/freezone/line-up.svg";

function BankAccount() {
    return (
        <div className="bank-acc-wrapper">
            <Header></Header>
            <div className="bank-acc-container">
                <div className="bank-baner-guide">
                    <div className="bank-free-baner">
                        <div className="content">
                            <div className="title">
                                <div>Company registration in the UAE, Legal and Accounting Support</div>
                                <div>Remote business registration and launch of all operational processes</div>
                            </div>
                            <div className="image">
                                <img src={accountaingBaner} alt="" />
                            </div>
                            {/* <div className="leave-a-request" onClick={setShowModal}> */}
                            <div className="leave-a-request">
                                Consultation
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="image">
                            <img src={accountaingBaner} alt="" />
                        </div>
                    </div>
                    <div className="guide-blocks">
                        <div className="guide-block">
                            <div>01</div>
                            <div>Ready-made solutions for world  import and export trading</div>
                        </div>
                        <div className="guide-block">
                            <div>02</div>
                            <div>Opening corporate accounts</div>
                        </div>
                        <div className="guide-block">
                            <div>03</div>
                            <div>Tax and accounting support</div>
                        </div>
                        <div className="guide-block">
                            <div>04</div>
                            <div>Annual support</div>
                        </div>
                    </div>
                </div>

                <div className="banc-learn-more">
                    <div className="card-container">
                        <div className="card">
                            <div className="content">
                                <div>Opening a corporate account</div>
                                <div>in AED & USD currencies</div>
                                <div className="descr">(with a mandatory average monthly balance of 5,000 USD)</div>
                            </div>
                            <div className="button">
                                Read more
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div>Opening a corporate account</div>
                                <div>in AED & USD currencies</div>
                                <div className="descr">(with a mandatory average monthly balance of 55,000 USD)</div>
                            </div>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                    </div>
                </div>

                <div className="percent-hours">
                    <div className="time-perc">
                        <div className="title">24/7</div>

                        <div className="content">
                            <div>Personal manager</div>
                            <div>is in touch and accompanies during the whole process and advises on emerging issues</div>
                        </div>
                    </div>

                    <div className="time-perc">
                        <div className="title">100%</div>

                        <div className="content">
                            <div>Transparent pricing</div>
                            <div>of the cost of setup actions and license price</div>
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
                    <div className="title">Reliable partner</div>
                    <div className="blocks-container">
                        <div className="block">
                            <img src={companies} alt="" />
                            <div className="descr">
                                <div>20 companies</div>
                                <div>Open monthly</div>
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
                                <div>4</div>
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

                <div className="fortune">
                    <div className="title">138 Fortune 500 companies open office in Dubai</div>
                    <div className="stat-container">
                        <div className="inflation">
                            <div className="inflation-title">
                                Inflation rate for the last 10 years
                            </div>
                            <img src={inflation} alt="" />
                        </div>
                        <div className="stable">
                            <div className="stable-title">
                                Stable exchange rate of the national currency
                            </div>
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
