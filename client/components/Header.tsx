import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.jpg"
              alt="TileCraft Logo"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors text-left py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium w-full"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
