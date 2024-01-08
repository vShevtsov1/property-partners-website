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

function DamacHills() {
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
                            <div className="big-title">Damac Hills</div>
                            <div className="description">
                                <div className="text">Damac Hills is a prestigious and popular district of Dubai, one of the largest projects of the famous developer Damac Properties. It is a large-scale and multifunctional community with a developed commercial and social infrastructure. The area offers a very wide selection of real estate, which is suitable for buyers.</div>
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
                                <div className="text">The Damac Hills district has a strategically advantageous location - it is surrounded by developed communities, has access to the main highways of Dubai and tourist attractions.  </div>
                                <div className="text">Communities such as Arabian Ranches, Dubai Motor City, Mudon, Dubai Investments Park, Dubai Sports City are located next to Damac Hills. The trip to them will take no more than 5-10 minutes. This location makes Damac Hills ideal for families, employees of local companies, expats and other categories of buyers.</div>
                                <div className="text">The area is suitable for car owners. In just 10-15 minutes by car, you can reach Sheikh Zayed Road and Emirates Road, which connect all areas of Dubai. Specially designated places will not cause any difficulties for parking your own car.</div>
                                <div className="text">There are regular bus routes throughout the area, allowing you to quickly get to the right places. There is no subway station in the district - it is located 20 minutes away. The trip to popular tourist areas will also not take much time: Downtown Dubai and Dubai Marina are only 25-30 minutes away.</div>

                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${imageUrls[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">Infrastructure</div>
                            <div className="description">
                                <div className="text">The developer of Damac Properties took care of the integrated development of the territory. Along with residential clusters, social, commercial and entertainment infrastructure facilities were built.</div>
                                <div className="text">There are several kindergartens on the territory of the district, among which there are institutions with international training. Families with older children will appreciate the proximity to schools: some of them are located within walking distance. Higher education institutions are located in nearby areas: the trip to them will take 15-20 minutes.</div>
                                <div className="text">You can get medical care in equipped medical centers and hospitals. The closest ones are 10-15 minutes away: for example, Emirates Hospital and Mediclinic Parkview Hospital.  </div>
                                <div className="text">Damac Hills has a very developed public infrastructure. On the territory of the district there are restaurants, cafes and eaters, banks, cinemas, gyms and fitness centers, pharmacies, supermarkets and other outlets. The area is popular with families with children of all ages for a reason.</div>

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
                            <div className="text">The main attraction of Damac Hills, which attracts many residents and guests from other areas, is the Trump International Club premium golf club. </div>
                            <div className="text">Club guests can learn to play, play on an 18-hole course on their own, visit the club or use other premium services. </div>
                            <div className="text">A very popular location in Damac Hills is the artificial beach of Malibu Bay with a unique wave pool, which covers an area of almost 2,300 square meters.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Real estate in Damac Hills</div>
                        <div className="description">
                            <div className="text">Damac Hills is a premium community, but the value of real estate remains at an affordable level (although it demonstrates regular growth). There are several communities in the district, each of which offers different types of real estate.</div>
                            <div className="text">The buyers can choose from classic studios and apartments with 1-4 bedrooms, modern villas with 3-6 bedrooms, equipped townhouses and villas.</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="title">Investment attractiveness</div>
                        <div className="description">
                            <div className="text">According to statistics, the highest profitability indicators are demonstrated by studios and 1-bedroom apartments in Damac Hills - these types of real estate are often chosen by investors who rely exclusively on stable earnings. The payback of villas is slightly smaller, about 7-8%, but this asset is more liquid, given the rapidly increasing popularity of the area. </div>
                            <div className="text">Real estate in Damac Hills is ideal not only for investment, but also for personal residence. Having excellent transport accessibility and being located in a developed area, which is far from the noisy metropolis, Damac Hills has long won the status of a comfortable and quiet area.</div>
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

export default DamacHills
