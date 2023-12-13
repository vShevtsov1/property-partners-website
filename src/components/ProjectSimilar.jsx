
import "../styles/projectSimilar.css"
const ProjectSimilar = ({project}) => {

    return(<div style={{cursor:"pointer"}} onClick={() => window.open(`/project/${project._id}`)}

                className={"project-similar"}>
            <div className="image-container">
                <img src={project.imageSrcMain}/>
                <div className="project-info">
                    <div>{project.projectName}</div>
                    <div>{project.developer}</div>
                </div>
            </div>
        <div className="description">
                <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_317_633)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 9C8.25 11.0715 9.92925 12.75 12 12.75C14.0708 12.75 15.75 11.0715 15.75 9C15.75 6.9285 14.0708 5.25 12 5.25C9.92925 5.25 8.25 6.9285 8.25 9ZM3 9C3 4.02975 7.02975 0 12 0C16.9703 0 21 4.02975 21 9C21 12.7125 13.473 24.0083 12 24C10.5037 24.0083 3 12.7635 3 9Z" fill="#191C38"/>
                        <circle cx="12" cy="9" r="2" fill="#C29773"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_317_633">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                    Al Jaddaf
                </div>
            <div className="price">$ 397 800</div>
        </div>
    </div>)
}
export default ProjectSimilar