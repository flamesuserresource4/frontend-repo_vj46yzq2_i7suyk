import { Menu, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow ring-1 ring-black/5" />
          <span className="font-semibold tracking-tight">Your Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" className="p-2 rounded-md hover:bg-black/5 transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <button className="md:hidden p-2 rounded-md hover:bg-black/5" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
