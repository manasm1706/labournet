import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { useAuth } from '../../contexts/AuthContext';

const ProfessionalNavbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showProfileDialog, setShowProfileDialog] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <nav className="bg-[#004A57] text-white py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet India</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/professional-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
          <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
          <Link to="/analytics" className="hover:text-[#FF4B55]">Analytics</Link>
        </div>

        <div 
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setShowProfileDialog(true)}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <span className="font-medium">{user?.businessName || 'Builder'}</span>
        </div>
      </div>

      {/* Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Builder Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-300"></div>
              <div>
                <h3 className="text-xl font-semibold">{user?.businessName || 'Builder'}</h3>
                <p className="text-gray-500">{user?.email || 'No email provided'}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Phone Number</h4>
                <p>{user?.phoneNumber || 'No phone number provided'}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Address</h4>
                <p>{user?.address || 'No address provided'}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Years of Experience</h4>
                <p>{user?.yearsOfExperience || 'Not specified'}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">License Number</h4>
                <p>{user?.licenseNumber || 'Not provided'}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Insurance Info</h4>
                <p>{user?.insuranceInfo || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default ProfessionalNavbar;
