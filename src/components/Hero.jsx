import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-indigo-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-xs font-medium ring-1 ring-black/5 mb-4 pointer-events-none">Holistic growth for curious minds</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
              Help your child thrive across math, reading, logic and more
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
              Our playful, research-backed activities adapt to your child’s level and build confidence step by step.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition w-full sm:w-auto">Start free</a>
              <a href="#features" className="px-6 py-3 rounded-md bg-white/80 backdrop-blur ring-1 ring-black/10 text-gray-900 hover:bg-white transition w-full sm:w-auto">See what’s inside</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none" />
    </section>
  );
}
