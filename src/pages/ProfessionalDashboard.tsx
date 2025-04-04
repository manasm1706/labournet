
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import PostProjectForm from "@/components/PostProjectForm";
import ProfessionalProjectForm from "@/components/ProfessionalProjectForm";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import { useProjectContext } from "@/components/PostProjectForm";
import { Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import ProfessionalNavbar from "@/components/layout/ProfessionalNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

const ProfessionalDashboard: React.FC = () => {
  const { projects } = useProjectContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const { t } = useLanguage();

  // Filter projects based on search, category, and status
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || project.projectType === selectedCategory;
    const matchesStatus = activeFilter === "All Projects" || 
                         (activeFilter === "Active" && project.status === "active") || 
                         (activeFilter === "Completed" && project.status === "completed");
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    console.log("Selected category:", selectedCategory);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7] flex flex-col">
      {/* Header */}
      <ProfessionalNavbar />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 flex-grow">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-[#121224]">{t("professional.myProjects")}</h1>
          <p className="text-[#717B9E]">{t("professional.manage")}</p>
        </motion.div>

        {/* Search Bar */}
        <motion.form 
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onSubmit={handleSearch}
        >
          <div className="flex-grow">
            <input 
              type="text" 
              placeholder={t("professional.search")} 
              className="w-full p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select 
              className="p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>{t("professional.allCategories")}</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <button 
              type="submit"
              className="bg-[#FF4B55] text-white px-6 py-3 rounded hover:bg-[#E43F49] transition-colors"
            >
              {t("professional.searchButton")}
            </button>
          </motion.div>
        </motion.form>

        {/* Filter Tags */}
        <motion.div 
          className="flex gap-2 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span 
            className={`px-3 py-1 rounded-full text-sm cursor-pointer ${activeFilter === "All Projects" ? "bg-[#004A57] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => setActiveFilter("All Projects")}
          >
            {t("professional.allProjects")}
          </span>
          <span 
            className={`px-3 py-1 rounded-full text-sm cursor-pointer ${activeFilter === "Active" ? "bg-[#004A57] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => setActiveFilter("Active")}
          >
            {t("professional.active")}
          </span>
          <span 
            className={`px-3 py-1 rounded-full text-sm cursor-pointer ${activeFilter === "Completed" ? "bg-[#004A57] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => setActiveFilter("Completed")}
          >
            {t("professional.completed")}
          </span>
        </motion.div>

        {/* Project Listings */}
        <div className="space-y-4">
          {filteredProjects && filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id || index}
                className="bg-white p-6 rounded-lg shadow-sm hover:border-[#FF4B55] border border-transparent transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <div className="flex justify-between mb-3">
                  <h2 className="text-lg font-semibold text-[#121224]">{project.title}</h2>
                  <span className="text-[#FF4B55] font-bold">${project.hourlyRate}</span>
                </div>
                <p className="text-[#717B9E] mb-4">{project.jobDescription?.substring(0, 150)}...</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{project.projectType}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{project.location}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      project.status === 'active' ? 'bg-green-100 text-green-700' :
                      project.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                      project.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status === 'active' ? t("professional.active") :
                       project.status === 'completed' ? t("professional.completed") :
                       project.status === 'cancelled' ? 'Cancelled' : 'Posted'}
                    </span>
                  </div>
                  <Link to={`/project-details/${project.id}`} className="text-[#FF4B55] font-medium text-sm hover:underline">View Details →</Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{t("professional.noProjects")}</h3>
              <p className="text-gray-500 mb-4">{t("professional.noProjectsDesc")}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-[#FF4B55] text-white px-4 py-2 rounded hover:bg-[#E43F49] transition-colors">
                    {t("professional.postFirst")}
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                  <DialogTitle>{t("professional.postProject")}</DialogTitle>
                  <DialogDescription>
                    {t("professional.fillForm")}
                  </DialogDescription>
                  <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-2">
                    <ProfessionalProjectForm />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <div>
            <p className="text-2xl font-bold text-[#121224]">
              {projects.filter(project => project.status === 'active' || !project.status).length}
            </p>
            <p className="text-[#717B9E]">{t("professional.activeProjects")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">42</p>
            <p className="text-[#717B9E]">{t("professional.applicationsReceived")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">8</p>
            <p className="text-[#717B9E]">{t("professional.workersHired")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">4.8/5</p>
            <p className="text-[#717B9E]">{t("professional.averageRating")}</p>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfessionalDashboard;
