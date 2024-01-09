import { useTranslation } from "react-i18next";
import "../styles/cost-service.scss"
import checkFill from "../assets/check-fill.png";

function CostOfService() {
    const { t } = useTranslation();
    return (
        <div className="cost-service">
            <div className="title">
                <div>{t("name23")}</div>
                <div>{t("name24")}</div>
            </div>
            <div className="setups-container">
                <div className="setup">
                    <div className="setup-name">{t("name27")}</div>
                    <div className="setup-content">
                        <div className="setup-list">
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name25")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name26")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name28")}
                            </div>
                        </div>
                        <div className="setup-price">
                            <div>{t("name29")}</div><div>(AED 20,500)</div>
                        </div>
                    </div>
                </div>

                <div className="setup">
                    <div className="setup-name">{t("name30")}</div>
                    <div className="setup-content">
                        <div className="setup-list">
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name31")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name32")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name33")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name39")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name40")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name41")}
                            </div>
                        </div>
                        <div className="setup-price">
                            <div>{t("name34")}</div><div>(AED 20,500)</div>
                        </div>
                    </div>
                </div>

                <div className="setup">
                    <div className="setup-name blue">{t("name35")}</div>
                    <div className="setup-content">
                        <div className="setup-list">
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name36")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name37")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name38")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name39")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name40")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name41")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name42")}
                            </div>
                            <div className="setup-list-elem">
                                <img src={checkFill} alt="" />
                                {t("name43")}
                            </div>
                        </div>
                        <div className="setup-price">
                            <div>{t("name44")}</div><div>(AED 20,500)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CostOfService
