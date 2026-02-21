const TOPICS = [
  {
    slug: "ai-in-rural-healthcare",
    title: "AI in Rural Healthcare",
    category: "Health Tech",
    summarySeed: "smart screening on low-cost devices",
    socialImpact: "families in remote villages can get earlier diagnosis",
    whatChanged: "new lightweight models now run on low-end phones",
    whyNow: "rural clinics are overloaded and specialist access is limited",
    action: "support local pilots that publish transparent accuracy reports",
    sources: [
      { label: "WHO Digital Health", url: "https://www.who.int/health-topics/digital-health" },
      { label: "UNICEF Innovation", url: "https://www.unicef.org/innovation" },
    ],
  },
  {
    slug: "digital-public-infrastructure",
    title: "Digital Public Infrastructure",
    category: "GovTech",
    summarySeed: "digital IDs and payment rails for public services",
    socialImpact: "citizens can access benefits faster and with fewer middlemen",
    whatChanged: "more countries are standardizing interoperable public platforms",
    whyNow: "service delivery gaps remain high for low-income communities",
    action: "advocate for privacy safeguards and open technical standards",
    sources: [
      { label: "UNDP Digital Strategy", url: "https://www.undp.org/digital" },
      { label: "World Bank Digital Development", url: "https://www.worldbank.org/en/topic/digitaldevelopment" },
    ],
  },
  {
    slug: "assistive-ai-accessibility",
    title: "Assistive AI for Accessibility",
    category: "Accessibility",
    summarySeed: "voice and vision tools for everyday independence",
    socialImpact: "people with disabilities can study, work, and communicate more easily",
    whatChanged: "real-time captioning and scene description tools are improving",
    whyNow: "inclusive design is now a compliance and ethics priority",
    action: "test products with users who have different accessibility needs",
    sources: [
      { label: "W3C Accessibility Initiative", url: "https://www.w3.org/WAI/" },
      { label: "Microsoft Accessibility", url: "https://www.microsoft.com/en-us/accessibility" },
    ],
  },
  {
    slug: "open-source-cybersecurity",
    title: "Open Source Cybersecurity",
    category: "Cybersecurity",
    summarySeed: "community-led security tooling for small teams",
    socialImpact: "schools and NGOs can improve security without high budgets",
    whatChanged: "more mature open-source scanners and policy tools are available",
    whyNow: "ransomware incidents keep rising in public-interest organizations",
    action: "run regular vulnerability scans and patch high-risk systems first",
    sources: [
      { label: "CISA Cyber Guidance", url: "https://www.cisa.gov" },
      { label: "OWASP", url: "https://owasp.org" },
    ],
  },
  {
    slug: "climate-tech-grids",
    title: "Climate Tech for Smart Grids",
    category: "Climate Tech",
    summarySeed: "better forecasting for cleaner energy distribution",
    socialImpact: "communities can get more reliable power at lower emissions",
    whatChanged: "AI forecasting models are improving grid balancing",
    whyNow: "heat waves and demand spikes stress power infrastructure",
    action: "support local utilities using transparent demand-response programs",
    sources: [
      { label: "IEA Smart Grids", url: "https://www.iea.org/topics/smart-grids" },
      { label: "UN Climate Technology Centre", url: "https://www.ctc-n.org" },
    ],
  },
  {
    slug: "edtech-personalized-learning",
    title: "EdTech Personalized Learning",
    category: "Education Tech",
    summarySeed: "adaptive learning paths for different skill levels",
    socialImpact: "students can learn at their own pace and close learning gaps",
    whatChanged: "more classroom tools now provide teacher-friendly insights",
    whyNow: "many schools need support after multi-year learning disruption",
    action: "promote teacher training before scaling new classroom platforms",
    sources: [
      { label: "UNESCO ICT in Education", url: "https://www.unesco.org/en/education/digital" },
      { label: "Khan Academy", url: "https://www.khanacademy.org" },
    ],
  },
  {
    slug: "fintech-financial-inclusion",
    title: "FinTech and Financial Inclusion",
    category: "FinTech",
    summarySeed: "mobile finance for underserved users",
    socialImpact: "small merchants and workers can save, borrow, and receive payments securely",
    whatChanged: "low-fee instant payments are expanding through mobile apps",
    whyNow: "cash-only systems still block access to formal finance",
    action: "encourage products with clear fees and anti-fraud education",
    sources: [
      { label: "CGAP Financial Inclusion", url: "https://www.cgap.org" },
      { label: "World Bank Financial Inclusion", url: "https://www.worldbank.org/en/topic/financialinclusion" },
    ],
  },
  {
    slug: "drones-disaster-response",
    title: "Drones in Disaster Response",
    category: "Disaster Tech",
    summarySeed: "rapid mapping and safer rescue planning",
    socialImpact: "first responders can reach affected zones faster",
    whatChanged: "mapping software now stitches aerial imagery much quicker",
    whyNow: "extreme weather events are becoming more frequent",
    action: "support emergency teams using open maps and community drills",
    sources: [
      { label: "UN OCHA", url: "https://www.unocha.org" },
      { label: "HOT OpenStreetMap", url: "https://www.hotosm.org" },
    ],
  },
  {
    slug: "agritech-precision-farming",
    title: "AgriTech Precision Farming",
    category: "AgriTech",
    summarySeed: "sensor-driven farming decisions",
    socialImpact: "farmers can use less water and increase crop stability",
    whatChanged: "lower-cost soil and weather sensors are now easier to deploy",
    whyNow: "small farms face climate uncertainty and thin margins",
    action: "encourage co-ops to share data tools and training resources",
    sources: [
      { label: "FAO Digital Agriculture", url: "https://www.fao.org/digital-agriculture" },
      { label: "CGIAR Digital Innovation", url: "https://www.cgiar.org" },
    ],
  },
  {
    slug: "low-code-civic-apps",
    title: "Low-Code Tools for Civic Apps",
    category: "Civic Tech",
    summarySeed: "faster service apps without heavy engineering teams",
    socialImpact: "local governments can deliver citizen services faster",
    whatChanged: "low-code platforms added better workflow and security controls",
    whyNow: "many city teams need rapid digital service modernization",
    action: "pilot low-code with strict privacy and accessibility checks",
    sources: [
      { label: "Code for All", url: "https://codeforall.org" },
      { label: "Digital Service Network", url: "https://digitalservice.network" },
    ],
  },
  {
    slug: "telemedicine-home-monitoring",
    title: "Telemedicine and Home Monitoring",
    category: "Health Tech",
    summarySeed: "remote care beyond hospital walls",
    socialImpact: "older adults and chronic patients can receive care from home",
    whatChanged: "home monitoring kits now sync with simpler patient dashboards",
    whyNow: "clinics need ways to reduce unnecessary in-person visits",
    action: "promote programs with clear consent, privacy, and clinician oversight",
    sources: [
      { label: "CDC Telehealth", url: "https://www.cdc.gov/telehealth" },
      { label: "WHO Telemedicine", url: "https://www.who.int" },
    ],
  },
  {
    slug: "privacy-preserving-ai",
    title: "Privacy-Preserving AI",
    category: "AI Ethics",
    summarySeed: "machine learning with less personal data exposure",
    socialImpact: "people can benefit from AI services with stronger privacy protections",
    whatChanged: "federated and on-device methods are becoming more practical",
    whyNow: "public trust in AI depends on data protection",
    action: "require privacy-by-design checklists before AI rollout",
    sources: [
      { label: "NIST AI Risk Management", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" },
    ],
  },
  {
    slug: "robotics-eldercare",
    title: "Robotics for Eldercare",
    category: "Robotics",
    summarySeed: "assistive robots for safer independent living",
    socialImpact: "caregivers can focus more on human support and less on routine tasks",
    whatChanged: "service robots now offer better navigation in home settings",
    whyNow: "aging populations are increasing care system pressure",
    action: "fund trials that include ethics reviews and caregiver training",
    sources: [
      { label: "IEEE Robotics", url: "https://www.ieee.org" },
      { label: "WHO Ageing and Health", url: "https://www.who.int/health-topics/ageing" },
    ],
  },
  {
    slug: "open-data-public-services",
    title: "Open Data for Public Services",
    category: "Data",
    summarySeed: "data transparency for better policy decisions",
    socialImpact: "citizens and civic groups can identify service gaps faster",
    whatChanged: "more cities are releasing machine-readable public datasets",
    whyNow: "evidence-based policy is essential during budget constraints",
    action: "push for clear data dictionaries and frequent dataset updates",
    sources: [
      { label: "Data.gov", url: "https://www.data.gov" },
      { label: "OECD Open Government Data", url: "https://www.oecd.org/gov/digital-government/open-government-data.htm" },
    ],
  },
  {
    slug: "blockchain-supply-traceability",
    title: "Supply Chain Traceability Tech",
    category: "Supply Chain",
    summarySeed: "verifiable product journeys from source to shelf",
    socialImpact: "consumers and regulators can identify unsafe or unethical sourcing",
    whatChanged: "traceability tools now integrate faster with logistics systems",
    whyNow: "global disruptions exposed weak supply visibility",
    action: "prioritize transparency standards before expanding deployments",
    sources: [
      { label: "GS1 Standards", url: "https://www.gs1.org" },
      { label: "World Economic Forum Supply Chains", url: "https://www.weforum.org" },
    ],
  },
  {
    slug: "5g-rural-connectivity",
    title: "5G and Rural Connectivity",
    category: "Connectivity",
    summarySeed: "better access for remote learning and telework",
    socialImpact: "small towns gain access to digital jobs, education, and services",
    whatChanged: "fixed wireless setups improved coverage in hard-to-wire regions",
    whyNow: "digital opportunity still depends on reliable internet access",
    action: "support community broadband projects with affordability plans",
    sources: [
      { label: "ITU Connectivity", url: "https://www.itu.int" },
      { label: "FCC Broadband", url: "https://www.fcc.gov/broadband" },
    ],
  },
  {
    slug: "quantum-safe-security",
    title: "Quantum-Safe Security Prep",
    category: "Cybersecurity",
    summarySeed: "future-proof encryption transition planning",
    socialImpact: "critical services can protect sensitive data over the long term",
    whatChanged: "post-quantum standards are moving from theory to adoption",
    whyNow: "migration takes time and inventory work should start early",
    action: "begin cryptography audits and phased transition roadmaps",
    sources: [
      { label: "NIST Post-Quantum Cryptography", url: "https://www.nist.gov/pqcrypto" },
      { label: "ENISA Cryptography", url: "https://www.enisa.europa.eu" },
    ],
  },
  {
    slug: "digital-skills-upskilling",
    title: "Digital Skills and Upskilling",
    category: "Future of Work",
    summarySeed: "practical training for changing job markets",
    socialImpact: "workers can transition into better-paying tech-enabled roles",
    whatChanged: "more employers now accept skill-based certifications",
    whyNow: "automation is reshaping entry-level and mid-level roles",
    action: "support local training hubs aligned with real job demand",
    sources: [
      { label: "ILO Future of Work", url: "https://www.ilo.org/global/topics/future-of-work" },
      { label: "World Economic Forum Jobs", url: "https://www.weforum.org" },
    ],
  },
  {
    slug: "space-tech-earth-monitoring",
    title: "Space Tech for Earth Monitoring",
    category: "Space Tech",
    summarySeed: "satellite insights for climate and agriculture",
    socialImpact: "communities can prepare earlier for droughts and floods",
    whatChanged: "more open satellite datasets now have faster update cycles",
    whyNow: "local planners need better climate-risk visibility",
    action: "encourage open geospatial data use in city planning",
    sources: [
      { label: "NASA Earth Data", url: "https://earthdata.nasa.gov" },
      { label: "ESA EO Portal", url: "https://www.esa.int/Applications/Observing_the_Earth" },
    ],
  },
  {
    slug: "green-data-centers",
    title: "Green Data Centers",
    category: "Sustainability",
    summarySeed: "cleaner cloud infrastructure operations",
    socialImpact: "digital growth can happen with lower environmental impact",
    whatChanged: "cooling and workload scheduling systems became more efficient",
    whyNow: "AI and cloud demand are increasing electricity consumption",
    action: "track data center emissions and favor renewable-backed providers",
    sources: [
      { label: "IEA Data Centres", url: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks" },
      { label: "EPA Green Data Centers", url: "https://www.epa.gov" },
    ],
  },
];

const FORMATS = [
  {
    slug: "explainer",
    label: "Explainer",
    titleTemplate: "{topic}: A Simple Explainer for Everyone",
    readTime: "6 min read",
    hook: "If this topic feels technical, this guide breaks it down in plain English in under 6 minutes.",
  },
  {
    slug: "case-study",
    label: "Case Study",
    titleTemplate: "{topic}: A Real-World Case Study",
    readTime: "7 min read",
    hook: "This case-based format shows what changed, what worked, and what others can copy quickly.",
  },
  {
    slug: "myth-vs-reality",
    label: "Myth vs Reality",
    titleTemplate: "{topic}: Myth vs Reality",
    readTime: "5 min read",
    hook: "Popular claims often hide the truth. Here is what is hype and what is actually useful.",
  },
  {
    slug: "playbook",
    label: "5-Step Playbook",
    titleTemplate: "{topic}: A 5-Step Playbook",
    readTime: "8 min read",
    hook: "Need action, not theory? This post gives a practical step-by-step plan.",
  },
  {
    slug: "future-snapshot",
    label: "Future Snapshot",
    titleTemplate: "{topic}: What the Next 12 Months Could Look Like",
    readTime: "6 min read",
    hook: "This forward-looking format helps readers plan, not panic, as the tech landscape evolves.",
  },
];

const BASE_DATE = new Date("2026-02-21T08:00:00Z");

const formatDate = (date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const buildSections = (topic, format) => [
  {
    heading: "Hook",
    content: format.hook,
  },
  {
    heading: "TL;DR",
    content: `The big update is ${topic.whatChanged}. In simple terms, this means ${topic.summarySeed} can be used in more places with lower cost and better reliability.`,
  },
  {
    heading: "Why This Matters",
    content: `This matters because ${topic.whyNow}. The social benefit is clear: ${topic.socialImpact}.`,
  },
  {
    heading: `${format.label} Breakdown`,
    content: `Think of this like a practical blueprint. Teams that start small, measure outcomes, and document lessons tend to scale faster and avoid expensive mistakes. The focus should stay on people-first outcomes, not flashy demos.`,
  },
  {
    heading: "What You Can Do Today",
    content: `Start with one pilot, define success metrics that include inclusion and affordability, and publish learnings openly. Also, ${topic.action}.`,
  },
];

const POSTS = TOPICS.flatMap((topic, topicIndex) =>
  FORMATS.map((format, formatIndex) => {
    const absoluteIndex = topicIndex * FORMATS.length + formatIndex;
    const publishDate = new Date(BASE_DATE.getTime() - absoluteIndex * 86400000);
    const title = format.titleTemplate.replace("{topic}", topic.title);

    return {
      slug: `${topic.slug}-${format.slug}`,
      title,
      date: formatDate(publishDate),
      readTime: format.readTime,
      category: `${topic.category} • ${format.label}`,
      summary: `A clear, practical guide to ${topic.summarySeed}, with examples focused on how ${topic.socialImpact}.`,
      sections: buildSections(topic, format),
      sources: topic.sources,
    };
  })
);
