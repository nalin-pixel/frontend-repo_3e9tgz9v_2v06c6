import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400" />
            <span className="font-semibold text-gray-800">HolistiKids</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <button onClick={() => scrollTo('features')} className="hover:text-gray-900 transition">What’s inside</button>
            <button onClick={() => scrollTo('screens')} className="hover:text-gray-900 transition">Screens</button>
            <button onClick={() => scrollTo('about')} className="hover:text-gray-900 transition">About</button>
            <a href="#get-started" onClick={(e)=>{e.preventDefault(); scrollTo('cta')}} className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Get Started</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <button onClick={() => scrollTo('features')} className="py-2 text-left">What’s inside</button>
              <button onClick={() => scrollTo('screens')} className="py-2 text-left">Screens</button>
              <button onClick={() => scrollTo('about')} className="py-2 text-left">About</button>
              <button onClick={() => scrollTo('cta')} className="py-2 text-left px-3 rounded-md bg-indigo-600 text-white">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
