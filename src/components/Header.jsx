import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { Nav } from "react-bootstrap";
// import { Button } from "react-bootstrap";

export default function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [show, setShow] = useState("closed");

  const hamburgerHandler = () => {
    isBurgerOpen ? setShow("closed") : setShow("open");
    setBurgerOpen(!isBurgerOpen);
  };

  const menu = [
    {
      title: "Top Pages",
      list: [
        {
          name: "Crash Games ",
          url: "/top-crash-games",
        },
        {
          name: "Live Roulette ",
          url: "/live-roulette",
        },
        {
          name: "Big Bass Bonanza ",
          url: "/big-bass-bonanza",
        },
        {
          name: "Blackjack",
          url: "/blackjack",
        },
      ],
    },
    {
      title: "Information",
      list: [
        { name: "About Us", url: "/about-us" },
        { name: "Cookies Policy", url: "/cookie-consent-policy" },
        { name: "Terms & Conditions", url: "terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
  ];

  // const desktopMenu = [
  //   "Slots",
  //   "Jackpot",
  //   "Roulette",
  //   "Live Casino",
  //   "Game Shows",
  //   "About us",
  // ];

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <header
      className={`${isDesktop ? "desktop" : "mobile"}-header header w-100`}
    >
      <div
        className={`w-100 d-flex ${
          !isDesktop && "justify-content-between"
        } align-items-center fs-2`}
      >
        {isDesktop ? (
          <div className="d-flex align-items-center justify-content-between w-100">
            <NavLink to={`/${window.location.search}`}>
              <img src={logo} width={220} alt="logo" height={35} />
            </NavLink>
            <Nav className="fs-6 gap-3">
              {menu[0].list.map((item, i) => (
                <NavLink
                  className="my-nav text-white"
                  to={item.url + window.location.search}
                  key={i}
                >
                  {item.name}
                </NavLink>
              ))}
            </Nav>
          </div>
        ) : (
          <>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <NavLink to={`/${window.location.search}`} className="ms-3">
                <img alt="logo" src={logo} width={180} />
              </NavLink>
              {/*  */}

              <div id="outer-container">
                <Menu
                  id="elastic"
                  right
                  // customCrossIcon={false}
                  burgerButtonClassName={show}
                  isOpen={isBurgerOpen}
                  onOpen={hamburgerHandler}
                  onClose={hamburgerHandler}
                >
                  <Link
                    onClick={() => {
                      setShow("");
                      setBurgerOpen(false);
                    }}
                    to={`/${window.location.search}`}
                  >
                    <img
                      src={logo}
                      width={125}
                      alt="logo"
                      height={20}
                      className="_mt-2"
                    />
                  </Link>
                  {menu.map((menuItem, _) => (
                    <div
                      key={menuItem.title}
                      className="d-flex flex-column gap-1"
                    >
                      <span className="fw-bold mt-3">{menuItem.title}</span>
                      {menuItem.list.map((li, j) => (
                        <Link
                          onClick={() => {
                            setShow("");
                            setBurgerOpen(false);
                          }}
                          key={j}
                          to={li.url + window.location.search}
                          href={li.url + window.location.search}
                        >
                          {li.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="mt-4"></div>
                </Menu>
              </div>
              {/*  */}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
