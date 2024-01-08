import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "../../styles/business.scss"
import arrowLeft from "../../assets/arrow-left-fill.svg";
import share from "../../assets/share.svg";
import GetConsult from "../../components/GetConsult";
import { useState } from "react";

import alekseiShyianName from "../../assets/teams/aleksei-shyian-min.jpg";
import alekseiShyian from "../../assets/teams/qr/aleksei-shyian.png";
import tykhovaTatianaName from "../../assets/teams/tykhova-tatiana-min.jpg";
import tykhovaTatiana from "../../assets/teams/qr/tykhova-tatiana.png";
import kristinaSokolovskayaName from "../../assets/teams/kristina-sokolovskaya-min.jpg";
import kristinaSokolovskaya from "../../assets/teams/qr/kristina-sokolovskaya.png";
import pavelDyninName from "../../assets/teams/pavel-dynin-min.jpg";
import propertyPartnersDynin from "../../assets/teams/qr/property-partners-dynin.png";
import annaHorshunovaName from "../../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../../assets/teams/qr/anna-horshunova.png";
import allaGerassimovaName from "../../assets/teams/alla-gerassimova-min.jpg";
import allaGerassimova from "../../assets/teams/qr/alla-gerassimova.png";
import dmitriyKoltsovName from "../../assets/teams/dmitriy-koltsov-min.jpg";
import dmitriyKoltsov from "../../assets/teams/qr/dmitriy-koltsov.png";
import alexLogachevName from "../../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../../assets/teams/qr/qr-alex.svg";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Marina() {
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

    const imageUrls = [
        '/src/assets/Areas/apart-pages/palm1.png',
        '/src/assets/Areas/apart-pages/palm2.png',
        '/src/assets/Areas/apart-pages/palm3.png',
    ];
    return (
        <div className="areas-page-wrapper">
            <Header />
            <div className="areas-page-container">
                <div className="back-container">
                    <Link to={"/areas"}>
                        <div className="back">
                            <img src={arrowLeft} alt="" />
                            back
                        </div>
                    </Link>
                    <div className="share">
                        <img src={share} alt="" />
                    </div>
                </div>

                <div className="main-content">
                    <div className="content-left">
                        <div className="block">
                            <div className="big-title">Dubai Marina</div>
                            <div className="description">
                                <div className="text">Dubai Marina is a vibrant waterfront community in Dubai, United Arab Emirates (UAE). It’s located along the Persian Gulf shoreline.</div>
                                <div className="text">The Dubai Marina district is a man-made canal city, built around a two-mile stretch of artificial canal. It’s also home to the world’s tallest residential building, the Princess Tower, as well as the second-tallest residential building, the 23 Marina.</div>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[0]})` }}
                                ></div>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[1]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Location Features</div>
                            <div className="description">
                                <div className="text">Location: Dubai Marina is a man-made canal city located along the Persian Gulf shoreline in Dubai, United Arab Emirates.</div>
                                <div className="text">Size: The area spans over 50 million square feet and is one of the largest waterfront communities in the world.</div>
                                <div className="text">Architecture: Dubai Marina is known for its impressive architecture, featuring high-rise buildings and luxury towers, many of which offer stunning views of the marina and the sea.</div>
                                <div className="text">Accessibility: The area is well-connected to other parts of Dubai via major roads, including Sheikh Zayed Road and the Dubai Metro.</div>
                                <div className="text">Marina: Dubai Marina is home to a large yacht marina, which can accommodate over 500 boats and yachts, making it a popular destination for water sports enthusiasts.</div>
                                <div className="text">Entertainment: The area offers a wide range of entertainment options, including restaurants, cafes, and shopping malls like Dubai Marina Mall. It is a popular tourist destination, with many visitors coming to experience its attractions, events, and entertainment.</div>

                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Infrastructure</div>
                            <div className="description">
                                <div className="text">Dubai Marina is home to several popular shopping destinations, including Dubai Marina Mall, which features over 140 stores and restaurants, and the nearby Mall of the Emirates, which is one of the largest malls in the world. Other popular shopping destinations in the area include Ibn Battuta Mall, The Beach at JBR, and Marina Walk.</div>
                                <div className="text">Dubai Marina is known for its diverse culinary scene, offering a range of cuisines from around the world. From fine dining restaurants to casual cafes, there are numerous dining options available in the area, including Italian, Japanese, Indian, Lebanese, and more.</div>
                                <div className="text">Dubai Marina is also known for its vibrant nightlife scene, with several bars, lounges, and nightclubs located in the area. Some of the most popular nightlife spots in Dubai Marina include Zero Gravity, Pier 7, and Lock, Stock & Barrel.</div>
                                <div className="text">Accessibility: The area is well-connected to other parts of Dubai via major roads, including Sheikh Zayed Road and the Dubai Metro.</div>
                                <div className="text">Dubai Marina offers a range of fitness centers and gyms, including Fitness First, Gold’s Gym, and Fitness Factory.</div>

                                <div className="broker">
                                    <div className="image">
                                        <img src={team[randomNumber].image} alt="" />
                                    </div>

                                    <div className="get-consult-form">
                                        <div className="content">
                                            <div className="title-description">
                                                <div className="title">
                                                    <div>Real estate broker</div>
                                                    <div>Anna Horshunova</div>
                                                </div>
                                                <div className="description">
                                                    Off-plan properties, Investments, Commercial property, Mortgage
                                                </div>
                                            </div>

                                            <div className="buttons">
                                                <div className="button-white">
                                                    Contact agent
                                                </div>

                                                <div className="button-brown">
                                                    Request
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${imageUrls[0]})` }}
                        ></div>
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${imageUrls[1]})` }}
                        ></div>
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${imageUrls[2]})` }}
                        ></div>

                        <div className="broker">
                            <div className="image">
                                <img src={team[randomNumber].image} alt="" />
                            </div>

                            <div className="get-consult-form">
                                <div className="content">
                                    <div className="title-description">
                                        <div className="title">
                                            <div>Real estate broker</div>
                                            <div>Anna Horshunova</div>
                                        </div>
                                        <div className="description">
                                            Off-plan properties, Investments, Commercial property, Mortgage
                                        </div>
                                    </div>

                                    <div className="buttons">
                                        <div className="button-white">
                                            Contact agent
                                        </div>

                                        <div className="button-brown">
                                            Request
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lower-container">
                    <div className="block">
                        <div className="title">Attractions</div>
                        <div className="description">
                            <div className="text">There are several outdoor activities available in Dubai Marina, including water sports such as jet skiing, parasailing, and wakeboarding. The area is also home to several parks and green spaces, including Dubai Marina Promenade and Jumeirah Beach Park, which offer walking paths and scenic views.</div>
                            <div className="text">Dubai Marina is home to several notable landmarks and attractions, including the Dubai Marina Yacht Club, which offers yacht rentals and charters, and the Dubai Marina Walk, a pedestrian-friendly promenade with a variety of shops, cafes, and restaurants. The Dubai Eye, one of the world’s largest observation wheels, is also located in Dubai Marina.</div>
                            <div className="text">In addition to Dubai Marina Promenade and Jumeirah Beach Park, there are several other parks and green spaces in the area, including the Al Sufouh Park and Emirates Golf Club, which features a championship golf course and stunning views of Dubai Marina.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Nearby Communities</div>
                        <div className="description">
                            <div className="text">Dubai Creek Harbour is located close to several other communities in Dubai. The neighboring communities include the Dubai Festival City, Business Bay, and Downtown Dubai. The connectivity to these areas is excellent, with various modes of transportation available, including the Dubai Metro, buses, and taxis.</div>
                            <div className="text">Dubai Creek Harbour is located along the Dubai Creek, and while it doesn’t have any beaches of its own, it is located near several popular beaches. The closest beach to the area is Al Mamzar Beach Park, which is just a short drive away. The park has five beaches, which offer a variety of activities, including swimming, sunbathing, and water sports.</div>
                            <div className="text">Jumeirah Beach is another popular beach destination that is easily accessible from Dubai Creek Harbour. The beach is known for its white sand, clear water, and stunning views of the Burj Al Arab, one of Dubai’s most famous landmarks.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Conclusion</div>
                        <div className="description">
                            <div className="text">Dubai Marina is a vibrant and cosmopolitan community located in the heart of Dubai.</div>
                            <div className="text">Dubai Marina is a popular choice for both living and investing, due to its central location, high-end properties, and numerous amenities. It is a great place for those who value an active lifestyle, with plenty of opportunities for outdoor activities and sports. Overall, Dubai Marina offers a unique and desirable living experience in one of the most dynamic cities in the world.</div>
                        </div>
                    </div>
                </div>

                <div className="get-consult-box">
                    <GetConsult></GetConsult>
                </div>
            </div>
            <Footer></Footer>
        </div >
    )
}

export default Marina
