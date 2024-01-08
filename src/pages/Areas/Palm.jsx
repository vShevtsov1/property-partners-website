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

function Palm() {
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
                            <div className="big-title" >Palm Jumeirah</div>
                            <div className="description">
                                <div className="text">The Palm Jumeirah is an artificial island in Dubai, shaped like a palm tree and located off the coast of the city. It is one of the most iconic and recognizable landmarks in Dubai, known for its luxurious properties and stunning views of the Arabian Gulf.</div>
                                <div className="text">The Palm Jumeirah was developed by Nakheel Properties, one of Dubai’s largest property developers, and was completed in 2006. </div>
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
                                <div className="text">Location: Palm Jumeirah is a man-made island located off the coast of Dubai, United Arab Emirates, in the Persian Gulf.</div>
                                <div className="text">Size: The island is shaped like a palm tree and spans over 5 square kilometers, making it one of the largest man-made islands in the world.</div>
                                <div className="text">Accessibility: Palm Jumeirah is accessible by road, with several bridges connecting it to the mainland, as well as via the Dubai Monorail.</div>
                                <div className="text">Architecture: Palm Jumeirah is known for its impressive architecture, featuring high-end luxury hotels, apartments, and villas, many of which offer stunning views of the sea and the city skyline.</div>
                                <div className="text">Attractions: The island offers a range of attractions and entertainment options, including beaches, water sports, shopping malls, and theme parks like Aquaventure Waterpark.</div>
                                <div className="text">Landmarks: Palm Jumeirah is home to several iconic landmarks, including the Atlantis, The Palm hotel and resort, and the Palm Jumeirah Monorail.</div>

                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Infrastructure</div>
                            <div className="description">
                                <div className="text">The Palm Jumeirah offers a wide range of amenities for residents, including supermarkets, restaurants, cafes, and retail outlets. The Palm Jumeirah Boardwalk, which is a popular destination for residents and visitors, is lined with a variety of restaurants and cafes.</div>
                                <div className="text">There are several schools in and around the Palm Jumeirah, including the Dubai British School, the American School of Dubai, and the Wellington International School.</div>
                                <div className="text">Healthcare facilities on the Palm Jumeirah include the Al Das Medical Clinic and the Al Das Medical Centre. There are also several hospitals and medical centers located in nearby areas such as Dubai Marina and Dubai Media City.</div>
                                <div className="text">The Palm Jumeirah offers a wide range of amenities for residents, including supermarkets, restaurants, cafes, and retail outlets. </div>
                                <div className="text">Attractions: The island offers a range of attractions and entertainment options, including beaches, water sports, shopping malls, and theme parks like Aquaventure Waterpark.</div>
                                <div className="text">The Palm Jumeirah Boardwalk, which is a popular destination for residents and visitors, is lined with a variety of restaurants and cafes.</div>

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
                            <div className="text">The Palm Jumeirah is home to several notable landmarks, including the Atlantis, The Palm hotel, which features a waterpark, aquarium, and several restaurants and bars. The Palm Jumeirah also has several parks and green spaces, including Al Ittihad Park, which features a playground, jogging track, and a variety of plants and trees.</div>
                            <div className="text">There are also plenty of outdoor activities available on The Palm Jumeirah, including water sports such as jet skiing, parasailing, and wakeboarding. The Palm Jumeirah Boardwalk is a popular spot for walking, jogging, and cycling, with stunning views of the Dubai skyline and the Arabian Gulf. Other nearby attractions include the Dubai Marina, Ski Dubai at Mall of the Emirates, and the Dubai Miracle Garden.</div>
                            <div className="text">The Palm Jumeirah offers a wide range of outdoor activities, fitness options, and beauty services to residents and visitors. There are several gyms and fitness centers located on the island, including Fitness First and Fairmont The Palm’s Willow Stream Spa & Fitness Center. There are also plenty of opportunities for outdoor activities, such as walking or cycling.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Nearby Communities</div>
                        <div className="description">
                            <div className="text">The Palm Jumeirah is situated near several other communities in Dubai, including Dubai Marina, Jumeirah Beach Residence, and Al Sufouh. Dubai Marina is just a short drive away and offers a similar lifestyle to The Palm Jumeirah, with luxury apartments, high-end shopping, and dining options. Jumeirah Beach Residence is another beachfront community that is popular with residents and visitors. Al Sufouh is located to the south of The Palm Jumeirah and is primarily a residential area. </div>
                            <div className="text">The Palm Jumeirah is well-connected to the rest of Dubai via Sheikh Zayed Road, which runs parallel to the island. Public transportation options include buses and taxis, and there are plans to build a monorail system that will connect The Palm Jumeirah to the Dubai Metro.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Conclusion</div>
                        <div className="description">
                            <div className="text">The Palm Jumeirah is one of Dubai’s most prestigious and sought-after residential areas, offering a luxurious beachfront lifestyle with stunning views and top-notch amenities. While the cost of living and real estate prices are high, the area offers a unique and unparalleled experience that is highly desirable to many. The Palm Jumeirah is a great place to live for those who can afford it and want to experience the best of what Dubai has to offer.</div>
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

export default Palm
