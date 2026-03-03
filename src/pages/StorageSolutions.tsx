import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function StorageSolutions() {
  return (
    <>
      <Helmet>
        <title>存倉服務 Storage Solutions | 龍馬搬運</title>
        <meta name="description" content="提供安全可靠的短期或長期存倉服務，解決您的空間煩惱。" />
      </Helmet>

      <section className="py-20 bg-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-calligraphy text-[#8b0000] mb-4">存倉服務 Storage Solutions</h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#1a1a1a]/10 p-12 hover:border-[#d4af37] transition-colors relative overflow-hidden group bg-[#f5f2ed]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-full -z-10 group-hover:bg-[#d4af37]/20 transition-colors"></div>
              <h3 className="text-3xl font-semibold mb-4">安全存倉 Safe Storage</h3>
              <p className="text-4xl text-[#8b0000] font-serif mb-6">HK$ 800 / 月起</p>
              <p className="text-[#1a1a1a]/80 text-lg mb-8">
                提供安全可靠的短期或長期存倉服務。24小時CCTV監控，恆溫恆濕，確保您的物品完好無缺。
                無論是裝修暫存、換樓過渡，還是長期儲物，我們都能為您提供合適的空間。
              </p>
              <Link to="/quote" className="inline-block bg-[#8b0000] text-[#f5f2ed] px-8 py-3 rounded-sm hover:bg-[#1a1a1a] transition-colors">
                查詢存倉報價 Inquire Storage
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
