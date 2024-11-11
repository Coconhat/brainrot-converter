import React, { useState } from "react";
import grainImage from "./assets/grain.jpg";
import Footer from "./component/Footer";

const BrainrotTranslator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lastCategory, setLastCategory] = useState("");

  const memeTerms = {
    good: [
      "skibidi",
      "gyatt",
      "rizz",
      "only in ohio",
      "sussy imposter",
      "hawk TUAH!",
      "edge",
      "W",
      "mog",
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
    status: [
      "sigma male",
      "alpha male",
      "mewwing",
      "winter arc",
      "MANGO",
      "mog",
    ],
    slang: ["blud", "dawg", "bussing", "goated"],
    phrases: [
      "ambatukam",
      "hitting the griddy",
      "the ocky way",
      "fanum tax",
      "no edging",
      "in ohio",
      "hawk TUAH!",
    ],
  };

  const suffixes = [
    "no cap",
    "ngl",
    "deadass",
    "ong",
    "bussin",
    "fr",
    "krazy ah",
    "L",
  ];

  const lie = ["lie", "lying", "con", "Mislead ", "Deception "];
  const demonstrativePronouns = ["this", "that", "there", "those"];
  const talk = [
    "speak",
    "say",
    "saying",
    "chat",
    "communicate",
    "discuss",
    "inform",
    "talk",
    "talking",
  ];
  const giveUp = [
    "quit",
    "surrender",
    "forfeit",
    "resign",
    "give up",
    "let go",
  ];
  const dumb = [
    "dumb",
    "slow",
    "dull",
    "ignorant",
    "idiot",
    "dumbass",
    "stupid",
  ];
  const indefinitePronouns = ["everyone", "someone", "anyone", "everybody"];

  const firstWord = ["Yo", "Bro", "my king", "what the sigma"];
  const bad = ["bad", "wrong", "poor", "lame", "awful"];

  const transformWords = (word, nextWord, lastTransformedWord) => {
    word = word.toLowerCase();

    if (word === "give" && nextWord === "up") {
      return "put the fries in the bag";
    }
    if (word === "let" && nextWord === "go") {
      return "put the fries in the bag";
    }
    if (word === "how" && nextWord === "are") {
      return "how the rizz";
    }

    word = applyCustomTransformations(word);
    word = applyMemeTermReplacements(word, lastTransformedWord);
    word = applyRandomSuffix(word);

    if (word === lastTransformedWord) {
      word = applyMemeTermReplacements(word, lastTransformedWord);
    }

    return word;
  };

  const applyCustomTransformations = (word) => {
    const lowerWord = word.toLowerCase();

    if (lowerWord === "in") {
      return `${word} ${Math.random() < 0.5 ? "winter arc" : "still water"}`;
    }
    if (lowerWord === "with") {
      return `${word} ${
        Math.random() < 0.5 ? "german stare" : "balkan breakfast"
      }`;
    }
    if (lowerWord === "got") {
      return "gyat";
    }
    if (demonstrativePronouns.includes(lowerWord)) {
      return `${word} goofy`;
    }
    if (lie.includes(lowerWord)) {
      return `${Math.random() < 0.5 ? "cap" : "capping"}`;
    }
    if (talk.includes(lowerWord)) {
      return "yap";
    }
    if (giveUp.includes(lowerWord)) {
      return "put the fries in the bag";
    }
    if (dumb.includes(lowerWord)) {
      return "brainrot";
    }
    if (indefinitePronouns.includes(lowerWord)) {
      return "chat";
    }
    if (memeTerms.slang.includes(word)) {
      return word + " no cap";
    }
    if (bad.includes(word)) {
      return "dogwater";
    }

    return word;
  };

  const applyMemeTermReplacements = (word) => {
    if (Math.random() < 0.09) {
      let category;
      do {
        category =
          Object.keys(memeTerms)[
            Math.floor(Math.random() * Object.keys(memeTerms).length)
          ];
      } while (category === lastCategory && category === "people");

      const terms = memeTerms[category];
      word = terms[Math.floor(Math.random() * terms.length)];
      setLastCategory(category);
    }
    return word;
  };

  const applyRandomSuffix = (word) => {
    if (Math.random() < 0.12) {
      return `${word} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    }
    return word;
  };

  const translateToBrainrot = (text) => {
    let words = text.split(" ");
    let lastTransformedWord = "";

    // Transform each word
    const transformed = words.map((word, index) => {
      const nextWord = words[index + 1];
      const transformedWord = transformWords(
        word,
        nextWord,
        lastTransformedWord
      );
      lastTransformedWord = transformedWord;
      return transformedWord;
    });

    const randomFirstWord =
      firstWord[Math.floor(Math.random() * firstWord.length)];

    if (Math.random() < 0.29) {
      const randomPhrase =
        memeTerms.phrases[Math.floor(Math.random() * memeTerms.phrases.length)];
      transformed.push(randomPhrase);
    }

    return `${randomFirstWord} ${transformed.join(" ")}`;
  };

  const handleTranslate = () => {
    setOutput(translateToBrainrot(input));
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto p-6 bg-#0C0C0C rounded-3xl shadow-lg relative z-10 overflow-hidden flex flex-col min-h-screen"
      style={{ position: "relative" }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage})`, zIndex: -10 }}
      ></div>
      <div className="font-bold text-xl text-white text-center mt-4 mb-3">
        Brainrot Translator
      </div>

      <div className="space-y-4 flex-grow">
        <div className="space-y-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your normal text here..."
            className="w-full h-32 p-4 border-2 border-white/30 rounded-lg resize-none text-white bg-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <button
          onClick={handleTranslate}
          className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-300 transition-colors mt-3"
        >
          Transform
        </button>

        <div className="space-y-2 mt-4">
          <div className="font-medium text-white">Brainrot Version:</div>
          <div className="w-full min-h-32 p-4 border-2 border-white/30 rounded-lg bg-black text-white whitespace-pre-wrap">
            {output}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BrainrotTranslator;
