
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <HeroSection />
        <AchievementsSection />
        <GallerySection />

        <section id="contact" className="bg-[#EDEEF1] px-8 py-16 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-black text-4xl mb-8 text-center font-bold">
              {t("contact.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ContactForm />
              <div className="flex flex-col justify-center gap-6">
                <div>
                  <h3 className="text-black text-2xl mb-3 font-semibold">
                    {t("contact.info")}
                  </h3>
                  <p className="text-black mb-6">
                    {t("contact.subtitle")}
                  </p>
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#004A57] p-2 rounded-full">
                        <Phone size={18} className="text-white" />
                      </div>
                      <a
                        href="tel:+918821107707"
                        className="text-[#004A57] hover:underline"
                      >
                        +91 8821 107 7077
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#004A57] p-2 rounded-full">
                        <Mail size={18} className="text-white" />
                      </div>
                      <a
                        href="mailto:labournet042@gmail.com"
                        className="text-[#004A57] hover:underline"
                      >
                        labournet042@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#004A57] p-2 rounded-full">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <span>Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
