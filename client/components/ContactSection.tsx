import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-700 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-blue-100 text-lg">
                Ready to transform your space? Contact us today for a free
                consultation and quote.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-blue-100">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-blue-100">hello@tilecraft.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Service Areas</h3>
                  <p className="text-blue-100">
                    San Francisco Bay Area & Greater California
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-cyan-300 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-cyan-300 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-cyan-300 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-cyan-300 transition-colors"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-cyan-300 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-300 text-blue-900 rounded-lg hover:bg-cyan-200 transition-colors font-semibold"
              >
                {submitted ? "Message Sent!" : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
