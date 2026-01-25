export const siteConfig = {
  name: "Hamza Hamid",
  title: "Software Engineer II",
  description: "Portfolio website of Hamza Hamid",
  accentColor: "#4c7fc2",
  social: {
    email: "hamzahamid226tech@gmail.com",
    linkedin: "https://www.linkedin.com/in/hamzahamid226/",
    github: "https://github.com/hhamid226",
  },
  aboutMe:
    "I’m a Software Engineer II at General Motors with 3+ years of experience building scalable, dealer-facing applications used by thousands of users. I work across the full stack, primarily with Angular, TypeScript, Java, and Spring Boot, and I enjoy partnering closely with UX teams to turn complex workflows into intuitive, high-performing experiences. I’m especially passionate about clean frontend architecture, system reliability, and delivering features that meaningfully improve user efficiency.",
  skills: ["Java", "TypeScript", "JavaScript", "HTML/HTML5", "CSS3", "SQL (PostgreSQL, Oracle SQL)", "C", "Python", "Ruby on Rails", "PHP", "R", "JSON", "YAML", ".NET", "Angular", "Next.js", "React", "Node.js", "JUnit", "Jest", "Material-UI", "Bootstrap", "PrimeNG", "Spring Boot", "Express.js", "Redux", "NgRx", "Leaflet.js"],
  projects: [
    {
      name: "Travel Journal",
      description:
        "A Travel Journal App that lets users track the countries and cities they’ve visited, write journal entries, and plan future trips. It features an interactive world map with zoomable city-level details using React, Next.js, and Leaflet, with a backend powered by Express and MongoDB. The application uses RESTful APIs to manage trips, locations, and journal data",
      link: "https://github.com/hhamid226/TravelJournal",
      skills: ["React", "Node.js", "MongoDB", "Leaflet"],
      screenshots: [
          "/screenshots/Travel_Journal_1.png",
          "/screenshots/Travel_Journal_2.png",
          "/screenshots/Travel_Journal_3.png",
      ],
    },
  ],
  experience: [
    {
      company: "General Motors (GM)",
      title: "Software Engineer II",
      dateRange: "Feb 2022 - Present",
      logo: "/general_motors_logo.png",
      bullets: [
        "Delivered 40+ full-stack features for dealer-facing applications used by thousands of users, including frontend development (Angular 20, TypeScript) and backend development (Java/Spring Boot, REST APIs, microservices), improving system performance and UI responsiveness by up to 35%",
        "Supported a dealer-facing vendor management portal and fulfillment center mapping tools, providing UX/UI enhancements that reduced team workload by 30%, enabled on-time releases, and improved operational efficiency by 25%",
        "Partnered with UX/UI teams to review and enhance dealer-facing workflows, identifying friction points and proposing design improvements that increased task completion efficiency by 25%",
        "Resolved 50+ production issues using Kibana, Grafana, and PostgreSQL, while maintaining 100% frontend (Jest) and 90% backend (JUnit) unit test coverage to improve system reliability and uptime",
        "Served as Scrum Master for selected sprints, organizing meetings, running daily standups, and coordinating cross-team communication during releases, accelerating delivery by 5%",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology (Georgia Tech)",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2017 - 2021",
      logo: "/Georgia-Tech-Logo.png",
      achievements: [
        "Gates Millennium Scholarship Recipient",
      ],
    }
  ],
};
