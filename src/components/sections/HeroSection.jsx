import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t("hero.title")}
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          {t("hero.subtitle")}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary">{t("hero.primaryButton")}</Button>
          <Button variant="secondary">{t("hero.secondaryButton")}</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
