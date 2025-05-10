import Navigation from '../components/Navigation';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C/C++",
        "TypeScript",
        "Rust",
        "OCaml"
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        "HTML5/CSS3",
        "React.js",
        "Node.js",
        "Express.js",
        "Next.js",
        "TailwindCSS",
        "RESTful APIs"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git/GitHub",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "MongoDB",
        "CI/CD",
        "Linux/Unix"
      ]
    }
  ];

  const additionalSkills = {
    methodologies: [
      "Agile Development",
      "DevOps Practices",
      "Test-Driven Development",
      "Microservices Architecture",
      "Domain-Driven Design"
    ],
    softSkills: [
      "Team Leadership",
      "Problem Solving",
      "Project Management",
      "Technical Communication",
      "Mentoring"
    ]
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="cyber-glitch text-4xl md:text-5xl font-bold text-cyber-yellow mb-12 text-center" data-text="SKILLS">
            SKILLS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="cyber-card group hover:border-cyber-yellow transition-all duration-300">
                <h2 className="text-2xl font-bold text-cyber-yellow mb-6 font-cyber group-hover:text-cyber-blue transition-colors duration-300">
                  {category.title}
                </h2>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center p-2 bg-cyber-black/30 border border-cyber-blue/20 rounded
                        hover:border-cyber-blue hover:bg-cyber-black/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                      <span className="ml-3 text-gray-300 font-mono-cyber">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card group hover:border-cyber-yellow transition-all duration-300">
              <h2 className="text-2xl font-bold text-cyber-yellow mb-6 font-cyber group-hover:text-cyber-blue transition-colors duration-300">
                Methodologies
              </h2>
              <div className="space-y-3">
                {additionalSkills.methodologies.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-2 bg-cyber-black/30 border border-cyber-blue/20 rounded
                      hover:border-cyber-blue hover:bg-cyber-black/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                    <span className="ml-3 text-gray-300 font-mono-cyber">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card group hover:border-cyber-yellow transition-all duration-300">
              <h2 className="text-2xl font-bold text-cyber-yellow mb-6 font-cyber group-hover:text-cyber-blue transition-colors duration-300">
                Soft Skills
              </h2>
              <div className="space-y-3">
                {additionalSkills.softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-2 bg-cyber-black/30 border border-cyber-blue/20 rounded
                      hover:border-cyber-blue hover:bg-cyber-black/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                    <span className="ml-3 text-gray-300 font-mono-cyber">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 