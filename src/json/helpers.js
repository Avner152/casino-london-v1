export function setCookie(name, value, days, domain) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  const domainPart = domain ? "; domain=" + domain : "";
  document.cookie = name + "=" + value + expires + "; path=/" + domainPart;
}

export function cookieExist(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) return true;
  }
  return false;
}

export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// const pushContent = () => {
//   const ENDPOINT = `http://localhost:5001/oxford/add-content`;
//   const HEADERS = { segment: "viral" };

//   const content = {
//     whySection: {
//       id: "why",
//       h2: "Why Use Our Casino Comparison?",
//       ol: [
//         {
//           title: "🎠 Trusted Non-Gamstop Casinos",
//           description:
//             "We showcase reliable UK online casinos not on Gamstop. These platforms are chosen for their wide game variety, secure payments, fast registration, and rewarding bonuses — giving you more freedom and flexibility.",
//         },
//         {
//           title: "📱 Mobile & New Casinos",
//           description:
//             "Play your favourite games on the go. Our list includes mobile-optimised and newly launched casinos for 2025, offering smooth gameplay across all devices and platforms.",
//         },
//         {
//           title: "🏱 Best Casino Bonuses",
//           description:
//             "Unlock exclusive deals like no-deposit bonuses, free spins, and match offers to stretch your bankroll. We highlight only the most rewarding and transparent promotions.",
//         },
//         {
//           title: "💷 Real-Money Gaming",
//           description:
//             "Enjoy a wide variety of games for real cash — from classic blackjack and roulette to high-quality video slots, crash games, and live dealer tables. All casinos listed accept UK players and offer fast, secure payments.",
//         },
//       ],
//       sortOrder: 1,
//     },
//     advertiser: {
//       id: "advertiser",
//       h2: "⚠️ 18+ | Advertiser Disclosure",
//       p: "This site is a free resource supported by advertising. Some of the casinos featured here may compensate us, which can affect rankings. We aim to present honest, useful information, but not all casinos in the market are covered. Please see our Terms of Use for full details.",
//       sortOrder: 4,
//     },
//     faq: {
//       id: "faq",
//       h2: "✅ FAQs & Player Guidance",
//       p: "We’ve included a comprehensive FAQ to answer all your questions about:",
//       sortOrder: 3,
//       ul: [
//         "Casino licensing (including Curaçao, Malta, and other regulators)",
//         "Deposit & withdrawal options (Payz, crypto, credit cards, bank transfer, etc.)",
//         "Game fairness & RTP",
//         "Casino security and privacy",
//       ],
//     },
//     headlineSection: {
//       h1: "Best Non-Gamstop UK Online Casinos {curDate} - Games, Bonuses & Trusted Sites",
//       p: "Welcome to your go-to guide at UKBestCasino.net for the best non-Gamstop online casinos in the UK for 2025. Whether you're an experienced player or just starting out, we’ve created a list of trusted casino platforms offering exciting real-money games, generous bonuses, and a secure, user-friendly experience — all outside the Gamstop self-exclusion scheme.",
//     },
//     responsibleSection: {
//       id: "responsible",
//       h2: "Responsible Gaming & Licensing",
//       p: "While these casinos are not part of the Gamstop scheme, many are licensed offshore and still promote responsible gambling. We encourage players to stay informed and gamble within their limits.\\n“Safe and responsible gambling comes from an industry that takes care of its customers… and a regulator that ensures the consumer is at the heart of everything we do.”— UK Gambling Commission\\nWe strongly support responsible gambling and link to resources where you can seek help if needed.",
//       sortOrder: 2,
//     },
//     firstTitle: "Top Blackjack Games & Providers in the UK - {curDate}",
//   };

//   axios
//     .post(ENDPOINT, { content }, { HEADERS })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

// pushContent();
