export const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of developers building better applications
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Sign Up Now
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}; 