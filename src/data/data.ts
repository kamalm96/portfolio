import project1 from "../../public/placeholder.jpg";
import project2 from "../../public/placeholder.jpg";


export const data = {
  name: "Kamal Mansour",
  title: "Machine Learning Engineer",
  summary: "I design and code ML/AI Systems, and I love what I do.",
  location: "United States",
  bio: "I'm a software engineer at Ford Motor Company, specializing in web development with HTML5, Node.js, and JavaScript. I hold a bachelor's degree in computer science from Wayne State University and am currently pursuing a master's in AI at the University of Michigan. My focus lies in machine learning, computer vision, and NLP, aiming to contribute to Ford’s innovation in smart mobility while advancing ethical AI applications. I thrive in collaborative environments where technology meets problem-solving.",
  skills: [
    {
      title: "Machine Learning",
      icon: "brain",
      description: "",
      subtitle: "ML Techniques:",
      items: ["Predictive modeling, Deep learning, XGBoost, Ensemble Methods"],
      tools: {
        title: "Frameworks:",
        items: ["TensorFlow", "PyTorch"],
      },
    },
    {
      title: "Programming Languages",
      icon: "code",
      description: "",
      subtitle: "Languages I Speak:",
      items: ["Python, Java, JavaScript, TypeScript, PostgreSQL, SQL, Golang,"],
      tools: {
        title: "Frameworks and Tools",
        items: ["React", "Backstage", "Docker", "Podman", "WSL", "Linux"],
      },
    },
    {
      title: "Soft Skills",
      icon: "user",
      description: "",
      subtitle: "Experiences I draw from:",
      items: [
        "Communication, Team Collaboration, Agile Methodologies, Github, GCP, Azure, AWS",
      ],
      tools: {
        title: "",
        items: [],
      },
    },
  ],
  projects: [
    {
      title: "Banking App",
      description: [
        "• Designed and implemented a backend for a simple banking system using Golang with PostgreSQL as the database.",
        "• Utilized SQLC for type-safe query generation and performed database migrations using Go-Migrate.",
      ],
      image: project1,
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: [
        "• Developed and deployed a responsive, high-performance portfolio website using Next.js on AWS.",
      ],
      image: project2,
      link: "#",
    },
  ],
  contact: {
    email: "kamalbmansour@hotmail.com",
    phone: "3134453817",
    socialMedia: [
      { name: "Github", url: "https://github.com/kamalm96" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/kamal-mansour-2212a3106/" },
      { name: "Twitter", url: "" },
    ],
  },
  experiences: [
    {
      title: "Software Engineer",
      company: "Ford Motor Company",
      period: "2025 - Present",
      description:
        "Led the design and development of a Golang-based backend system that monitored anomalous spending and escalated issues to team leads. Leveraged Redis Queues to efficiently track resolution and escalation processes, and collaborated with cross-functional teams to create and implement necessary APIs. This solution delivered an estimated annual savings of approximately $2 million for Ford. Received recognition from upper management.",
    },
    {
      title: "Junior Software Engineer",
      company: "Ford Motor Company",
      period: "2023 - 2024",
      description:
        "Led the development of a Solution Catalog, which centralized templates and enhanced onboarding efficiency by 40%. Engineered the automation of API publication to Apigee via Azure WIF, conserving 20% of developer time.",
    },
    {
      title: "Entry-Level Software Engineer",
      company: "Ford Motor Company",
      period: "2022 - 2023",
      description:
        "Developed and launched three scalable web applications using React, Java Spring Boot, and PostgreSQL, setting new benchmarks in production standards. Implemented CI/CD pipelines with Jenkins, cutting deployment times by 70%.",
    },
  ],
};
