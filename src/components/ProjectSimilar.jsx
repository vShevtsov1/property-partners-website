
import "../styles/projectSimilar.css"
import MaxLengthText from "./MaxLengthText.jsx";
const ProjectSimilar = ({project}) => {
    function formatNumberWithCommas(value) {
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className="project-similar" style={{ height: '100%' }} onClick={() => window.location.href = `/project/${project._id}`}>
            <div className="image-container"
                 style={{
                     background: `linear-gradient(0deg, #000 -58.46%, rgba(0, 0, 0, 0.00) 96.51%), url(${project.imageSrcMain}) lightgray 50% / cover no-repeat`,
                 }}
            >

            </div>
            <div className="project-details">
                <div className="general-info">
                    <div className="name">
                        <MaxLengthText text={project.projectName} maxLengthBreakpoints={{

                            600:20,
                            768: 5,
                            1024: 10,
                            1440:10,
                            1540: 15,

                        }} />
                    </div>
                    <div className="developer">
                        <MaxLengthText text={project.developer} maxLengthBreakpoints={{

                            600:20,
                            768: 5,
                            1024: 10,
                            1440:10,
                            1540: 15,

                        }} />
                    </div>
                </div>
                <div className="price-info">
                    <div className="price"><span>from</span> ${formatNumberWithCommas(project.priceFrom)}</div>
                    <div className="price-m2">$ {(Number(project.priceFrom) / Number(project.sizeFrom)).toFixed(0)} for m²</div>
                </div>
            </div>

        </div>
    )
}
export default ProjectSimilar