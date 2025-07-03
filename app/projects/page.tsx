import Navigation from '../components/Navigation';

export default function Projects() {
  const projects = [
    {
      title: "UCNow – Crime Analysis & Reporting Platform",
      date: "April 2024",
      role: "Lead Developer",
      description: "Built a comprehensive crime analysis and reporting platform that combines official NYC crime data with community-sourced reports. The application features interactive heat maps, real-time alerts, and machine learning-powered incident classification.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "NYC Open Data API", "TensorFlow", "MapboxGL", "WebSockets"],
      highlights: [
        "Integrated real-time data streaming from NYC Open Data API with WebSocket connections",
        "Developed machine learning model for incident classification with 92% accuracy",
        "Created interactive heat maps and visualization using MapboxGL",
        "Implemented real-time notification system for user-defined areas",
        "Built responsive dashboard with crime statistics and trend analysis",
        "Deployed automated CI/CD pipeline using GitHub Actions"
      ],
      github: "https://github.com/Ejinks2/CS546_Group36"
    },
    {
      title: "GenForce-SW – Solar Project Material Automation & Cost Estimation (.NET Desktop)",
      date: "July 2024 – September 2024",
      role: "Software Engineer & Automation Developer",
      description: "Engineered a robust .NET-based desktop application to automate the extraction, calculation, and cost estimation of materials for solar panel projects. GenForce-SW leverages advanced parsing logic, dynamic data handling, and a database-driven pricing engine to streamline material management and deliver highly accurate cost predictions. The application features a user-centric interface with error validation, dark mode, and tabbed navigation, significantly reducing manual effort and minimizing calculation errors in solar project planning.",
      technologies: [".NET", "C#", "WinForms/WPF", "SQL Server", "Azure ML", "Docker"],
      highlights: [
        "Developed an automated material extraction system that parses and organizes complex input data for solar installations, improving efficiency and accuracy.",
        "Designed and implemented a cost estimation wizard that dynamically calculates material costs using a database of predefined pricing, reducing manual errors and accelerating project workflows.",
        "Created custom data parsing logic to aggregate and group material quantities, enabling precise and scalable cost estimation for diverse project requirements.",
        "Integrated robust error handling and real-time input validation, including visual feedback for data entry errors, to enhance user experience and data integrity.",
        "Architected a modular, database-driven pricing and material correlation engine, supporting instant updates and future scalability for new materials and pricing models."
      ],
      github: "https://github.com/YuvanRen/GenForce-SW"
    },
    {
      title: "Microservices-Based Medical Clinic System",
      date: "March 2024",
      role: "Lead Developer",
      description: "Architected and implemented a comprehensive medical clinic management system using microservices architecture, focusing on scalability, security, and HIPAA compliance. The system handles patient records, appointment scheduling, and billing operations with real-time synchronization.",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "RabbitMQ", "JWT", "Maven"],
      highlights: [
        "Designed and implemented 8 microservices with domain-driven design principles",
        "Integrated OAuth2 and JWT for secure authentication across services",
        "Implemented event-driven architecture using RabbitMQ for inter-service communication",
        "Containerized services with Docker and orchestrated with Kubernetes",
        "Achieved 99.9% uptime and sub-200ms response times under load",
        "Implemented comprehensive logging and monitoring using ELK stack"
      ],
      github: "https://github.com/YuvanRen/clinic-microservices"
    },
    {
      title: "CyberKernel - Custom Linux Kernel Module",
      date: "January 2024",
      role: "Systems Developer",
      description: "Developed a custom Linux kernel module that implements a cybersecurity-focused system monitoring solution. The module provides real-time process tracking, system call interception, and rootkit detection capabilities while maintaining minimal performance overhead.",
      technologies: ["C", "Linux Kernel API", "System Calls", "Assembly", "Makefile", "GDB", "ftrace"],
      highlights: [
        "Implemented system call hooking mechanism for process activity monitoring",
        "Created efficient data structures for tracking system events with minimal latency",
        "Developed anti-rootkit detection features using kernel memory scanning",
        "Achieved less than 1% performance overhead in system operation",
        "Built kernel module installation and configuration tools",
        "Integrated with Linux Security Modules (LSM) framework"
      ],
      github: "https://github.com/YuvanRen/cyberkernel"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="cyber-glitch text-4xl md:text-5xl font-bold text-cyber-yellow mb-12 text-center" data-text="PROJECTS">
            PROJECTS
          </h1>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="cyber-card">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-cyber-blue">{project.title}</h2>
                    <p className="text-xl text-gray-300">{project.role}</p>
                  </div>
                  <p className="text-cyber-yellow mt-2 md:mt-0">{project.date}</p>
                </div>

                <p className="text-gray-300 mb-6 font-body-cyber leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-cyber-yellow mb-4 font-cyber">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyber-black/50 border border-cyber-blue/20 rounded-full
                        text-cyber-blue hover:border-cyber-blue transition-all duration-300 font-mono-cyber"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-cyber-yellow mb-4 font-cyber">Key Highlights</h3>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start">
                        <div className="w-2 h-2 mt-2 bg-cyber-blue rounded-full"></div>
                        <p className="ml-4 text-gray-300 font-body-cyber">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-cyber-blue/20">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyber-yellow hover:text-cyber-blue transition-colors duration-300 font-mono-cyber"
                  >
                    <span className="mr-2">View Source Code</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 