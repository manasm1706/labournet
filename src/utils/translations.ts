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
    "profile.title": "Professional Title",
    "profile.email": "Email",
    "profile.phone": "Phone",
    "profile.location": "Location",
    "profile.experience": "Years of Experience",
    "profile.hourlyRate": "Hourly Rate ($)",
    "profile.about": "About",
    "profile.back": "Back to Dashboard",
    "profile.cancel": "Cancel",
  },
  
  hi: {
    // Header
    "header.dashboard": "डैशबोर्ड",
    "header.story": "हमारी कहानी",
    "header.marketplace": "बाज़ार",
    "header.getInTouch": "संपर्क करें",
    
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
    
    // Worker profile
    "profile.title": "प्रोफाइल जानकारी",
    "profile.edit": "प्रोफाइल संपादित करें",
    "profile.save": "प्रोफाइल सहेजें",
    "profile.name": "पूरा नाम",
    "profile.title": "पेशेवर शीर्षक",
    "profile.email": "ईमेल",
    "profile.phone": "फोन",
    "profile.location": "स्थान",
    "profile.experience": "अनुभव के वर्ष",
    "profile.hourlyRate": "प्रति घंटा दर ($)",
    "profile.about": "परिचय",
    "profile.back": "डैशबोर्ड पर वापस जाएं",
    "profile.cancel": "रद्द करें",
  },
  
  mr: {
    // Header
    "header.dashboard": "डॅशबोर्ड",
    "header.story": "आमची कथा",
    "header.marketplace": "बाजारपेठ",
    "header.getInTouch": "संपर्क करा",
    
    // Hero section
    "hero.title": "बांधकाम करणाऱ्यांना सक्षम बनवणे",
    "hero.subtitle": "कुशल व्यावसायिक आणि कंत्राटदारांच्या समुदायात सामील व्हा.",
    "hero.button": "तुमची यात्रा सुरू करा",
    
    // Achievement section
    "achievements.title": "आमची यशोगाथा पहा",
    "achievements.subtitle": "आम्ही बांधकाम करणाऱ्यांना आणि कंत्राटदारांना कसे सहाय्य करतो ते पहा.",
    
    // Gallery section
    "gallery.title": "बिल्डर क्रांतीत सामील व्हा",
    "gallery.subtitle": "आम्ही तुम्हाला यशस्वी होण्यासाठी आवश्यक साधने आणि कनेक्शन प्रदान करतो.",
    "gallery.button": "सहभागी व्हा",
    
    // Contact section
    "contact.title": "संपर्क करा",
    "contact.subtitle": "प्रश्न आहेत किंवा आमच्या सेवांबद्दल अधिक जाणून घ्यायचे आहे? थेट आमच्याशी संपर्क साधा किंवा फॉर्म भरा.",
    "contact.info": "संपर्क माहिती",
    "contact.email": "ईमेल:",
    "contact.phone": "फोन:",
    "contact.address": "पत्ता:",
    
    // Journey page
    "journey.title": "लेबरनेटसह तुमची यात्रा सुरू करा",
    "journey.subtitle": "तुमच्या गरजांसाठी सर्वोत्तम भूमिका निवडा आणि आजच तुमची बांधकाम करिअरची यात्रा सुरू करा",
    "journey.readyText": "पुढील पाऊल उचलण्यास तयार आहात? तुमचे प्रोफाइल तयार करा आणि संधींचा शोध घ्या.",
    "journey.createProfile": "तुमचे प्रोफाइल तयार करा",
    
    // Worker role
    "role.worker.title": "बांधकाम कामगार",
    "role.worker.description": "आमच्या कुशल बांधकाम कामगारांच्या नेटवर्कमध्ये सामील व्हा आणि विविध प्रकल्पांमध्ये नियमित रोजगाराच्या संधी शोधा.",
    "role.worker.feature1": "दैनिक आणि साप्ताहिक नोकरीच्या संधींमध्ये प्रवेश",
    "role.worker.feature2": "स्पर्धात्मक वेतन दर",
    "role.worker.feature3": "कौशल्य विकास आणि प्रशिक्षण",
    "role.worker.feature4": "सुरक्षा उपकरणे आणि मार्गदर्शक तत्त्वे",
    
    // Professional role
    "role.professional.title": "व्यावसायिक बिल्डर",
    "role.professional.description": "इलेक्ट्रिकल, प्लंबिंग, सुतारकाम आणि इतर विशेष व्यापारांमध्ये परवानाधारक व्यावसायिकांसाठी. क्लायंट्स आणि प्रोजेक्ट्सशी थेट कनेक्ट करा.",
    "role.professional.feature1": "तुमची प्रमाणपत्रे आणि पोर्टफोलिओ दाखवा",
    "role.professional.feature2": "कंत्राटदार आणि क्लायंट्सशी कनेक्ट करा",
    "role.professional.feature3": "तुमची उपलब्धता आणि बुकिंग्स व्यवस्थापित करा",
    "role.professional.feature4": "आमच्या प्लॅटफॉर्मद्वारे सुरक्षितपणे पैसे मिळवा",
    
    // Contractor role
    "role.contractor.title": "कंत्राटदार",
    "role.contractor.description": "तुमचे प्रकल्प व्यवस्थापन सुलभ करा आणि प्रत्येक कामासाठी योग्य कामगार शोधा. तुमच्या बांधकाम प्रकल्पांसाठी विश्वासार्ह टीम्स तयार करा.",
    "role.contractor.feature1": "नोकऱ्या पोस्ट करा आणि पात्र कामगार त्वरित शोधा",
    "role.contractor.feature2": "कामगारांची पात्रता आणि अनुभव सत्यापित करा",
    "role.contractor.feature3": "पेमेंट्स आणि डॉक्युमेंटेशन व्यवस्थापित करा",
    "role.contractor.feature4": "प्रकल्प प्रगती आणि टीम कामगिरीचा मागोवा घ्या",
    
    // Login
    "login.worker.title": "स्वागत आहे, कुशल कामगार!",
    "login.worker.subtitle": "तुमच्या प्रोफाईलमध्ये प्रवेश करा, नोकरी अर्ज ट्रॅक करा, आणि तुमच्या क्षेत्रातील टॉप कंत्राटदारांशी कनेक्ट करा.",
    "login.professional.title": "स्वागत आहे, व्यावसायिक बिल्डर!",
    "login.professional.subtitle": "तुमच्या व्यावसायिक डॅशबोर्डमध्ये प्रवेश करा, तुमच्या सेवा व्यवस्थापित करा, आणि क्लायंट्सशी कनेक्ट करा.",
    "login.contractor.title": "स्वागत आहे, कंत्राटदार!",
    "login.contractor.subtitle": "तुमच्या व्यवसाय डॅशबोर्डमध्ये प्रवेश करा, प्रकल्प व्यवस्थापित करा, आणि तुमच्या बांधकाम गरजांसाठी कुशल कामगार शोधा.",
    
    // Worker profile
    "profile.title": "प्रोफाईल माहिती",
    "profile.edit": "प्रोफाईल संपादित करा",
    "profile.save": "प्रोफाईल जतन करा",
    "profile.name": "पूर्ण नाव",
    "profile.title": "व्यावसायिक शीर्षक",
    "profile.email": "ईमेल",
    "profile.phone": "फोन",
    "profile.location": "स्थान",
    "profile.experience": "अनुभवाची वर्षे",
    "profile.hourlyRate": "तासिक दर ($)",
    "profile.about": "माझ्याबद्दल",
    "profile.back": "डॅशबोर्डवर परत जा",
    "profile.cancel": "रद्द करा",
  },
  
  te: {
    // Header
    "header.dashboard": "డాష్‌బోర్డ్",
    "header.story": "మా కథ",
    "header.marketplace": "మార్కెట్ ప్లేస్",
    "header.getInTouch": "సంప్రదించండి",
    
    // Hero section
    "hero.title": "నిర్మాణదారులను శక్తివంతం చేయడం",
    "hero.subtitle": "నైపుణ్యం గల వృత్తిపరుల మరియు కాంట్రాక్టర్ల సముదాయంలో చేరండి.",
    "hero.button": "మీ ప్రయాణాన్ని ప్రారంభించండి",
    
    // Achievement section
    "achievements.title": "మా విజయాలను అన్వేషించండి",
    "achievements.subtitle": "మేము నిర్మాణదారులను మరియు కాంట్రాక్టర్లను ఎలా సహాయం చేస్తున్నామో చూడండి.",
    
    // Gallery section
    "gallery.title": "బిల్డర్ విప్లవంలో చేరండి",
    "gallery.subtitle": "మేము మీకు విజయవంతం కావడానికి అవసరమైన పరికరాలు మరియు కనెక్షన్‌లను అందిస్తాము.",
    "gallery.button": "పాల్గొనండి",
    
    // Contact section
    "contact.title": "సంప్రదించండి",
    "contact.subtitle": "మా సేవల గురించి ప్రశ్నలు ఉన్నాయా లేదా మరింత తెలుసుకోవాలనుకుంటున్నారా? నేరుగా మమ్మల్ని సంప్రదించండి లేదా ఫారమ్ నింపండి.",
    "contact.info": "సంప్రదింపు సమాచారం",
    "contact.email": "ఈమెయిల్:",
    "contact.phone": "ఫోన్:",
    "contact.address": "చిరునామా:",
    
    // Journey page
    "journey.title": "లేబర్‌నెట్‌తో మీ ప్రయాణాన్ని ప్రారంభించండి",
    "journey.subtitle": "మీ అవసరాలకు బాగా సరిపోయే పాత్రను ఎంచుకుని మీ నిర్మాణ వృత్తి ప్రయాణాన్ని నేడే ప్రారంభించండి",
    "journey.readyText": "తదుపరి దశకు సిద్ధంగా ఉన్నారా? మీ ప్రొఫైల్‌ను సృష్టించండి మరియు అవకాశాలను అన్వేషించడం ప్రారంభించండి.",
    "journey.createProfile": "మీ ప్రొఫైల్‌ను సృష్టించండి",
    
    // Worker role
    "role.worker.title": "నిర్మాణ కార్మికుడు",
    "role.worker.description": "మా నైపుణ్యం గల నిర్మాణ కార్మికుల నెట్‌వర్క్‌లో చేరండి మరియు వివిధ ప్రాజెక్ట్‌లలో క్రమం తప్పని ఉపాధి అవకాశాలను కనుగొనండి.",
    "role.worker.feature1": "రోజువారీ మరియు వారపు ఉద్యోగ అవకాశాలకు ప్రాప్యత",
    "role.worker.feature2": "పోటీ చేయగల చెల్లింపు రేట్లు",
    "role.worker.feature3": "నైపుణ్యాభివృద్ధి మరియు శిక్షణ",
    "role.worker.feature4": "భద్రతా పరికరాలు మరియు మార్గదర్శకాలు",
    
    // Professional role
    "role.professional.title": "ప్రొఫెషనల్ బిల్డర్",
    "role.professional.description": "విద్యుత్, ప్లంబింగ్, వడ్రంగం మరియు ఇతర ప్రత్యేక వృత్తులలో లైసెన్స్ పొందిన వృత్తినిపుణులకు. క్లయింట్లు మరియు ప్రాజెక్టులతో నేరుగా కనెక్ట్ అవ్వండి.",
    "role.professional.feature1": "మీ సర్టిఫికేషన్లు మరియు పోర్ట్‌ఫోలియోను ప్రదర్శించండి",
    "role.professional.feature2": "కాంట్రాక్టర్లు మరియు క్లయింట్లతో కనెక్ట్ అవ్వండి",
    "role.professional.feature3": "మీ లభ్యత మరియు బుకింగ్‌లను నిర్వహించండి",
    "role.professional.feature4": "మా ప్లాట్‌ఫారమ్ ద్వారా సురక్షితంగా చెల్లింపులు పొందండి",
    
    // Contractor role
    "role.contractor.title": "కాంట్రాక్టర్",
    "role.contractor.description": "మీ ప్రాజెక్ట్ నిర్వహణను సక్రమంగా చేయండి మరియు ప్రతి పనికి సరైన కార్మికులను కనుగొనండి. మీ నిర్మాణ ప్రాజెక్టుల కోసం విశ్వసనీయమైన బృందాలను నిర్మించండి.",
    "role.contractor.feature1": "ఉద్యోగాలను పోస్ట్ చేయండి మరియు త్వరగా అర్హులైన కార్మికులను కనుగొనండి",
    "role.contractor.feature2": "కార్మిక అర్హతలు మరియు అనుభవాన్ని ధృవీకరించండి",
    "role.contractor.feature3": "చెల్లింపులు మరియు పత్రాలను నిర్వహించండి",
    "role.contractor.feature4": "ప్రాజెక్ట్ పురోగతి మరియు బృంద పనితీరును ట్రాక్ చేయండి",
    
    // Login
    "login.worker.title": "స్వాగతం, నైపుణ్యం గల కార్మికుడా!",
    "login.worker.subtitle": "మీ ప్రొఫైల్‌ను యాక్సెస్ చేయండి, ఉద్యోగ దరఖాస్తులను ట్రాక్ చేయండి మరియు మీ ప్రాంతంలోని టాప్ కాంట్రాక్టర్లతో కనెక్ట్ అవ్వండి.",
    "login.professional.title": "స్వాగతం, ప్రొఫెషనల్ బిల్డర్!",
    "login.professional.subtitle": "మీ ప్రొఫెషనల్ డాష్‌బోర్డ్‌ను యాక్సెస్ చేయండి, మీ సేవలను నిర్వహించండి మరియు క్లయింట్లతో కనెక్ట్ అవ్వండి.",
    "login.contractor.title": "స్వాగతం, కాంట్రాక్టర్!",
    "login.contractor.subtitle": "మీ వ్యాపార డాష్‌బోర్డ్‌ను యాక్సెస్ చేయండి, ప్రాజెక్ట్‌లను నిర్వహించండి మరియు మీ నిర్మాణ అవసరాల కోసం నైపుణ్యం గల కార్మికులను కనుగొనండి.",
    
    // Worker profile
    "profile.title": "ప్రొఫైల్ సమాచారం",
    "profile.edit": "ప్రొఫైల్‌ను సవరించండి",
    "profile.save": "ప్రొఫైల్‌ను సేవ్ చేయండి",
    "profile.name": "పూర్తి పేరు",
    "profile.title": "ప్రొఫెషనల్ టైటిల్",
    "profile.email": "ఈమెయిల్",
    "profile.phone": "ఫోన్",
    "profile.location": "స్థానం",
    "profile.experience": "అనుభవం సంవత్సరాలు",
    "profile.hourlyRate": "గంటకు రేటు ($)",
    "profile.about": "గురించి",
    "profile.back": "డాష్‌బోర్డ్‌కి తిరిగి వెళ్లండి",
    "profile.cancel": "రద్దు చేయండి",
  },
  
  // I'm adding more languages with a few basic translations for now, but in a real implementation, you'd have full translations for all languages
  ml: {
    "header.dashboard": "ഡാഷ്ബോർഡ്",
    "header.story": "ഞങ്ങളുടെ കഥ",
    "header.marketplace": "മാർക്കറ്റ്പ്ലേസ്",
    "header.getInTouch": "ബന്ധപ്പെടുക",
    // Rest of the translations would go here
  },
  
  ta: {
    "header.dashboard": "டாஷ்போர்டு",
    "header.story": "எங்கள் கதை",
    "header.marketplace": "சந்தை",
    "header.getInTouch": "தொடர்பு கொள்ளுங்கள்",
    // Rest of the translations would go here
  },
  
  kn: {
    "header.dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "header.story": "ನಮ್ಮ ಕಥೆ",
    "header.marketplace": "ಮಾರುಕಟ್ಟೆ",
    "header.getInTouch": "ಸಂಪರ್ಕಿಸಿ",
    // Rest of the translations would go here
  },
  
  gu: {
    "header.dashboard": "ડેશબોર્ડ",
    "header.story": "અમારી વાર્તા",
    "header.marketplace": "માર્કેટપ્લેસ",
    "header.getInTouch": "સંપર્કમાં રહો",
    // Rest of the translations would go here
  },
  
  pa: {
    "header.dashboard": "ਡੈਸ਼ਬੋਰਡ",
    "header.story": "ਸਾਡੀ ਕਹਾਣੀ",
    "header.marketplace": "ਮਾਰਕੀਟਪਲੇਸ",
    "header.getInTouch": "ਸੰਪਰਕ ਕਰੋ",
    // Rest of the translations would go here
  }
};

// Function to check if a translation key exists
export const hasTranslation = (language: AvailableLanguages, key: string): boolean => {
  return translations[language] && translations[language][key] !== undefined;
};
