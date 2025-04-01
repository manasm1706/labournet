
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-r from-[#003642] to-[#00353F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <img src="/LabourNet_logo.png" alt="LabourNet Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-xl font-semibold text-white">{t("footer.labourNet")}</h2>
            </div>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed mb-4">
              Revolutionizing the construction industry by connecting builders, contractors, and workers through a smart, digital platform.
            </p>
            <div className="flex mt-4 space-x-3">
              <a href="#facebook" aria-label="Facebook" className="bg-[#004A57] p-2 rounded-full hover:bg-[#FF4B55] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#instagram" aria-label="Instagram" className="bg-[#004A57] p-2 rounded-full hover:bg-[#FF4B55] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="bg-[#004A57] p-2 rounded-full hover:bg-[#FF4B55] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="bg-[#004A57] p-2 rounded-full hover:bg-[#FF4B55] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="bg-[#004A57] p-2 rounded-full hover:bg-[#FF4B55] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-[#004A57] pb-2">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("header.dashboard")}
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("footer.ourServices")}
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("footer.contactUs")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-[#004A57] pb-2">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("role.worker.title")}
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("role.professional.title")}
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("role.contractor.title")}
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-[#FF4B55] transition-colors text-sm flex items-center">
                  <span className="mr-2">→</span> {t("footer.projectManagement")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-[#004A57] pb-2">
              {t("contact.info")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF4B55] mt-0.5" />
                <a href="tel:+918821107707" className="text-gray-300 hover:text-white text-sm">
                  +91 8821 107 7077
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF4B55] mt-0.5" />
                <a href="mailto:labournet042@gmail.com" className="text-gray-300 hover:text-white text-sm">
                  labournet042@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF4B55] mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-[#004A57]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {t("footer.labourNet")}. {t("footer.rights")}
            </div>
            <div className="flex space-x-4">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.terms")}
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
