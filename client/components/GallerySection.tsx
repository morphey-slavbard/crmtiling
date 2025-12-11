import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1552992154-a4a4ce5c4e00?w=600&q=80",
      title: "Luxury Bathroom Tiling",
    },
    {
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
      title: "Modern Kitchen Installation",
    },
    {
      image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&q=80",
      title: "Contemporary Floor Design",
    },
    {
      image: "https://images.unsplash.com/photo-1577720633776-25b9e19e1b08?w=600&q=80",
      title: "Feature Wall Mosaic",
    },
    {
      image: "https://images.unsplash.com/photo-1552991286-7f59dfea6d5c?w=600&q=80",
      title: "Outdoor Patio Installation",
    },
    {
      image: "https://images.unsplash.com/photo-1584622614875-e8f1d71d2a95?w=600&q=80",
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
              <div className="absolute inset-0 flex gap-0">
                <img
                  src={item.before}
                  alt="Before"
                  className="w-1/2 h-full object-cover group-hover:opacity-75 transition-opacity"
                />
                <img
                  src={item.after}
                  alt="After"
                  className="w-1/2 h-full object-cover group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="bg-white/90 text-stone-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-semibold text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity">
                Before & After
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

              <div className="flex gap-2 h-96">
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img
                    src={galleryImages[selectedIndex].before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img
                    src={galleryImages[selectedIndex].after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                </div>
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
