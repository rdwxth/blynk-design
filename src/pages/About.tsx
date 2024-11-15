import { Users, Target, Award, Zap } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that help your business grow and succeed in the digital landscape.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from design and development to customer service.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of industry trends and leverage cutting-edge technologies to give you a competitive edge.',
  },
];
const team = [
  {
    name: 'Diwan Mohamed Faheer',
    role: 'Founder & CEO',
    image: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
  },
  {
    name: 'Choies Kazi',
    role: 'Co-Owner',
    image: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
  },
  {
    name: 'Cu3t0m',
    role: 'UI/UX Designer',
    image: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Blynk
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              We're a team of passionate designers and developers dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Empowering Businesses Through Technology
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We believe in creating digital solutions that not only look beautiful but drive real business results. Our mission is to help businesses thrive in the digital age through innovative web solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Drives Us
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-center text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-center text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet the Experts
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our talented team brings together years of experience in design, development, and digital strategy.
          </p>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="space-y-4">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={member.image}
                  alt={member.name}
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}