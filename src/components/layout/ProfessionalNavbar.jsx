import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, MessageSquare, Search } from "lucide-react";

const ProfessionalNavbar = () => {
  return (
    <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex space-x-6 ml-12">
          <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/professional-projects" className="hover:text-[#FF4B55]">Projects</Link>
          <Link to="/active-work" className="hover:text-[#FF4B55]">Active Work</Link>
          <Link to="#" className="hover:text-[#FF4B55]">Analytics</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <Search className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <MessageSquare className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <Link to="/professional-profile">
          <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
};

export default ProfessionalNavbar;
