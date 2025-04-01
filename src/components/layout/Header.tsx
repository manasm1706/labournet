
import React from "react";
import LanguageSelector from "../LanguageSelector";
import { Button } from "../ui/button";

const Header: React.FC = () => {
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
          Dashboard
        </a>
        <a href="#story" className="text-[#EEE] text-xs px-4 py-0">
          Our Story
        </a>
        <a href="#marketplace" className="text-[#EEE] text-xs px-4 py-0">
          Marketplace
        </a>
      </nav>
      
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button variant="outline" size="sm" className="text-xs">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
