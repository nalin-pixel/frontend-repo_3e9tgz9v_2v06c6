import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screens from './components/Screens'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screens />
        <About />
        <CTA />
      </main>
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} HolistiKids. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="hover:text-gray-800" href="#features">Features</a>
            <a className="hover:text-gray-800" href="#screens">Screens</a>
            <a className="hover:text-gray-800" href="#about">About</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
