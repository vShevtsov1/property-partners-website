import "../styles/filter.css"
import {useTranslation} from "react-i18next";
import locations from "../data/Location.jsx";
import {useState} from "react";
const Filter = () => {
    const { t } = useTranslation();
    const [visibleSearch,setVisibleSearch] = useState(false);
    const [filterData,setFilterData] = useState({
        "search":"",
        "searchVisible":locations,
        priceValues:{"from":"","to":""}

    })
    const [visibleDropDowns,setVisibleDropDowns] = useState({
        "price":false,
    })

    function handleFindChange(event) {
        const inputValue = event.target.value;
        if(inputValue.length!==0){
            setVisibleSearch(true)
            const filteredList = locations.filter((location) =>
                location.label.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            setFilterData(prevState => ({
                ...prevState,
                searchVisible: filteredList
            }));
        }
        else {
            setVisibleSearch(false)
            setFilterData(prevState => ({
                ...prevState,
                searchVisible: locations
            }));
        }
        setFilterData(prevState => ({
            ...prevState,
            search: inputValue
        }));

    }

    return(<div className={"filter"}>
        <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#09121F"/>
            </svg>
            <input placeholder={"Search on map..."} value={filterData.search} onChange={handleFindChange} type="text"/>

            {visibleSearch&&<div className="filter-dropdown-search">
                {filterData.searchVisible.map((location, index) => (
                    <div key={index}>
                        <div onClick={()=>{
                            setFilterData(prevState => ({
                                ...prevState,
                                search: location.value
                            }));
                            setVisibleSearch(false)
                        }} className="location-option">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.364 17.3639L12 23.7279L5.636 17.3639C4.37734 16.1052 3.52019 14.5016 3.17293 12.7558C2.82567 11.0099 3.00391 9.20035 3.6851 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639ZM12 12.9999C12.5304 12.9999 13.0391 12.7892 13.4142 12.4141C13.7893 12.0391 14 11.5304 14 10.9999C14 10.4695 13.7893 9.96078 13.4142 9.58571C13.0391 9.21064 12.5304 8.99992 12 8.99992C11.4696 8.99992 10.9609 9.21064 10.5858 9.58571C10.2107 9.96078 10 10.4695 10 10.9999C10 11.5304 10.2107 12.0391 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999Z" fill="#909090"/>
                            </svg> {location.label}
                        </div>
                    </div>
                ))}
            </div>}
        </div>
        <div className="dropdown" onMouseEnter={()=>{
            setVisibleDropDowns(prevState => ({
                ...prevState,
                price: true
            }));
        }}
        onMouseLeave={()=>{
            setVisibleDropDowns(prevState => ({
                ...prevState,
                price: false
            }));
        }}
        >
            <div className={"dropdown-container"}>
                {t("filter1")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                </svg>
            </div>

            {visibleDropDowns.price&&<div className="additional-menu">
                <input value={filterData.priceValues.from}
                       onChange={(e) => setFilterData(prevState => ({
                           ...prevState,
                           priceValues: {
                               ...prevState.priceValues,
                               from: e.target.value
                           }
                       }))} placeholder={"From"}/>
                <input value={filterData.priceValues.to} placeholder={"To"}
                       onChange={(e) => setFilterData(prevState => ({
                           ...prevState,
                           priceValues: {
                               ...prevState.priceValues,
                               to: e.target.value
                           }
                       }))}
                />
            </div>}
        </div>
        <div className="dropdown">
            <div className={"dropdown-container"}>
            {t("filter2")}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
            </div>
        </div>
        <div className="dropdown">
            <div className={"dropdown-container"}>
            {t("filter3")}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
            </div>
        </div>
        <div className="dropdown">
            <div className={"dropdown-container"}>
            {t("filter4")}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
            </div>
        </div>
        <div className="dropdown">
            <div className={"dropdown-container"}>
            {t("filter5")}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
            </div>
        </div>
        <div className="dropdown">
            <div className={"dropdown-container"}>
            {t("filter6")}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
            </div>
        </div>

    </div>)
}
export default Filter