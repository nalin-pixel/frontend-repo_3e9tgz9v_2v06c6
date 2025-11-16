export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to try HolistiKids?</h3>
            <p className="mt-2 text-white/90">Start free today. No ads. Cancel anytime.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="px-6 py-3 rounded-md bg-white text-indigo-700 font-medium hover:bg-white/90 transition">Start free</a>
            <a href="#features" className="px-6 py-3 rounded-md bg-black/10 text-white ring-1 ring-white/30 hover:bg-white/10 transition">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  );
}
