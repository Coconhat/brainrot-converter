import React, { useState } from "react";
import grainImage from "./assets/grain.jpg";
import Footer from "./component/Footer";
import { firstWord } from "./data/synonyms";
import { sentences } from "./data/randomizeSentence";
import { applyCustomTransformations } from "./utils/applyCustomTransformations";

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
    prepositions: [
      "in",
      "on",
      "at",
      "by",
      "under",
      "over",
      "beside",
      "among",
      "between",
    ],
  };

  const suffixes = ["deadass", "bussin", "fr", "krazy", "in still water"];

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
    if (word === "good" && nextWord === "morning") {
      return "good morning the weather outside is rizzy";
    }
    if (word === "good" && nextWord === "afternoon") {
      return "good morning the weather outside is rizzy";
    }
    if (word === "good" && nextWord === "evening") {
      return "good morning the weather outside is rizzy";
    }
    if (memeTerms.prepositions.includes(word) && nextWord) {
      return `${word} ${nextWord} kai cenat`;
    }

    word = applyCustomTransformations(word);
    word = applyMemeTermReplacements(word, lastTransformedWord);
    word = applyRandomSuffix(word);

    if (word === lastTransformedWord) {
      word = applyMemeTermReplacements(word, lastTransformedWord);
    }

    return word;
  };

  const applyMemeTermReplacements = (word) => {
    if (Math.random() < 0.05) {
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
    if (Math.random() < 0.1) {
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
  function randomizeSentence() {
    for (let i = sentences.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sentences[i], sentences[j]] = [sentences[j], sentences[i]]; // Swap elements
    }

    const randomSentence = sentences[0];

    setInput(randomSentence);
  }

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

        <div className="flex space-x-4 mt-3 w-full">
          <button
            onClick={handleTranslate}
            className="bg-white text-black py-3 px-6 text-lg font-semibold rounded-lg flex-grow hover:bg-gray-300 transition-colors"
            style={{ flexGrow: 2 }}
          >
            Transform
          </button>
          <button
            onClick={randomizeSentence}
            className="bg-white text-black py-3 px-6 text-lg font-semibold rounded-lg flex-grow hover:bg-gray-300 transition-colors"
            style={{ flexGrow: 1 }}
          >
            Randomize
          </button>
        </div>

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
