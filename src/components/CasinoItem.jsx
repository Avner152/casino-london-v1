import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { importImages } from "../App";

const CasinoItem = ({ item, index, fixedURL }) => {
  const score = 10 - (index + 1) / 10;

  const srcTerm = `${item.name.toLowerCase().replaceAll(" ", "-")}.png`;
  const brands = importImages(
    require.context("../assets/brands", false, /\.(png|jpe?g|svg)$/)
  );
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-card ">
      {item.ribbonText && (
        <p className="ribbon-2 text-capitalize">
          <span className="ribbon-text">{item.ribbonText}</span>
        </p>
      )}
      <div
        className={`top-card d-flex gap-${
          !isDesktop ? "2 flex-column" : "1 row"
        } justify-content-around border rounded align-items-center text-center`}
      >
        <div className="col-md-3 rounded _square">
          <img
            className="object-fit-cover"
            alt={item.name}
            width={210}
            height={80}
            src={brands[srcTerm]}
          />
        </div>
        <div className="welcome-bonus text-white d-flex flex-column gap-2 col-md-3">
          {/* <span className="text-decoration-underline">{item.name} Casino</span> */}
          <span className="text-center">Welcome Bonus:</span>
          <h1 className="golden text-center">{item.title}</h1>
        </div>

        {isDesktop && (
          <div className="score d-flex flex-column align-items-center col-md-3">
            <div className="d-flex flex-column gap-2">
              <div
                style={{
                  background: `conic-gradient(rgb(255 215 42) ${
                    score * 10
                  }%, #de811d6a 0 100%`,
                }}
                className="rating good"
              >
                <span>{score.toFixed(1)}</span>
              </div>
              <div>Rating</div>
            </div>
          </div>
        )}

        <div className="d-flex flex-column col-md-3">
          <Button
            onClick={() => {
              setClicked(!clicked);
              window.open(fixedURL, "_blank");
            }}
          >
            {clicked ? "Visit Again" : "Get Bonus"}
          </Button>
        </div>
      </div>
      {item.brandText && <div className="reg">{item.brandText}</div>}
    </div>
  );
};

export default CasinoItem;
