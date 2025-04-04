
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

const ProfessionalProjectForm = () => {
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
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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
      <h2 className="text-2xl font-bold mb-6">{t("project.postNew") || "Post New Project"}</h2>
      <p className="text-gray-500 mb-8">{t("project.fillDetails") || "Fill in the details to post a new project"}</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div 
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="title">Job Title</Label>
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
              <Label htmlFor="location">Location</Label>
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
              <Label htmlFor="employmentType">Employment Type</Label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
            <div>
              <Label htmlFor="hourlyRate">Hourly Rate</Label>
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
              <Label htmlFor="projectType">Job Type</Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Industrial">Industrial</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
            </div>
            <div>
              <Label htmlFor="timeline">Timeline</Label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2+ years">2+ years</option>
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
          <h3 className="text-lg font-semibold mb-4">Job Details</h3>
          
          <div className="mb-6">
            <Label htmlFor="jobDescription">Job Description</Label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder="Describe the job in detail..."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="requirements">Requirements</Label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder="List any specific requirements, skills, or qualifications..."
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
          <h3 className="text-lg font-semibold mb-4">Images</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Upload images of your project</p>
              <p className="text-gray-400 text-sm mb-4">Drag and drop files here, or click to browse</p>
              <input type="file" className="hidden" multiple accept="image/*" id="file-upload" />
              <label htmlFor="file-upload">
                <Button type="button" variant="outline" className="text-gray-600">
                  Select Files
                </Button>
              </label>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-end gap-4 mt-8">
          <Button type="button" variant="outline">Save as Draft</Button>
          <motion.div
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              type="submit" 
              className="bg-[#FF4B55] hover:bg-[#e03e48] text-white transition-all duration-300 ease-in-out hover:scale-105"
            >
              Post Project
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default ProfessionalProjectForm;
