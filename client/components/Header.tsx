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
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F28d3fdd1a708436099ea3ba5fd26503f%2F6bdbaad2bc08434d8171edd1ec67654b?format=webp&width=800"
              alt="CRM Tiling Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-blue-700">CRM Tiling</div>
              <div className="text-xs text-blue-500">Professional Services</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors text-left py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-full"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
