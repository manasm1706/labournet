
import React, { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" },
  { code: "ta", name: "Tamil" },
  { code: "kn", name: "Kannada" },
  { code: "gu", name: "Gujarati" },
  { code: "pa", name: "Punjabi" },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    
    // Here we would normally implement the actual translation functionality
    console.log(`Language changed to: ${language.name}`);
    // This would trigger a context update in a real implementation
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white text-xs flex items-center gap-1 hover:text-gray-300"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedLanguage.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-[#00353F] border border-[#004A57] rounded-md shadow-lg z-50 min-w-[150px]">
          <ul className="py-1 max-h-60 overflow-y-auto">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => selectLanguage(language)}
                  className={`block px-4 py-2 text-xs w-full text-left ${
                    selectedLanguage.code === language.code
                      ? "bg-[#004A57] text-white"
                      : "text-[#EEE] hover:bg-[#004A57]"
                  }`}
                >
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
