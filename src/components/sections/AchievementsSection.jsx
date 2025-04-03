import React from "react";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/contexts/LanguageContext";

const AchievementsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{t("achievements.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <span className="text-5xl font-bold text-blue-600">10+</span>
            <p className="text-gray-700 mt-2">{t("achievements.yearsExperience")}</p>
          </Card>
          <Card className="p-6">
            <span className="text-5xl font-bold text-green-600">300+</span>
            <p className="text-gray-700 mt-2">{t("achievements.projectsCompleted")}</p>
          </Card>
          <Card className="p-6">
            <span className="text-5xl font-bold text-yellow-600">150+</span>
            <p className="text-gray-700 mt-2">{t("achievements.satisfiedClients")}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

