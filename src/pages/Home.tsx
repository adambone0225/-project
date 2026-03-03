import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const faqs = [
    { 
      q_zh: "報價是否包含紙箱？", 
      q_en: "Are carton boxes included?", 
      a_zh: "是的，我們提供免費借用紙箱服務，數量視乎搬運規模而定。", 
      a_en: "Yes, we provide free carton boxes for loan, quantity depends on the moving scale." 
    },
    { 
      q_zh: "搬運過程中有損壞如何處理？", 
      q_en: "What about damages during moving?", 
      a_zh: "我們提供基本搬運保險。如因我們員工疏忽導致損壞，我們將按條款作出合理賠償。", 
      a_en: "We provide basic moving insurance. Reasonable compensation will be made according to terms if damage is caused by our staff's negligence." 
    },
    { 
      q_zh: "需要提早多少預約？", 
      q_en: "How far in advance should I book?", 
      a_zh: "建議提早至少兩星期預約，特別是月底或週末等旺季。", 
      a_en: "We recommend booking at least 2 weeks in advance, especially for peak seasons like month-end or weekends." 
    },
    { 
      q_zh: "有提供傢俬拆裝服務嗎？", 
      q_en: "Do you provide furniture dismantling/assembly?", 
      a_zh: "有的，基本傢俬拆裝已包含在報價內（特殊或複雜傢俬除外）。", 
      a_en: "Yes, basic dismantling and assembly are included in the quote (except for special/complex furniture)." 
    }
  ];

  return (
    <>
      <Helmet>
        <title>龍馬搬運 | 香港傳統搬運專家 HK Traditional Moving</title>
        <meta name="description" content="香港傳統搬運專家，為您提供最安心、最專業的搬遷服務。安居樂業，穩如泰山。" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/hk/1920/1080?grayscale" 
            alt="Hong Kong Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-calligraphy text-[#8b0000] mb-6 leading-tight"
            >
              安居樂業<br/>穩如泰山
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#1a1a1a]/80 mb-8 max-w-lg"
            >
              香港傳統搬運專家，為您提供最安心、最專業的搬遷服務。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/quote" className="inline-block bg-[#8b0000] text-[#f5f2ed] px-8 py-4 rounded-sm text-lg hover:bg-[#1a1a1a] transition-colors border border-[#8b0000]">
                立即獲取報價 Get a Quote
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <div className="vertical-text text-4xl md:text-6xl font-calligraphy text-[#1a1a1a]/20 tracking-widest">
              信譽超卓 服務至上
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f5f2ed]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-calligraphy text-[#8b0000] mb-4">常見問題 Q&A</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 border-l-4 border-[#8b0000] shadow-sm"
              >
                <div className="flex items-start mb-3">
                  <MessageCircle className="mr-3 text-[#d4af37] shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold">{faq.q_zh}</h3>
                    <p className="text-[#1a1a1a]/60 text-sm mt-1">{faq.q_en}</p>
                  </div>
                </div>
                <div className="ml-8">
                  <p className="text-[#1a1a1a]/80">{faq.a_zh}</p>
                  <p className="text-[#1a1a1a]/60 text-sm mt-2 pl-4 border-l-2 border-[#d4af37]/30">{faq.a_en}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-calligraphy text-[#8b0000] mb-4">條款與細則 Condition and Terms</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="prose prose-stone max-w-none text-[#1a1a1a]/80">
            <ul className="space-y-6 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 text-[#8b0000] shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span><strong>報價有效期 Validity:</strong> 報價單發出後30天內有效。</span>
                  <span className="text-sm text-[#1a1a1a]/60 mt-1 pl-4 border-l-2 border-[#d4af37]/30">Quotes are valid for 30 days from the date of issue.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 text-[#8b0000] shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span><strong>付款方式 Payment:</strong> 確認預約需付30%訂金，餘額於搬運完成當日以現金或轉數快結清。</span>
                  <span className="text-sm text-[#1a1a1a]/60 mt-1 pl-4 border-l-2 border-[#d4af37]/30">30% deposit is required to confirm booking. Balance must be settled by Cash or FPS upon completion.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 text-[#8b0000] shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span><strong>惡劣天氣 Severe Weather:</strong> 如遇八號或以上颱風信號或黑色暴雨警告，搬運服務將自動取消並另作安排。</span>
                  <span className="text-sm text-[#1a1a1a]/60 mt-1 pl-4 border-l-2 border-[#d4af37]/30">Services will be rescheduled in the event of Typhoon Signal No. 8 or above, or Black Rainstorm Warning.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 text-[#8b0000] shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span><strong>貴重物品 Valuables:</strong> 客人需自行保管現金、首飾、重要文件等貴重物品，本公司恕不負責。</span>
                  <span className="text-sm text-[#1a1a1a]/60 mt-1 pl-4 border-l-2 border-[#d4af37]/30">Customers are responsible for keeping their own valuables (cash, jewelry, important documents). We are not liable for any loss.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
