
import React from "react";
import LanguageSelector from "../LanguageSelector";
import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="flex w-full justify-between items-center bg-[#00353F] p-2">
      <div className="flex items-center gap-2 text-[#EEE] text-base px-2 py-0">
        <div className="w-6 h-6">
          <img src="/LabourNet_logo.png" alt="LabourNet Logo" className="w-full h-full object-contain" />
        </div>
        <span>LabourNet</span>
      </div>
      
      <nav className="flex items-center gap-4 max-sm:hidden">
        <a href="#dashboard" className="text-[#EEE] text-xs px-4 py-0">
          {t("header.dashboard")}
        </a>
        <a href="#story" className="text-[#EEE] text-xs px-4 py-0">
          {t("header.story")}
        </a>
        <a href="#marketplace" className="text-[#EEE] text-xs px-4 py-0">
          {t("header.marketplace")}
        </a>
      </nav>
      
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button variant="outline" size="sm" className="text-xs">
          {t("header.getInTouch")}
        </Button>
      </div>
    </header>
  );
};

export default Header;
