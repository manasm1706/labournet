
import React, { createContext, useContext, useState, useEffect } from "react";

// Define available languages
export type AvailableLanguages = "en" | "hi" | "mr" | "te" | "ml" | "ta" | "kn" | "gu" | "pa";

// Create a simple language context with basic translations
const translations = {
  en: {
    "project.postNew": "Post a New Project",
    "project.fillDetails": "Fill in the details below to post your construction project",
    "project.basicInfo": "Basic Information",
    "project.jobTitle": "Job Title",
    "project.location": "Location",
    "project.employmentType": "Employment Type",
    "project.selectType": "Select type",
    "project.fullTime": "Full-time",
    "project.partTime": "Part-time",
    "project.contract": "Contract",
    "project.temporary": "Temporary",
    "project.hourlyRate": "Hourly Rate",
    "project.jobType": "Project Type",
    "project.commercial": "Commercial",
    "project.residential": "Residential",
    "project.industrial": "Industrial",
    "project.infrastructure": "Infrastructure",
    "project.timeline": "Project Timeline",
    "project.1month": "1 Month",
    "project.3months": "3 Months",
    "project.6months": "6 Months",
    "project.1year": "1 Year",
    "project.2years": "2+ Years",
    "project.removeAfter": "Remove job posting after",
    "project.7days": "7 Days",
    "project.14days": "14 Days",
    "project.30days": "30 Days",
    "project.60days": "60 Days",
    "project.90days": "90 Days",
    "project.dontRemove": "Don't remove automatically",
    "project.jobDetails": "Job Details",
    "project.description": "Job Description",
    "project.descriptionPlaceholder": "Describe the job responsibilities, project details, and what the worker will be doing...",
    "project.requirements": "Requirements",
    "project.requirementsPlaceholder": "List required skills, experience, certifications, and any other qualifications...",
    "project.images": "Project Images",
    "project.uploadImages": "Upload images related to the project (optional)",
    "project.dragDrop": "Drag and drop files here, or click to select files",
    "project.selectFiles": "Select Files",
    "project.saveAsDraft": "Save as Draft",
    "project.post": "Post Project",
  },
};

// Create the language context
const LanguageContext = createContext({
  language: "en" as AvailableLanguages,
  setLanguage: (lang: AvailableLanguages) => {},
  t: (key: string) => "",
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<AvailableLanguages>("en");

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
