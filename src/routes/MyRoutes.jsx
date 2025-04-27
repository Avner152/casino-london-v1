import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/paginations/HomePage";
import CookiePolicy from "../components/paginations/CookiePolicy";
import Terms from "../components/paginations/Terms";
import PrivacyPolicy from "../components/paginations/PrivacyPolicy";
import AboutUs from "../components/paginations/AboutUs";
import CrashGames from "../components/paginations/info/CrashGames";
import LiveRoulette from "../components/paginations/info/LiveRoulette";
import BigBassBonanza from "../components/paginations/info/BigBassBonanza";
import Blackjack from "../components/paginations/info/Blackjack";

export default function MyRoutes({ captchaToken }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage captchaToken={captchaToken} />}
        ></Route>
        <Route exact path="/terms-and-conditions" element={<Terms />}></Route>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>

        <Route
          exact
          path="/cookie-consent-policy"
          element={<CookiePolicy />}
        ></Route>

        <Route exact path="/blackjack" element={<Blackjack />}></Route>
        <Route exact path="/top-crash-games" element={<CrashGames />}></Route>
        <Route exact path="/live-roulette" element={<LiveRoulette />}></Route>
        <Route
          exact
          path="/big-bass-bonanza"
          element={<BigBassBonanza />}
        ></Route>
      </Routes>
    </>
  );
}
