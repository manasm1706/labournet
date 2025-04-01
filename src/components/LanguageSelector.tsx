
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { AvailableLanguages } from "../utils/translations";

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
  const { language, setLanguage } = useLanguage();
  
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: { code: string; name: string }) => {
    setLanguage(lang.code as AvailableLanguages);
    setIsOpen(false);
    console.log(`Language changed to: ${lang.name}`);
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
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => selectLanguage(lang)}
                  className={`block px-4 py-2 text-xs w-full text-left ${
                    selectedLanguage.code === lang.code
                      ? "bg-[#004A57] text-white"
                      : "text-[#EEE] hover:bg-[#004A57]"
                  }`}
                >
                  {lang.name}
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
