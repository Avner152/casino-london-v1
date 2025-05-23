import { Button } from "react-bootstrap";
import { setCookie } from "../json/helpers";

const CookieConsent = ({ setCookieStatus }) => {
  const cookieHandler = (accepted) => {
    // console.log(accepted);
    setCookie(
      "top-casino-consent",
      accepted,
      accepted ? 365 : 1,
      "topcasinosuk.net"
    );
    setCookieStatus(true);
  };

  return (
    <div className="cookie-wrapper d-flex flex-row text-white align-items-center justify-content-between position-fixed z-3 bottom-0 w-100 vh-25 p-4 bg-dark">
      <span>
        By visiting our website, you agree to our Terms of Use, our Privacy
        Policy, and our Cookies Policy. Our website contains advertisement. You
        must be lawfully permitted to gamble in your country of access.
      </span>
      <div className="d-flex flex-column gap-2">
        <Button
          onClick={() => cookieHandler(true)}
          className="cookie-accept cookie-button"
        >
          Accept
        </Button>
        <Button
          onClick={() => cookieHandler(false)}
          className="cookie-reject cookie-button"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
