/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Huzaifa Iqbal",
  title: "Hi Everyone, I'm Huzaifa",
  subTitle: emoji(
    "Fintech Software Engineer 🚀 | Java Backend Developer with 3 years of experience building scalable financial systems. Currently exploring AI in finance while pursuing my MSc in Germany."
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=1NfrpTp58p5oxaaUCRXtspTaS9EqLD8KO",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/HuzaifaaIqbal",
  linkedin: "https://www.linkedin.com/in/huzaifa-iqbal-051353156/",
  gmail: "huzaifaauble@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND ENGINEER WHO BUILDS SECURE, SCALABLE SYSTEMS",
  skills: [
    emoji("⚡ Building secure REST APIs using Java, Spring Boot, Hibernate"),
    emoji("⚡ PCI-DSS compliant financial systems using HSMs and ISO 8583"),
    emoji("⚡ Deploying scalable microservices using Docker, GitLab CI/CD")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universität Siegen",
      logo: require("./assets/images/Uni_Siegen.png"),
      subHeader: "MSc Computer Science",
	  location: "Siegen, Germany",
      duration: "2025 — Present",
      desc: "Research-oriented master's with focus on intelligent systems"
    },
    {
      schoolName: "DHA Suffa University",
      logo: require("./assets/images/suffa.jpg"),
      subHeader: "BSc Computer Science",
	  location: "Karachi, Pakistan",
      duration: "2018 — 2022",
      desc: "Graduated with strong foundation in software engineering"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend", progressPercentage: "85%" },
    { Stack: "DevOps", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "90%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Vaulsys (Pvt.) Ltd, Pakistan",
      companylogo: require("./assets/images/vaulsys_fze_logo.jpeg"),
      date: "Jan 2024 – Present",
      desc: "Architected a PCI-DSS compliant prepaid card system, optimized financial APIs serving 1.8M users, and led migration from Oracle to PostgreSQL."
    },
    {
      role: "Software Engineer",
      company: "Vaulsys (Pvt.) Ltd, Pakistan",
      companylogo: require("./assets/images/vaulsys_fze_logo.jpeg"),
      date: "Sep 2022 – Dec 2023",
      desc: "Automated backend workflows, built real-time monitoring tools, and enhanced settlement systems using Java, Jersey, and Vaadin."
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "NOTABLE SIDE PROJECTS",
  projects: [
    {
      image: require("./assets/images/daily_digest.jpg"),
      projectName: "Smart Daily Digest Bot",
      projectDesc: "AI-powered bot fetching RSS tech news, summarizing with Claude Sonnet, and emailing daily digests.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HuzaifaaIqbal/smart-daily-digest" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions and Courses",
  achievementsCards: [
    {
      title: "Containers and Kubernetes Certificate",
      subtitle: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Docker Certificate",
      footerLink: [
        { name: "Verify Certificate", url: "https://www.coursera.org/account/accomplishments/verify/REXEVQ21JKXP" }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Coming soon!",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = { title: "TALKS", subtitle: "", talks: [], display: false };
const podcastSection = { title: "Podcast 🎙️", subtitle: "", podcast: [], display: false };

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s collaborate, build or innovate. My inbox is open.",
  number: "+49 176 71626801",
  email_address: "huzaifaauble@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
