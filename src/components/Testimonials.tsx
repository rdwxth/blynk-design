import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Blynk transformed our online presence completely. The new website not only looks stunning but has significantly improved our conversion rates.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The team's attention to detail and technical expertise is outstanding. They delivered exactly what we needed, on time and within budget.",
    author: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Working with Blynk was a game-changer for our business. Their SEO optimization helped us reach the top of search results.",
    author: "Emma Davis",
    role: "Marketing Director, GrowthLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 shadow-lg">
                  <Star className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-gray-700">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{testimonial.content}</p>
                  </div>
                  <footer className="mt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={testimonial.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-base text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}