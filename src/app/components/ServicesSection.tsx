import { FC } from 'react';
import { FaSlidersH, FaCogs, FaThLarge } from 'react-icons/fa';

const services = [
  {
    icon: <FaSlidersH className="text-lg text-gray-600" />,
    title: 'Space Planning',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: <FaCogs className="text-lg text-gray-600" />,
    title: 'Custom Furniture',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: <FaThLarge className="text-lg text-gray-600" />,
    title: 'Furniture Layouts',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div>
        <p className="text-sm uppercase tracking-widest text-black mb-2">Services</p>
        <h2 className="text-4xl font-semibold mb-12 text-black">We do it best</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border p-6 rounded-lg hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
