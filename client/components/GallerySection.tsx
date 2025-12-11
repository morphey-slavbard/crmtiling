import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      image: "https://placehold.co/600x400/5a5248/ffffff?text=Luxury+Bathroom",
      title: "Luxury Bathroom Tiling",
    },
    {
      image: "https://placehold.co/600x400/6b6159/ffffff?text=Modern+Kitchen",
      title: "Modern Kitchen Installation",
    },
    {
      image: "https://placehold.co/600x400/7a6f68/ffffff?text=Floor+Design",
      title: "Contemporary Floor Design",
    },
    {
      image: "https://placehold.co/600x400/8b7d72/ffffff?text=Feature+Wall",
      title: "Feature Wall Mosaic",
    },
    {
      image: "https://placehold.co/600x400/9b8d7d/ffffff?text=Patio+Installation",
      title: "Outdoor Patio Installation",
    },
    {
      image: "https://placehold.co/600x400/aba39c/ffffff?text=Entryway+Tiling",
      title: "Premium Entryway Tiling",
    },
  ];

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our gallery of completed projects and transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="bg-white/90 text-stone-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-white hover:text-stone-200 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex gap-4 items-center justify-between">
              <button
                onClick={prevImage}
                className="text-white hover:text-stone-200 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="rounded-lg overflow-hidden w-full h-96">
                <img
                  src={galleryImages[selectedIndex].image}
                  alt={galleryImages[selectedIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={nextImage}
                className="text-white hover:text-stone-200 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">
                {galleryImages[selectedIndex].title}
              </p>
              <p className="text-stone-300 text-sm">
                {selectedIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
