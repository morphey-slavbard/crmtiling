export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-24 pb-12 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#006ecf] leading-tight">
                Professional Tiling Services
              </h1>
              <p className="text-xl text-black-600 leading-relaxed">
                Exceptional quality, reliable craftsmanship, and meticulous
                attention to detail in every tile we lay.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-[#006ecf] border-2 text-white rounded-lg hover:text-[#006ecf] hover:border-[#006ecf] hover:bg-white transition-colors font-semibold"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="px-8 py-3 border-2 border-[#006ecf] text-[#006ecf] rounded-lg hover:bg-[#006ecf] hover:text-white transition-colors font-semibold"

              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 lg:h-full lg:min-h-96 rounded-xl overflow-hidden shadow-lg">
  <img
    src="/images/Floor1.jpg"
    alt="Tiling example"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
