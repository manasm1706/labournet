
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, AvailableLanguages } from "../utils/translations";

// Define the context type
type LanguageContextType = {
  language: AvailableLanguages;
  setLanguage: (lang: AvailableLanguages) => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

// Create a provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<AvailableLanguages>(() => {
    // Try to get the saved language from localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage");
    // Verify that the saved language is a valid AvailableLanguages value
    const isValid = savedLanguage && (["en", "hi", "mr", "te", "ml", "ta", "kn", "gu", "pa"] as string[]).includes(savedLanguage);
    return isValid ? (savedLanguage as AvailableLanguages) : "en";
  });

  // Save the language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[language] || !translations[language][key]) {
      // Fallback to English if translation is missing
      return translations.en[key] || key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
