export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full h-20 bg-black/90 backdrop-blur-sm text-white flex items-center justify-between px-8">
      <div className="text-3xl font-black tracking-wider">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>

      <nav className="flex items-center gap-10 text-2xl font-bold">
        <a href="#home" className="relative group transition duration-300">
          <span className="hover:text-gray-300 transition duration-300">
            ./home
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </a>

        <a href="#projects" className="relative group transition duration-300">
          <span className="hover:text-gray-300 transition duration-300">
            ./projects
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </a>

        <a href="#about" className="relative group transition duration-300">
          <span className="hover:text-gray-300 transition duration-300">
            ./about
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </a>
      </nav>

      <button className="border-2 border-white rounded-full px-4 py-1 text-sm font-bold hover:bg-white hover:text-black transition">
        EN
      </button>
    </header>
  );
}