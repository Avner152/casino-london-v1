import React from "react";
import PortalSection from "../../PortalSection";
import { Helmet } from "react-helmet";

export default function BigBassBonanza() {
  const curDate = new Date();

  const titlePar = {
    h1: `Play Big Bass Bonanza in the UK – Reeling in Wins in  ${curDate.getFullYear()}`,
    p: "Big Bass Bonanza has become a standout favorite in UK online casinos, thanks to its charming fishing theme, rewarding features, and simple yet exciting mechanics. Created by Pragmatic Play, this game blends fun visuals with serious win potential, attracting both casual players and serious slot fans alike.\nWhether you’re new to online slots or a seasoned angler, Big Bass Bonanza in 2025 promises an unforgettable gaming experience with every spin.",
  };

  const why = {
    id: "par-1",
    h4: "🎰 Why Is Big Bass Bonanza So Popular in the UK?",
    ul: [
      "Unique Theme: The fishing-inspired visuals and sounds create a lighthearted, immersive atmosphere that’s instantly engaging.",
      "Cash Collection Feature: Land the fisherman wild symbol during free spins to collect all visible fish values – your haul grows with every catch.",
      "Simple Yet Rewarding: With 5 reels, 10 paylines, and straightforward gameplay, Big Bass Bonanza is easy to pick up but packed with winning opportunities.",
    ],
  };

  const popularGames = {
    id: "par-2",
    h4: `🌟 Big Bass Bonanza Variants to Try in ${curDate.getFullYear()}`,
    ul: [
      "Big Bass Bonanza: The original hit – classic, smooth, and packed with free spin fun.",
      "Big Bass Splash: An upgraded version with additional modifiers like extra free spins, higher-paying fish, and more wilds.",
      "Big Bass Bonanza Megaways™: A dynamic twist with the Megaways engine, offering up to 46,656 ways to win.",
      "Big Bass Hold & Spinner: A thrilling variation featuring the Hold & Win mechanic with potential for massive cash prizes.",
    ],
  };

  const tips = {
    id: "par-3",
    h4: "💡 Tips for Playing Big Bass Bonanza",
    ul: [
      "Watch the Free Spins Round: That’s where the real action happens – trigger it with 3 or more scatter symbols.",
      "Manage Your Bankroll: It’s a high-volatility game, so be prepared for some dry spells between big wins.",
      "Use Casino Bonuses: Look for UK casinos offering free spins or bonus funds specifically for Big Bass Bonanza.",
    ],
  };

  const responsible = {
    id: "par-4",
    h4: "Play Responsibly",
    p: `Big Bass Bonanza is all about excitement - but always play within your limits. Set a budget, take breaks, and use responsible gambling tools available on licensed UK sites to ensure a safe and enjoyable experience.\nWhether you're in it for the fun theme or the fish - sized wins, Big Bass Bonanza is a must - play slot in ${curDate.getFullYear()}> - available now on the top UK platforms reviewed at casinocompareuk.net.`,
  };

  const meta = {
    title: `Big Bass Bonanza Slot UK ${curDate.getFullYear()}: Features, Wins & Where to Play`,
    description: `Play Big Bass Bonanza in the UK’s top casinos for ${curDate.getFullYear()}. Discover exciting features, spin - triggered bonuses, and tips to reel in big wins. Safe, fun, and fully licensed gameplay at casinocompareuk.net!`,
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <PortalSection />
      <div className="fw-bold w-100 text-bg-dark text-white pt-4 mb-5 mt-2 information">
        <div className="p-4">
          <h1>{titlePar.h1}</h1>
          <p>{titlePar.p}</p>

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

          <div id={popularGames.id} className="mt-4">
            <h4>{popularGames.h4}</h4>
            <ul>
              {popularGames.ul.map((li, i) => (
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

          <div id={tips.id} className="mt-4">
            <h4>{tips.h4}</h4>

            <ul>
              {tips.ul.map((li, i) => (
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

          <div className="mt-4" id={responsible.id}></div>
          <h4>{responsible.h4}</h4>
          {responsible.p.split("\n").map((pi, i) => (
            <p key={i}>{pi}</p>
          ))}
        </div>
      </div>
    </>
  );
}
