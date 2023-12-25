import "../styles/header.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Dropdown from "./Dropdown.jsx";
const Header = () => {
    const [phoneMenuVisible,setPhoneMenuVisible] = useState(false);
    const { t } = useTranslation();

    return(<header>
        <Link to={"/"}> <div className="logo-container">
               <svg xmlns="http://www.w3.org/2000/svg" width="143" height="56" viewBox="0 0 143 56" fill="none">
                   <g clip-path="url(#clip0_116_385)">
                       <path d="M126.296 0H129.05C131.667 0.224607 133.981 1.02743 135.994 2.40846C138.067 3.83198 139.583 5.65463 140.542 7.87642C142.231 11.7964 142.14 17.2052 140.323 21.1024C137.869 26.3746 132.793 28.8332 126.933 28.6237C118.693 28.3324 113.553 22.318 113.594 14.3779C113.612 10.4533 114.718 6.78374 117.45 3.9974C119.747 1.64813 122.696 0.315664 126.296 0ZM134.259 18.5938C135.151 16.2081 135.264 13.7025 134.596 11.0771C133.603 7.17528 130.189 5.09463 126.214 5.77756C120.837 6.69724 119.58 13.1623 120.751 17.4465C121.664 20.8035 123.752 22.6459 127.015 22.9737C130.189 23.2924 133.148 21.5623 134.259 18.5938Z" fill="#C29773"/>
                       <path d="M27.7359 55.9984H0V1.0228C0.0819512 0.661607 0.385474 0.481011 0.910569 0.481011C18.9702 0.459765 37.0313 0.450659 55.094 0.453694C55.2135 0.453694 55.3282 0.501661 55.4127 0.587044C55.4972 0.672426 55.5447 0.78823 55.5447 0.908979V27.7753C55.5447 28.0819 55.3914 28.2352 55.0849 28.2352L28.0319 28.1942C27.8619 28.1942 27.7769 28.2792 27.7769 28.4491L27.7359 55.9984ZM21.3984 22.0888C21.3984 22.0577 21.4045 22.0269 21.4164 21.9982C21.4283 21.9695 21.4457 21.9434 21.4677 21.9214C21.4897 21.8994 21.5158 21.882 21.5445 21.8701C21.5732 21.8582 21.604 21.8521 21.6351 21.8521H48.934C48.9968 21.8521 49.057 21.8271 49.1014 21.7827C49.1458 21.7383 49.1707 21.6781 49.1707 21.6153V7.06443C49.1707 7.00164 49.1458 6.94142 49.1014 6.89702C49.057 6.85262 48.9968 6.82768 48.934 6.82768H6.61073C6.54794 6.82768 6.48772 6.85262 6.44333 6.89702C6.39893 6.94142 6.37398 7.00164 6.37398 7.06443V49.3877C6.37398 49.4505 6.39893 49.5107 6.44333 49.5551C6.48772 49.5995 6.54794 49.6244 6.61073 49.6244H21.1616C21.2244 49.6244 21.2846 49.5995 21.329 49.5551C21.3734 49.5107 21.3984 49.4505 21.3984 49.3877V22.0888Z" fill="#C29773"/>
                       <path d="M71.1382 19.3666V27.7849C71.1382 27.9457 71.0578 28.0262 70.8969 28.0262L64.8143 28.0489C64.7708 28.0489 64.7291 28.0317 64.6984 28.0009C64.6677 27.9702 64.6504 27.9285 64.6504 27.885V0.918516C64.6504 0.739437 64.7399 0.64838 64.919 0.645345C69.8968 0.627134 74.3313 0.637757 78.2224 0.677215C85.0198 0.750061 88.6029 6.73705 86.8091 12.9517C85.6345 17.0083 81.9148 18.9614 77.8445 19.0753C75.7442 19.136 73.5982 19.1451 71.4068 19.1026C71.2277 19.0995 71.1382 19.1876 71.1382 19.3666ZM71.1473 6.20892L71.12 13.4479C71.12 13.4878 71.1358 13.526 71.164 13.5542C71.1922 13.5824 71.2304 13.5982 71.2702 13.5982L77.0751 13.621C77.5582 13.6228 78.037 13.534 78.4841 13.3595C78.9311 13.185 79.3377 12.9283 79.6805 12.604C80.0234 12.2797 80.2959 11.8943 80.4824 11.4696C80.6689 11.0449 80.7657 10.5893 80.7675 10.1289V9.60079C80.7709 8.67112 80.3868 7.77807 79.6995 7.11808C79.0121 6.45808 78.078 6.0852 77.1024 6.08144L71.2975 6.05868C71.2577 6.05868 71.2195 6.07451 71.1913 6.10268C71.1631 6.13086 71.1473 6.16908 71.1473 6.20892Z" fill="#C29773"/>
                       <path d="M108.303 15.1961C110.379 15.9852 111.511 17.5271 111.699 19.8218C111.854 21.6945 111.967 23.5991 112.036 25.5356C112.064 26.3156 112.273 27.0714 112.665 27.8029C112.744 27.9516 112.698 28.026 112.528 28.026L106.382 28.0442C106.298 28.0441 106.215 28.0196 106.145 27.9735C106.075 27.9274 106.019 27.8618 105.986 27.7847C105.658 27.0441 105.485 26.2747 105.467 25.4764C105.433 23.9497 105.363 22.4867 105.257 21.0875C105.118 19.2117 104.104 18.1752 102.216 17.9779C101.102 17.8625 99.1033 17.8398 96.2198 17.9096C96.0407 17.9126 95.9512 18.0037 95.9512 18.1827V27.7574C95.9512 27.9365 95.8601 28.026 95.678 28.026L89.773 28.0442C89.5666 28.0442 89.4634 27.9425 89.4634 27.7392V0.795422C89.4634 0.754367 89.4797 0.714994 89.5087 0.685964C89.5377 0.656934 89.5771 0.640625 89.6182 0.640625C94.001 0.652766 98.5023 0.654284 103.122 0.645178C107.975 0.636072 112.077 3.03542 112.355 8.19835C112.525 11.3155 111.17 13.5586 108.289 14.9275C108.083 15.0246 108.088 15.1141 108.303 15.1961ZM95.9466 5.92648L95.9557 12.9379C95.9557 12.9705 95.9687 13.0017 95.9917 13.0248C96.0148 13.0478 96.0461 13.0608 96.0787 13.0608L102.138 13.0471C103.087 13.0458 103.997 12.6915 104.667 12.0623C105.338 11.433 105.714 10.5803 105.712 9.69168V9.13623C105.71 8.24823 105.331 7.39749 104.66 6.7709C103.988 6.14431 103.078 5.79311 102.129 5.79445L96.0696 5.80355C96.037 5.80355 96.0057 5.8165 95.9826 5.83956C95.9596 5.86261 95.9466 5.89388 95.9466 5.92648Z" fill="#C29773"/>
                       <path d="M55.5126 56.0005H31.4462L31.3916 32.5852C31.3916 32.1148 31.6268 31.8796 32.0973 31.8796L55.3988 31.875C55.4362 31.875 55.4721 31.8899 55.4986 31.9163C55.525 31.9428 55.5399 31.9787 55.5399 32.0161L55.5126 56.0005ZM49.1705 38.513C49.1705 38.4418 49.1422 38.3735 49.0918 38.3231C49.0414 38.2727 48.9731 38.2444 48.9018 38.2444H38.057C37.9857 38.2444 37.9174 38.2727 37.867 38.3231C37.8167 38.3735 37.7884 38.4418 37.7884 38.513V49.3579C37.7884 49.4292 37.8167 49.4975 37.867 49.5479C37.9174 49.5982 37.9857 49.6265 38.057 49.6265H48.9018C48.9731 49.6265 49.0414 49.5982 49.0918 49.5479C49.1422 49.4975 49.1705 49.4292 49.1705 49.3579V38.513Z" fill="#C29773"/>
                       <path d="M69.7723 48.8145V55.4298C69.7723 55.5815 69.6965 55.6574 69.5447 55.6574H64.878C64.7263 55.6574 64.6504 55.5815 64.6504 55.4298V34.0086C64.6504 33.8539 64.7278 33.778 64.8826 33.781C67.5991 33.8356 70.4006 33.8356 73.2871 33.781C77.9902 33.6899 82.0832 35.2789 82.3837 40.6467C82.6387 45.195 79.7704 48.2545 75.2631 48.4685C73.5876 48.5504 71.8667 48.5611 70.1001 48.5004C69.8816 48.4943 69.7723 48.599 69.7723 48.8145ZM69.7769 38.2519L69.7587 44.0522C69.7587 44.0776 69.7688 44.1019 69.7867 44.1198C69.8046 44.1378 69.8289 44.1478 69.8543 44.1478L74.398 44.166C74.7777 44.1673 75.1539 44.0967 75.5052 43.9583C75.8564 43.8198 76.1758 43.6163 76.4451 43.3592C76.7145 43.1022 76.9284 42.7966 77.0748 42.4601C77.2211 42.1236 77.2971 41.7627 77.2982 41.3979V40.9608C77.3005 40.2243 76.9982 39.517 76.4577 38.9945C75.9173 38.472 75.1829 38.177 74.4162 38.1745L69.8725 38.1563C69.8471 38.1563 69.8228 38.1664 69.8049 38.1843C69.787 38.2022 69.7769 38.2265 69.7769 38.2519Z" fill="#C29773"/>
                       <path d="M86.6086 51.925L85.4112 55.5536C85.4017 55.5825 85.3834 55.6076 85.3589 55.6256C85.3345 55.6436 85.305 55.6534 85.2746 55.6538L80.3393 55.6583C80.3159 55.6583 80.2928 55.6526 80.2721 55.6418C80.2513 55.6309 80.2335 55.6152 80.2201 55.596C80.2067 55.5768 80.1981 55.5546 80.1951 55.5314C80.192 55.5082 80.1947 55.4846 80.2027 55.4626L88.0974 33.9003C88.1076 33.8723 88.1262 33.8481 88.1506 33.831C88.1751 33.8139 88.2041 33.8047 88.2339 33.8047H94.1572C94.187 33.8047 94.2161 33.8139 94.2405 33.831C94.2649 33.8481 94.2835 33.8723 94.2938 33.9003L102.366 55.4626C102.374 55.4846 102.377 55.5082 102.374 55.5314C102.371 55.5546 102.362 55.5768 102.349 55.596C102.335 55.6152 102.317 55.6309 102.297 55.6418C102.276 55.6526 102.253 55.6583 102.229 55.6583H97.0892C97.0589 55.658 97.0294 55.6481 97.0049 55.6302C96.9804 55.6122 96.9621 55.587 96.9526 55.5582L95.737 51.925C95.7275 51.8962 95.7093 51.871 95.6848 51.853C95.6603 51.8351 95.6308 51.8252 95.6004 51.8249H86.7452C86.7148 51.8252 86.6853 51.8351 86.6608 51.853C86.6363 51.871 86.6181 51.8962 86.6086 51.925ZM88.5891 47.5361L93.8613 47.5406C94.1284 47.5406 94.2194 47.4147 94.1344 47.1627L91.2935 38.7263C91.1903 38.4258 91.0886 38.4258 90.9884 38.7263L88.2294 47.0444C88.1201 47.3722 88.24 47.5361 88.5891 47.5361Z" fill="#C29773"/>
                       <path d="M119.048 45.4565C120.55 46.015 121.393 47.1729 121.575 48.9303C121.723 50.3447 121.822 51.8821 121.871 53.5424C121.889 54.1433 122.035 54.7625 122.303 55.2997C122.397 55.494 122.337 55.5896 122.121 55.5866L117.905 55.5729C117.253 55.5699 116.904 55.2436 116.858 54.5941C116.743 53.0006 116.655 51.5285 116.594 50.1778C116.521 48.5357 115.668 47.6813 114.035 47.6145C112.627 47.5599 111.149 47.5508 109.601 47.5872C109.4 47.5933 109.3 47.695 109.3 47.8923L109.305 55.3589C109.305 55.5593 109.205 55.6594 109.004 55.6594H104.488C104.336 55.6594 104.26 55.5835 104.26 55.4318V33.9378C104.26 33.9096 104.271 33.8825 104.291 33.8621C104.31 33.8417 104.337 33.8297 104.365 33.8285C108.113 33.7769 111.794 33.7815 115.406 33.8422C119.48 33.9105 122.431 36.5056 122.094 40.849C121.934 42.916 120.751 44.1908 119.021 45.1697C118.826 45.282 118.835 45.3776 119.048 45.4565ZM109.314 38.0672L109.296 43.5215C109.296 43.5662 109.313 43.6091 109.345 43.6407C109.377 43.6722 109.419 43.69 109.464 43.69L114.176 43.7082C114.533 43.7095 114.886 43.644 115.216 43.5157C115.545 43.3873 115.845 43.1985 116.098 42.9601C116.351 42.7216 116.552 42.4382 116.689 42.126C116.826 41.8137 116.898 41.4788 116.899 41.1404V40.503C116.901 39.8196 116.618 39.1633 116.11 38.6783C115.603 38.1934 114.914 37.9195 114.195 37.917L109.482 37.8988C109.438 37.8988 109.395 37.9165 109.363 37.9481C109.332 37.9797 109.314 38.0226 109.314 38.0672Z" fill="#C29773"/>
                       <path d="M134.878 38.5579V55.499C134.878 55.5413 134.861 55.5818 134.831 55.6117C134.801 55.6416 134.761 55.6583 134.719 55.6583H129.802C129.759 55.6583 129.719 55.6416 129.689 55.6117C129.659 55.5818 129.642 55.5413 129.642 55.499V38.5533C129.642 38.511 129.625 38.4705 129.596 38.4406C129.566 38.4107 129.525 38.394 129.483 38.394L123.086 38.3894C123.044 38.3894 123.003 38.3726 122.973 38.3427C122.944 38.3128 122.927 38.2723 122.927 38.2301L122.931 33.964C122.931 33.9431 122.935 33.9224 122.943 33.9031C122.951 33.8837 122.963 33.8662 122.978 33.8514C122.993 33.8366 123.01 33.8248 123.03 33.8168C123.049 33.8088 123.07 33.8047 123.091 33.8047H141.434C141.476 33.8047 141.517 33.8215 141.547 33.8514C141.577 33.8812 141.593 33.9218 141.593 33.964V38.2255C141.593 38.2464 141.589 38.2671 141.581 38.2865C141.573 38.3058 141.562 38.3234 141.547 38.3382C141.532 38.353 141.514 38.3647 141.495 38.3727C141.476 38.3807 141.455 38.3848 141.434 38.3848L135.037 38.3985C134.995 38.3985 134.955 38.4153 134.925 38.4452C134.895 38.4751 134.878 38.5156 134.878 38.5579Z" fill="#C29773"/>
                   </g>
                   <defs>
                       <clipPath id="clip0_116_385">
                           <rect width="142.049" height="56" fill="white"/>
                       </clipPath>
                   </defs>
               </svg>
           </div></Link>
        <div className="additional">
            <a href="tel:+971521038793">
            <div className="phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" fill="white"/>
                </svg>
                +971 52 103 8793
            </div>
            </a>
            <div className="language">
               <Dropdown/>
            </div>
        </div>
        <div className="menu">
            <Link to={"/"}><div className="menu-option">{t('header_option0')}</div></Link>
           <Link to={"/real-estate"}><div className="menu-option">{t('header_option1')}</div></Link>
            <div className="menu-option">{t('header_option2')}</div>
            <Link to={"/concierge"}> <div className="menu-option">{t('header_option3')}</div></Link>
        </div>
        <div className="phone-view">
            <div className="visible-items">
                <div className="logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="40" viewBox="0 0 102 40" fill="none">
                        <g clip-path="url(#clip0_495_2724)">
                            <path d="M90.211 0H92.1785C94.0474 0.160434 95.7005 0.733875 97.1379 1.72033C98.6186 2.73713 99.7016 4.03902 100.387 5.62602C101.593 8.42602 101.528 12.2894 100.231 15.0732C98.4777 18.839 94.8517 20.5951 90.6663 20.4455C84.7801 20.2374 81.1086 15.9415 81.1379 10.2699C81.1509 7.46667 81.9411 4.84553 83.8923 2.85528C85.5335 1.17724 87.6398 0.225474 90.211 0ZM95.8989 13.2813C96.5362 11.5772 96.6165 9.78753 96.1395 7.91219C95.4306 5.1252 92.9915 3.63902 90.1525 4.12683C86.3119 4.78374 85.4143 9.40163 86.2501 12.4618C86.9026 14.8596 88.3942 16.1756 90.7249 16.4098C92.9915 16.6374 95.1054 15.4016 95.8989 13.2813Z" fill="#C29773"/>
                            <path d="M19.8114 39.9984H0V0.730153C0.0585366 0.472158 0.275339 0.343161 0.650406 0.343161C13.5501 0.327985 26.4509 0.321481 39.3528 0.323649C39.4382 0.323649 39.5201 0.357911 39.5805 0.418898C39.6409 0.479886 39.6748 0.562603 39.6748 0.648852V19.8391C39.6748 20.0581 39.5653 20.1676 39.3463 20.1676L20.0228 20.1383C19.9014 20.1383 19.8406 20.199 19.8406 20.3204L19.8114 39.9984ZM15.2846 15.7773C15.2846 15.7551 15.2889 15.7331 15.2974 15.7126C15.3059 15.6921 15.3184 15.6734 15.3341 15.6577C15.3498 15.642 15.3684 15.6296 15.3889 15.6211C15.4095 15.6126 15.4315 15.6082 15.4537 15.6082H34.9528C34.9977 15.6082 35.0407 15.5904 35.0724 15.5587C35.1041 15.527 35.1219 15.4839 35.1219 15.4391V5.0456C35.1219 5.00075 35.1041 4.95774 35.0724 4.92602C35.0407 4.89431 34.9977 4.87649 34.9528 4.87649H4.72195C4.6771 4.87649 4.63409 4.89431 4.60238 4.92602C4.57066 4.95774 4.55285 5.00075 4.55285 5.0456V35.2765C4.55285 35.3213 4.57066 35.3644 4.60238 35.3961C4.63409 35.4278 4.6771 35.4456 4.72195 35.4456H15.1154C15.1603 35.4456 15.2033 35.4278 15.235 35.3961C15.2667 35.3644 15.2846 35.3213 15.2846 35.2765V15.7773Z" fill="#C29773"/>
                            <path d="M50.8129 13.8336V19.8466C50.8129 19.9615 50.7554 20.019 50.6405 20.019L46.2958 20.0352C46.2647 20.0352 46.235 20.0229 46.213 20.0009C46.191 19.979 46.1787 19.9492 46.1787 19.9181V0.656362C46.1787 0.528449 46.2427 0.463408 46.3706 0.46124C49.9261 0.448232 53.0936 0.45582 55.873 0.484004C60.7283 0.536037 63.2877 4.81246 62.0064 9.25148C61.1673 12.149 58.5104 13.5442 55.6031 13.6255C54.1028 13.6688 52.57 13.6753 51.0047 13.645C50.8768 13.6428 50.8129 13.7057 50.8129 13.8336ZM50.8194 4.43522L50.7999 9.60596C50.7999 9.63442 50.8112 9.66171 50.8313 9.68184C50.8514 9.70197 50.8787 9.71327 50.9072 9.71327L55.0535 9.72953C55.3986 9.73087 55.7406 9.6674 56.0599 9.54277C56.3792 9.41814 56.6696 9.23477 56.9145 9.00315C57.1594 8.77152 57.3541 8.49618 57.4873 8.19284C57.6205 7.88949 57.6897 7.56409 57.6909 7.23522V6.85799C57.6934 6.19393 57.419 5.55604 56.928 5.08462C56.4371 4.6132 55.7698 4.34685 55.073 4.34417L50.9267 4.32791C50.8982 4.32791 50.8709 4.33921 50.8508 4.35934C50.8307 4.37946 50.8194 4.40676 50.8194 4.43522Z" fill="#C29773"/>
                            <path d="M77.3593 10.8548C78.8422 11.4184 79.6509 12.5198 79.7853 14.1588C79.8958 15.4965 79.9761 16.8569 80.0259 18.2401C80.0454 18.7973 80.195 19.3371 80.4747 19.8596C80.5311 19.9659 80.4986 20.019 80.3771 20.019L75.9869 20.032C75.9268 20.0319 75.8681 20.0144 75.8178 19.9815C75.7676 19.9485 75.728 19.9017 75.704 19.8466C75.4698 19.3176 75.3462 18.768 75.3332 18.1978C75.3094 17.1073 75.2595 16.0623 75.1836 15.0629C75.0839 13.723 74.3598 12.9827 73.0113 12.8417C72.2156 12.7594 70.788 12.7431 68.7284 12.793C68.6004 12.7951 68.5365 12.8602 68.5365 12.9881V19.8271C68.5365 19.955 68.4714 20.019 68.3414 20.019L64.1235 20.032C63.9761 20.032 63.9023 19.9594 63.9023 19.8141V0.568577C63.9023 0.539252 63.914 0.511128 63.9347 0.490393C63.9555 0.469657 63.9836 0.458008 64.0129 0.458008C67.1435 0.46668 70.3587 0.467764 73.6584 0.46126C77.1251 0.454756 80.0552 2.16858 80.2536 5.85638C80.375 8.08294 79.407 9.68511 77.3495 10.6629C77.2021 10.7323 77.2053 10.7962 77.3593 10.8548ZM68.5332 4.23362L68.5397 9.24175C68.5397 9.26503 68.549 9.28737 68.5655 9.30383C68.5819 9.3203 68.6043 9.32955 68.6275 9.32955L72.956 9.3198C73.6339 9.31884 74.2836 9.06581 74.7624 8.61634C75.2411 8.16687 75.5096 7.55778 75.5088 6.92305V6.5263C75.5072 5.89201 75.2367 5.28434 74.7568 4.83678C74.2769 4.38921 73.6269 4.13835 72.9495 4.13931L68.621 4.14581C68.5978 4.14581 68.5754 4.15506 68.559 4.17153C68.5425 4.188 68.5332 4.21033 68.5332 4.23362Z" fill="#C29773"/>
                            <path d="M39.6521 40.0001H22.4619L22.4229 23.2749C22.4229 22.9389 22.5909 22.7708 22.9269 22.7708L39.5708 22.7676C39.5976 22.7676 39.6232 22.7782 39.6421 22.7971C39.661 22.816 39.6716 22.8417 39.6716 22.8684L39.6521 40.0001ZM35.122 27.509C35.122 27.4582 35.1018 27.4094 35.0658 27.3734C35.0299 27.3374 34.9811 27.3172 34.9302 27.3172H27.1838C27.1329 27.3172 27.0841 27.3374 27.0482 27.3734C27.0122 27.4094 26.992 27.4582 26.992 27.509V35.2554C26.992 35.3063 27.0122 35.3551 27.0482 35.3911C27.0841 35.427 27.1329 35.4473 27.1838 35.4473H34.9302C34.9811 35.4473 35.0299 35.427 35.0658 35.3911C35.1018 35.3551 35.122 35.3063 35.122 35.2554V27.509Z" fill="#C29773"/>
                            <path d="M49.8372 34.8678V39.593C49.8372 39.7014 49.783 39.7556 49.6746 39.7556H46.3413C46.2329 39.7556 46.1787 39.7014 46.1787 39.593V24.2922C46.1787 24.1816 46.234 24.1274 46.3446 24.1296C48.2849 24.1686 50.286 24.1686 52.3478 24.1296C55.7072 24.0645 58.6307 25.1995 58.8454 29.0336C59.0275 32.2824 56.9787 34.4678 53.7592 34.6206C52.5624 34.6792 51.3332 34.6868 50.0714 34.6434C49.9153 34.6391 49.8372 34.7139 49.8372 34.8678ZM49.8405 27.3231L49.8275 31.4662C49.8275 31.4843 49.8347 31.5016 49.8475 31.5144C49.8603 31.5273 49.8777 31.5344 49.8958 31.5344L53.1413 31.5475C53.4125 31.5484 53.6812 31.4979 53.9321 31.399C54.183 31.3001 54.4112 31.1547 54.6035 30.9711C54.7959 30.7875 54.9487 30.5693 55.0533 30.3289C55.1578 30.0886 55.212 29.8308 55.2129 29.5702V29.258C55.2145 28.732 54.9986 28.2267 54.6125 27.8535C54.2265 27.4803 53.7019 27.2696 53.1543 27.2678L49.9088 27.2548C49.8907 27.2548 49.8733 27.262 49.8605 27.2748C49.8477 27.2876 49.8405 27.305 49.8405 27.3231Z" fill="#C29773"/>
                            <path d="M61.8632 37.0896L61.0079 39.6814C61.0011 39.702 60.9881 39.72 60.9706 39.7329C60.9531 39.7457 60.932 39.7527 60.9104 39.753L57.3852 39.7562C57.3684 39.7562 57.3519 39.7522 57.3371 39.7444C57.3223 39.7367 57.3095 39.7254 57.3 39.7117C57.2904 39.698 57.2843 39.6822 57.2821 39.6656C57.28 39.649 57.2818 39.6321 57.2876 39.6164L62.9266 24.2148C62.9339 24.1948 62.9472 24.1775 62.9647 24.1653C62.9821 24.1531 63.0029 24.1465 63.0242 24.1465H67.2551C67.2764 24.1465 67.2971 24.1531 67.3146 24.1653C67.332 24.1775 67.3453 24.1948 67.3526 24.2148L73.1185 39.6164C73.1242 39.6321 73.1261 39.649 73.124 39.6656C73.1218 39.6822 73.1157 39.698 73.1061 39.7117C73.0965 39.7254 73.0838 39.7367 73.069 39.7444C73.0541 39.7522 73.0377 39.7562 73.0209 39.7562H69.3494C69.3277 39.756 69.3066 39.7489 69.2891 39.7361C69.2716 39.7233 69.2586 39.7053 69.2518 39.6847L68.3835 37.0896C68.3768 37.069 68.3637 37.051 68.3462 37.0382C68.3287 37.0253 68.3077 37.0183 68.286 37.018H61.9608C61.9391 37.0183 61.918 37.0253 61.9005 37.0382C61.883 37.051 61.87 37.069 61.8632 37.0896ZM63.2778 33.9546L67.0437 33.9579C67.2345 33.9579 67.2995 33.8679 67.2388 33.6879L65.2095 27.6619C65.1358 27.4473 65.0632 27.4473 64.9917 27.6619L63.0209 33.6034C62.9429 33.8375 63.0285 33.9546 63.2778 33.9546Z" fill="#C29773"/>
                            <path d="M85.0343 32.4688C86.1075 32.8677 86.7091 33.6948 86.8392 34.9501C86.9454 35.9604 87.0159 37.0585 87.0505 38.2444C87.0635 38.6737 87.1676 39.1159 87.3595 39.4997C87.4267 39.6384 87.3833 39.7067 87.2294 39.7046L84.218 39.6948C83.7519 39.6926 83.5026 39.4596 83.4701 38.9956C83.3877 37.8574 83.3248 36.8059 83.2814 35.8411C83.2294 34.6682 82.6202 34.0579 81.4538 34.0102C80.4478 33.9712 79.392 33.9647 78.2863 33.9907C78.1432 33.9951 78.0717 34.0677 78.0717 34.2086L78.0749 39.542C78.0749 39.685 78.0034 39.7566 77.8603 39.7566H74.6343C74.5259 39.7566 74.4717 39.7024 74.4717 39.594V24.2411C74.4717 24.221 74.4794 24.2016 74.4934 24.1871C74.5073 24.1725 74.5263 24.1639 74.5465 24.1631C77.224 24.1262 79.8527 24.1295 82.4327 24.1729C85.3432 24.2216 87.4505 26.0753 87.2099 29.1777C87.0961 30.6542 86.2505 31.5647 85.0148 32.2639C84.876 32.3441 84.8825 32.4124 85.0343 32.4688ZM78.0814 27.1907L78.0684 31.0867C78.0684 31.1186 78.0811 31.1492 78.1037 31.1718C78.1262 31.1943 78.1568 31.207 78.1888 31.207L81.5546 31.22C81.8092 31.2209 82.0614 31.1742 82.2969 31.0825C82.5324 30.9908 82.7466 30.8559 82.9272 30.6856C83.1078 30.5153 83.2512 30.3128 83.3494 30.0898C83.4476 29.8668 83.4985 29.6276 83.4993 29.3859V28.9306C83.501 28.4425 83.2984 27.9736 82.9361 27.6272C82.5739 27.2808 82.0816 27.0852 81.5676 27.0834L78.2018 27.0704C78.1698 27.0704 78.1392 27.0831 78.1167 27.1057C78.0941 27.1282 78.0814 27.1588 78.0814 27.1907Z" fill="#C29773"/>
                            <path d="M96.3413 27.5416V39.6424C96.3413 39.6726 96.3293 39.7016 96.3079 39.7229C96.2866 39.7442 96.2576 39.7562 96.2275 39.7562H92.7153C92.6851 39.7562 92.6561 39.7442 92.6348 39.7229C92.6134 39.7016 92.6014 39.6726 92.6014 39.6424V27.5384C92.6014 27.5082 92.5894 27.4792 92.5681 27.4579C92.5468 27.4365 92.5178 27.4245 92.4876 27.4245L87.9185 27.4213C87.8883 27.4213 87.8594 27.4093 87.838 27.3879C87.8167 27.3666 87.8047 27.3376 87.8047 27.3075L87.8079 24.2603C87.8079 24.2454 87.8109 24.2306 87.8166 24.2167C87.8223 24.2029 87.8307 24.1904 87.8413 24.1798C87.8518 24.1693 87.8644 24.1609 87.8782 24.1551C87.892 24.1494 87.9068 24.1465 87.9218 24.1465H101.024C101.054 24.1465 101.083 24.1585 101.105 24.1798C101.126 24.2012 101.138 24.2301 101.138 24.2603V27.3042C101.138 27.3192 101.135 27.334 101.129 27.3478C101.124 27.3616 101.115 27.3741 101.105 27.3847C101.094 27.3953 101.082 27.4036 101.068 27.4094C101.054 27.4151 101.039 27.418 101.024 27.418L96.4551 27.4278C96.4249 27.4278 96.396 27.4398 96.3746 27.4611C96.3533 27.4825 96.3413 27.5114 96.3413 27.5416Z" fill="#C29773"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_495_2724">
                                <rect width="101.463" height="40" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div onClick={()=>setPhoneMenuVisible(true)} className="burger-menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="none"
                        viewBox="0 0 60 60"
                    >
                        <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeWidth="5"
                            d="M12.5 30H45M12.5 42.5h15M12.5 17.5h25"
                        ></path>
                    </svg>
                </div>
            </div>

            {phoneMenuVisible&& <div className="phone-menu">
                <div className="header">
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                    }}>
                        <Link to={"/"}> <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
                            <path d="M3 40V3H39.5V19.5H19V40H3Z" stroke="#191C38" stroke-width="5"/>
                            <path d="M26.5 40V26.5H39.5V40H26.5Z" stroke="#191C38" stroke-width="5"/>
                        </svg></Link>
                        <svg onClick={()=>setPhoneMenuVisible(false)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M21.5373 0.903181C21.0818 0.447638 20.3432 0.447638 19.8876 0.903181L11.3789 9.4119L2.87021 0.903181C2.41467 0.447638 1.6761 0.447638 1.22056 0.903181C0.76502 1.35871 0.76502 2.09729 1.22056 2.55282L9.72926 11.0615L1.22059 19.5701C0.765044 20.0258 0.765044 20.7643 1.22059 21.2199C1.67612 21.6754 2.4147 21.6754 2.87023 21.2199L11.3789 12.7112L19.8876 21.2199C20.3432 21.6754 21.0818 21.6754 21.5373 21.2199C21.9928 20.7643 21.9928 20.0258 21.5373 19.5703L13.0285 11.0615L21.5373 2.55282C21.9928 2.09729 21.9928 1.35871 21.5373 0.903181Z" fill="#191C38"/>
                        </svg>
                    </div>

                    <div className="menu-options">
                        <Link to={"/"}> <div className="menu-option">
                            Home
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M0.933333 15.8002L0 14.8669L6.86667 8.0002L0 1.13353L0.933333 0.200195L8.73333 8.0002L0.933333 15.8002Z" fill="#191C38"/>
                            </svg>
                        </div></Link>
                        <Link to={"/real-estate"}> <div className="menu-option">
                            Buy
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M0.933333 15.8002L0 14.8669L6.86667 8.0002L0 1.13353L0.933333 0.200195L8.73333 8.0002L0.933333 15.8002Z" fill="#191C38"/>
                            </svg>
                        </div></Link>
                        <Link to={"/concierge"}> <div className="menu-option">
                            Concierge
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M0.933333 15.8002L0 14.8669L6.86667 8.0002L0 1.13353L0.933333 0.200195L8.73333 8.0002L0.933333 15.8002Z" fill="#191C38"/>
                            </svg>
                        </div></Link>
                        <div className="menu-option">
                            Consulting
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M0.933333 15.8002L0 14.8669L6.86667 8.0002L0 1.13353L0.933333 0.200195L8.73333 8.0002L0.933333 15.8002Z" fill="#191C38"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="language">
                    <div className="lang">UA</div>
                    <div className="lang">RU</div>
                    <div className="lang active">EN</div>
                </div>
            </div>}
        </div>

    </header>)
}
export default Header