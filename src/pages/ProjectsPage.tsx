import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, MessageCircle, FileText, Zap } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "AI Pre-Call Research Agent",
      description: "Automated sales research system that gathers comprehensive prospect information before sales calls, increasing conversion rates by 40%. Uses Relevance AI and web scraping to compile detailed company profiles, key decision makers, and recent news.",
      techStack: ["Relevance AI", "Python", "OpenAI API", "Web Scraping", "Flask"],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/https://github.com/rindhind/Sales-Co-pilot-OR-ai-precall-research-agent",
      liveLink: "https://app.relevanceai.com/agents/d7b62b/f4bdf98cbe7a-4731-9357-11a22bf57c67/cff14c2c-845e-4be2-b6bc-919d967bca82/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false",
      icon: Bot,
      category: "AI Automation",
      featured: true
    },
    {
      id: 2,
      title: "Customer Support Chatbot",
      description: "Intelligent chatbot system built with Voiceflow and OpenAI that handles 80% of customer inquiries automatically. Features sentiment analysis, ticket routing, and seamless handoff to human agents when needed.",
      techStack: ["Voiceflow", "OpenAI API", "JavaScript", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/NirDiamant/GenAI_Agents/blob/main/all_agents_tutorials/customer_support_agent_langgraph.ipynb",
      liveLink: "https://github.com/NirDiamant/GenAI_Agents/blob/main/all_agents_tutorials/customer_support_agent_langgraph.ipynba",
      icon: MessageCircle,
      category: "AI Support"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Multi-format content generation platform that creates blog posts, social media content, and marketing copy. Includes brand voice consistency, SEO optimization, and content planning features for marketing teams.",
      techStack: ["OpenAI API", "React", "Python", "Streamlit", "PostgreSQL"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/rindhind/n8n-workflows/blob/main/workflows/Content%20Genration%20advance.json",
      liveLink: "https://github.com/rindhind/n8n-workflows/blob/main/workflows/Content%20Genration%20advance.json",
      icon: FileText,
      category: "Content AI"
    },
    {
      id: 4,
      title: "Workflow Automation Suite",
      description: "Comprehensive automation platform built with Make.com and n8n that connects multiple business systems. Automates lead nurturing, invoice processing, and customer onboarding workflows.",
      techStack: ["Make.com", "n8n", "APIs", "Zapier", "CRM Integration"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/rindhind/n8n-workflows",
      liveLink: "https://github.com/rindhind/n8n-workflows",
      icon: Zap,
      category: "Process Automation"
    }
  ];

  const categories = ["All", "AI Automation", "AI Support", "Content AI", "Process Automation"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of AI automation solutions that have transformed business operations and improved efficiency for SMBs worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`project-card bg-white rounded-2xl overflow-hidden shadow-lg ${
                    project.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'grid-cols-1'} ${
                    project.featured ? 'min-h-[500px]' : ''
                  }`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-shadow"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how I can help automate your business processes with AI.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Let's Work Together
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;