import Header from "../components/Header.jsx";
import "../styles/concierge.css"
import conciergeMain from "../assets/conciergeMain.jpg";
import imagePerson from "../assets/aboutUsPerson.png";
import aboutUs from "../assets/aboutUs.jpg";
import servicesPerson from "../assets/servicesPerson.jpg";
const Concierge = () => {

    return(<div className={"concierge-wrapper"}>
        <Header/>
        <div className="concierge-banner">
            <div className="concierge-text">
                <div>
                    Your concierge service in Dubai
                </div>
                <div>
                    Get a free consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className="concierge-image">
                <img src={conciergeMain}/>
            </div>
        </div>
        <div className="about-us">
            <div className={"content1"}>About us</div>
            <div className={"content2"}>Property Partners is a team of specialists in Dubai providing concierge services for real estate purchases, investments and leisure activities. We are ready to assist clients with routine tasks, vacation planning and even doctor's appointments with our extensive partnerships and expertise.</div>
            <div className={"content3"}><img src={imagePerson}/></div>
            <div className={"content4"}><img src={aboutUs}/></div>
        </div>
        <div className="our-services">
            <div className="tittle">What services do we provide?</div>
            <div className="content">
                <div className={"div1"}><img src={servicesPerson}/></div>
                <div className={"div2"}>Business services</div>
                <div className={"div3"}>Second citizenship</div>
                <div className={"div3"}>Business concierge services</div>
                <div className={"div3"}>Legal services</div>
                <div className={"div3"}>Real estate management</div>
                <div className={"div3"}>Investment assistance</div>
                <div className={"div3"}>Opening an account with a UAE Bank</div>
                <div className={"div3"}>Organization of business events9</div>
                <div className={"div3"}>Company registration in the UAE</div>
            </div>
        </div>
    </div>)
}
export default Concierge