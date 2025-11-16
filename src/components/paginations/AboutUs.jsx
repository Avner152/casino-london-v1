import React from "react";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>
          About CasinoPortalUK.net: Reviews, Responsible Gambling & Contact
          Information
        </title>
        <meta
          name="description"
          content="Learn more about casinoportaluk.net. Discover our mission to provide honest, comprehensive reviews of the best UK online casinos. For inquiries or suggestions. Play responsibly!"
        />
      </Helmet>
      <div className="_w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="m-auto pt-3">
          <h2>About Us - CasinoPortalUK.net</h2>
          <span>18+</span>
          <div className="mt-3">
            <p>
              At <strong>CasinoPortalUK.net</strong>, we deliver comprehensive,
              up-to-date information about the leading online casinos in the UK.
              Our expert reviews and detailed guides are designed to help you
              find the safest and most exciting gambling platforms available.
              Whether you're a seasoned player or just starting out, we're here
              to ensure your experience is informed, secure, and enjoyable.
            </p>
            <p>
              We are strong advocates of responsible gaming and only recommend
              UK casinos that meet the highest standards of fairness, security,
              and regulatory compliance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
