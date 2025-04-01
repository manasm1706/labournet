
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Building, Users, PieChart as PieChartIcon, Calendar, BarChartIcon } from "lucide-react";
import { useProjectContext } from "@/components/PostProjectForm";
import ProfessionalNavbar from "@/components/layout/ProfessionalNavbar";

const progressData = [
  { name: 'Week 1', planned: 10, actual: 8 },
  { name: 'Week 2', planned: 15, actual: 13 },
  { name: 'Week 3', planned: 25, actual: 22 },
  { name: 'Week 4', planned: 30, actual: 28 },
  { name: 'Week 5', planned: 40, actual: 38 },
  { name: 'Week 6', planned: 50, actual: 45 },
  { name: 'Week 7', planned: 65, actual: 60 },
  { name: 'Week 8', planned: 75, actual: 72 },
];

const clientDistributionData = [
  { name: 'Residential', value: 45 },
  { name: 'Commercial', value: 30 },
  { name: 'Industrial', value: 15 },
  { name: 'Infrastructure', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ProfessionalAnalytics = () => {
  const { projects } = useProjectContext();
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <ProfessionalNavbar />

      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Professional Analytics</h1>
          <p className="text-gray-600">Track your performance and project analytics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Active Projects</h2>
              <Building className="h-6 w-6 text-[#004A57]" />
            </div>
            <p className="text-3xl font-bold">{projects.length || 3}</p>
            <p className="text-gray-500 text-sm mt-1">Currently in progress</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Completed Projects</h2>
              <Users className="h-6 w-6 text-[#004A57]" />
            </div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-gray-500 text-sm mt-1">Successfully delivered</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Average Rating</h2>
              <PieChartIcon className="h-6 w-6 text-[#004A57]" />
            </div>
            <p className="text-3xl font-bold">4.8/5</p>
            <p className="text-gray-500 text-sm mt-1">Based on client feedback</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <BarChartIcon className="h-5 w-5 text-[#004A57]" />
              <h2 className="text-xl font-bold">Project Progress</h2>
            </div>
            <select 
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
            >
              <option value="current">Current Projects</option>
              <option value="completed">Completed Projects</option>
              <option value="all">All Projects</option>
            </select>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={progressData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="planned" 
                  stroke="#8884d8" 
                  strokeWidth={2} 
                  name="Planned Progress (%)"
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#FF4B55" 
                  strokeWidth={2} 
                  name="Actual Progress (%)"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChartIcon className="h-5 w-5 text-[#004A57]" />
              <h2 className="text-xl font-bold">Client Distribution</h2>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={clientDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {clientDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-[#004A57]" />
              <h2 className="text-xl font-bold">Earnings Analysis</h2>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { month: 'Jan', earnings: 45000 },
                    { month: 'Feb', earnings: 52000 },
                    { month: 'Mar', earnings: 48000 },
                    { month: 'Apr', earnings: 61000 },
                    { month: 'May', earnings: 55000 },
                    { month: 'Jun', earnings: 67000 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `₹${value/1000}k`} />
                  <Tooltip formatter={(value) => [`₹${value}`, 'Earnings']} />
                  <Bar dataKey="earnings" name="Monthly Earnings (₹)" fill="#FF4B55" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Projects</h2>
            <Link to="/professional-projects" className="text-[#FF4B55] hover:underline text-sm">
              View All Projects
            </Link>
          </div>
          
          <div className="space-y-4">
            {projects && projects.length > 0 ? (
              projects.slice(0, 3).map((project, index) => (
                <div 
                  key={project.id || index}
                  className="border border-gray-100 rounded-lg p-4 shadow-sm hover:border-[#FF4B55] transition-all duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{project.title || `Interior Design Project ${index + 1}`}</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-500">{project.location || "Mumbai, Maharashtra"}</p>
                    <p className="text-sm text-gray-500">{project.timeline || "3 months"}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                    <div className="bg-[#FF4B55] h-2.5 rounded-full" style={{ width: `${65 + (index * 10)}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Progress: {65 + (index * 10)}%</span>
                    <span>Client rating: 4.{8-index}/5</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <Building className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-600">No Active Projects</h3>
                <p className="text-gray-500 mb-4">Share your portfolio and start bidding on new projects</p>
                <Link to="/professional-projects">
                  <Button 
                    className="bg-[#FF4B55] hover:bg-[#e03e48] text-white transition-all duration-300"
                  >
                    Explore Projects
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalAnalytics;
