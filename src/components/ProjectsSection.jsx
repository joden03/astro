import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      title: "The Lighthouse",
      description: "Adding a new dimension to projects through thoughtfully designed 3D environment. A coastal beacon brought to life with stunning visual effects and atmospheric lighting.",
      gradient: "from-blue-400 to-purple-600",
      category: "3D Animation",
      tag: "3D Animation",
      duration: "3 months",
      team: "5-person"
    },
    {
      id: 2,
      title: "Snowscape Haven",
      description: "Crafting a visual identity that resonates with values and allure of a winter sanctuary. Complete branding package including logo, color palette, and marketing materials.",
      gradient: "from-purple-500 to-pink-600",
      category: "Visual Identity",
      tag: "Visual Identity",
      duration: "2 months",
      team: "3-person"
    },
    {
      id: 3,
      title: "Navigating Possibilities",
      description: "Motion graphics breathe life into the project, blending direction and creativity. An explainer video series that simplifies complex concepts with elegant animations.",
      gradient: "from-orange-400 to-red-500",
      category: "Motion Graphics",
      tag: "Motion Graphics",
      duration: "6 weeks",
      team: "4-person"
    },
    {
      id: 4,
      title: "Nocturnal Symphony",
      description: "Through 3D artistry, we orchestrate an animated ode to life, evoking a dance of shadows and dreams. A music video that merges sound and visual poetry.",
      gradient: "from-purple-400 to-blue-600",
      category: "3D Animation",
      tag: "3D Animation",
      duration: "4 months",
      team: "6-person"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Recent Projects</h2>
          <p className="text-purple-600 font-medium">Showcasing Excellence in Design</p>
        </div>
        <p className="text-gray-600 max-w-md text-sm md:text-base">
          Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design
        </p>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            {...project}
          />
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-purple-600 transition-all font-semibold inline-flex items-center gap-2 shadow-lg"
        >
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}

export default ProjectsSection;