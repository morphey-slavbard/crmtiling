import { Instagram } from "lucide-react";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>

          <p className="text-slate-300 text-lg mb-8">
            Gallery coming soon. In the meantime, see our latest projects on
            Instagram.
          </p>

          <a
            href="https://www.instagram.com/crmtilingkent/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition font-semibold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="View our work on Instagram"
          >
            <Instagram size={18} />
            View on Instagram
          </a>

          <div className="mt-10 rounded-lg border border-slate-700 bg-slate-700 p-8">
            <p className="text-slate-300">
              Got a certain style in mind? Send us a message and we will get
              back to you to discuss options and a quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
