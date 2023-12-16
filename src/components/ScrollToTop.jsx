import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: "easeInOutQuint",
        });
    }, [pathname]);
    return null;
}
