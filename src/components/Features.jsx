import { Brain, BookOpen, Calculator, Sparkles, Users, Trophy } from "lucide-react";

const items = [
  { icon: Calculator, title: "Math Mastery", desc: "Foundational numeracy through playful challenges." },
  { icon: BookOpen, title: "Reading & Language", desc: "Phonics, vocabulary and comprehension that grow with them." },
  { icon: Brain, title: "Logical Reasoning", desc: "Puzzles and patterns to sharpen critical thinking." },
  { icon: Trophy, title: "Progress Tracking", desc: "Clear paths, streaks and badges that motivate progress." },
  { icon: Users, title: "Made for Families", desc: "Profiles for each child with age-appropriate content." },
  { icon: Sparkles, title: "Playful & Safe", desc: "Ad-free, kid-friendly design with privacy built-in." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What’s in our app</h2>
          <p className="mt-3 text-gray-600">A balanced set of learning areas crafted with educators and parents.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
