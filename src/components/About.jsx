export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Here’s our story</h2>
            <p className="mt-4 text-gray-700">We’re parents, educators and designers united by one goal: to make everyday learning joyful. Our approach blends evidence-based pedagogy with delightful interactions, so children build skills and confidence at their own pace.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Built with guidance from early-childhood specialists</li>
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Age-appropriate progress paths for 4–10 year olds</li>
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Family-first privacy and safety</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center text-indigo-600 font-semibold">
              ✨ Growing minds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
