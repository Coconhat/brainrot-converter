import {
  firstWord,
  bad,
  looksmaxing,
  sigma,
  fanumTax,
  sus,
  negativeAura,
  wAura,
  cap,
  yap,
  demonstrativePronouns,
  giveUp,
  dumb,
  indefinitePronouns,
  levelUp,
  food,
  play,
  winW,
  lLose,
  opp,
  big,
  strong,
  like,
  toBeVerbs,
} from "../data/synonyms";
const memeTerms = {
  good: [
    "skibidi",
    "gyatt",
    "rizz",
    "only in ohio",
    "hawk TUAH!",
    "edge",
    "mog",
    "cook",
  ],
  people: [
    "duke dennis",
    "livvy dunne",
    "baby gronk",
    "ishowspeed",
    "kai cenat",
    "aiden ross",
    "john pork",
    "mrbeast ",
  ],
  status: ["alpha male", "mewwing", "winter arc", "MANGO"],
  slang: ["edging streak", "bussing", "goated"],
  phrases: [
    "ambatukam",
    "hitting the griddy",
    "the ocky way",
    "no edging",
    "hawk TUAH!",
    "let him cook",
  ],
};
export const applyCustomTransformations = (word) => {
  const lowerWord = word.toLowerCase();

  if (lowerWord === "no") {
    return `${word} ${Math.random() < 0.5 ? "naw" : "naur"}`;
  }
  if (lowerWord === "very") {
    return `${word} ${Math.random() < 0.5 ? "skibidi ohio" : ""}`;
  }
  if (lowerWord === "yes") {
    return `${word} ${Math.random() < 0.5 ? "fr" : "yass queen"}`;
  }
  if (lowerWord === "in") {
    return `${word} ${Math.random() < 0.5 ? "winter arc" : "ohio"}`;
  }
  if (lowerWord === "with") {
    return `${word} ${Math.random() < 0.5 ? "german stare" : ""}`;
  }
  if (lowerWord === "is") {
    return `${word} ${Math.random() < 0.5 ? "skibidi" : ""}`;
  }

  if (lowerWord === "got" || lowerWord === "get" || lowerWord === "ass") {
    return "gyat";
  }
  if (lowerWord === "go") {
    return "roll out";
  }
  if (lowerWord === "good" || lowerWord === "happy") {
    return "bussin";
  }
  if (
    lowerWord === "party" ||
    lowerWord === "celebrate" ||
    lowerWord === "event"
  ) {
    return "diddy party";
  }

  if (
    lowerWord === "girl" ||
    lowerWord === "woman" ||
    lowerWord === "women" ||
    lowerWord === "lady"
  ) {
    return "huzz";
  }
  if (lowerWord === "to" || lowerWord === "is" || lowerWord === "a") {
    return `${word}${Math.random() < 0.5 ? " bussin" : ""}`;
  }
  if (demonstrativePronouns.includes(lowerWord)) {
    return `${word}${Math.random() < 0.5 ? " goofy" : ""}`;
  }

  if (cap.includes(lowerWord)) {
    return `${Math.random() < 0.5 ? "cap" : "capping"}`;
  }
  if (yap.includes(lowerWord)) {
    return "yap";
  }
  if (giveUp.includes(lowerWord)) {
    return "put the fries in the bag";
  }
  if (dumb.includes(lowerWord)) {
    return `${Math.random() < 0.5 ? "skibidi" : "brainrotted"}`;
  }

  if (memeTerms.slang.includes(word)) {
    return word + " no cap";
  }
  if (bad.includes(word)) {
    return `${Math.random() < 0.5 ? "dogwater" : "cooked"}`;
  }
  if (looksmaxing.includes(word)) {
    return "looksmaxing";
  }
  if (sigma.includes(word)) {
    return "sigma";
  }
  if (fanumTax.includes(word)) {
    return "fanum tax";
  }
  if (sus.includes(word)) {
    return `${Math.random() < 0.5 ? "sus" : "ohio"}`;
  }
  if (negativeAura.includes(word)) {
    return "negative aura";
  }
  if (wAura.includes(word)) {
    return "W aura";
  }
  if (indefinitePronouns.includes(word)) {
    return "chat";
  }
  if (levelUp.includes(word)) {
    return "level-up";
  }
  if (food.includes(word)) {
    return "balkan breakfast";
  }
  if (play.includes(word)) {
    return "edge";
  }
  if (winW.includes(word)) {
    return "W";
  }
  if (lLose.includes(word)) {
    return "L";
  }
  if (opp.includes(word)) {
    return "opp";
  }
  if (big.includes(word)) {
    return "chungus";
  }
  if (strong.includes(word)) {
    return "gigachad";
  }
  if (like.includes(word)) {
    return "gyatt";
  }
  if (toBeVerbs.includes(word)) {
    const suffix =
      Math.random() < 0.33 ? "on god" : Math.random() < 0.5 ? "edging" : "";
    return `${word}${suffix ? " " + suffix : ""}`;
  }

  return word;
};
