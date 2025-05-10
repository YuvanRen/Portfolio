import Navigation from '../components/Navigation';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Genforce-SW Automation Software",
      period: "August 2024 – March 2025",
      location: "Ramsey, NJ",
      type: "Full-time Internship",
      description: "Led the development of automation solutions for solar panel project management, focusing on cost optimization and efficiency improvements.",
      responsibilities: [
        "Architected and implemented a .NET-based material extraction system that reduced calculation time by 75%",
        "Developed machine learning models to predict material costs with 92% accuracy using historical data",
        "Created an intuitive pricing wizard that streamlined the quotation process from 2 hours to 15 minutes",
      
      ],
      technologies: [
        ".NET Core",
        "C#",
        "SQL Server",
        "Azure ML",
        "Docker",
        "Git"
      ],
      achievements: [
        "Reduced material waste by 30% through intelligent inventory management",
        "Improved phisical project timeline by 20%",
        "Reduced material cost by 10%"
      ]
    }
  ];

  const organizations = [
    {
      name: "Stevens Technical Enrichment Program",
      role: "Active Member",
      period: "June 2021 - Present",
      description: "Engaging in technical workshops and mentorship programs to enhance software engineering skills.",
      activities: [
        "Participated in multiple technical workshops covering emerging technologies",
        "Mentored 3 students in programming fundamentals",
        "Contributed to open-source projects within the Stevens community"
      ]
    },
    {
      name: "Society of Hispanic Professional Engineers",
      role: "Technical Committee Member",
      period: "September 2022 - Present",
      description: "Contributing to professional development and technical initiatives within the Hispanic engineering community.",
      activities: [
        "Led technical workshops on web development and cloud computing",
        "Coordinated with industry professionals for mentorship programs",
        "Participated in national SHPE conferences"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="cyber-glitch text-4xl md:text-5xl font-bold text-cyber-yellow mb-12 text-center" data-text="EXPERIENCE">
            EXPERIENCE
          </h1>

          {/* Professional Experience */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="cyber-card group hover:border-cyber-yellow transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-cyber-blue group-hover:text-cyber-yellow transition-colors duration-300">
                      {experience.title}
                    </h2>
                    <p className="text-xl text-gray-300 font-mono-cyber">{experience.company}</p>
                    <p className="text-sm text-cyber-yellow font-mono-cyber mt-1">{experience.type} | {experience.location}</p>
                  </div>
                  <p className="text-cyber-yellow mt-2 md:mt-0 font-mono-cyber">{experience.period}</p>
                </div>

                <p className="text-gray-300 mb-6 font-body-cyber leading-relaxed">
                  {experience.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-cyber-yellow mb-4 font-cyber">Key Responsibilities</h3>
                  <div className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 mt-2 bg-cyber-blue rounded-full"></div>
                        <p className="ml-4 text-gray-300 font-body-cyber">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-cyber-yellow mb-4 font-cyber">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyber-black/30 border border-cyber-blue/20 rounded-full
                        text-cyber-blue hover:border-cyber-blue transition-all duration-300 font-mono-cyber"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-cyber-yellow mb-4 font-cyber">Key Achievements</h3>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 mt-2 bg-cyber-purple rounded-full"></div>
                        <p className="ml-4 text-gray-300 font-body-cyber">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Organizations */}
          <h2 className="text-3xl font-bold text-cyber-yellow mt-16 mb-8 font-cyber text-center">
            Professional Organizations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="cyber-card group hover:border-cyber-yellow transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-cyber-blue group-hover:text-cyber-yellow transition-colors duration-300">
                    {org.name}
                  </h3>
                  <p className="text-cyber-yellow font-mono-cyber">{org.role}</p>
                  <p className="text-gray-300 font-mono-cyber text-sm">{org.period}</p>
                </div>

                <p className="text-gray-300 mb-4 font-body-cyber">
                  {org.description}
                </p>

                <div className="space-y-2">
                  {org.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 mt-2 bg-cyber-blue rounded-full"></div>
                      <p className="ml-4 text-gray-300 font-body-cyber">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 