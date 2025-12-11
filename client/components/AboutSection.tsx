import { CheckCircle, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full lg:min-h-96 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
            <img
              src="https://placehold.co/800x600/5a5248/ffffff?text=Professional+Tiler"
              alt="Professional tiling craftsman"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-stone-900">
                Trusted Tiling Experts
              </h2>
              <p className="text-lg text-stone-600">
                With over 20 years of experience in the tiling industry, TileCraft has built a reputation for delivering exceptional results. Our team of skilled craftsmen takes pride in every project, from residential renovations to commercial installations.
              </p>
              <p className="text-lg text-stone-600">
                We believe in using premium materials, proven techniques, and honest communication to ensure your satisfaction every step of the way.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-stone-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-stone-900">Insured Work</h3>
                  <p className="text-stone-600 text-sm">Fully insured and licensed for your peace of mind</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Award className="w-6 h-6 text-stone-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-stone-900">Guaranteed Quality</h3>
                  <p className="text-stone-600 text-sm">Premium finishes backed by our quality guarantee</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Users className="w-6 h-6 text-stone-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-stone-900">Skilled Craftsmen</h3>
                  <p className="text-stone-600 text-sm">Expert installers with years of specialized training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
