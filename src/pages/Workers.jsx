import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MapPin, Star, Search, Filter, Clock, CheckCircle, User, ArrowLeft, Phone, Calendar, Briefcase } from "lucide-react";
import { Badge } from "../components/ui/badge";
import axios from "axios";
import { useToast } from "../hooks/use-toast";

const Workers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchAcceptedWorkers();
  }, []);

  const fetchAcceptedWorkers = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const userData = JSON.parse(localStorage.getItem('userData'));
      
      if (!token || !userData) {
        throw new Error('Authentication required');
      }

      const response = await axios.get(
        `http://localhost:5000/api/worker-applications/contractor/${userData._id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      // Filter accepted applications and get worker details
      const acceptedWorkers = await Promise.all(
        response.data
          .filter(app => app.status === 'accepted')
          .map(async app => {
            // Fetch worker details from worker collection
            const workerResponse = await axios.get(
              `http://localhost:5000/api/users/worker/${app.worker._id}`,
              {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }
            );

            return {
              id: app.worker._id,
              name: app.worker.fullName,
              role: app.worker.role || 'Worker',
              location: workerResponse.data.address || 'Location not specified',
              rating: app.worker.rating || 0,
              reviews: app.worker.reviews || 0,
              hourlyRate: app.hourlyRate,
              experience: app.experience || 'Experience not specified',
              skills: app.skills || [],
              availability: app.availability || 'Availability not specified',
              contactNo: app.worker.phoneNumber || 'Contact not specified',
              email: app.worker.email || 'Email not specified',
              address: workerResponse.data.address || 'Address not specified'
            };
          })
      );

      // Filter out duplicate workers based on their names
      const uniqueWorkers = acceptedWorkers.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.name);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      setWorkers(uniqueWorkers);
    } catch (error) {
      console.error('Error fetching workers:', error);
      toast({
        title: "Error",
        description: "Failed to fetch workers. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleViewProfile = (workerId) => {
    setSelectedWorkerId(workerId);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004A57] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading workers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet India</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/workers" className="hover:text-[#FF4B55] text-[#FF4B55]">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/contractor-dashboard')}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Available Workers</h1>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Search workers..."
                className="pl-9 w-56 h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="h-10">
              <Filter size={16} className="mr-2" /> Filter
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers
            .filter(worker => 
              searchQuery === "" || 
              worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              worker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
              worker.location.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(worker => (
            <div key={worker.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {selectedWorkerId === worker.id ? (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{worker.name} - Profile</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedWorkerId(null)}
                    >
                      Back
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#004A57]">Contact Information</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone size={16} className="text-gray-500" />
                        <span>{worker.contactNo}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={16} className="text-gray-500" />
                        <span>{worker.address}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-500">Email:</span>
                        <span>{worker.email}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#004A57]">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {worker.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#004A57]">Work Details</h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-gray-500" />
                          <span>Hourly Rate: ₹{worker.hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-500" />
                          <span>Experience: {worker.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-gray-500" />
                          <span>Availability: {worker.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                        <User size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{worker.name}</h3>
                        <p className="text-gray-600 text-sm">{worker.role}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin size={14} className="mr-1" />
                          {worker.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} fill="#FFB800" className="text-[#FFB800]" />
                      <span className="font-medium">{worker.rating}</span>
                      <span className="text-gray-500 text-sm">({worker.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 text-sm">Rate:</span>
                      <span className="font-semibold text-[#004A57]">₹{worker.hourlyRate}/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Availability:</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-[#0D9E55]" />
                        <span className={worker.availability.includes("Now") ? "text-[#0D9E55]" : ""}>
                          {worker.availability}
                        </span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {worker.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                      onClick={() => handleViewProfile(worker.id)}
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Workers;