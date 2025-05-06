import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function PrivacyPolicy() {
  const curDate = new Date();
  const meta = {
    title: "Privacy Policy | topCasinosUK.net",
    description:
      "Review the Privacy Policy for topcasinosuk.net. Learn how we collect, use, and protect your personal information, including data usage and third - party services",
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="_w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="m-auto pt-3">
          <span>
            Last Updated: {curDate.toLocaleString("default", { month: "long" })}{" "}
            , {curDate.getFullYear()}
          </span>

          <p>
            We reserve the right to update or change this Privacy Policy at any
            time, at our sole discretion. If any changes are made, we will post
            the updated Privacy Policy on the site, and the “Last Updated” date
            above will reflect the new effective date. Your continued use of the
            site after this date constitutes your agreement with the updated
            Policy.
          </p>
          <p>
            For any significant changes, we will provide prominent notice on the
            site - such as a banner or notification - at least seven (7) days
            before the changes take effect. These updates will then become
            effective seven (7) days after the notice is published.
          </p>

          <div>
            <h4>Terms of Use</h4>
            <p>
              This Privacy Policy is an integral part of topcasinosuk.net’s
              Terms of Use ("Terms"). Any capitalized terms not defined in this
              Privacy Policy will have the meaning assigned to them in the
              Terms.
            </p>
            <p>
              Our Legal Bases for Processing Personal Data We process and use
              Personal Information in accordance with applicable data protection
              laws. The legal bases on which we typically rely include:
            </p>
            <ul>
              <li>
                Performance of a Contract: By using the site, you request us to
                provide services under our Terms of Use, which requires
                processing some Personal Information (e.g., IP address).
              </li>
              <li>
                Legitimate Interests: We may process your Personal Information
                for purposes such as improving the site, promoting our services,
                personalizing your experience, conducting analytics, and
                maintaining platform security.
              </li>
              <li>
                Legal Obligations: In some cases, we process your Personal
                Information to comply with legal or regulatory requirements
                (e.g., handling user complaints).
              </li>
              <li>
                Consent: When you voluntarily provide Personal Information to
                access specific services.
              </li>
            </ul>
          </div>

          <div>
            <h4>Information We Collect</h4>
            <p>
              Information You Provide to Us Certain services on topcasinosuk.net
              require you to provide Personal Information, such as signing up
              for newsletters or requesting more information. This may include
              your name, email address, phone number, or other data that
              identifies you. In some jurisdictions, your IP address is also
              considered Personal Information. Submission of this information is
              entirely voluntary and based on your active consent.
            </p>
            <p>
              Third - Party Forms and Services Our site lists, compares, and
              promotes products or services from third - party partners
              ("Partners"). You may be offered access to these Products or
              services via online forms. If you pursue a transaction, you may be
              redirected to the Partner’s landing page and asked to submit
              Personal Information ("Landing Page Info"). That data is collected
              by the Partner, and their privacy policy applies.
            </p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>
              If you contact us via form, email, or other means, we may collect
              Personal Information such as your name, email, and the content of
              your message. This data is used solely to respond to your inquiry
              and for our legitimate business interests.
            </p>
          </div>

          <div>
            <h4>Blogs, Newsletters, Surveys, and Promotions</h4>
            <p>
              topcasinosuk.net may feature blogs, reviews, and promotional
              content. Participation in surveys, newsletters, or giveaways may
              require submission of Personal Information. Your data will be
              handled according to this Privacy Policy and the applicable third
              - party policy when relevant.
            </p>
          </div>

          <div>
            <h4>Information We Collect from You Automatically</h4>
            <p>
              We automatically collect certain technical and usage data when you
              interact with the site, including:
            </p>
            <ul>
              <li>
                Device Information: Type of device, operating system, language
                settings, location, and time zone.
              </li>
              <li>
                Usage Data: URLs visited, clicks, time spent, page views, and
                other on-site behavior.
              </li>
              <li>Log Files: IP addresses and related server-side data.</li>
              <li>
                Cookies and Similar Technologies: We use cookies and related
                tracking tools to enhance your experience. For more information,
                please refer to our{" "}
                <NavLink
                  to={`/cookie-consent-policy/${window.location.search}`}
                >
                  {" "}
                  Cookie Policy
                </NavLink>
                .
              </li>
              <p>
                For additional questions or requests regarding your data, please
                contact us directly.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
