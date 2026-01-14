import ServiceCard from './ServiceCard';

function ServicesSection() {
  const servicesData = [
    {
      id: 1,
      icon: "🎬",
      title: "Motion Graphics",
      description: "Transform your ideas into captivating visual stories with our motion graphics expertise. We create engaging animations that breathe life into brands.",
      features: ["2D Animation", "Logo Animation", "Explainer Videos"],
      bgColor: "bg-white",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-50"
    },
    {
      id: 2,
      icon: "🎨",
      title: "2D/3D Animation",
      description: "Stunning character rigging and professional 3D environments that push creative boundaries. Your vision, our animation magic.",
      features: ["Character Design", "3D Modeling", "Visual Effects"],
      bgColor: "bg-purple-600",
      textColor: "text-white",
      borderColor: "border-purple-600"
    },
    {
      id: 3,
      icon: "✨",
      title: "Visual Identity",
      description: "Comprehensive branding solutions that make your business stand out. From logos to complete brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
      bgColor: "bg-white",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-50"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover a wide range of opportunities through comprehensive range of qualified services
        </p>
      </div>
      
      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service) => (
          <ServiceCard 
            key={service.id}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;