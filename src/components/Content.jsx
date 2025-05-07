import { Accordion } from "react-bootstrap";

export default function Content() {
  const curDate = new Date();

  const why = {
    id: "why",
    h2: "Why Choose Our Online Casino Comparison?",
    p: "At topcasinosuk.net, we specialize in delivering honest, detailed reviews of the highest-rated UK online casinos. Our mission is to streamline your search and give you peace of mind while navigating the vibrant world of real-money online gaming.",
    ol: [
      {
        title: "Top 10 Online Casinos",
        description:
          "Explore our top 10 list of UK online casinos, handpicked for their outstanding game variety, user experience, and exclusive bonuses. Only the best makes the cut.",
      },
      {
        title: "Mobile and New Casinos",
        description: `Stay ahead of the curve with our updates on mobile-friendly and newly launched casinos in ${curDate.getFullYear()}. Enjoy smooth, on-the-go gaming with our expert mobile picks.`,
      },
      {
        title: "Best Casino Bonuses",
        description:
          "Boost your bankroll with unbeatable bonus offers! From welcome packages to ongoing promotions, we highlight the top UK casino bonuses available today.",
      },
      {
        title: "Real-Money Gaming",
        description:
          "Discover a thrilling selection of real-money games including classic table games (blackjack, roulette), innovative slots, and immersive live dealer experiences.",
      },
    ],
  };
  const faq = {
    t: "Comprehensive Insights and FAQs",
    p: "Choosing the right online casino can be overwhelming. That’s why we offer a robust FAQ section covering licensing, payment options, game fairness, mobile compatibility, and more - tailored for UK players.",
    ques: ["Why Trust Us?"],
    ans: [
      "The team at topcasinosuk.net is made up of seasoned casino reviewers and gambling industry professionals. We provide transparent, regularly updated insights to ensure you’re always getting the most accurate information and safest recommendations.",
    ],
  };

  const advertiser = {
    id: "advertiser",
    h2: "18+ Advertiser Disclosure",
    p: "This website is a free online resource dedicated to providing valuable content and comparison tools for our visitors. We receive advertising compensation from the companies featured on this site, which may influence the placement and ranking of brands (and/or their products) as well as the scores assigned to them. The inclusion of companies on this page does not imply endorsement. We do not cover all providers available in the market. Except as expressly outlined in our Terms of Use, we disclaim any representations and warranties regarding the information provided on this page. The content, including pricing, is subject to change at any time.",
  };

  return (
    <div className="content-container w-100 m-auto">
      <h1 className="fw-bold text-white">
        Best UK Online Casinos {curDate.getFullYear()} : Top Games & Bonuses
      </h1>
      <p>
        Welcome to the ultimate guide to the best online casinos in the UK for{" "}
        {curDate.getFullYear()}! Whether you're a seasoned player or new to
        online gaming, our expertly curated platform is here to help you
        discover the finest, most trustworthy casino sites offering exciting
        games, generous bonuses, and thrilling real-money prizes.
      </p>

      <div id={why.id}>
        <h2>{why.h2}</h2>
        <p>{why.p}</p>
        <ol>
          {why.ol.map((li, i) => (
            <li key={i}>
              <h3>{li.title}</h3>
              <p>{li.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="faq">
        <h1 className="fw-bold text-white">{faq.t}</h1>
        <p>{faq.p}</p>
        <Accordion>
          {faq.ques.map((qNa, i) => {
            return (
              <Accordion.Item key={i} eventKey={i}>
                <Accordion.Header as="h3">
                  <p>{qNa}</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.ans[i]}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>

      <div className="mt-4">
        <h2>Start Your Casino Journey Today</h2>
        <p>
          Visit topcasinosuk.net to explore the best UK online casinos of{" "}
          {curDate.getFullYear()}. Claim exclusive bonuses, play your favorite
          games, and enjoy a safe, exciting, and responsible gaming experience.
          Your next favorite casino is just a click away - start winning today!
        </p>
      </div>

      <div>
        <h2>
          Best UK Online Casinos {curDate.getFullYear()} : Top Games & Bonuses
        </h2>
        <p>
          Welcome to topcasinosuk.net, your ultimate guide to the best online
          casinos in the UK for {curDate.getFullYear()}! Whether you’re a
          seasoned gambler or just starting out, our expertly curated comparison
          hub is designed to help you find the most reputable, entertaining, and
          rewarding casino sites available.
        </p>
      </div>

      <div className="mt-5 d-flex flex-column gap-3">
        <div>
          According to the British Gambling Commission, the statutory gambling
          regulator, "Safe and responsible gambling comes from an industry that
          takes care of its customers, customers who are empowered with the
          knowledge to manage their gambling, and a regulator that ensures the
          consumer is at the heart of everything we do." This information aims
          to address the first two criteria. As we promote gambling services on
          this site, we believe it is important to inform our customers about
          the risks associated with gambling and provide information on where to
          find further advice and support if needed.
        </div>
        <div id={advertiser.id}>
          <h2>{advertiser.h2}</h2>
          <p>{advertiser.p}</p>
        </div>
      </div>
    </div>
  );
}
