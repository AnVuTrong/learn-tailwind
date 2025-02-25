import { FC } from 'react';

interface FeaturesProps {
  activeIndex: number;
  onFeatureClick: (index: number) => void;
}

const features = [
  {
    title: 'Modern Design',
    description: 'Clean and intuitive interface built with React and Tailwind CSS',
    icon: '🎨'
  },
  {
    title: 'Responsive',
    description: 'Fully responsive design that works on all devices',
    icon: '📱'
  },
  {
    title: 'Performance',
    description: 'Optimized for speed and efficiency',
    icon: '⚡'
  }
];

export const Features: FC<FeaturesProps> = ({ activeIndex, onFeatureClick }) => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 rounded-lg transition-all cursor-pointer ${
                activeIndex === index ? 'bg-blue-50 scale-105' : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => onFeatureClick(index)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 