
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "./PostProjectForm";
import { useLanguage } from "@/contexts/LanguageContext";

const ProfessionalProjectForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addProject } = useProjectContext();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    employmentType: "",
    hourlyRate: "",
    jobDescription: "",
    requirements: "",
    company: "Professional Builder",
    projectType: "Residential",
    timeline: "3 months",
    expiresAfter: "30",
    postedDate: new Date().toISOString(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.location || !formData.employmentType || 
        !formData.hourlyRate || !formData.jobDescription || !formData.requirements) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields before posting the project.",
        variant: "destructive"
      });
      return;
    }
    
    console.log("Professional Project Form submitted:", formData);
    
    // Add the new project to context
    addProject({
      id: Date.now(),
      ...formData,
      applicants: 0,
      status: "active",
      postedAt: new Date().toLocaleDateString(),
      applicantsCount: Math.floor(Math.random() * 15)
    });
    
    // Show success toast notification
    toast({
      title: "Project Posted Successfully!",
      description: "Your project has been posted and is now visible on your dashboard.",
    });
    
    // Navigate to professional dashboard
    setTimeout(() => {
      navigate("/professional-dashboard");
    }, 1500);
    
    // Reset form
    setFormData({
      title: "",
      location: "",
      employmentType: "",
      hourlyRate: "",
      jobDescription: "",
      requirements: "",
      company: "Professional Builder",
      projectType: "Residential",
      timeline: "3 months",
      expiresAfter: "30",
      postedDate: new Date().toISOString(),
    });
  };

  return (
    <motion.div 
      className="p-6 max-h-[80vh] overflow-y-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6">{t("project.postNew")}</h2>
      <p className="text-gray-500 mb-8">{t("project.fillDetails")}</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div 
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">{t("project.basicInfo")}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="title">{t("project.jobTitle")}</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Kitchen Renovation"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="location">{t("project.location")}</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. San Francisco, CA"
                className="mt-1"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="employmentType">{t("project.employmentType")}</Label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="">{t("project.selectType")}</option>
                <option value="Full-time">{t("project.fullTime")}</option>
                <option value="Part-time">{t("project.partTime")}</option>
                <option value="Contract">{t("project.contract")}</option>
                <option value="Temporary">{t("project.temporary")}</option>
              </select>
            </div>
            <div>
              <Label htmlFor="hourlyRate">{t("project.hourlyRate")}</Label>
              <Input
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="e.g. $25-35"
                className="mt-1"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <Label htmlFor="projectType">{t("project.jobType")}</Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="Commercial">{t("project.commercial")}</option>
                <option value="Residential">{t("project.residential")}</option>
                <option value="Industrial">{t("project.industrial")}</option>
                <option value="Infrastructure">{t("project.infrastructure")}</option>
              </select>
            </div>
            <div>
              <Label htmlFor="timeline">{t("project.timeline")}</Label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="1 month">{t("project.1month")}</option>
                <option value="3 months">{t("project.3months")}</option>
                <option value="6 months">{t("project.6months")}</option>
                <option value="1 year">{t("project.1year")}</option>
                <option value="2+ years">{t("project.2years")}</option>
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">{t("project.jobDetails")}</h3>
          
          <div className="mb-6">
            <Label htmlFor="jobDescription">{t("project.description")}</Label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder={t("project.descriptionPlaceholder")}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="requirements">{t("project.requirements")}</Label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder={t("project.requirementsPlaceholder")}
              required
            />
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">{t("project.images")}</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">{t("project.uploadImages")}</p>
              <p className="text-gray-400 text-sm mb-4">{t("project.dragDrop")}</p>
              <input type="file" className="hidden" multiple accept="image/*" id="file-upload" />
              <label htmlFor="file-upload">
                <Button type="button" variant="outline" className="text-gray-600">
                  {t("project.selectFiles")}
                </Button>
              </label>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-end gap-4 mt-8">
          <Button type="button" variant="outline">{t("project.saveAsDraft")}</Button>
          <motion.div
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              type="submit" 
              variant="primary"
              className="transition-all duration-300 ease-in-out hover:scale-105"
            >
              {t("project.post")}
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default ProfessionalProjectForm;
