import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MovingServices() {
  const prices = [
    { title: "基本搬運 Basic Moving", price: "HK$ 1,500 起", desc: "適合小型家庭或單身人士，包含基本傢俬包裝及搬運。" },
    { title: "家庭搬運 Family Moving", price: "HK$ 3,800 起", desc: "適合2-3房家庭，包含全屋傢俬拆裝、包裝及搬運。" },
    { title: "辦公室搬遷 Office Relocation", price: "另議 Quote", desc: "專業辦公室搬遷，包含文件櫃、電腦設備等安全運送。" }
  ];

  return (
    <>
      <Helmet>
        <title>搬運服務 Moving Services | 龍馬搬運</title>
        <meta name="description" content="專業搬運服務，包含基本搬運、家庭搬運及辦公室搬遷。查看我們的價目表。" />
      </Helmet>

      <section className="py-20 bg-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-calligraphy text-[#8b0000] mb-4">搬運服務 Moving Services</h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {prices.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#1a1a1a]/10 p-8 hover:border-[#d4af37] transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#f5f2ed] rounded-bl-full -z-10 group-hover:bg-[#d4af37]/20 transition-colors"></div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-3xl text-[#8b0000] font-serif mb-4">{item.price}</p>
                <p className="text-[#1a1a1a]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/quote" className="inline-block bg-[#8b0000] text-[#f5f2ed] px-8 py-4 rounded-sm text-lg hover:bg-[#1a1a1a] transition-colors border border-[#8b0000]">
              立即獲取報價 Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
