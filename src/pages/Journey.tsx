
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/PageHeader";
import { RoleCard } from "@/components/RoleCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Journey: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const { t } = useLanguage();
  
  const checkIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/70b17f95af25fb1ca7f0dae89feda5083f69926b14013c5a2773d4964e3d6a6f?apiKey=c295e679d9414a73a1381f5a8a56ab87&";
  
  const roles = [
    {
      id: "worker",
      title: t("role.worker.title"),
      icon: "public/lovable-uploads/90d991c9-8176-439c-bad5-165655fabe79.png",
      description: t("role.worker.description"),
      features: [
        { icon: checkIcon, text: t("role.worker.feature1") },
        { icon: checkIcon, text: t("role.worker.feature2") },
        { icon: checkIcon, text: t("role.worker.feature3") },
        { icon: checkIcon, text: t("role.worker.feature4") },
      ],
    },
    {
      id: "professional",
      title: t("role.professional.title"),
      icon: "public/lovable-uploads/f1cebe40-9e7f-4534-9c92-38664e054dd0.png",
      description: t("role.professional.description"),
      features: [
        { icon: checkIcon, text: t("role.professional.feature1") },
        { icon: checkIcon, text: t("role.professional.feature2") },
        { icon: checkIcon, text: t("role.professional.feature3") },
        { icon: checkIcon, text: t("role.professional.feature4") },
      ],
    },
    {
      id: "contractor",
      title: t("role.contractor.title"),
      icon: "public/lovable-uploads/fdbb3d24-072b-479b-9feb-e014ec588c22.png",
      description: t("role.contractor.description"),
      features: [
        { icon: checkIcon, text: t("role.contractor.feature1") },
        { icon: checkIcon, text: t("role.contractor.feature2") },
        { icon: checkIcon, text: t("role.contractor.feature3") },
        { icon: checkIcon, text: t("role.contractor.feature4") },
      ],
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleCreateProfile = () => {
    if (selectedRole) {
      navigate(`/login?role=${selectedRole}`);
    } else {
      alert("Please select a role first");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-[#EDEEF1] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <PageHeader 
            title={t("journey.title")}
            subtitle={t("journey.subtitle")}
          />
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-md:grid-cols-1">
            {roles.map((role) => (
              <div
                key={role.id}
                className="cursor-pointer"
                onClick={() => handleRoleSelect(role.id)}
              >
                <div 
                  className={`transition-all duration-200 ${
                    selectedRole === role.id 
                      ? "ring-2 ring-[#FF4B55] transform scale-[1.02]" 
                      : "hover:shadow-lg"
                  }`}
                >
                  <RoleCard 
                    title={role.title}
                    icon={role.icon}
                    description={role.description}
                    features={role.features}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-[rgba(113,123,158,1)] text-lg mb-8">
              {t("journey.readyText")}
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleCreateProfile}
            >
              {t("journey.createProfile")}
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Journey;
