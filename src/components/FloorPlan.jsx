import "../styles/floorPlan.css"
import floorplan from "../assets/floorPlan.png"
const FloorPlan = ({plan,type}) => {
    function formatNumberWithCommas(value) {
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(<div className={"floor-plan"}>
            <div className="image-container"><img src={plan.imgSrc}/></div>
        <div className="plan-info">
            <div className="price-info">
                <div>from ${formatNumberWithCommas(plan.price)}</div>
                <div>{plan.size} sq.ft</div>
            </div>
            <div className="type-info">{type} {type!="Studio"&&"BD"}</div>
        </div>
    </div>)
}
export default FloorPlan