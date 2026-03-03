import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive 
        ? "text-[#8b0000] border-b-2 border-[#8b0000] font-semibold pb-1" 
        : "text-[#1a1a1a] hover:text-[#8b0000] pb-1"
    }`;

  const quoteLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors font-semibold ${
      isActive 
        ? "text-[#d4af37] border-b-2 border-[#d4af37] pb-1" 
        : "text-[#8b0000] hover:text-[#d4af37] pb-1"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f5f2ed]/90 backdrop-blur-md z-40 border-b border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-3xl font-calligraphy text-[#8b0000]">龍馬搬運</NavLink>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={navLinkClass} end>主頁 Home</NavLink>
            <NavLink to="/moving" className={navLinkClass}>搬運服務 Moving</NavLink>
            <NavLink to="/storage" className={navLinkClass}>存倉服務 Storage</NavLink>
            <NavLink to="/quote" className={quoteLinkClass}>網上報價 Quote</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
