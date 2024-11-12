import React, { useState } from "react";
import { Instagram, Github, Heart, HelpCircle } from "lucide-react";

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="w-full py-4 sm:py-2 px-6 mt-auto relative">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex items-center space-x-4">
          <a
            href="https://instagram.com/coconhat_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/coconhat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
        <div className="flex items-center text-white/70 text-sm">
          <span>Made with</span>
          <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
          <span>by</span>
          <a
            href="https://instagram.com/coconhat_"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:text-white transition-colors"
          >
            @coconhat_
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <div className="relative">
          <HelpCircle
            size={20}
            className="text-white/70 hover:text-white cursor-help transition-colors"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />

          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-black/90 border border-white/20 rounded-lg text-white/80 text-sm shadow-xl">
              <h4 className="font-semibold mb-2">How to use:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Type your normal text in the input box</li>
                <li>Click the Transform button</li>
                <li>Get your brainrot version below</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
