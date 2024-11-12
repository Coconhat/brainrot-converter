import React, { useState } from "react";
import grainImage from "./assets/grain.jpg";
import Footer from "./component/Footer";
import { firstWord } from "./data/synonyms";
import { sentences } from "./data/randomizeSentence";
import { applyCustomTransformations } from "./utils/applyCustomTransformations";
import Header from "./component/Header";

const BrainrotTranslator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lastCategory, setLastCategory] = useState("");

  const memeTerms = {
    good: [
      "skibidi",
      "gyatt",
      "rizz",
      "ohio",
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
    status: ["mewwing", "winter arc", "MANGO"],
    slang: ["edging streak", "goated"],
    phrases: [
      "ambatukam",
      "hitting the griddy",
      "the ocky way",
      "no edging",
      "no no diddy",
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

  const suffixes = ["deadass", "krazy", "in still water"];

  const phrasesToTransform = {
    "give up": "put the fries in the bag",
    "how are you": "how the rizz are you",
    "good morning": "good morning the weather outside is rizzy",
    "let's go": "let's roll out",
    "what's up": "what's good",
    "see you later": "catch you on the skibidi side",
    "take care": "stay gigachad bro",
    "thank you": "",
    "how are you?": "how the rizz are you?",
    "how are you": "how the rizz are you",
    "no problem": "lowkey no diff",
    "are you free": "are you skibidi free",
    "im tired": "im feeling mango",
    "i'm tired": "im feeling mango",
    "I love you": `${Math.random() < 0.5 ? "i skibidi you" : ""}`,
    "see you soon": "catch you in the riz zone",
    "i'm hungry": "i need giga sustenance",
    "good night": "stay rizzy, sleep tight",
    "what's new": "what's rizzy in the skibidi world",
    "long time no see": "been a sec since we rizlocked",
    "nice to meet you": "pleasure to catch the rizz with you",
    sorry: "major diff, my bad bro",
    "excuse me": "rizz me a sec",
    "i miss you": "feelin' the skibidi void",
    "that's funny": "lowkey mad rizz there",
    "thats funny": "lowkey mad rizz there",
    congratulations: "mad rizzy props, you gigachad",
    "you're welcome": "stay rizzy, no problem",
    please: "giga plz",
    pls: "giga plz",
    "how much is this": "what's the giga price on this",
    "what do you think": "what's the skibidi take on this",
    "i don’t know": "no rizz clue bro",
    idk: "no rizz clue bro",
    "i dunno": "no rizz clue bro",
    "i dont know": "no rizz clue bro",
    "what's wrong": "what's the giga issue?",
    goodbye: "skibidi out, my dude",
    "i don't understand": "the skibidi ain't making sense",
    "be careful": "riz it up but watch out",
    "i need help": "need giga backup",
    "i don’t feel well": "feelin' skibidi off",
    "i dont feel well": "feelin' skibidi off",
    "let's eat": "time to gigachow",
    "lets eat": "time to gigachow",
    "what's your name": "who's the skibidi legend here",
    "whats your name": "who's the skibidi legend here",
    "can you help me": "need a rizz hand here",
    "nice job": "solid giga move",
    "take a break": "time for a rizz recharge",
    "are you busy": "you rizzy occupied?",
    "let’s hang out": "let's giga vibe",
    "this is cool": "mad skibidi rizz here",
    "it's amazing": "full gigachad level",
    "its amazing": "full gigachad level",
    "what happened": "what's the rizz sitch",
    "have a nice day": "keep it skibidi awesome",
    "sorry for being late": "lowkey sorry for the L",
    "good morning": "good morning the weather outside is rizzy",
    "good afternoon": "good afternoon the weather outside is rizzy",
    "good evening": "good evening the weather outside is rizzy",
    "what the": "what the sigma",
    what: `${Math.random() < 0.3 ? "what the sigma" : ""}`,
  };

  const transformPhrases = (text) => {
    for (const [phrase, transformation] of Object.entries(phrasesToTransform)) {
      text = text.replace(
        new RegExp(`\\b${phrase}\\b`, "gi"),
        `<<${transformation}>>`
      );
    }
    return text;
  };

  const punctuationPhrases = [
    "no cap",
    "deadass",
    "fr",
    "you feel me?",
    "lowkey",
    "low diff",
    "high diff",
    "skidibi toilet",
  ];

  const transformWords = (word, nextWord, lastTransformedWord) => {
    word = word.toLowerCase();

    if (word.startsWith("<<") && word.endsWith(">>")) {
      return word.slice(2, -2);
    }

    if (memeTerms.prepositions.includes(word)) {
      return `${word} ${Math.random() < 0.5 ? "diddy" : ""}`;
    }

    if (/[.!?]$/.test(word)) {
      word += ` ${
        Math.random() < 0.5
          ? punctuationPhrases[
              Math.floor(Math.random() * punctuationPhrases.length)
            ]
          : ""
      }`;
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
    if (Math.random() < 0.02) {
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

  const removeTags = (text) => {
    return text.replace(/<<|>>/g, "");
  };

  const translateToBrainrot = (text) => {
    text = transformPhrases(text);

    let words = text.split(" ");
    let lastTransformedWord = "";

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

    const result = `${randomFirstWord} ${transformed.join(" ")}`;
    return removeTags(result);
  };

  const handleTranslate = () => {
    setOutput(translateToBrainrot(input));
  };

  function randomizeSentence() {
    for (let i = sentences.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sentences[i], sentences[j]] = [sentences[j], sentences[i]];
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
      <Header />

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
