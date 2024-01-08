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

function MBR() {
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
                            <div className="big-title" >MBR City</div>
                            <div className="description">
                                <div className="text">MBR City is a new development area in Dubai, named after His Highness Sheikh Mohammed bin Rashid Al Maktoum, the Vice President and Prime Minister of the UAE and Ruler of Dubai. It is a high-end residential and commercial development project located in the heart of Dubai.</div>
                                <div className="text">MBR City was first announced in 2013 as part of the Dubai Plan 2021, which aims to make Dubai one of the most livable and sustainable cities in the world.</div>
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
                                <div className="text">Location: MBR City, also known as Mohammed Bin Rashid City, is a master-planned development located in the heart of Dubai, United Arab Emirates, spanning over 54 million square feet.</div>
                                <div className="text">Size: The development includes residential, commercial, and leisure spaces, with a mix of apartments, villas, and townhouses.</div>
                                <div className="text">Accessibility: MBR City is well-connected to other parts of Dubai via major roads, including Sheikh Zayed Road and Al Khail Road, and is also accessible via public transportation</div>
                                <div className="text">Architecture: MBR City features a range of architectural styles, from modern and contemporary to traditional Arabic, with a focus on luxury and sustainability.</div>
                                <div className="text">Attractions: The development offers a range of attractions and entertainment options, including shopping malls, restaurants, cafes, cinemas, and parks.</div>
                                <div className="text">Real estate: MBR City offers a range of luxurious residential properties, including apartments, villas, and townhouses, with world-class amenities and services in Dubai.</div>

                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Infrastructure</div>
                            <div className="description">
                                <div className="text">MBR City offers residents access to a range of world-class amenities, including supermarkets, restaurants, cafes, and retail outlets. The area is also home to several top-rated schools, including GEMS International School and Hartland International School. </div>
                                <div className="text">Healthcare facilities in the area are also of the highest quality, with Dubai Creek Hospital and Mediclinic Parkview Hospital located nearby.</div>
                                <div className="text">MBR City is located near the coast, and residents have easy access to some of Dubai’s most beautiful beaches. The nearest beach is Jumeirah Beach, which is just a short drive away. This popular beach is known for its crystal-clear water, white sand, and stunning views of the Burj Al Arab.</div>
                                <div className="text">Another popular beach nearby is Kite Beach, which is known for its ideal conditions for kite surfing and other water sports. The beach also features several food trucks, a running track, and a playground, making it a popular spot for families and fitness enthusiasts.</div>

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
                            <div className="text">MBR City offers a variety of shopping destinations, dining options, and entertainment venues. The area is home to several malls such as Cityland Mall and Meydan One Mall. These malls offer a wide range of international and local brands, cinemas, and restaurants, making them popular spots for residents and visitors alike.</div>
                            <div className="text">There are also several fine dining restaurants located within the area, such as the French-inspired Bistro des Arts and the contemporary Japanese restaurant Izakaya. Other popular dining options in MBR City include Zuma, Cavalli Club, and Atmosphere Lounge.</div>
                            <div className="text">For those seeking a lively nightlife, MBR City has several options to choose from. The world-renowned Cavalli Club is located in the Fairmont Hotel, offering guests an unforgettable experience with its luxurious décor, world-class DJ performances, and signature cocktails.  The nearest beach is Jumeirah Beach, which is just a short drive away. This popular beach is known for its crystal-clear water, white sand, and stunning views of the Burj Al Arab.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Nearby Communities</div>
                        <div className="description">
                            <div className="text">MBR City is located near several other popular communities in Dubai, including Downtown Dubai, Business Bay, and Dubai Hills Estate. These communities offer a range of shopping, dining, and entertainment options, as well as access to major landmarks and attractions such as the Burj Khalifa, Dubai Mall, and Dubai Opera. MBR City is also well-connected to other parts of Dubai through major highways and public transportation.</div>
                            <div className="text">Popular beach nearby is Kite Beach, which is known for its ideal conditions for kite surfing and other water sports. The beach also features several food trucks, a running track, and a playground, making it a popular spot for families and fitness enthusiasts.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Conclusion</div>
                        <div className="description">
                            <div className="text">MBR City is a rapidly developing area in Dubai that offers a luxurious and comfortable lifestyle for its residents. With a range of properties available, including villas, townhouses, and apartments, there is something for everyone in this community. The area offers easy access to major landmarks and attractions, as well as a range of amenities and facilities, including schools, healthcare facilities, shopping destinations, and outdoor activities.</div>
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

export default MBR
