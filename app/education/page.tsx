import Navigation from '../components/Navigation';

export default function Education() {
  const education = {
    university: {
      name: "Stevens Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "September 2021 - May 2026",
      location: "Hoboken, NJ",
      relevantCourses: [
        {
          name: "Data Structures & Algorithms",
          description: "Advanced data structures, algorithm optimization, complexity analysis"
        },
        {
          name: "Computer Architecture",
          description: "Processor design, memory systems, computer organization"
        },
        {
          name: "Operating Systems",
          description: "Process management, memory allocation, file systems"
        },
        {
          name: "Web Programming",
          description: "Full-stack development, modern frameworks, responsive design"
        },
        {
          name: "Database Management",
          description: "Database design, SQL optimization, data modeling"
        },
        {
          name: "DevOps Practices",
          description: "CI/CD pipelines, containerization, cloud deployment"
        },
        {
          name: "Network Security",
          description: "Cryptography, secure protocols, threat detection, network defense"
        },
        {
          name: "Artificial Intelligence",
          description: "Machine learning algorithms, neural networks, AI applications"
        },
        {
          name: "Systems Programming",
          description: "Low-level programming, kernel development, system optimization"
        },
        {
          name: "Cloud Computing",
          description: "Distributed systems, cloud architecture, scalability patterns"
        }
      ]
    },
    certifications: [
      {
        name: "IBM DevOps and Software Engineering",
        date: "May 2025",
        status: "Completed"
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="cyber-glitch text-4xl md:text-5xl font-bold text-cyber-yellow mb-12 text-center" data-text="EDUCATION">
            EDUCATION
          </h1>

          {/* University Education */}
          <div className="cyber-card group hover:border-cyber-yellow transition-all duration-300 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-cyber-blue group-hover:text-cyber-yellow transition-colors duration-300">
                  {education.university.name}
                </h2>
                <p className="text-xl text-gray-300 font-mono-cyber">{education.university.degree}</p>
                <p className="text-sm text-cyber-yellow font-mono-cyber mt-1">{education.university.location}</p>
              </div>
              <p className="text-cyber-yellow mt-2 md:mt-0 font-mono-cyber">{education.university.period}</p>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h3 className="text-xl font-bold text-cyber-yellow mb-6 font-cyber">Advanced Coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.university.relevantCourses.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-cyber-black/30 border border-cyber-blue/20 rounded
                      hover:border-cyber-blue hover:bg-cyber-black/50 transition-all duration-300"
                  >
                    <h4 className="text-cyber-blue font-mono-cyber mb-2">{course.name}</h4>
                    <p className="text-gray-300 font-body-cyber text-sm">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <h2 className="text-3xl font-bold text-cyber-yellow mb-8 font-cyber text-center">
            Professional Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.certifications.map((cert, index) => (
              <div key={index} className="cyber-card group hover:border-cyber-yellow transition-all duration-300">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-cyber-blue group-hover:text-cyber-yellow transition-colors duration-300">
                    {cert.name}
                  </h3>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-300 font-mono-cyber">{cert.date}</span>
                  <span className="px-3 py-1 bg-cyber-black/30 border border-cyber-yellow/20 rounded-full
                    text-cyber-yellow font-mono-cyber">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 