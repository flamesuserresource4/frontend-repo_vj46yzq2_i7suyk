function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-lg font-semibold">Let’s build something great</h4>
            <p className="text-gray-600 mt-1">Open to freelance, collaborations, and full-time roles.</p>
          </div>
          <div className="sm:text-right">
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800 transition-colors">
              Say hello
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-8">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
