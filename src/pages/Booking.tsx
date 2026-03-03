import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Calendar, List, User, ChevronDown } from 'lucide-react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>網上報價 Get a Quote | 龍馬搬運</title>
        <meta name="description" content="填寫網上報價表格，我們將盡快為您提供準確的搬運或存倉報價。" />
      </Helmet>

      <section className="py-20 bg-[#1a1a1a] text-[#f5f2ed] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-calligraphy text-[#d4af37] mb-4">網上報價 Get a Quote</h1>
            <p className="text-[#f5f2ed]/70">填寫以下資料，我們將盡快為您提供準確報價。</p>
          </div>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#8b0000] p-8 text-center rounded-sm border border-[#d4af37]"
            >
              <h3 className="text-2xl font-semibold mb-2">感謝您的查詢！</h3>
              <p>我們已收到您的報價要求，專員將於24小時內與您聯絡。</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center"><User size={16} className="mr-2 text-[#d4af37]"/> 姓名 Name</label>
                  <input required type="text" className="w-full bg-transparent border border-white/20 rounded-none px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="陳大文 Chan Tai Man" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center"><Phone size={16} className="mr-2 text-[#d4af37]"/> 聯絡電話 Phone No.</label>
                  <input required type="tel" className="w-full bg-transparent border border-white/20 rounded-none px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="9876 5432" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center"><Calendar size={16} className="mr-2 text-[#d4af37]"/> 預計搬運日期 Service Date</label>
                <input required type="date" className="w-full bg-transparent border border-white/20 rounded-none px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors text-white [color-scheme:dark]" />
              </div>

              {/* Moving From Section */}
              <div className="space-y-4 border border-white/10 p-6 bg-white/5">
                <h3 className="text-[#d4af37] font-semibold flex items-center text-lg"><MapPin size={18} className="mr-2"/> 搬出地址 Moving From</h3>
                <textarea required rows={2} className="w-full bg-transparent border border-white/20 rounded-none px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="現居屋苑 / 大廈名稱及詳細地址 Full Address..."></textarea>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div>
                    <label className="block text-sm text-white/80 mb-3">現居地址是否需經樓梯</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer"><input type="radio" name="from_stairs" value="yes" className="mr-2 w-4 h-4 accent-[#d4af37]" required/> 有</label>
                      <label className="flex items-center cursor-pointer"><input type="radio" name="from_stairs" value="no" className="mr-2 w-4 h-4 accent-[#d4af37]"/> 沒有</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-3">現居地址是否需經平台轉電梯</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer"><input type="radio" name="from_podium" value="yes" className="mr-2 w-4 h-4 accent-[#d4af37]" required/> 有</label>
                      <label className="flex items-center cursor-pointer"><input type="radio" name="from_podium" value="no" className="mr-2 w-4 h-4 accent-[#d4af37]"/> 沒有</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-3">現居地址是否樓下可泊車</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer"><input type="radio" name="from_parking" value="yes" className="mr-2 w-4 h-4 accent-[#d4af37]" required/> 可以</label>
                      <label className="flex items-center cursor-pointer"><input type="radio" name="from_parking" value="no" className="mr-2 w-4 h-4 accent-[#d4af37]"/> 不可以</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moving To Section */}
              <div className="space-y-4 border border-white/10 p-6 bg-white/5">
                <h3 className="text-[#d4af37] font-semibold flex items-center text-lg"><MapPin size={18} className="mr-2"/> 搬入地址 Moving To</h3>
                <textarea required rows={2} className="w-full bg-transparent border border-white/20 rounded-none px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="新居屋苑 / 大廈名稱及詳細地址 Full Address..."></textarea>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div>
                    <label className="block text-sm text-white/80 mb-3">新居地址是否需經樓梯</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer"><input type="radio" name="to_stairs" value="yes" className="mr-2 w-4 h-4 accent-[#d4af37]" required/> 有</label>
                      <label className="flex items-center cursor-pointer"><input type="radio" name="to_stairs" value="no" className="mr-2 w-4 h-4 accent-[#d4af37]"/> 沒有</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-3">新居地址是否需經平台轉電梯</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer"><input type="radio" name="to_podium" value="yes" className="mr-2 w-4 h-4 accent-[#d4af37]" required/> 有</label>
                      <label className="flex items-center cursor-pointer"><input type="radio" name="to_podium" value="no" className="mr-2 w-4 h-4 accent-[#d4af37]"/> 沒有</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-3">新居地址是否樓下可泊車</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer"><input type="radio" name="to_parking" value="yes" className="mr-2 w-4 h-4 accent-[#d4af37]" required/> 可以</label>
                      <label className="flex items-center cursor-pointer"><input type="radio" name="to_parking" value="no" className="mr-2 w-4 h-4 accent-[#d4af37]"/> 不可以</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item List Section */}
              <div className="pt-8 pb-4">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-[#d4af37] inline-flex items-center border-b-2 border-[#d4af37] pb-2">
                    <List size={24} className="mr-3"/> 搬運物件清單 Item List
                  </h3>
                </div>
                
                <div className="bg-[#f5f2ed] text-[#1a1a1a] p-6 md:p-8 rounded-sm shadow-inner">
                  <div className="bg-[#e5e0d8] py-3 text-center font-semibold mb-8 flex items-center justify-center text-lg tracking-wider">
                    <span className="mr-3 text-2xl">🛏️</span> 房間傢俬 Room Furniture
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
                    {[
                      "雙人床 4-5呎", "雙人床 6呎", "單人床", "雙人油壓床", "衣帽架",
                      "雙人床褥 4-5呎闊", "雙人床褥 6呎闊", "單人床褥", "床頭櫃", "家用夾萬",
                      "子母床", "嬰兒床", "高架床", "組合床", "全身鏡",
                      "梳妝台", "平面書枱", "高身書枱", "寫字椅", "扶手椅",
                      "衣櫃 2.5呎闊或以下", "衣櫃 3呎闊", "衣櫃 4呎闊", "衣櫃 5呎闊", "衣櫃 6呎闊或以上"
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <label className="text-sm font-medium mb-3 h-10 flex items-center justify-center text-[#1a1a1a]/80">{item}</label>
                        <div className="relative w-24">
                          <select className="w-full bg-white border border-[#1a1a1a]/20 rounded-sm px-3 py-2 appearance-none focus:outline-none focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] text-center cursor-pointer">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#1a1a1a]/50">
                            <ChevronDown size={14} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#8b0000] text-white font-semibold py-4 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors border border-transparent hover:border-[#d4af37]">
                提交報價 Submit Quote Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
