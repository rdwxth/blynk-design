import { Code, Palette, Settings, Search, Gauge, Shield, CheckCircle } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: '$5,000',
    description: 'Perfect for small businesses',
    features: [
      'Custom Design',
      'Mobile Responsive',
      'Up to 5 Pages',
      'Basic SEO Setup',
      'Contact Form',
      '2 Rounds of Revisions',
    ],
  },
  {
    name: 'Professional',
    price: '$12,000',
    description: 'Ideal for growing companies',
    features: [
      'Everything in Starter',
      'E-commerce Integration',
      'Up to 10 Pages',
      'Advanced SEO',
      'Blog Setup',
      'Social Media Integration',
      'Analytics Dashboard',
      '4 Rounds of Revisions',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Professional',
      'Custom Functionality',
      'Unlimited Pages',
      'Priority Support',
      'Performance Optimization',
      'Security Hardening',
      'API Integration',
      'Unlimited Revisions',
    ],
  },
];

const services = [
  {
    icon: Palette,
    name: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences that convert visitors into customers.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
    ],
  },
  {
    icon: Code,
    name: 'Web Development',
    description: 'Build robust and scalable web applications using cutting-edge technologies.',
    features: [
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Database Design',
      'Performance Optimization',
    ],
  },
  {
    icon: Settings,
    name: 'Maintenance',
    description: 'Keep your website running smoothly with regular updates and support.',
    features: [
      'Regular Updates',
      'Security Patches',
      'Performance Monitoring',
      'Backup Management',
      '24/7 Support',
    ],
  },
  {
    icon: Search,
    name: 'SEO Services',
    description: 'Improve your search engine rankings and drive organic traffic.',
    features: [
      'Keyword Research',
      'On-page Optimization',
      'Content Strategy',
      'Link Building',
      'Analytics & Reporting',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Expert Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed online
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a full range of web services to help your business grow and thrive in the digital world.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Packages & Pricing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect package for your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl ${
                  pkg.featured
                    ? 'bg-white shadow-2xl ring-2 ring-indigo-600 scale-105 z-10'
                    : 'bg-white/60 shadow-lg sm:mx-8'
                } p-8 flex flex-col justify-between`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="mt-4 text-base text-gray-600">{pkg.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{pkg.price}</span>
                  </p>
                  <ul className="mt-8 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-indigo-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#quote"
                  className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold ${
                    pkg.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}