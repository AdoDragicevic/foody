import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {

  const { pathname } = useLocation();

  const scrollToTop = () => document.documentElement.scrollTo({ top: 0, left: 0 });

  useEffect(scrollToTop, [pathname]);

  return null;
}

export default ScrollToTop;