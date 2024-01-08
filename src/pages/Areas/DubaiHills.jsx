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

function DubaiHills() {
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
                            <div className="big-title">Dubai Hills</div>
                            <div className="description">
                                <div className="text">Dubai Hills is one of the new prestigious areas of Dubai, having all the advantages of country life and located in close proximity to the central part of the emirate. It is part of Mohammed Bin Rashid City, a multifunctional and developed area. The large green area of Dubai Hills is ideal for people who want to live away from the city hustle.</div>
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
                                <div className="text">Representing a community within the MBR City district, Dubai Hills Estate has a favorable location: you can get to it quickly from any part of Dubai, as well as vice versa. Excellent transport accessibility is ensured by the proximity to the highway that runs along the area.  </div>
                                <div className="text">Dubai Hills is divided into three separate zones, and each of them has its own characteristics. The first zone is the central part with a picturesque golf course, which is surrounded by prestigious mansions and villas. The second zone is a medium-rise building of residential complexes, commercial facilities and a promenade. The third zone is a denser building, consisting of villas and townhouses.</div>
                                <div className="text">According to the plans of developers to equip transport infrastructure, subway stations will be built on the territory of Dubai Hills Estate in the near future. </div>
                                <div className="text">Public transport stops are also located in the immediate vicinity of the area. Car owners will be able to easily reach famous areas of Dubai: the road to Downtown Dubai will take about 20 minutes, the trip to Dubai International Airport will take about 25 minutes, and the journey to the artificial island of Palm Jumeirah will take about 35 minutes.</div>

                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Infrastructure</div>
                            <div className="description">
                                <div className="text">Dubai Hills Estate is positioned as a quiet, peaceful and family-oriented area, which is reflected in its infrastructure. </div>
                                <div className="text">The main part of the district's infrastructure is a 7-kilometer boulevard, where retail outlets, entertainment facilities, supermarkets, cafes and restaurants are located: every resident will be able to find something to their liking.</div>
                                <div className="text">The area is very popular among families with children: there are schools and kindergartens located within walking distance.</div>
                                <div className="text">There are also educational institutions in the surrounding areas: even including institutions for higher education.</div>
                                <div className="text">Polyclinics, medical centers, hospitals are within walking distance from the northern and southern parts of Dubai Hills. The developer paid special attention to the arrangement of sports grounds: on the territory of the district there are open and closed gyms, fitness centers, tennis courts and football fields.</div>

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
                            <div className="text">The main attraction of Dubai Hills is the prestigious 18-hole golf course - one of the world's most famous courses, ideal for both craftsmen and beginners. </div>
                            <div className="text">There are many park spaces in the area: landscaped areas will be an excellent solution for family outdoor recreation, picnics and barbecues. A large shopping center Dubai Hills Mall is also located in the community. </div>
                            <div className="text">Dubai Hills is a worthy example of a classic country community. There are no famous tourist attractions here, which makes it an attractive option for life.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Real estate in Dubai Hills</div>
                        <div className="description">
                            <div className="text">Dubai Hills offers a wide selection of real estate: the objects differ in area, format and cost. This variability allows you to choose housing for a certain budget and taste.</div>
                            <div className="text">Apartments with 1-3 bedrooms are common in medium-storey residential complexes. Those who want to fully immerse themselves in the atmosphere of country life can see options with functional townhouses. The main part of the development of Dubai Hills is luxury villas - the best solution for personal living or investment.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Investment attractiveness</div>
                        <div className="description">
                            <div className="text">One of the main features of the Dubai Hills Estate area is the huge popularity of residential projects. Real estate here is bought by locals, expats, investors and people who want to move to Dubai forever. Such demand affects the cost, which has increased by almost 10% in less than a year. Confident growth rates prove the high investment potential of real estate in Dubai Hills. </div>
                            <div className="text">Real estate in Dubai Hills is great for generating income from risk-free long-term rentals. At the same time, developers try to master the territory of the district as much as possible.</div>
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

export default DubaiHills
