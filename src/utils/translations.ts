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
    "footer.rights": "All rights reserved",
    "footer.labourNet": "LabourNet",
    "footer.aboutUs": "Our Story",
    "footer.ourWork": "Our Work",
    "footer.linkedin": "LinkedIn",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "LabourNet. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookies Settings",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.projectManagement": "Project Management",
    "footer.ourServices": "Our Services",
    
    // Hero section
    "hero.title": "Empowering Construction, Building Futures",
    "hero.subtitle": "Connecting builders, contractors, and workers through a smart, digital platform.",
    "hero.button": "Start Your Journey",
    
    // Achievement Section
    "achievement.title": "Our Achievements",
    "achievement.projectsCompleted": "Projects Completed",
    "achievement.workersEmployed": "Workers Employed",
    "achievement.contractorsConnected": "Contractors Connected",
    "achievement.countriesActive": "Countries Active",
    
    // Gallery Section
    "gallery.title": "Our Gallery",
    "gallery.subtitle": "Explore some of our successful projects and the skilled professionals behind them.",
    
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
    
    // Login page
    "login.welcome": "Welcome Back!",
    "login.rolePrompt": "Login as a",
    "login.worker": "Worker",
    "login.professional": "Professional",
    "login.contractor": "Contractor",
    "login.email": "Email",
    "login.password": "Password",
    "login.loginButton": "Login",
    "login.registerPrompt": "Don't have an account?",
    "login.registerLink": "Register",
    
    // Worker profile
    "workerProfile.title": "Worker Profile",
    "workerProfile.name": "Name",
    "workerProfile.email": "Email",
    "workerProfile.phone": "Phone",
    "workerProfile.skills": "Skills",
    "workerProfile.experience": "Experience",
    "workerProfile.availability": "Availability",
    "workerProfile.updateProfile": "Update Profile",
    
    // Worker Dashboard
    "workerDashboard.title": "Worker Dashboard",
    "workerDashboard.welcome": "Welcome",
    "workerDashboard.availableJobs": "Available Jobs",
    "workerDashboard.searchJobs": "Search Jobs",
    "workerDashboard.jobType": "Job Type",
    "workerDashboard.location": "Location",
    "workerDashboard.searchButton": "Search",
    "workerDashboard.jobListings": "Job Listings",
    "workerDashboard.noJobs": "No jobs found",
    "workerDashboard.noJobsDesc": "There are currently no jobs available that match your criteria. Please check back later.",
    
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
    "footer.rights": "सर्वाधिकार सुरक्षित",
    "footer.labourNet": "लेबरनेट",
    "footer.aboutUs": "हमारी कहानी",
    "footer.ourWork": "हमारा काम",
    "footer.linkedin": "लिंक्डइन",
    "footer.contactUs": "संपर्क करें",
    "footer.copyright": "लेबरनेट. सर्वाधिकार सुरक्षित।",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.cookies": "कुकीज़ सेटिंग्स",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.services": "हमारी सेवाएं",
    "footer.projectManagement": "परियोजना प्रबंधन",
    "footer.ourServices": "हमारी सेवाएं",
    
    // Hero section
    "hero.title": "निर्माण को सशक्त बनाना, भविष्य का निर्माण",
    "hero.subtitle": "एक स्मार्ट, डिजिटल प्लेटफॉर्म के माध्यम से बिल्डरों, ठेकेदारों और श्रमिकों को जोड़ना।",
    "hero.button": "अपनी यात्रा शुरू करें",
    
    // Achievement Section
    "achievement.title": "हमारी उपलब्धियाँ",
    "achievement.projectsCompleted": "परियोजनाएँ पूरी हुईं",
    "achievement.workersEmployed": "कर्मचारी कार्यरत",
    "achievement.contractorsConnected": "ठेकेदार जुड़े",
    "achievement.countriesActive": "देश सक्रिय",
    
    // Gallery Section
    "gallery.title": "हमारी गैलरी",
    "gallery.subtitle": "हमारी कुछ सफल परियोजनाओं और उनके पीछे कुशल पेशेवरों का अन्वेषण करें।",
    
    // Contact section
    "contact.title": "संपर्क करें",
    "contact.subtitle": "क्या आपके कोई प्रश्न हैं या हमारी सेवाओं के बारे में अधिक जानना चाहते हैं? सीधे हमसे संपर्क करें या फॉर्म भरें।",
    "contact.info": "संपर्क जानकारी",
    "contact.email": "ईमेल:",
    "contact.phone": "फ़ोन:",
    "contact.address": "पता:",
    
    // Journey page
    "journey.title": "लेबरनेट के साथ अपनी यात्रा शुरू करें",
    "journey.subtitle": "वह भूमिका चुनें जो आपकी आवश्यकताओं के लिए सबसे उपयुक्त हो और आज ही अपना निर्माण करियर शुरू करें",
    "journey.readyText": "अगला कदम उठाने के लिए तैयार हैं? अपनी प्रोफ़ाइल बनाएं और अवसरों की खोज शुरू करें।",
    "journey.createProfile": "अपनी प्रोफ़ाइल बनाएं",
    
    // Worker role
    "role.worker.title": "निर्माण श्रमिक",
    "role.worker.description": "कुशल निर्माण श्रमिकों के हमारे नेटवर्क में शामिल हों और विभिन्न परियोजनाओं में नियमित रोजगार के अवसर खोजें।",
    "role.worker.feature1": "दैनिक और साप्ताहिक नौकरी के अवसरों तक पहुंच",
    "role.worker.feature2": "प्रतिस्पर्धी वेतन दरें",
    "role.worker.feature3": "कौशल विकास और प्रशिक्षण",
    "role.worker.feature4": "सुरक्षा उपकरण और दिशानिर्देश",
    
    // Professional role
    "role.professional.title": "पेशेवर बिल्डर",
    "role.professional.description": "विद्युत, प्लंबिंग, बढ़ईगीरी और अन्य विशिष्ट व्यवसायों में लाइसेंस प्राप्त पेशेवरों के लिए। सीधे ग्राहकों और परियोजनाओं से जुड़ें।",
    "role.professional.feature1": "अपने प्रमाणपत्र और पोर्टफोलियो दिखाएं",
    "role.professional.feature2": "ठेकेदारों और ग्राहकों से जुड़ें",
    "role.professional.feature3": "अपनी उपलब्धता और बुकिंग प्रबंधित करें",
    "role.professional.feature4": "हमारे मंच के माध्यम से सुरक्षित रूप से भुगतान प्राप्त करें",
    
    // Contractor role
    "role.contractor.title": "ठेकेदार",
    "role.contractor.description": "अपनी परियोजना प्रबंधन को सुव्यवस्थित करें और प्रत्येक नौकरी के लिए सही कर्मचारी खोजें। अपने निर्माण परियोजनाओं के लिए विश्वसनीय टीम बनाएं।",
    "role.contractor.feature1": "नौकरी पोस्ट करें और जल्दी से योग्य कर्मचारी खोजें",
    "role.contractor.feature2": "कर्मचारी योग्यता और अनुभव सत्यापित करें",
    "role.contractor.feature3": "भुगतान और दस्तावेज़ीकरण प्रबंधित करें",
    "role.contractor.feature4": "परियोजना की प्रगति और टीम के प्रदर्शन को ट्रैक करें",
    
    // Login page
    "login.welcome": "वापस स्वागत है!",
    "login.rolePrompt": "के रूप में लॉग इन करें",
    "login.worker": "कर्मचारी",
    "login.professional": "पेशेवर",
    "login.contractor": "ठेकेदार",
    "login.email": "ईमेल",
    "login.password": "पासवर्ड",
    "login.loginButton": "लॉग इन",
    "login.registerPrompt": "खाता नहीं है?",
    "login.registerLink": "पंजीकरण",
    
    // Worker profile
    "workerProfile.title": "कर्मचारी प्रोफ़ाइल",
    "workerProfile.name": "नाम",
    "workerProfile.email": "ईमेल",
    "workerProfile.phone": "फ़ोन",
    "workerProfile.skills": "कौशल",
    "workerProfile.experience": "अनुभव",
    "workerProfile.availability": "उपलब्धता",
    "workerProfile.updateProfile": "प्रोफ़ाइल अपडेट करें",
    
    // Worker Dashboard
    "workerDashboard.title": "कर्मचारी डैशबोर्ड",
    "workerDashboard.welcome": "स्वागत",
    "workerDashboard.availableJobs": "उपलब्ध नौकरियाँ",
    "workerDashboard.searchJobs": "नौकरियाँ खोजें",
    "workerDashboard.jobType": "नौकरी का प्रकार",
    "workerDashboard.location": "स्थान",
    "workerDashboard.searchButton": "खोज",
    "workerDashboard.jobListings": "नौकरी लिस्टिंग",
    "workerDashboard.noJobs": "कोई नौकरी नहीं मिली",
    "workerDashboard.noJobsDesc": "वर्तमान में कोई भी नौकरी उपलब्ध नहीं है जो आपके मानदंडों से मेल खाती हो। कृपया बाद में पुनः जाँच करें।",
    
    // Professional Dashboard
    "professional.myProjects": "मेरी परियोजनाएँ",
    "professional.manage": "अपनी पोस्ट की गई निर्माण परियोजनाओं का प्रबंधन करें",
    "professional.search": "अपनी परियोजनाओं को खोजें...",
    "professional.allCategories": "सभी श्रेणियाँ",
    "professional.searchButton": "खोज",
    "professional.allProjects": "सभी परियोजनाएँ",
    "professional.active": "सक्रिय",
    "professional.completed": "पूर्ण",
    "professional.noProjects": "अभी तक कोई परियोजना नहीं है",
    "professional.noProjectsDesc": "आपने अभी तक कोई परियोजना पोस्ट नहीं की है। आरंभ करने के लिए अपनी पहली परियोजना बनाएं!",
    "professional.postFirst": "अपनी पहली परियोजना पोस्ट करें",
    "professional.postProject": "अपनी परियोजना पोस्ट करें",
    "professional.fillForm": "एक नई परियोजना बनाने के लिए नीचे दिया गया फॉर्म भरें।",
    "professional.activeProjects": "सक्रिय परियोजनाएँ",
    "professional.applicationsReceived": "प्राप्त आवेदन",
    "professional.workersHired": "कर्मचारी किराए पर लिए गए",
    "professional.averageRating": "औसत रेटिंग",
    "professional.status": "स्थिति",
  },
  
  mr: {
    // Header
    "header.dashboard": "डॅशबोर्ड",
    "header.story": "आमची कथा",
    "header.marketplace": "बाजारपेठ",
    "header.getInTouch": "संपर्क साधा",
    
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
    "footer.rights": "सर्व अधिकार राखीव",
    "footer.labourNet": "लेबरनेट",
    "footer.aboutUs": "आमच्याबद्दल",
    "footer.ourWork": "आमचे कार्य",
    "footer.linkedin": "लिंक्डइन",
    "footer.contactUs": "संपर्क साधा",
    "footer.copyright": "लेबरनेट. सर्व अधिकार राखीव.",
    "footer.privacy": "गोपनीयता धोरण",
    "footer.terms": "सेवेचे नियम",
    "footer.cookies": "कुकीज सेटिंग्ज",
    "footer.quickLinks": "त्वरित दुवे",
    "footer.services": "आमच्या सेवा",
    "footer.projectManagement": "प्रकल्प व्यवस्थापन",
    "footer.ourServices": "आमच्या सेवा",
    
    // Hero section
    "hero.title": "बांधकाम सक्षम करणे, भविष्य निर्माण करणे",
    "hero.subtitle": "स्मार्ट, डिजिटल प्लॅटफॉर्मद्वारे बांधकाम व्यावसायिक, कंत्राटदार आणि कामगारांना जोडणे.",
    "hero.button": "आपला प्रवास सुरू करा",
    
    // Achievement Section
    "achievement.title": "आमची उद्दिष्ट्ये",
    "achievement.projectsCompleted": "पूर्ण झालेले प्रकल्प",
    "achievement.workersEmployed": "नोकरी केलेले कामगार",
    "achievement.contractorsConnected": "जोडलेले कंत्राटदार",
    "achievement.countriesActive": "सक्रिय देश",
    
    // Gallery Section
    "gallery.title": "आमची गॅलरी",
    "gallery.subtitle": "आमच्या काही यशस्वी प्रकल्पांचे आणि त्यांच्यामागील कुशल व्यावसायिकांचे अन्वेषण करा.",
    
    // Contact section
    "contact.title": "संपर्क साधा",
    "contact.subtitle": "आपल्याला प्रश्न असल्यास किंवा आमच्या सेवांबद्दल अधिक जाणून घ्यायचे असल्यास? आमच्याशी थेट संपर्क साधा किंवा फॉर्म भरा.",
    "contact.info": "संपर्क माहिती",
    "contact.email": "ईमेल:",
    "contact.phone": "फोन:",
    "contact.address": "पत्ता:",
    
    // Journey page
    "journey.title": "लेबरनेट सह आपला प्रवास सुरू करा",
    "journey.subtitle": "आपल्या गरजेनुसार सर्वोत्तम भूमिका निवडा आणि आजच आपल्या बांधकाम कारकीर्दीचा प्रवास सुरू करा",
    "journey.readyText": "पुढील पाऊल उचलण्यास तयार आहात? आपली प्रोफाइल तयार करा आणि संधी शोधणे सुरू करा.",
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
    "role.professional.description": "इलेक्ट्रिकल, प्लंबिंग, सुतारकाम आणि इतर विशिष्ट व्यवसायांमधील परवानाधारक व्यावसायिकांसाठी. थेट ग्राहक आणि प्रकल्पांशी संपर्क साधा.",
    "role.professional.feature1": "आपले प्रमाणपत्र आणि पोर्टफोलिओ दर्शवा",
    "role.professional.feature2": "कंत्राटदार आणि ग्राहकांशी संपर्क साधा",
    "role.professional.feature3": "आपली उपलब्धता आणि बुकिंग व्यवस्थापित करा",
    "role.professional.feature4": "आमच्या प्लॅटफॉर्मद्वारे सुरक्षितपणे पैसे मिळवा",
    
    // Contractor role
    "role.contractor.title": "कंत्राटदार",
    "role.contractor.description": "आपले प्रकल्प व्यवस्थापन सुव्यवस्थित करा आणि प्रत्येक कामासाठी योग्य कामगार शोधा. आपल्या बांधकाम प्रकल्पांसाठी विश्वसनीय टीम तयार करा.",
    "role.contractor.feature1": "नोकरी पोस्ट करा आणि त्वरित पात्र कामगार शोधा",
    "role.contractor.feature2": "कामगार पात्रता आणि अनुभव सत्यापित करा",
    "role.contractor.feature3": "देयके आणि दस्तऐवजीकरण व्यवस्थापित करा",
    "role.contractor.feature4": "प्रकल्प प्रगती आणि टीम कामगिरी ट्रॅक करा",
    
    // Login page
    "login.welcome": "पुन्हा स्वागत आहे!",
    "login.rolePrompt": "म्हणून लॉग इन करा",
    "login.worker": "कामगार",
    "login.professional": "व्यावसायिक",
    "login.contractor": "कंत्राटदार",
    "login.email": "ईमेल",
    "login.password": "पासवर्ड",
    "login.loginButton": "लॉग इन",
    "login.registerPrompt": "खाते नाही?",
    "login.registerLink": "नोंदणी करा",
    
    // Worker profile
    "workerProfile.title": "कामगार प्रोफाइल",
    "workerProfile.name": "नाव",
    "workerProfile.email": "ईमेल",
    "workerProfile.phone": "फोन",
    "workerProfile.skills": "कौशल्ये",
    "workerProfile.experience": "अनुभव",
    "workerProfile.availability": "उपलब्धता",
    "workerProfile.updateProfile": "प्रोफाइल अद्यतनित करा",
    
    // Worker Dashboard
    "workerDashboard.title": "कामगार डॅशबोर्ड",
    "workerDashboard.welcome": "स्वागत",
    "workerDashboard.availableJobs": "उपलब्ध नोकरी",
    "workerDashboard.searchJobs": "नोकरी शोधा",
    "workerDashboard.jobType": "नोकरीचा प्रकार",
    "workerDashboard.location": "ठिकाण",
    "workerDashboard.searchButton": "शोधा",
    "workerDashboard.jobListings": "नोकरी তালিকা",
    "workerDashboard.noJobs": "कोणतीही नोकरी आढळली नाही",
    "workerDashboard.noJobsDesc": "सध्या कोणतीही नोकरी उपलब्ध नाही जी आपल्या निकषांशी जुळते. कृपया नंतर पुन्हा तपासा.",
    
    // Professional Dashboard
    "professional.myProjects": "माझे प्रकल्प",
    "professional.manage": "आपण पोस्ट केलेल्या बांधकाम प्रकल्पांचे व्यवस्थापन करा",
    "professional.search": "आपले प्रकल्प शोधा...",
    "professional.allCategories": "सर्व श्रेणी",
    "professional.searchButton": "शोधा",
    "professional.allProjects": "सर्व प्रकल्प",
    "professional.active": "सक्रिय",
    "professional.completed": "पूर्ण",
    "professional.noProjects": "अद्याप कोणताही प्रकल्प नाही",
    "professional.noProjectsDesc": "आपण अद्याप कोणताही प्रकल्प पोस्ट केलेला नाही. प्रारंभ करण्यासाठी आपला पहिला प्रकल्प तयार करा!",
    "professional.postFirst": "आपला पहिला प्रकल्प पोस्ट करा",
    "professional.postProject": "आपला प्रकल्प पोस्ट करा",
    "professional.fillForm": "नवीन प्रकल्प तयार करण्यासाठी खालील फॉर्म भरा.",
    "professional.activeProjects": "सक्रिय प्रकल्प",
    "professional.applicationsReceived": "प्राप्त अर्ज",
    "professional.workersHired": "भाड्याने घेतलेले कामगार",
    "professional.averageRating": "सरासरी रेटिंग",
    "professional.status": "स्थिती",
  },
  
  te: {
    // Header
    "header.dashboard": "డాష్‌బోర్డ్",
    "header.story": "మా కథ",
    "header.marketplace": "మార్కెట్‌ప్లేస్",
    "header.getInTouch": "సంప్రదించండి",
    
    // Navigation
    "nav.dashboard": "డాష్‌బోర్డ్",
    "nav.projects": "ప్రాజెక్టులు",
    "nav.messages": "సందేశాలు",
    "nav.analytics": "విశ్లేషణలు",
    "nav.profile": "ప్రొఫైల్",
    "nav.workers": "కార్మికులు",
    "nav.jobs": "ఉద్యోగాలు",
    
    // Footer
    "footer.labourHub": "లేబర్ హబ్",
    "footer.rights": "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి",
    "footer.labourNet": "లేబర్నెట్",
    "footer.aboutUs": "మా గురించి",
    "footer.ourWork": "మా పని",
    "footer.linkedin": "లింక్డ్‌ఇన్",
    "footer.contactUs": "సంప్రదించండి",
    "footer.copyright": "లేబర్నెట్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
    "footer.privacy": "గోప్యతా విధానం",
    "footer.terms": "సేవా నిబంధనలు",
    "footer.cookies": "కుకీల సెట్టింగ్‌లు",
    "footer.quickLinks": "త్వరిత లింక్‌లు",
    "footer.services": "మా సేవలు",
    "footer.projectManagement": "ప్రాజెక్ట్ నిర్వహణ",
    "footer.ourServices": "మా సేవలు",
    
    // Hero section
    "hero.title": "నిర్మాణాన్ని శక్తివంతం చేయడం, భవిష్యత్తును నిర్మించడం",
    "hero.subtitle": "స్మార్ట్, డిజిటల్ ప్లాట్‌ఫారమ్ ద్వారా బిల్డర్లు, కాంట్రాక్టర్లు మరియు కార్మికులను కనెక్ట్ చేయడం.",
    "hero.button": "మీ ప్రయాణాన్ని ప్రారంభించండి",
    
    // Achievement Section
    "achievement.title": "మా విజయాలు",
    "achievement.projectsCompleted": "పూర్తయిన ప్రాజెక్టులు",
    "achievement.workersEmployed": "ఉద్యోగులు నియమించబడ్డారు",
    "achievement.contractorsConnected": "కాంట్రాక్టర్లు కనెక్ట్ అయ్యారు",
    "achievement.countriesActive": "దేశాలు చురుకుగా ఉన్నాయి",
    
    // Gallery Section
    "gallery.title": "మా గ్యాలరీ",
    "gallery.subtitle": "మా కొన్ని విజయవంతమైన ప్రాజెక్టులను మరియు వాటి వెనుక ఉన్న నైపుణ్యం కలిగిన నిపుణులను అన్వేషించండి.",
    
    // Contact section
    "contact.title": "సంప్రదించండి",
    "contact.subtitle": "మీకు ప్రశ్నలు ఉంటే లేదా మా సేవల గురించి మరింత తెలుసుకోవాలనుకుంటున్నారా? మమ్మల్ని నేరుగా సంప్రదించండి లేదా ఫారమ్ నింపండి.",
    "contact.info": "సంప్రదింపు సమాచారం",
    "contact.email": "ఇమెయిల్:",
    "contact.phone": "ఫోన్:",
    "contact.address": "చిరునామా:",
    
    // Journey page
    "journey.title": "లేబర్నెట్‌తో మీ ప్రయాణాన్ని ప్రారంభించండి",
    "journey.subtitle": "మీ అవసరాలకు బాగా సరిపోయే పాత్రను ఎంచుకోండి మరియు ఈ రోజు మీ నిర్మాణ వృత్తి ప్రయాణాన్ని ప్రారంభించండి",
    "journey.readyText": "తదుపరి దశకు సిద్ధంగా ఉన్నారా? మీ ప్రొఫైల్‌ను సృష్టించండి మరియు అవకాశాలను అన్వేషించడం ప్రారంభించండి.",
    "journey.createProfile": "మీ ప్రొఫైల్‌ను సృష్టించండి",
    
    // Worker role
    "role.worker.title": "నిర్మాణ కార్మికుడు",
    "role.worker.description": "నైపుణ్యం కలిగిన నిర్మాణ కార్మికుల మా నెట్‌వర్క్‌లో చేరండి మరియు వివిధ ప్రాజెక్టులలో సాధారణ ఉపాధి అవకాశాలను కనుగొనండి.",
    "role.worker.feature1": "రోజువారీ మరియు వారపు ఉద్యోగ అవకాశాలకు ప్రాప్యత",
    "role.worker.feature2": "పోటీ వేతన రేట్లు",
    "role.worker.feature3": "నైపుణ్యాల అభివృద్ధి మరియు శిక్షణ",
    "role.worker.feature4": "భద్రతా పరికరాలు మరియు మార్గదర్శకాలు",
    
    // Professional role
    "role.professional.title": "వృత్తి నిపుణుడు",
    "role.professional.description": "ఎలక్ట్రికల్, ప్లంబింగ్, వడ్రంగి మరియు ఇతర ప్రత్యేక వృత్తులలో లైసెన్స్ పొందిన నిపుణుల కోసం. క్లయింట్లు మరియు ప్రాజెక్టులతో నేరుగా కనెక్ట్ అవ్వండి.",
    "role.professional.feature1": "మీ ధృవపత్రాలు మరియు పోర్ట్‌ఫోలియోను ప్రదర్శించండి",
    "role.professional.feature2": "కాంట్రాక్టర్లు మరియు క్లయింట్లతో కనెక్ట్ అవ్వండి",
    "role.professional.feature3": "మీ లభ్యత మరియు బుకింగ్‌లను నిర్వహించండి",
    "role.professional.feature4": "మా ప్లాట్‌ఫారమ్ ద్వారా సురక్షితంగా చెల్లించండి",
    
    // Contractor role
    "role.contractor.title": "కాంట్రాక్టర్",
    "role.contractor.description": "మీ ప్రాజెక్ట్ నిర్వహణను క్రమబద్ధీకరించండి మరియు ప్రతి ఉద్యోగానికి సరైన కార్మికులను కనుగొనండి. మీ నిర్మాణ ప్రాజెక్టుల కోసం నమ్మకమైన బృందాలను నిర్మించండి.",
    "role.contractor.feature1": "ఉద్యోగాలను పోస్ట్ చేయండి మరియు అర్హత కలిగిన కార్మికులను త్వరగా కనుగొనండి",
    "role.contractor.feature2": "కార్మికుల అర్హతలు మరియు అనుభవాన్ని ధృవీకరించండి",
    "role.contractor.feature3": "చెల్లింపులు మరియు డాక్యుమెంటేషన్‌ను నిర్వహించండి",
    "role.contractor.feature4": "ప్రాజెక్ట్ పురోగతి మరియు జట్టు పనితీరును ట్రాక్ చేయండి",
    
    // Login page
    "login.welcome": "తిరిగి స్వాగతం!",
    "login.rolePrompt": "లాగిన్ చేయి",
    "login.worker": "కార్మికుడు",
    "login.professional": "వృత్తి నిపుణుడు",
    "login.contractor": "కాంట్రాక్టర్",
    "login.email": "ఇమెయిల్",
    "login.password": "పాస్‌వర్డ్",
    "login.loginButton": "లాగిన్",
    "login.registerPrompt": "ఖాతా లేదా?",
    "login.registerLink": "నమోదు",
    
    // Worker profile
    "workerProfile.title": "కార్మికుడు ప్రొఫైల్",
    "workerProfile.name": "పేరు",
    "workerProfile.email": "ఇమెయిల్",
    "workerProfile.phone": "ఫోన్",
    "workerProfile.skills": "నైపుణ్యాలు",
    "workerProfile.experience": "అనుభవం",
    "workerProfile.availability": "లభ్యత",
    "workerProfile.updateProfile": "ప్రొఫైల్‌ను నవీకరించండి",
    
    // Worker Dashboard
    "workerDashboard.title": "కార్మికుడు డాష్‌బోర్డ్",
    "workerDashboard.welcome": "స్వాగతం",
    "workerDashboard.availableJobs": "ఉద్యోగాలు అందుబాటులో ఉన్నాయి",
    "workerDashboard.searchJobs": "ఉద్యోగాల కోసం వెతుకు",
    "workerDashboard.jobType": "ఉద్యోగం రకం",
    "workerDashboard.location": "స్థానం",
    "workerDashboard.searchButton": "వెతుకు",
    "workerDashboard.jobListings": "ఉద్యోగ జాబితాలు",
    "workerDashboard.noJobs": "ఉద్యోగాలు కనుగొనబడలేదు",
    "workerDashboard.noJobsDesc": "ప్రస్తుతం మీ ప్రమాణాలకు సరిపోయే ఉద్యోగాలు ఏవీ అందుబాటులో లేవు. దయచేసి తరువాత మళ్లీ తనిఖీ చేయండి.",
    
    // Professional Dashboard
    "professional.myProjects": "నా ప్రాజెక్టులు",
    "professional.manage": "మీరు పోస్ట్ చేసిన నిర్మాణ ప్రాజెక్టులను నిర్వహించండి",
    "professional.search": "మీ ప్రాజెక్టుల కోసం వెతకండి...",
    "professional.allCategories": "అన్ని వర్గాలు",
    "professional.searchButton": "వెతుకు",
    "professional.allProjects": "అన్ని ప్రాజెక్టులు",
    "professional.active": "చురుకుగా",
    "professional.completed": "పూర్తయింది",
    "professional.noProjects": "ఇంకా ప్రాజెక్టులు లేవు",
    "professional.noProjectsDesc": "మీరు ఇంకా ఏ ప్రాజెక్టులను పోస్ట్ చేయలేదు. ప్రారంభించడానికి మీ మొదటి ప్రాజెక్ట్‌ను సృష్టించండి!",
    "professional.postFirst": "మీ మొదటి ప్రాజెక్ట్‌ను పోస్ట్ చేయండి",
    "professional.postProject": "మీ ప్రాజెక్ట్‌ను పోస్ట్ చేయండి",
    "professional.fillForm": "క్రొత్త ప్రాజెక్ట్‌ను సృష్టించడానికి క్రింది ఫారమ్‌ను పూరించండి.",
    "professional.activeProjects": "చురుకైన ప్రాజెక్టులు",
    "professional.applicationsReceived": "అందుకున్న దరఖాస్తులు",
    "professional.workersHired": "నియమించబడిన కార్మికులు",
    "professional.averageRating": "సగటు రేటింగ్",
    "professional.status": "స్థితి",
  },
  
  ml: {
    // Header
    "header.dashboard": "ഡാഷ്ബോർഡ്",
    "header.story": "ഞങ്ങളുടെ കഥ",
    "header.marketplace": "മാർക്കറ്റ്പ്ലേസ്",
    "header.getInTouch": "ബന്ധപ്പെടുക",
    
    // Navigation
    "nav.dashboard": "ഡാഷ്ബോർഡ്",
    "nav.projects": "പദ്ധതികൾ",
    "nav.messages": "സന്ദേശങ്ങൾ",
    "nav.analytics": "സ്ഥിതിവിവരക്കണക്കുകൾ",
    "nav.profile": "പ്രൊഫൈൽ",
    "nav.workers": "തൊഴിലാളികൾ",
    "nav.jobs": "ജോലികൾ",
    
    // Footer
    "footer.labourHub": "തൊഴിൽ ഹബ്",
    "footer.rights": "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തമാണ്",
    "footer.labourNet": "തൊഴിൽ നെറ്റ്",
    "footer.aboutUs": "ഞങ്ങളെക്കുറിച്ച്",
    "footer.ourWork": "ഞങ്ങളുടെ ജോലി",
    "footer.linkedin": "ലിങ്ക്ഡ്ഇൻ",
    "footer.contactUs": "ഞങ്ങളെ ബന്ധപ്പെടുക",
    "footer.copyright": "തൊഴിൽ നെറ്റ്. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തമാണ്.",
    "footer.privacy": "സ്വകാര്യതാ നയം",
    "footer.terms": "സേവന നിബന്ധനകൾ",
    "footer.cookies": "കുക്കീസ് ക്രമീകരണങ്ങൾ",
    "footer.quickLinks": "ദ്ര
