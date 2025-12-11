export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Kitchen Tiling",
      description:
        "Durable, beautiful tilework that transforms your kitchen into a culinary centerpiece with professional installation.",
      image: "https://placehold.co/500x300/5a5248/ffffff?text=Kitchen+Tiling",
    },
    {
      id: 2,
      title: "Bathroom Tiling",
      description:
        "Waterproof solutions and elegant designs that combine functionality with stunning aesthetics for any bathroom.",
      image: "https://placehold.co/500x300/6b6159/ffffff?text=Bathroom+Tiling",
    },
    {
      id: 3,
      title: "Floor Tiling",
      description:
        "Robust flooring solutions for residential and commercial spaces with seamless installation and lasting durability.",
      image: "https://placehold.co/500x300/7a6f68/ffffff?text=Floor+Tiling",
    },
    {
      id: 4,
      title: "Mosaic & Feature Walls",
      description:
        "Bespoke artistic tilework that creates striking focal points and adds personality to any room.",
      image: "https://placehold.co/500x300/8b7d72/ffffff?text=Mosaic+Walls",
    },
    {
      id: 5,
      title: "Outdoor Tiling",
      description:
        "Weather-resistant installations for patios, terraces, and outdoor spaces that withstand the elements.",
      image: "https://placehold.co/500x300/9b8d7d/ffffff?text=Outdoor+Tiling",
    },
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            We offer comprehensive tiling solutions for every space and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden bg-blue-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
