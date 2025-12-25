import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "D Webster",
      location: "Oxford, UK",
      text: "CRM Tiling transformed our hallway even with a difficult layout. The attdention to detail and communication were outstanding. Highly recommended!",
      rating: 5,
    },
    {
      name: "H Knowles",
      location: "Kent, UK",
      text: "Cannot rate CRM enough, Charlie was professional, arrived on time and completed the work in the scheduled time. He gave me so much advice beforehand on questions I'd asked.",
      rating: 5,
    },
    {
      name: "D Brown",
      location: "Kent, UK",
      text: "Highly recommend this company. Laid herringbone porcelain floor tiles in my kitchen. Fantastic workmanship, price was great too as I did obtain 2 quotes and they were the best.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006ecf] mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-black-600 max-w-2xl mx-auto">
            What our satisfied customers have to say about our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors"
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

              <p className="text-blue-900 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div>
                <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                <p className="text-sm text-black-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
