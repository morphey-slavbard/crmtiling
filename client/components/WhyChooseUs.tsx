import { Zap, Clock, DollarSign, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description:
        "Every tile is laid with precision and care, ensuring flawless finishes that exceed expectations.",
    },
    {
      icon: Clock,
      title: "Reliable Timelines",
      description:
        "We respect your time and deliver projects on schedule without compromising on quality.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Transparent quotes and fair pricing that provides exceptional value for your investment.",
    },
    {
      icon: Zap,
      title: "Premium Finishes",
      description:
        "Superior craftsmanship and quality materials create lasting, beautiful results that stand the test of time.",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Choose TileCraft
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional service and outstanding
            results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-blue-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
