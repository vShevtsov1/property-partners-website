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

function JLT() {
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
                            <div className="big-title">JLT</div>
                            <div className="description">
                                <div className="text">Jumeirah Lake Towers (JLT) is a large mixed-use development located in the heart of Dubai, United Arab Emirates. It is a master-planned development that consists of 80 high-rise towers, a cluster of man-made lakes, and several commercial and residential buildings.The development is designed to offer residents and visitors a high-quality lifestyle, with its focus on modern living and state-of-the-art facilities.</div>
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
                                <div className="text">Location: Damac Lagoons is situated in the heart of Dubai, close to Dubai International Airport, Dubai Festival City, and Dubai Creek. It is easily accessible via road and public transportation, making it a convenient location for residents and commuters alike.</div>
                                <div className="text">Architecture: Damac Lagoons has a modern and contemporary design, with a mix of low-rise residential buildings and villas that offer stunning waterfront views. The area is designed to be pedestrian-friendly, with several walkways and green spaces for residents to enjoy.</div>
                                <div className="text">Real estate: Damac Lagoons offers a range of luxury residential properties, including apartments and villas, with world-class amenities and services. The area is designed to offer a unique lifestyle that combines luxury living with natural beauty and tranquility.</div>
                                <div className="text">Amenities: Damac Lagoons offers several amenities and facilities for residents, including a clubhouse, swimming pools, fitness center, and spa. The area also has several parks and open spaces for recreational activities, as well as a marina for water sports enthusiasts.</div>

                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Infrastructure</div>
                            <div className="description">
                                <div className="text">Jumeirah Lakes Towers (JLT) is a mixed-use development located in the heart of New Dubai, close to Dubai Marina.</div>
                                <div className="text">The development consists of 80 towers, divided into 26 clusters.</div>
                                <div className="text">The community offers residential, commercial, and retail properties, with over 5000 companies operating within the area.</div>
                                <div className="text">JLT features a number of amenities including parks, running tracks, restaurants, cafes, supermarkets, and shops.</div>
                                <div className="text">The community is known for its scenic views of two championship golf courses, lakes, and Dubai Marina skyline.</div>
                                <div className="text">Public transportation is easily accessible, with two metro stations and bus services connecting JLT to the rest of Dubai.</div>

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
                            <div className="text">Jumeirah Lake Towers offers a wide variety of shopping, dining, and entertainment options. The area is home to several shopping centers, including the Dubai Marina Mall and the Ibn Battuta Mall. These malls offer a range of high-end and affordable stores, as well as restaurants and cafes.</div>
                            <div className="text">For dining, residents can enjoy a diverse range of cuisines, from Middle Eastern to Asian to Western. Some popular restaurants in the area include The Cheesecake Factory, Nando’s, Wagamama, and Brothaus Bakery.</div>
                            <div className="text">In terms of nightlife, Jumeirah Lake Towers has a thriving bar and nightclub scene. Some popular venues include Lock Stock & Barrel, McGettigan’s, and Stereo Arcade. The area also has a number of rooftop bars and lounges with stunning views of the Dubai skyline.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Nearby Communities</div>
                        <div className="description">
                            <div className="text">Jumeirah Lake Towers is located in close proximity to several other popular areas in Dubai, such as Dubai Marina, Jumeirah Beach Residence, and Emirates Hills. These communities offer a range of amenities, attractions, and activities for residents to enjoy. There are also several transportation options available for those looking to explore other areas of the city, including the Dubai Metro, taxis, and buses.</div>
                            <div className="text">Jumeirah Lake Towers is located near some of the best beaches in Dubai. The most popular beaches in the area are Jumeirah Beach and the public beach at Dubai Marina. Both beaches offer pristine white sand, crystal-clear water, and plenty of facilities for visitors.</div>
                            <div className="text">Jumeirah Beach also features a range of water sports and activities, including jet skiing, parasailing, and banana boat.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Conclusion</div>
                        <div className="description">
                            <div className="text">Overall, Jumeirah Lake Towers is a vibrant and dynamic area of Dubai that offers a range of amenities, attractions, and activities for residents to enjoy. With its prime location, high-quality real estate options, and abundance of amenities, Jumeirah Lake Towers is an ideal place to live or invest in. The area is popular with young professionals and families alike, and offers a diverse and multicultural community. Whether you’re looking for a place to call home or a sound investment opportunity, Jumeirah Lake Towers is definitely worth considering.</div>
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

export default JLT
