import { Helmet } from "react-helmet";
import CasinoSection from "../../CasinoSection";

export default function CrashGames() {
  const curDate = new Date();

  const topPar = {
    h2: `Best Crash Games in the UK – Our  Casino Picks - ${curDate.getFullYear()}`,
    p: "Crash games - especially the fan - favorite Aviator - are revolutionizing the UK casino scene. These adrenaline - packed games reward sharp reflexes and smart decisions, delivering unmatched thrills to players across the country.",
    list: [
      "🚀 Fast-Paced Thrills: Soar into high-speed action where timing is everything – cash out before the crash and claim your prize. Ideal for players who crave intense, heart-racing casino moments!",
      "📈 Top-Rated Platforms: Discover trusted UK casinos that feature Aviator and other crash games, ensuring secure gameplay and fair odds.",
      "🎮 Modern Innovation: Enjoy sleek, immersive crash games designed with UK players in mind – featuring responsive interfaces and cutting-edge mechanics.",
    ],
  };

  const what = {
    id: "par-2",
    h4: "🎮 What Are Crash Games?",
    p: "Crash games are multiplayer betting games where the odds increase rapidly in real time. Your mission: cash out before the multiplier crashes. It’s simple, yet suspenseful - perfect for players who live for high-stakes action",
  };

  const why = {
    id: "par-3",
    h4: "🚀 Why Are They Popular?",
    ul: [
      "Fast-Paced Fun: Short, action-heavy rounds are ideal for dynamic gameplay lovers.",
      "Social Competition: Play alongside other users and watch who bails out in time.",
      "Big Win Potential: With the right timing, small bets can lead to massive wins – if you don’t wait too long.",
    ],
  };

  const top = {
    id: "par-4",
    h4: `🌟 Top Crash Games of ${curDate.getFullYear()}`,
    p: "From the iconic Aviator to futuristic titles like Space Crash, we’ve gathered the most exhilarating crash games available at licensed UK online casinos. Enjoy vivid graphics, responsive gameplay, and sky - high rewards.",
  };

  const meta = {
    title: `Top Crash Games in UK Casinos: Play & Win Big in  ${curDate.getFullYear()}`,
    description: `Explore the best crash games in UK casinos for ${curDate.getFullYear()}. Discover thrilling gameplay, top titles like Aviator and Space Crash, and tips to maximize your wins. Play safely and responsibly!"`,
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <CasinoSection />
      <div className="w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="mt-4">
          <h2>{topPar.h2}</h2>
          <p>{topPar.p}</p>
        </div>

        <div id={what.id} className="mt-4">
          <h4>{what.h4}</h4>
          <p>{what.p}</p>
        </div>

        <div id={why.id} className="mt-4">
          <h4>{why.h4}</h4>
          <ul>
            {why.ul.map((li, i) => (
              <li key={i}>
                {li.split(":").map((sp, k) => (
                  <span className={!k ? "fw-bold" : ""} key={k}>
                    {sp} {!k ? ":" : ""}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div id={top.id} className="mt-4">
          <h4>{top.h4}</h4>
          <p>{top.p}</p>
        </div>

        <p>
          Ready to take off? Join the action and experience the ultimate crash
          games on trusted UK platforms-play responsibly!
        </p>
      </div>
    </>
  );
}
