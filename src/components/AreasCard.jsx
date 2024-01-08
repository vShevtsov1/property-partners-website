import blueArrow from "../assets/Areas/blue-arrow.svg";
import "../styles/areaCard.scss"
import { Link } from "react-router-dom";

function AreasCard({ img, name }) {
    const imgStyle = {
        backgroundImage: `url(${img})`,
        height: '295px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return (
        <div className="card">
            <div className="img" style={imgStyle}>
            </div>

            <div className="description">
                <div className="name">{name}</div>
                <Link to={"/business-bay"}>
                    <div className="button">
                        Learn more
                        <img src={blueArrow} alt="" />
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default AreasCard
