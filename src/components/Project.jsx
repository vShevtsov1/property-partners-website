import "../styles/project.css"
const Project = ({project}) => {
    function formatNumberWithCommas(value) {
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(<div onClick={() => window.location.href = `/project/${project._id}`} className={"project"}>
        <div className="image-container" style={{
            background: `linear-gradient(0deg, #000 -58.46%, rgba(0, 0, 0, 0.00) 96.51%), url(${project.imageSrcMain}) lightgray 50% / cover no-repeat`,
        }}>
            <div className="information">
                <div className="name">{project.projectName} | {project.selectedProperty} </div>
                <div className="bedrooms">{project.selectedBedrooms} bedrooms</div>
            </div>
        </div>
        <div className="project-info">
            <div className="project-information">
                <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_108_689)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 9C8.25 11.0715 9.92925 12.75 12 12.75C14.0708 12.75 15.75 11.0715 15.75 9C15.75 6.9285 14.0708 5.25 12 5.25C9.92925 5.25 8.25 6.9285 8.25 9ZM3 9C3 4.02975 7.02975 0 12 0C16.9703 0 21 4.02975 21 9C21 12.7125 13.473 24.0083 12 24C10.5037 24.0083 3 12.7635 3 9Z" fill="#191C38"/>
                            <circle cx="12" cy="9" r="2" fill="#C29773"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_108_689">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>{project.selectedLocation||project.ownLocation}
                </div>
                <div className="price">$ {formatNumberWithCommas(project.priceFrom)}</div>
            </div>
        </div>
    </div>)
}
export default Project