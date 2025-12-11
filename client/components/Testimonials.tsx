import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Los Angeles, CA",
      text: "TileCraft transformed our bathroom into a spa-like retreat. The attention to detail and professionalism were outstanding. Highly recommended!",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      location: "San Francisco, CA",
      text: "We've worked with TileCraft on multiple projects. Their team is reliable, skilled, and always delivers premium results on time and within budget.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      location: "Oakland, CA",
      text: "From initial consultation to final installation, every step was seamless. Our kitchen tiling is absolutely stunning and has become the highlight of our home.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            What our satisfied customers have to say about our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-50 p-8 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div>
                <h3 className="font-bold text-stone-900">{testimonial.name}</h3>
                <p className="text-sm text-stone-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
