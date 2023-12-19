import Header from "../components/Header.jsx";
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import {useEffect, useState} from "react";
import "../styles/realEstate.css"
import Filter from "../components/Filter.jsx";
import Project from "../components/Project.jsx";
import Feedback from "../components/Feedback.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
const RealEstate = () => {
    const [mapZoom, setMapZoom] = useState(10);
    const [projects,setProjects] = useState(null)
    const markersData = [
        { position: { lat: 25.186318, lng: 55.262052 }, price: "320К" },
        { position: { lat: 25.201460, lng: 55.259368 }, price: "840K" },
        { position: { lat: 25.196317, lng: 55.343355 }, price: "230K" },
        { position: { lat: 25.052849, lng: 55.203715 }, price: "930K" },
        { position: { lat: 25.067306, lng: 55.217575 }, price: "1.2M"  },
        { position: { lat: 25.099892, lng: 55.160736 }, price: "15M" },
    ];
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/api/projects/get-all',
            headers: { }
        };

        axios.request(config)
            .then((response) => {
               setProjects(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    function convertPriceToShortFormat(price) {
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;

        while (price >= 1000 && suffixIndex < suffixes.length - 1) {
            price /= 1000;
            suffixIndex++;
        }

        return price.toFixed(1) + suffixes[suffixIndex];
    }


    if(projects===null){
        return null;
    }
    return (
        <div className={"real-estate"}>
            <Header />
            <Filter/>
            <div className="content">
                <div className="map">
                        <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                            <Map
                                zoom={10}
                                center={{
                                    lat: 25.152033492170037,
                                    lng: 55.32550889425454,
                                }}
                                gestureHandling={"greedy"}
                                disableDefaultUI={true}
                                mapId={"eafda8fe79279394"}
                                onZoomChanged={ev => {setMapZoom(ev.detail.zoom)}}
                            >

                                {projects.map((marker, index) => (
                                    <AdvancedMarker
                                        key={index}
                                        onClick={()=>window.open(`/project/${marker._id}`)}
                                        className={"marker"}
                                        position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}>
                                        <div style={{ borderRadius: mapZoom < 13 ? 20 : 5, padding: mapZoom < 13 ? 7 : 0 }}>
                                            <div style={{ display: mapZoom < 13 ? "none" : "block" }} className="price">
                                                {convertPriceToShortFormat(marker.priceFrom)}
                                            </div>
                                        </div>
                                    </AdvancedMarker>
                                ))}
                            </Map>
                        </APIProvider>
                </div>
                <div className="projects">
                    {
                        projects.map((project,index)=>(
                            <Project project={project} key={index}/>
                        ))
                    }


                </div>
            </div>
            <Feedback/>
            <Footer/>

        </div>
    );
};

export default RealEstate;
