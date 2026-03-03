import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10 py-12 text-[#f5f2ed]/60 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-calligraphy text-[#8b0000] mb-6">龍馬搬運</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <Link to="/" className="hover:text-[#d4af37] transition-colors">主頁</Link>
          <Link to="/moving" className="hover:text-[#d4af37] transition-colors">搬運服務</Link>
          <Link to="/storage" className="hover:text-[#d4af37] transition-colors">存倉服務</Link>
          <Link to="/quote" className="hover:text-[#d4af37] transition-colors">網上報價</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} 龍馬搬運 Long Ma Moving Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
