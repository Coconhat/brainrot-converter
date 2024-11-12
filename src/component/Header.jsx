import React from "react";

export default function Header() {
  return (
    <div>
      <div className="font-bold text-4xl text-white text-center mt-4 mb-3">
        <span>
          <h4>
            Brain<span className="text-purple-500">rotter</span>
          </h4>
        </span>
        <p className="text-lg font-normal mt-2 font-sans">
          This program turns normal text into brain rot, write something!
        </p>
      </div>
    </div>
  );
}
