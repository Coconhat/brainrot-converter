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
    const transformed = words.map((word, index) => {
      if (word.toLowerCase() === "in") {
        word = `${word} ${Math.random() < 0.5 ? "winter arc" : "still water"}`;
      }
      if (word.toLowerCase() === "with") {
        word = `${word} ${
          Math.random() < 0.5 ? "german stare" : "balkan breakfast"
        }`;
      }
      if (word.toLowerCase() === "got") {
        word = "gyat";
      }

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
      if (Math.random() < 0.12) {
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
      className="w-full max-w-2xl mx-auto p-6 bg-#0C0C0C rounded-3xl shadow-lg relative z-10 overflow-hidden flex flex-col min-h-screen"
      style={{ position: "relative" }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage})`,
          zIndex: -10,
        }}
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
