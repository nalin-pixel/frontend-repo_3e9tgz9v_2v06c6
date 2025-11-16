import { motion } from "framer-motion";

const screens = [
  {
    title: "Adaptive Math",
    desc: "Personalized practice that meets kids where they are.",
    color: "from-indigo-500 to-cyan-400",
  },
  {
    title: "Phonics & Reading",
    desc: "Sound it out, read it proud: step-by-step literacy.",
    color: "from-pink-500 to-violet-500",
  },
  {
    title: "Logic Puzzles",
    desc: "Engaging patterns, sequences and problem-solving.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Screens() {
  return (
    <section id="screens" className="py-20 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">A peek at the experience</h2>
          <p className="mt-3 text-gray-600">Clean, colorful screens that keep focus on learning and fun.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {screens.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm"
            >
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${s.color} relative overflow-hidden`}> 
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white/35_0,transparent_50%)]" />
                <div className="absolute inset-4 rounded-lg bg-white/60 backdrop-blur-sm" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
