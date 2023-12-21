import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Feedback from "../components/Feedback.jsx";
import "../styles/agent.css"
import brokerTest from "../assets/teams/alla-gerassimova-min.jpg";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Agent = () => {
    const {state} = useLocation();
    const { t } = useTranslation();

    const member  = state.memberObject
    return (<div className={"agent"}>
        <Header/>
        <Feedback/>
        <div className="content">
            <div className="header">
                <div className="back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 13V20L4 12L12 4V11H20V13H12Z" fill="white"/>
                    </svg>
                    {t("q_but")}
                </div>
                <div className="socials">

                    {member.social.facebook&&<svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.facebook)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z"
                            fill="#191C38"
                        />
                    </svg>}
                    {member.social.instagram&&
                        <svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.instagram)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <path
                                d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                                fill="#191C38"/>
                        </svg>}
                    {member.social.whatsapp&&
                        <svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.whatsapp)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <path
                                d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                                fill="#191C38"/>
                        </svg>}
                    {member.social.telegram&&
                        <svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.telegram)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
                                fill="#191C38"/>
                        </svg>}

                </div>
            </div>
            <div className="broker-info">

                <div className={"images-container"} >
                    <img style={{
                    width:"100%",
                    height:"100%"
                }} src={member.image}/>
                <img className={"qr-code"} src={member.qr}/>
                </div>
                <div className="broker-information">
                    <div className="general-info">
                        <div className="name">
                            <div>{member.name}</div>
                            <div>{member.position}</div>
                        </div>
                        <div className="buttons">
                            <div className="button">{t("q_text3")}</div>
                            <div className="button">{t("q_text4")}</div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="texts">
                            <div>{t("q_text5")}</div>
                            <div>{t("q_text6")}</div>
                        </div>
                        <div className="form">
                            <div className="form-input">
                                <input type="text" placeholder={t("q_text7")}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M20 22.5H4V20.5C4 19.1739 4.52678 17.9021 5.46447 16.9645C6.40215 16.0268 7.67392 15.5 9 15.5H15C16.3261 15.5 17.5979 16.0268 18.5355 16.9645C19.4732 17.9021 20 19.1739 20 20.5V22.5ZM12 13.5C11.2121 13.5 10.4319 13.3448 9.7039 13.0433C8.97595 12.7417 8.31451 12.2998 7.75736 11.7426C7.20021 11.1855 6.75825 10.5241 6.45672 9.7961C6.15519 9.06815 6 8.28793 6 7.5C6 6.71207 6.15519 5.93185 6.45672 5.2039C6.75825 4.47595 7.20021 3.81451 7.75736 3.25736C8.31451 2.70021 8.97595 2.25825 9.7039 1.95672C10.4319 1.65519 11.2121 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 9.0913 17.3679 10.6174 16.2426 11.7426C15.1174 12.8679 13.5913 13.5 12 13.5Z" fill="#C29773"/>
                                </svg>
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder={t("q_text8")}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M21 16.92V20.456C21.0001 20.7092 20.9042 20.953 20.7316 21.1382C20.559 21.3234 20.3226 21.4363 20.07 21.454C19.633 21.484 19.276 21.5 19 21.5C10.163 21.5 3 14.337 3 5.5C3 5.224 3.015 4.867 3.046 4.43C3.06372 4.17744 3.17658 3.94101 3.3618 3.76841C3.54703 3.59581 3.79082 3.49989 4.044 3.5H7.58C7.70404 3.49987 7.8237 3.54586 7.91573 3.62902C8.00776 3.71218 8.0656 3.82658 8.078 3.95C8.101 4.18 8.122 4.363 8.142 4.502C8.34073 5.88892 8.748 7.23783 9.35 8.503C9.445 8.703 9.383 8.942 9.203 9.07L7.045 10.612C8.36445 13.6865 10.8145 16.1365 13.889 17.456L15.429 15.302C15.4919 15.214 15.5838 15.1509 15.6885 15.1237C15.7932 15.0964 15.9042 15.1068 16.002 15.153C17.267 15.7539 18.6156 16.1601 20.002 16.358C20.141 16.378 20.324 16.4 20.552 16.422C20.6752 16.4346 20.7894 16.4926 20.8724 16.5846C20.9553 16.6766 21.0012 16.7961 21.001 16.92H21Z" fill="#C29773"/>
                                </svg>
                            </div>
                            <div className="form-button">
                                {t("q_text9")}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M9.99999 15.6715L19.192 6.47852L20.607 7.89252L9.99999 18.4995L3.63599 12.1355L5.04999 10.7215L9.99999 15.6715Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        <Footer/>
    </div>)
}
export default Agent;