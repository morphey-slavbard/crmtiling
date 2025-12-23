import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-300 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-2">CRM Tiling</h3>
            <p className="text-sm">
              Professional tiling services with 10+ years of experience.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Phone: 01795 510705</p>
              <p>Email: hello@crmtiling.com</p>
              <p>Service Area: Kent and South East London</p>
            </div>
          </div>

          {/* Social Links */}
<div>
  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
  <div className="flex gap-4">
    <a
      href="https://www.instagram.com/crmtilingkent/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      className="text-slate-400 hover:text-white transition-colors"
    >
      <Instagram size={24} />
    </a>
  </div>
</div>

        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} CRM Tiling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
