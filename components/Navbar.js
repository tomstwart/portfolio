import Link from 'next/link';

export default function Navbar({ activeSection }) {
  const isActive = (section) => activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Portfolio
          </Link>
          <div className="flex space-x-8">
            <Link 
              href="#main" 
              className={`text-gray-300 transition-all duration-300 relative group ${
                isActive('main') ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              Main
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                isActive('main') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="#projects" 
              className={`text-gray-300 transition-all duration-300 relative group ${
                isActive('projects') ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              Projects
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                isActive('projects') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="#contact" 
              className={`text-gray-300 transition-all duration-300 relative group ${
                isActive('contact') ? 'text-yellow-400' : 'hover:text-yellow-400'
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}