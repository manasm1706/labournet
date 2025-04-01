
import React from "react";
import LanguageSelector from "../LanguageSelector";
import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="flex w-full justify-between items-center bg-[#00353F] p-3 shadow-md">
      <div className="flex items-center gap-2 text-[#EEE] text-base px-2 py-0 transition-transform hover:scale-105">
        <div className="w-7 h-7">
          <img src="/LabourNet_logo.png" alt="LabourNet Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-medium">LabourNet</span>
      </div>
      
      <nav className="flex items-center gap-6 max-sm:hidden">
        <a href="#dashboard" className="text-[#EEE] text-sm px-4 py-0 hover:text-white transition-colors">
          {t("header.dashboard")}
        </a>
        <a href="#story" className="text-[#EEE] text-sm px-4 py-0 hover:text-white transition-colors">
          {t("header.story")}
        </a>
        <a href="#marketplace" className="text-[#EEE] text-sm px-4 py-0 hover:text-white transition-colors">
          {t("header.marketplace")}
        </a>
      </nav>
      
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button variant="outline" size="sm" className="text-xs hover:bg-white/10 transition-colors">
          {t("header.getInTouch")}
        </Button>
      </div>
    </header>
  );
};

export default Header;
