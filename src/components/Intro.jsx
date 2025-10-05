import { observer } from "mobx-react";
import casino from "../assets/casino.png";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toJS } from "mobx";

const Intro = observer(() => {
  const curDate = new Date();
  const fullYear = curDate.getFullYear();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const location = useLocation();
  const [page, setPage] = useState(null);

  const infoPages = ["cookie", "about", "terms", "privacy"];

  const headlineInfo = {
    homePage: {
      title: "Check UK's Best Casinos Of 2025",
      p: "Top UK real money online casinos compared and reviewed. Check the list of the most popular British online casinos. Play safely & responsibly",
    },
    crash: {
      title: "Best Crash Games in the UK – Our  Casino Picks for ",
    },
    live: {
      title: "Top Live Roulette in the UK – Top Casino List - ",
    },
    bigBassBonanza: {
      title: "Big Bass Bonanza – Top Slot Picks in the UK - ",
      list: [
        "🎣 Top-Rated Gameplay: Join the angler in this high-volatility slot packed with free spins, cash-collect features, and fishing-themed fun.",
        "💸 High Win Potential: With a max win of 2,100x your stake and an engaging bonus round, every spin can bring a thrilling catch.",
        "🔒 Safe & Secure: Enjoy Big Bass Bonanza on trusted UK casino platforms licensed for fair, responsible, and secure play.",
      ],
    },
    slots: {
      title: "Best Slot Games UK - Our Picks for ",
      list: [
        "🎰 Top Slots: Play the latest games with exciting themes and big jackpots.",
        "💸 High Payouts: Enjoy high RTP slots and progressive jackpots for big wins.",
        "🔒 Secure Play: Experience safe, fair, and licensed gaming at top UK casinos.",
      ],
    },
    blackjack: {
      title: "Best UK Blackjack Games & Providers – Our Casino Picks for ",
      list: [
        "🃏 A Game of Legacy: From smoky saloons to sleek online tables, blackjack has evolved through centuries while retaining its timeless appeal.",
        "🧠 Skill Meets Simplicity: With easy-to-learn rules and deep strategic layers, blackjack attracts both casual players and seasoned pros.",
        "🌐 The Future is Now: Live dealers, mobile gameplay, and VR features are redefining how UK players experience blackjack in 2025.",
      ],
    },
    cookie: {
      title: "Cookie Policy 18+",
    },
    terms: {
      title: "Terms and Conditions",
    },
    privacy: {
      title: "Privacy Policy",
    },
    about: {
      title: "About Us ",
    },
  };

  useEffect(() => {
    switch (location.pathname) {
      default:
        return setPage("");
      case "/live-roulette":
        setPage("live");
        break;
      case "/top-crash-games":
        setPage("crash");
        break;
      case "/big-bass-bonanza":
        setPage("bigBassBonanza");
        break;
      case "/about-us":
        setPage("about");
        break;
      case "/blackjack":
        setPage("blackjack");
        break;
      case "/cookie-consent-policy":
        setPage("cookie");
        break;
      case "/terms-and-conditions":
        setPage("terms");
        break;
      case "/privacy-policy":
        setPage("privacy");
        break;
    }
  }, [location]);

  return (
    <div className="intro mt-5 tit-n-des text-white p-3">
      {page ? (
        <div className="text-white mb-5_">
          <h1 className="intro-title fw-bold w-75 sm-w-100">
            <span className="bg-dark bg-opacity-75">
              {headlineInfo[page].title}
              {!infoPages.some((page) => location.pathname.includes(page)) && (
                <>
                  {curDate.toLocaleString("default", { month: "long" })}{" "}
                  {fullYear}
                </>
              )}
            </span>
          </h1>
        </div>
      ) : (
        <div
          className={`d-flex align-items-center justify-content-${
            isDesktop ? "between" : "center"
          }`}
        >
          <div>
            <h1 className={`intro-title fw-bold w-${isDesktop ? 75 : 100}`}>
              <span className="bg-dark bg-opacity-75">
                {myStore.type === "blanca"
                  ? `Check UK's Best Casinos Of ${curDate.toLocaleString(
                      "default",
                      { month: "long" }
                    )} ${fullYear}`
                  : toJS(myStore.content).firstTitle.replace(
                      "{curDate}",
                      `${curDate.toLocaleString("default", {
                        month: "long",
                      })} ${curDate.getFullYear()} `
                    )}
              </span>
            </h1>
          </div>
          {isDesktop && (
            <div>
              <img
                className="cards"
                alt="cards"
                width={isDesktop ? 220 : 120}
                src={casino}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default Intro;
