import { useLayoutEffect, useState } from "react";

const useResponsive = () => {
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(false);
  const [twoXl, setTwoXl] = useState(false);

  useLayoutEffect(() => {
    function changeMediaQuery() {
      if (window.matchMedia("only screen").matches) {
        setSm(true);
        setMd(false);
        setLg(false);
        setXl(false);
        setTwoXl(false);
      }
      if (window.matchMedia("only screen and (min-width: 768px)").matches) {
        setSm(false);
        setMd(true);
        setLg(false);
        setXl(false);
        setTwoXl(false);
      }

      if (window.matchMedia("only screen and (min-width: 1024px)").matches) {
        setSm(false);
        setMd(false);
        setLg(true);
        setXl(false);
        setTwoXl(false);
      }

      if (window.matchMedia("only screen and (min-width: 1280px)").matches) {
        setSm(false);
        setMd(false);
        setLg(false);
        setXl(true);
        setTwoXl(false);
      }

      if (window.matchMedia("only screen and (min-width: 1536px)").matches) {
        setSm(false);
        setMd(false);
        setLg(false);
        setXl(false);
        setTwoXl(true);
      }
    }
    window.addEventListener("resize", changeMediaQuery);
    changeMediaQuery();
    return () => window.removeEventListener("resize", changeMediaQuery);
  }, []);

  return { sm, md, lg, xl, twoXl };
};

export default useResponsive;
