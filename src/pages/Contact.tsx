import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Soon...',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+44 7424 751818',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@blynk.design',
  },
  {
    icon: Globe,
    title: 'Working Hours',
    content: 'Mon-Fri: 9AM - 6PM GMT',
  },
];

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75"></div>
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Let's discuss how we can help your business grow
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="relative rounded-lg border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                    <item.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-500">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50">
        <ContactForm />
      </div>

      {/* Map Section */}
      <div className="h-96 bg-gray-200">
        {/* Add your map integration here */}
      </div>
    </div>
  );
}