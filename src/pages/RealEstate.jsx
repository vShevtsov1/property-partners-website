import Header from "../components/Header.jsx";
import {
    AdvancedMarker,
    APIProvider,
    ControlPosition,
    Map,
    MapControl,
    useMap,
    useMapsLibrary
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from "react";
import "../styles/realEstate.css"
import Filter from "../components/Filter.jsx";
import Project from "../components/Project.jsx";
import Feedback from "../components/Feedback.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { useTranslation } from "react-i18next";

const RealEstate = () => {
    const [mapZoom, setMapZoom] = useState(10);
    const [projects, setProjects] = useState(null)
    const [visibleProjects, setVisibleProjects] = useState([])
    const { t } = useTranslation();
    const map = useMap();

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://157.175.196.127:8080/api/projects/get-all',
            headers: {}
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

    const updateProjectsVisibility = () => {
        const currentZoom = mapZoom;
        let visiblePercentage = 100;

        switch (true) {
            case currentZoom < 10:
                visiblePercentage = 5;
                break;
            case currentZoom < 11:
                visiblePercentage = 20;
                break;
            case currentZoom < 12:
                visiblePercentage = 40;
                break;
            case currentZoom < 13:
                visiblePercentage = 60;
                break;
            case currentZoom < 14:
                visiblePercentage = 80;
                break;
            case currentZoom < 15:
                visiblePercentage = 100;
                break;
            default:
                break;
        }

        const totalProjects = projects.length;
        const visibleProjectsCount = Math.ceil((visiblePercentage / 100) * totalProjects);
        const slicedVisibleProjects = projects.slice(0, visibleProjectsCount);
        setVisibleProjects(slicedVisibleProjects);

    };

    if (projects === null) {
        return null;
    }
    return (
        <div className={"real-estate"}>
            <Header />
            <Filter />
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
                            mapId={"eafda8fe79279394"}
                            fullscreenControl={true}
                            onZoomChanged={ev => { setMapZoom(ev.detail.zoom);
                                updateProjectsVisibility()
                            }}
                        >

                            <MapControl position={ControlPosition.TOP_LEFT}>

                            </MapControl>
                            {visibleProjects.map((marker, index) => (
                                <AdvancedMarker
                                    key={index}
                                    onClick={() => window.open(`/project/${marker._id}`)}
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
                        projects.map((project, index) => (
                            <Project project={project} key={index} />
                        ))
                    }


                </div>
            </div>
            <Feedback />
            <Footer />
        </div>
    );

};

export default RealEstate;
