import React, { useState } from "react";
import grainImage from "./assets/grain.jpg";

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
      "hawk TUAH! ",
    ],
    exclamations: ["goofy ahh"],
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
    status: ["sigma male", "alpha male", "mewwing", "winter arc", "MANGO"],
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
    "on god",
    "respectfully",
    "ngl",
    "deadass",
    "ong",
    "bussin",
    "fr",
    "morbin time",
    "krazy ah",
  ];

  const translateToBrainrot = (text) => {
    let words = text.split(" ");

    // Apply brainrot transformations
    const transformed = words.map((word) => {
      // Random word replacements
      if (Math.random() < 0.1) {
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

      // Random suffix additions
      if (Math.random() < 0.13) {
        word = `${word} ${
          suffixes[Math.floor(Math.random() * suffixes.length)]
        }`;
      }

      return word;
    });

    // Add random phrases at the end HAWK TUAH!!!
    if (Math.random() < 0.29) {
      const randomPhrase =
        memeTerms.phrases[Math.floor(Math.random() * memeTerms.phrases.length)];
      transformed.push(`${randomPhrase}`);
    }

    return transformed.join(" ");
  };

  const handleTranslate = () => {
    setOutput(translateToBrainrot(input));
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto p-6 bg-gray-800 rounded-3xl shadow-lg relative z-10 overflow-hidden"
      style={{ position: "relative" }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage})`,
          zIndex: -10,
        }}
      ></div>
      <div className="absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5;"></div>
      <div className="font-bold text-xl text-white text-center">
        Brainrot Translator
      </div>
      <div className="absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5;"></div>
      <div className="absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5;"></div>

      <div className="space-y-4">
        <div className="space-y-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your normal text here..."
            className="w-full h-32 p-4 border-2 border-white/30 rounded-lg resize-none text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <button
          onClick={handleTranslate}
          className="w-full bg-emerald-300 text-gray-950 py-2 rounded-lg hover:bg-emerald-400 transition-colors"
        >
          Transform
        </button>

        <div className="space-y-2 mt-4">
          <div className="font-medium text-white">Brainrot Version:</div>
          <div className="w-full min-h-32 p-4 border-2 border-white/30 rounded-lg bg-gray-900 text-white whitespace-pre-wrap">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainrotTranslator;
