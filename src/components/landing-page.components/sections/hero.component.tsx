interface HeroProps {
  isVisible: boolean;
}

export const Hero = ({ isVisible }: HeroProps) => {
  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Build Better Apps <span className="text-blue-600">Faster</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A complete solution for creating modern web applications with React and TypeScript.
            Start building your next project today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 