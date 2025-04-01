
export type AvailableLanguages = "en" | "hi" | "mr" | "te" | "ml" | "ta" | "kn" | "gu" | "pa";

// Define the structure of our translations
interface TranslationDictionary {
  [key: string]: string;
}

interface Translations {
  [language: string]: TranslationDictionary;
}

// Define translations for common UI elements
export const translations: Translations = {
  en: {
    // Header
    "header.dashboard": "Dashboard",
    "header.story": "Our Story",
    "header.marketplace": "Marketplace",
    "header.getInTouch": "Get in Touch",
    
    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.projects": "Projects",
    "nav.messages": "Messages",
    "nav.analytics": "Analytics",
    "nav.profile": "Profile",
    "nav.workers": "Workers",
    "nav.jobs": "Jobs",
    
    // Footer
    "footer.labourHub": "Labour Hub",
    "footer.rights": "All rights reserved 2024",
    "footer.labourNet": "LabourNet",
    "footer.aboutUs": "About Us",
    "footer.ourWork": "Our Work",
    "footer.linkedin": "LinkedIn",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "2024 LabourNet. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookies Settings",
    
    // Hero section
    "hero.title": "Empowering Builders Everywhere",
    "hero.subtitle": "Join a community of skilled professionals and contractors.",
    "hero.button": "Start Your Journey",
    
    // Achievement section
    "achievements.title": "Explore Our Achievements",
    "achievements.subtitle": "See how we support builders and contractors.",
    
    // Gallery section
    "gallery.title": "Join the Builder Revolution",
    "gallery.subtitle": "We provide the tools and connections you need to thrive.",
    "gallery.button": "Get Involved",
    
    // Contact section
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have questions or want to learn more about our services? Reach out to us directly or fill out the form.",
    "contact.info": "Contact Information",
    "contact.email": "Email:",
    "contact.phone": "Phone:",
    "contact.address": "Address:",
    
    // Journey page
    "journey.title": "Start Your Journey with LabourNet",
    "journey.subtitle": "Choose the role that best fits your needs and begin your construction career journey today",
    "journey.readyText": "Ready to take the next step? Create your profile and start exploring opportunities.",
    "journey.createProfile": "Create Your Profile",
    
    // Worker role
    "role.worker.title": "Construction Worker",
    "role.worker.description": "Join our network of skilled construction workers and find regular employment opportunities across various projects.",
    "role.worker.feature1": "Access to daily and weekly job opportunities",
    "role.worker.feature2": "Competitive pay rates",
    "role.worker.feature3": "Skills development and training",
    "role.worker.feature4": "Safety equipment and guidelines",
    
    // Professional role
    "role.professional.title": "Professional Builder",
    "role.professional.description": "For licensed professionals in electrical, plumbing, carpentry and other specialized trades. Connect with clients and projects directly.",
    "role.professional.feature1": "Showcase your certifications and portfolio",
    "role.professional.feature2": "Connect with contractors and clients",
    "role.professional.feature3": "Manage your availability and bookings",
    "role.professional.feature4": "Get paid securely through our platform",
    
    // Contractor role
    "role.contractor.title": "Contractor",
    "role.contractor.description": "Streamline your project management and find the right workers for each job. Build reliable teams for your construction projects.",
    "role.contractor.feature1": "Post jobs and find qualified workers quickly",
    "role.contractor.feature2": "Verify worker qualifications and experience",
    "role.contractor.feature3": "Manage payments and documentation",
    "role.contractor.feature4": "Track project progress and team performance",
    
    // Login
    "login.worker.title": "Welcome, Skilled Worker!",
    "login.worker.subtitle": "Access your profile, track job applications, and connect with top contractors in your area.",
    "login.professional.title": "Welcome, Professional Builder!",
    "login.professional.subtitle": "Access your professional dashboard, manage your services, and connect with clients.",
    "login.contractor.title": "Welcome, Contractor!",
    "login.contractor.subtitle": "Access your business dashboard, manage projects, and find skilled workers for your construction needs.",
    
    // Worker profile
    "profile.title": "Profile Information",
    "profile.edit": "Edit Profile",
    "profile.save": "Save Profile",
    "profile.name": "Full Name",
    "profile.professionalTitle": "Professional Title",
    "profile.email": "Email",
    "profile.phone": "Phone",
    "profile.location": "Location",
    "profile.experience": "Years of Experience",
    "profile.hourlyRate": "Hourly Rate ($)",
    "profile.about": "About",
    "profile.back": "Back to Dashboard",
    "profile.cancel": "Cancel",
    
    // Worker Dashboard
    "worker.dashboard.title": "Worker Dashboard",
    "worker.dashboard.welcome": "Welcome back",
    "worker.dashboard.activeJobs": "Active Jobs",
    "worker.dashboard.applications": "Applications",
    "worker.dashboard.earnings": "Total Earnings",
    "worker.dashboard.findJobs": "Find Jobs",
    "worker.dashboard.skills": "My Skills",
    "worker.dashboard.recentActivity": "Recent Activity",
    "worker.dashboard.upcomingJobs": "Upcoming Jobs",
    
    // Active Work
    "activeWork.title": "My Active Work",
    "activeWork.ongoing": "Ongoing Projects",
    "activeWork.upcoming": "Upcoming Projects",
    "activeWork.completed": "Completed Projects",
    "activeWork.noProjects": "No active projects found",
    "activeWork.viewDetails": "View Details",
    
    // Job Info
    "jobInfo.title": "Job Details",
    "jobInfo.description": "Description",
    "jobInfo.requirements": "Requirements",
    "jobInfo.location": "Location",
    "jobInfo.duration": "Duration",
    "jobInfo.salary": "Salary",
    "jobInfo.apply": "Apply Now",
    "jobInfo.contact": "Contact Employer",
    "jobInfo.posted": "Posted",
    "jobInfo.deadline": "Application Deadline",
    
    // Professional Dashboard
    "professional.myProjects": "My Projects",
    "professional.manage": "Manage your posted construction projects",
    "professional.search": "Search your projects...",
    "professional.allCategories": "All Categories",
    "professional.searchButton": "Search",
    "professional.allProjects": "All Projects",
    "professional.active": "Active",
    "professional.completed": "Completed",
    "professional.noProjects": "No projects yet",
    "professional.noProjectsDesc": "You haven't posted any projects yet. Create your first project to get started!",
    "professional.postFirst": "Post Your First Project",
    "professional.postProject": "Post Your Project",
    "professional.fillForm": "Fill out the form below to create a new project.",
    "professional.activeProjects": "Active Projects",
    "professional.applicationsReceived": "Applications Received",
    "professional.workersHired": "Workers Hired",
    "professional.averageRating": "Average Rating",
    "professional.status": "Status",
    
    // Professional Profile
    "professionalProfile.title": "Professional Profile",
    "professionalProfile.subtitle": "Manage your professional details and portfolio",
    "professionalProfile.details": "Personal Details",
    "professionalProfile.portfolio": "Portfolio",
    "professionalProfile.certifications": "Certifications",
    "professionalProfile.reviews": "Client Reviews",
    "professionalProfile.addProject": "Add Portfolio Project",
    "professionalProfile.addCertification": "Add Certification",
    
    // Project Details
    "projectDetails.title": "Project Details",
    "projectDetails.description": "Project Description",
    "projectDetails.requirements": "Requirements",
    "projectDetails.timeline": "Project Timeline",
    "projectDetails.budget": "Project Budget",
    "projectDetails.location": "Location",
    "projectDetails.apply": "Apply for this Project",
    "projectDetails.contact": "Contact Client",
    "projectDetails.share": "Share Project",
    "projectDetails.similar": "Similar Projects",
    
    // Professional Messages
    "messages.title": "Messages",
    "messages.inbox": "Inbox",
    "messages.sent": "Sent",
    "messages.archived": "Archived",
    "messages.compose": "Compose Message",
    "messages.search": "Search messages...",
    "messages.noMessages": "No messages found",
    "messages.reply": "Reply",
    "messages.delete": "Delete",
    "messages.archive": "Archive",
    
    // Contractor Dashboard
    "contractor.dashboard.title": "Contractor Dashboard",
    "contractor.dashboard.welcome": "Welcome back",
    "contractor.dashboard.activeProjects": "Active Projects",
    "contractor.dashboard.workersPending": "Workers Pending Approval",
    "contractor.dashboard.totalWorkers": "Total Workers Hired",
    "contractor.dashboard.postJob": "Post New Job",
    "contractor.dashboard.viewApplications": "View Applications",
    "contractor.dashboard.projectProgress": "Project Progress",
    
    // Company Profile
    "company.profile.title": "Company Profile",
    "company.profile.about": "About Company",
    "company.profile.projects": "Company Projects",
    "company.profile.team": "Our Team",
    "company.profile.contact": "Contact Information",
    "company.profile.edit": "Edit Company Profile",
    "company.profile.save": "Save Changes",
    "company.profile.logo": "Company Logo",
    
    // Project View
    "projectView.title": "Project Overview",
    "projectView.client": "Client",
    "projectView.status": "Status",
    "projectView.dueDate": "Due Date",
    "projectView.budget": "Budget",
    "projectView.team": "Project Team",
    "projectView.progress": "Progress",
    "projectView.tasks": "Tasks",
    "projectView.files": "Files & Documents",
    "projectView.discussions": "Discussions",
    
    // Workers Management
    "workers.title": "Manage Workers",
    "workers.active": "Active Workers",
    "workers.available": "Available Workers",
    "workers.search": "Search workers...",
    "workers.filter": "Filter by Skills",
    "workers.sortRating": "Sort by Rating",
    "workers.sortExperience": "Sort by Experience",
    "workers.invite": "Invite to Project",
    "workers.viewProfile": "View Profile",
    "workers.contact": "Contact",
    
    // Analytics Page
    "analytics.title": "Performance Analytics",
    "analytics.overview": "Overview",
    "analytics.projects": "Projects",
    "analytics.workers": "Workers",
    "analytics.earnings": "Earnings",
    "analytics.trends": "Trends",
    "analytics.timeframe": "Select Timeframe",
    "analytics.export": "Export Data",
    "analytics.projectCompletion": "Project Completion Rate",
    "analytics.workerEfficiency": "Worker Efficiency",
    "analytics.clientSatisfaction": "Client Satisfaction",
    
    // Post Project Form
    "project.postNew": "Post a New Project",
    "project.fillDetails": "Fill in the details below to create your project",
    "project.basicInfo": "Basic Information",
    "project.jobTitle": "Project Title",
    "project.location": "Location",
    "project.employmentType": "Employment Type",
    "project.selectType": "Select Employment Type",
    "project.fullTime": "Full-time",
    "project.partTime": "Part-time",
    "project.contract": "Contract",
    "project.temporary": "Temporary",
    "project.hourlyRate": "Hourly Rate (USD)",
    "project.jobType": "Project Type",
    "project.commercial": "Commercial",
    "project.residential": "Residential",
    "project.industrial": "Industrial",
    "project.infrastructure": "Infrastructure",
    "project.timeline": "Timeline",
    "project.1month": "1 month",
    "project.3months": "3 months",
    "project.6months": "6 months",
    "project.1year": "1 year",
    "project.2years": "2+ years",
    "project.removeAfter": "Remove Project After",
    "project.7days": "7 days",
    "project.14days": "14 days",
    "project.30days": "30 days",
    "project.60days": "60 days",
    "project.90days": "90 days",
    "project.dontRemove": "Don't automatically remove",
    "project.jobDetails": "Project Details",
    "project.description": "Project Description",
    "project.descriptionPlaceholder": "Describe the project responsibilities and expectations...",
    "project.requirements": "Requirements",
    "project.requirementsPlaceholder": "List required skills, experience, certifications, etc...",
    "project.images": "Project Images",
    "project.uploadImages": "Click to upload images",
    "project.dragDrop": "or drag and drop",
    "project.selectFiles": "Select Files",
    "project.saveAsDraft": "Save as Draft",
    "project.post": "Post Project"
  },
  
  hi: {
    // Header
    "header.dashboard": "डैशबोर्ड",
    "header.story": "हमारी कहानी",
    "header.marketplace": "बाज़ार",
    "header.getInTouch": "संपर्क करें",
    
    // Navigation
    "nav.dashboard": "डैशबोर्ड",
    "nav.projects": "परियोजनाएँ",
    "nav.messages": "संदेश",
    "nav.analytics": "विश्लेषण",
    "nav.profile": "प्रोफ़ाइल",
    "nav.workers": "कर्मचारी",
    "nav.jobs": "नौकरियाँ",
    
    // Footer
    "footer.labourHub": "लेबर हब",
    "footer.rights": "सर्वाधिकार सुरक्षित 2024",
    "footer.labourNet": "लेबरनेट",
    "footer.aboutUs": "हमारे बारे में",
    "footer.ourWork": "हमारा काम",
    "footer.linkedin": "लिंक्डइन",
    "footer.contactUs": "संपर्क करें",
    "footer.copyright": "2024 लेबरनेट. सर्वाधिकार सुरक्षित।",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.cookies": "कुकीज़ सेटिंग्स",
    
    // Hero section
    "hero.title": "निर्माताओं को सशक्त बनाना",
    "hero.subtitle": "कुशल पेशेवरों और ठेकेदारों के समुदाय से जुड़ें।",
    "hero.button": "अपनी यात्रा शुरू करें",
    
    // Achievement section
    "achievements.title": "हमारी उपलब्धियों का अन्वेषण करें",
    "achievements.subtitle": "देखें कि हम निर्माताओं और ठेकेदारों का समर्थन कैसे करते हैं।",
    
    // Gallery section
    "gallery.title": "निर्माता क्रांति में शामिल हों",
    "gallery.subtitle": "हम आपको सफल होने के लिए आवश्यक उपकरण और संपर्क प्रदान करते हैं।",
    "gallery.button": "शामिल हों",
    
    // Contact section
    "contact.title": "संपर्क करें",
    "contact.subtitle": "क्या आपके कोई प्रश्न हैं या हमारी सेवाओं के बारे में अधिक जानना चाहते हैं? सीधे हमसे संपर्क करें या फॉर्म भरें।",
    "contact.info": "संपर्क जानकारी",
    "contact.email": "ईमेल:",
    "contact.phone": "फोन:",
    "contact.address": "पता:",
    
    // Journey page
    "journey.title": "लेबरनेट के साथ अपनी यात्रा शुरू करें",
    "journey.subtitle": "वह भूमिका चुनें जो आपकी आवश्यकताओं के लिए सबसे उपयुक्त है और अपने निर्माण करियर की यात्रा आज ही शुरू करें",
    "journey.readyText": "अगला कदम उठाने के लिए तैयार हैं? अपना प्रोफाइल बनाएं और अवसरों का अन्वेषण करें।",
    "journey.createProfile": "अपना प्रोफाइल बनाएं",
    
    // Worker role
    "role.worker.title": "निर्माण श्रमिक",
    "role.worker.description": "हमारे कुशल निर्माण श्रमिकों के नेटवर्क से जुड़ें और विभिन्न परियोजनाओं में नियमित रोजगार के अवसर प्राप्त करें।",
    "role.worker.feature1": "दैनिक और साप्ताहिक नौकरी के अवसरों तक पहुंच",
    "role.worker.feature2": "प्रतिस्पर्धी वेतन दर",
    "role.worker.feature3": "कौशल विकास और प्रशिक्षण",
    "role.worker.feature4": "सुरक्षा उपकरण और दिशानिर्देश",
    
    // Professional role
    "role.professional.title": "पेशेवर निर्माता",
    "role.professional.description": "इलेक्ट्रिकल, प्लंबिंग, कारपेंट्री और अन्य विशेष ट्रेडों में लाइसेंस प्राप्त पेशेवरों के लिए। क्लाइंट्स और प्रोजेक्ट्स से सीधे जुड़ें।",
    "role.professional.feature1": "अपने प्रमाणपत्र और पोर्टफोलियो का प्रदर्शन करें",
    "role.professional.feature2": "ठेकेदारों और ग्राहकों से जुड़ें",
    "role.professional.feature3": "अपनी उपलब्धता और बुकिंग का प्रबंधन करें",
    "role.professional.feature4": "हमारे प्लेटफॉर्म के माध्यम से सुरक्षित भुगतान प्राप्त करें",
    
    // Contractor role
    "role.contractor.title": "ठेकेदार",
    "role.contractor.description": "अपनी परियोजना प्रबंधन को सुव्यवस्थित करें और प्रत्येक कार्य के लिए सही श्रमिकों को ढूंढें। अपने निर्माण परियोजनाओं के लिए विश्वसनीय टीमें बनाएं।",
    "role.contractor.feature1": "नौकरियां पोस्ट करें और जल्दी से योग्य श्रमिकों को ढूंढें",
    "role.contractor.feature2": "श्रमिकों की योग्यता और अनुभव सत्यापित करें",
    "role.contractor.feature3": "भुगतान और दस्तावेज़ीकरण का प्रबंधन करें",
    "role.contractor.feature4": "परियोजना प्रगति और टीम प्रदर्शन का ट्रैक रखें",
    
    // Login
    "login.worker.title": "स्वागत है, कुशल श्रमिक!",
    "login.worker.subtitle": "अपने प्रोफ़ाइल तक पहुंचें, नौकरी आवेदनों को ट्रैक करें, और अपने क्षेत्र के शीर्ष ठेकेदारों से जुड़ें।",
    "login.professional.title": "स्वागत है, पेशेवर निर्माता!",
    "login.professional.subtitle": "अपने पेशेवर डैशबोर्ड तक पहुंचें, अपनी सेवाओं का प्रबंधन करें, और ग्राहकों से जुड़ें।",
    "login.contractor.title": "स्वागत है, ठेकेदार!",
    "login.contractor.subtitle": "अपने व्यापार डैशबोर्ड तक पहुंचें, परियोजनाओं का प्रबंधन करें, और अपनी निर्माण आवश्यकताओं के लिए कुशल श्रमिकों को ढूंढें।",
    
    // Professional Dashboard
    "professional.myProjects": "मेरी परियोजनाएँ",
    "professional.manage": "अपनी पोस्ट की गई निर्माण परियोजनाओं का प्रबंधन करें",
    "professional.search": "अपनी परियोजनाओं को खोजें...",
    "professional.allCategories": "सभी श्रेणियाँ",
    "professional.searchButton": "खोजें",
    "professional.allProjects": "सभी परियोजनाएँ",
    "professional.active": "सक्रिय",
    "professional.completed": "पूर्ण",
    "professional.noProjects": "अभी तक कोई परियोजना नहीं",
    "professional.noProjectsDesc": "आपने अभी तक कोई परियोजना पोस्ट नहीं की है। आरंभ करने के लिए अपनी पहली परियोजना बनाएं!",
    "professional.postFirst": "अपनी पहली परियोजना पोस्ट करें",
    "professional.postProject": "अपनी परियोजना पोस्ट करें",
    "professional.fillForm": "नई परियोजना बनाने के लिए नीचे दिया फॉर्म भरें।",
    "professional.activeProjects": "सक्रिय परियोजनाएँ",
    "professional.applicationsReceived": "प्राप्त आवेदन",
    "professional.workersHired": "नियुक्त किए गए कर्मचारी",
    "professional.averageRating": "औसत रेटिंग",
    "professional.status": "स्थिति",
    
    // Worker profile
    "profile.title": "प्रोफ़ाइल जानकारी",
    "profile.edit": "प्रोफ़ाइल संपादित करें",
    "profile.save": "प्रोफ़ाइल सहेजें",
    "profile.name": "पूरा नाम",
    "profile.professionalTitle": "पेशेवर शीर्षक",
    "profile.email": "ईमेल",
    "profile.phone": "फ़ोन",
    "profile.location": "स्थान",
    "profile.experience": "अनुभव के वर्ष",
    "profile.hourlyRate": "प्रति घंटा दर ($)",
    "profile.about": "के बारे में",
    "profile.back": "डैशबोर्ड पर वापस जाएँ",
    "profile.cancel": "रद्द करें",

    // Worker Dashboard translations
    "worker.dashboard.title": "कर्मचारी डैशबोर्ड",
    "worker.dashboard.welcome": "वापस स्वागत है",
    "worker.dashboard.activeJobs": "सक्रिय नौकरियाँ",
    "worker.dashboard.applications": "आवेदन",
    "worker.dashboard.earnings": "कुल कमाई",
    "worker.dashboard.findJobs": "नौकरियाँ खोजें",
    "worker.dashboard.skills": "मेरे कौशल",
    "worker.dashboard.recentActivity": "हाल की गतिविधि",
    "worker.dashboard.upcomingJobs": "आगामी नौकरियाँ",

    // Active Work translations
    "activeWork.title": "मेरा सक्रिय कार्य",
    "activeWork.ongoing": "चल रही परियोजनाएँ",
    "activeWork.upcoming": "आगामी परियोजनाएँ",
    "activeWork.completed": "पूर्ण परियोजनाएँ",
    "activeWork.noProjects": "कोई सक्रिय परियोजना नहीं मिली",
    "activeWork.viewDetails": "विवरण देखें",

    // Job Info translations
    "jobInfo.title": "नौकरी विवरण",
    "jobInfo.description": "विवरण",
    "jobInfo.requirements": "आवश्यकताएँ",
    "jobInfo.location": "स्थान",
    "jobInfo.duration": "अवधि",
    "jobInfo.salary": "वेतन",
    "jobInfo.apply": "अभी आवेदन करें",
    "jobInfo.contact": "नियोक्ता से संपर्क करें",
    "jobInfo.posted": "पोस्ट किया गया",
    "jobInfo.deadline": "आवेदन की अंतिम तिथि",

    // Professional Profile translations
    "professionalProfile.title": "पेशेवर प्रोफ़ाइल",
    "professionalProfile.subtitle": "अपने पेशेवर विवरण और पोर्टफोलियो का प्रबंधन करें",
    "professionalProfile.details": "व्यक्तिगत विवरण",
    "professionalProfile.portfolio": "पोर्टफोलियो",
    "professionalProfile.certifications": "प्रमाणपत्र",
    "professionalProfile.reviews": "ग्राहक समीक्षाएँ",
    "professionalProfile.addProject": "पोर्टफोलियो परियोजना जोड़ें",
    "professionalProfile.addCertification": "प्रमाणपत्र जोड़ें",

    // Project Details translations
    "projectDetails.title": "परियोजना विवरण",
    "projectDetails.description": "परियोजना विवरण",
    "projectDetails.requirements": "आवश्यकताएँ",
    "projectDetails.timeline": "परियोजना समयरेखा",
    "projectDetails.budget": "परियोजना बजट",
    "projectDetails.location": "स्थान",
    "projectDetails.apply": "इस परियोजना के लिए आवेदन करें",
    "projectDetails.contact": "ग्राहक से संपर्क करें",
    "projectDetails.share": "परियोजना साझा करें",
    "projectDetails.similar": "समान परियोजनाएँ",

    // Professional Messages translations
    "messages.title": "संदेश",
    "messages.inbox": "इनबॉक्स",
    "messages.sent": "भेजा गया",
    "messages.archived": "संग्रहीत",
    "messages.compose": "संदेश लिखें",
    "messages.search": "संदेश खोजें...",
    "messages.noMessages": "कोई संदेश नहीं मिला",
    "messages.reply": "उत्तर",
    "messages.delete": "हटाएँ",
    "messages.archive": "संग्रह करें",

    // Contractor Dashboard translations
    "contractor.dashboard.title": "ठेकेदार डैशबोर्ड",
    "contractor.dashboard.welcome": "वापस स्वागत है",
    "contractor.dashboard.activeProjects": "सक्रिय परियोजनाएँ",
    "contractor.dashboard.workersPending": "कर्मचारी अनुमोदन लंबित",
    "contractor.dashboard.totalWorkers": "कुल नियुक्त कर्मचारी",
    "contractor.dashboard.postJob": "नई नौकरी पोस्ट करें",
    "contractor.dashboard.viewApplications": "आवेदन देखें",
    "contractor.dashboard.projectProgress": "परियोजना प्रगति",

    // Company Profile translations
    "company.profile.title": "कंपनी प्रोफ़ाइल",
    "company.profile.about": "कंपनी के बारे में",
    "company.profile.projects": "कंपनी परियोजनाएँ",
    "company.profile.team": "हमारी टीम",
    "company.profile.contact": "संपर्क जानकारी",
    "company.profile.edit": "कंपनी प्रोफ़ाइल संपादित करें",
    "company.profile.save": "परिवर्तन सहेजें",
    "company.profile.logo": "कंपनी लोगो",

    // Project View translations
    "projectView.title": "परियोजना अवलोकन",
    "projectView.client": "ग्राहक",
    "projectView.status": "स्थिति",
    "projectView.dueDate": "नियत तारीख",
    "projectView.budget": "बजट",
    "projectView.team": "परियोजना टीम",
    "projectView.progress": "प्रगति",
    "projectView.tasks": "कार्य",
    "projectView.files": "फ़ाइलें और दस्तावेज़",
    "projectView.discussions": "चर्चाएँ",

    // Workers Management translations
    "workers.title": "कर्मचारी प्रबंधित करें",
    "workers.active": "सक्रिय कर्मचारी",
    "workers.available": "उपलब्ध कर्मचारी",
    "workers.search": "कर्मचारी खोजें...",
    "workers.filter": "कौशल द्वारा फ़िल्टर करें",
    "workers.sortRating": "रेटिंग द्वारा सॉर्ट करें",
    "workers.sortExperience": "अनुभव द्वारा सॉर्ट करें",
    "workers.invite": "परियोजना में आमंत्रित करें",
    "workers.viewProfile": "प्रोफ़ाइल देखें",
    "workers.contact": "संपर्क करें",

    // Analytics Page translations
    "analytics.title": "प्रदर्शन विश्लेषण",
    "analytics.overview": "अवलोकन",
    "analytics.projects": "परियोजनाएँ",
    "analytics.workers": "कर्मचारी",
    "analytics.earnings": "कमाई",
    "analytics.trends": "प्रवृत्तियाँ",
    "analytics.timeframe": "समय सीमा चुनें",
    "analytics.export": "डेटा निर्यात करें",
    "analytics.projectCompletion": "परियोजना पूर्णता दर",
    "analytics.workerEfficiency": "कर्मचारी दक्षता",
    "analytics.clientSatisfaction": "ग्राहक संतुष्टि",

    // Post Project Form translations
    "project.postNew": "एक नई परियोजना पोस्ट करें",
    "project.fillDetails": "अपनी परियोजना बनाने के लिए नीचे दिए गए विवरण भरें",
    "project.basicInfo": "बुनियादी जानकारी",
    "project.jobTitle": "परियोजना शीर्षक",
    "project.location": "स्थान",
    "project.employmentType": "रोजगार का प्रकार",
    "project.selectType": "रोजगार का प्रकार चुनें",
    "project.fullTime": "पूर्णकालिक",
    "project.partTime": "अंशकालिक",
    "project.contract": "अनुबंध",
    "project.temporary": "अस्थायी",
    "project.hourlyRate": "प्रति घंटा दर (USD)",
    "project.jobType": "परियोजना का प्रकार",
    "project.commercial": "व्यावसायिक",
    "project.residential": "आवासीय",
    "project.industrial": "औद्योगिक",
    "project.infrastructure": "बुनियादी ढाँचा",
    "project.timeline": "समयरेखा",
    "project.1month": "1 महीना",
    "project.3months": "3 महीने",
    "project.6months": "6 महीने",
    "project.1year": "1 वर्ष",
    "project.2years": "2+ वर्ष",
    "project.removeAfter": "इसके बाद परियोजना हटाएं",
    "project.7days": "7 दिन",
    "project.14days": "14 दिन",
    "project.30days": "30 दिन",
    "project.60days": "60 दिन",
    "project.90days": "90 दिन",
    "project.dontRemove": "स्वचालित रूप से न हटाएं",
    "project.jobDetails": "परियोजना विवरण",
    "project.description": "परियोजना विवरण",
    "project.descriptionPlaceholder": "परियोजना जिम्मेदारियों और अपेक्षाओं का वर्णन करें...",
    "project.requirements": "आवश्यकताएँ",
    "project.requirementsPlaceholder": "आवश्यक कौशल, अनुभव, प्रमाणपत्र आदि सूचीबद्ध करें...",
    "project.images": "परियोजना छवियाँ",
    "project.uploadImages": "छवियाँ अपलोड करने के लिए क्लिक करें",
    "project.dragDrop": "या खींचें और छोड़ें",
    "project.selectFiles": "फ़ाइलें चुनें",
    "project.saveAsDraft": "ड्राफ्ट के रूप में सहेजें",
    "project.post": "परियोजना पोस्ट करें"
  },
  
  mr: {
    // Header
    "header.dashboard": "डॅशबोर्ड",
    "header.story": "आमची कथा",
    "header.marketplace": "बाजारपेठ",
    "header.getInTouch": "संपर्क करा",
    
    // Navigation
    "nav.dashboard": "डॅशबोर्ड",
    "nav.projects": "प्रकल्प",
    "nav.messages": "संदेश",
    "nav.analytics": "विश्लेषण",
    "nav.profile": "प्रोफाइल",
    "nav.workers": "कामगार",
    "nav.jobs": "नोकरी",
    
    // Footer
    "footer.labourHub": "लेबर हब",
    "footer.rights": "सर्व अधिकार राखीव 2024",
    "footer.labourNet": "लेबरनेट",
    "footer.aboutUs": "आमच्याबद्दल",
    "footer.ourWork": "आमचे कार्य",
    "footer.linkedin": "लिंक्डइन",
    "footer.contactUs": "संपर्क साधा",
    "footer.copyright": "2024 लेबरनेट. सर्व अधिकार राखीव.",
    "footer.privacy": "गोपनीयता धोरण",
    "footer.terms": "सेवेचे नियम",
    "footer.cookies": "कुकीज सेटिंग्ज",
    
    // Hero section
    "hero.title": "बांधकाम व्यावसायिकांना सक्षम करणे",
    "hero.subtitle": "कुशल व्यावसायिक आणि कंत्राटदारांच्या समुदायात सामील व्हा.",
    "hero.button": "आपल्या प्रवासाला सुरुवात करा",
    
    // Achievement section
    "achievements.title": "आमच्या उपलब्धी शोधा",
    "achievements.subtitle": "आम्ही बांधकाम व्यावसायिक आणि कंत्राटदारांना कसा पाठिंबा देतो ते पहा.",
    
    // Gallery section
    "gallery.title": "बांधकाम क्रांतीमध्ये सामील व्हा",
    "gallery.subtitle": "आम्ही आपल्याला आवश्यक साधने आणि कनेक्शन प्रदान करतो.",
    "gallery.button": "सहभागी व्हा",
    
    // Contact section
    "contact.title": "संपर्क साधा",
    "contact.subtitle": "प्रश्न आहेत किंवा आमच्या सेवांबद्दल अधिक जाणून घ्यायचे आहे? थेट आमच्याशी संपर्क साधा किंवा फॉर्म भरा.",
    "contact.info": "संपर्क माहिती",
    "contact.email": "ईमेल:",
    "contact.phone": "फोन:",
    "contact.address": "पत्ता:",
    
    // Journey page
    "journey.title": "लेबरनेट सोबत आपल्या प्रवासाला सुरुवात करा",
    "journey.subtitle": "आपल्या गरजेनुसार योग्य भूमिका निवडा आणि आजच आपल्या बांधकाम कारकिर्दीच्या प्रवासाला सुरुवात करा",
    "journey.readyText": "पुढील पाऊल उचलण्यास तयार आहात? आपली प्रोफाइल तयार करा आणि संधी शोधा.",
    "journey.createProfile": "आपली प्रोफाइल तयार करा",
    
    // Worker role
    "role.worker.title": "बांधकाम कामगार",
    "role.worker.description": "कुशल बांधकाम कामगारांच्या आमच्या नेटवर्कमध्ये सामील व्हा आणि विविध प्रकल्पांमध्ये नियमित रोजगाराच्या संधी शोधा.",
    "role.worker.feature1": "दैनिक आणि साप्ताहिक नोकरीच्या संधींमध्ये प्रवेश",
    "role.worker.feature2": "स्पर्धात्मक वेतन दर",
    "role.worker.feature3": "कौशल्य विकास आणि प्रशिक्षण",
    "role.worker.feature4": "सुरक्षा उपकरणे आणि मार्गदर्शक तत्त्वे",
    
    // Professional role
    "role.professional.title": "व्यावसायिक बांधकाम व्यावसायिक",
    "role.professional.description": "इलेक्ट्रिकल, प्लंबिंग, सुतारकाम आणि इतर विशेष व्यवसायांमधील परवानाधारक व्यावसायिकांसाठी. क्लायंट आणि प्रोजेक्टशी थेट कनेक्ट व्हा.",
    "role.professional.feature1": "आपले प्रमाणपत्र आणि पोर्टफोलिओ प्रदर्शित करा",
    "role.professional.feature2": "कंत्राटदार आणि क्लायंटशी कनेक्ट व्हा",
    "role.professional.feature3": "आपली उपलब्धता आणि बुकिंग व्यवस्थापित करा",
    "role.professional.feature4": "आमच्या प्लॅटफॉर्मद्वारे सुरक्षितपणे पैसे मिळवा",
    
    // Contractor role
    "role.contractor.title": "कंत्राटदार",
    "role.contractor.description": "आपले प्रकल्प व्यवस्थापन सुव्यवस्थित करा आणि प्रत्येक कामासाठी योग्य कामगार शोधा. आपल्या बांधकाम प्रकल्पांसाठी विश्वसनीय टीम तयार करा.",
    "role.contractor.feature1": "नोकरी पोस्ट करा आणि त्वरित पात्र कामगार शोधा",
    "role.contractor.feature2": "कामगारांची योग्यता आणि अनुभव सत्यापित करा",
    "role.contractor.feature3": "देयके आणि कागदपत्रे व्यवस्थापित करा",
    "role.contractor.feature4": "प्रकल्प प्रगती आणि टीम कामगिरी ट्रॅक करा",
    
    // Login
    "login.worker.title": "स्वागत आहे, कुशल कामगार!",
    "login.worker.subtitle": "आपल्या प्रोफाइल मध्ये प्रवेश करा, नोकरी अर्ज ट्रॅक करा, आणि आपल्या क्षेत्रातील शीर्ष कंत्राटदारांशी जोडणी करा.",
    "login.professional.title": "स्वागत आहे, व्यावसायिक बांधकामदार!",
    "login.professional.subtitle": "आपल्या व्यावसायिक डॅशबोर्डमध्ये प्रवेश करा, आपल्या सेवा व्यवस्थापित करा, आणि क्लायंटशी जोडणी करा.",
    "login.contractor.title": "स्वागत आहे, कंत्राटदार!",
    "login.contractor.subtitle": "आपल्या व्यवसाय डॅशबोर्डमध्ये प्रवेश करा, प्रकल्प व्यवस्थापित करा, आणि आपल्या बांधकाम गरजांसाठी कुशल कामगार शोधा.",
    
    // Worker profile
    "profile.title": "प्रोफाइल माहिती",
    "profile.edit": "प्रोफाइल संपादित करा",
    "profile.save": "प्रोफाइल जतन करा",
    "profile.name": "पूर्ण नाव",
    "profile.professionalTitle": "व्यावसायिक शीर्षक",
    "profile.email": "ईमेल",
    "profile.phone": "फोन",
    "profile.location": "स्थान",
    "profile.experience": "अनुभवाची वर्षे",
    "profile.hourlyRate": "तासाचा दर ($)",
    "profile.about": "माझ्याबद्दल",
    "profile.back": "डॅशबोर्डवर परत जा",
    "profile.cancel": "रद्द करा",

    // Worker Dashboard translations
    "worker.dashboard.title": "कामगार डॅशबोर्ड",
    "worker.dashboard.welcome": "पुन्हा स्वागत आहे",
    "worker.dashboard.activeJobs": "सक्रिय नोकऱ्या",
    "worker.dashboard.applications": "अर्ज",
    "worker.dashboard.earnings": "एकूण कमाई",
    "worker.dashboard.findJobs": "नोकऱ्या शोधा",
    "worker.dashboard.skills": "माझे कौशल्ये",
    "worker.dashboard.recentActivity": "अलीकडील क्रियाकलाप",
    "worker.dashboard.upcomingJobs": "आगामी नोकऱ्या",

    // Active Work translations
    "activeWork.title": "माझे सक्रिय काम",
    "activeWork.ongoing": "सुरू असलेले प्रकल्प",
    "activeWork.upcoming": "आगामी प्रकल्प",
    "activeWork.completed": "पूर्ण केलेले प्रकल्प",
    "activeWork.noProjects": "कोणतेही सक्रिय प्रकल्प आढळले नाहीत",
    "activeWork.viewDetails": "तपशील पहा",

    // Job Info translations
    "jobInfo.title": "नोकरी तपशील",
    "jobInfo.description": "वर्णन",
    "jobInfo.requirements": "आवश्यकता",
    "jobInfo.location": "स्थान",
    "jobInfo.duration": "कालावधी",
    "jobInfo.salary": "वेतन",
    "jobInfo.apply": "आता अर्ज करा",
    "jobInfo.contact": "नियोक्त्याशी संपर्क साधा",
    "jobInfo.posted": "पोस्ट केले",
    "jobInfo.deadline": "अर्जाची अंतिम तारीख",

    // Professional Profile translations
    "professionalProfile.title": "व्यावसायिक प्रोफाइल",
    "professionalProfile.subtitle": "आपले व्यावसायिक तपशील आणि पोर्टफोलिओ व्यवस्थापित करा",
    "professionalProfile.details": "वैयक्तिक तपशील",
    "professionalProfile.portfolio": "पोर्टफोलिओ",
    "professionalProfile.certifications": "प्रमाणपत्रे",
    "professionalProfile.reviews": "क्लायंट पुनरावलोकने",
    "professionalProfile.addProject": "पोर्टफोलिओ प्रकल्प जोडा",
    "professionalProfile.addCertification": "प्रमाणपत्र जोडा",

    // Project Details translations
    "projectDetails.title": "प्रकल्प तपशील",
    "projectDetails.description": "प्रकल्प वर्णन",
    "projectDetails.requirements": "आवश्यकता",
    "projectDetails.timeline": "प्रकल्प कालरेखा",
    "projectDetails.budget": "प्रकल्प बजेट",
    "projectDetails.location": "स्थान",
    "projectDetails.apply": "या प्रकल्पासाठी अर्ज करा",
    "projectDetails.contact": "क्लायंटशी संपर्क साधा",
    "projectDetails.share": "प्रकल्प सामायिक करा",
    "projectDetails.similar": "समान प्रकल्प",

    // Professional Messages translations
    "messages.title": "संदेश",
    "messages.inbox": "इनबॉक्स",
    "messages.sent": "पाठवलेले",
    "messages.archived": "संग्रहित",
    "messages.compose": "संदेश लिहा",
    "messages.search": "संदेश शोधा...",
    "messages.noMessages": "कोणतेही संदेश आढळले नाहीत",
    "messages.reply": "उत्तर द्या",
    "messages.delete": "हटवा",
    "messages.archive": "संग्रहित करा"
  },
  
  te: {
    // ... translations for Telugu language can be added here
  },
  
  ml: {
    // ... translations for Malayalam language can be added here
  },
  
  ta: {
    // ... translations for Tamil language can be added here
  },
  
  kn: {
    // ... translations for Kannada language can be added here
  },
  
  gu: {
    // ... translations for Gujarati language can be added here
  },
  
  pa: {
    // ... translations for Punjabi language can be added here
  }
};
