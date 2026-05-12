import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Gift, ArrowRight } from 'lucide-react';
import { JOGA_CONFIG } from '../config';

export default function Section3Vault() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-[120vh] bg-black text-white py-32 px-6 relative flex flex-col items-center">
      {/* Red Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24 z-10"
      >
        <p className="text-joga-red text-[10px] font-mono tracking-[0.4em] mb-4 uppercase opacity-60">Phase_Three</p>
        <h2 className="text-[#FF0000] text-3xl md:text-5xl font-black italic uppercase leading-tight mb-12 tracking-tighter max-w-2xl mx-auto">
          "Rose, oh reiner Widerspruch, Lust,<br />Niemandes Schlaf zu sein unter soviel Lidern."
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full z-20">
        {/* Card 1: The Letter */}
        <motion.div
          whileHover={{ y: -10 }}
          className="relative group cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute inset-0 bg-joga-red opacity-10 blur-xl group-hover:opacity-30 transition-opacity" />
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-xl h-full flex flex-col justify-between hover:border-joga-red/50 transition-all">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-xl shadow-lg shadow-red-900/40">✉️</div>
              <span className="text-[10px] text-white/30 uppercase font-mono tracking-widest">Vault_Item_01</span>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-2 italic">The Handwritten Note</h3>
              <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Authorized Personnel Only</p>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-6 cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-joga-cream w-full max-w-lg p-10 md:p-16 rounded-xl relative shadow-2xl flex flex-col max-h-[90vh] text-black"
                  >
                    <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none" />
                    <div className="flex-1 overflow-y-auto space-y-6 relative pr-2 custom-scrollbar">
                      <p className="font-hand text-3xl md:text-4xl leading-relaxed text-left text-neutral-800 whitespace-pre-wrap">
                        {JOGA_CONFIG.letterText}
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="mt-8 text-xs font-tech uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all relative text-black hover:text-joga-red font-bold"
                    >
                      Close Letter <ArrowRight size={14} />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Card 2: The GC */}
        <motion.div
          whileHover={{ y: -10 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-joga-red opacity-10 blur-xl group-hover:opacity-30 transition-opacity" />
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-xl h-full flex flex-col justify-between hover:border-joga-red/50 transition-all">
            <div className="flex justify-between items-start mb-12">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xl border border-white/10">💎</div>
              <span className="text-[10px] text-white/30 uppercase font-mono tracking-widest">Vault_Item_02</span>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif italic">Gift to embrace capitalism :P</h3>
              <motion.a
                href={JOGA_CONFIG.amazonGiftCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 0, 0, 1)",
                  color: "black"
                }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: [0, -1, 1, -1, 0] }}
                transition={{ x: { duration: 0.1, repeat: Infinity } }}
                className="w-full py-4 border-2 border-joga-red text-joga-red text-xs uppercase tracking-[0.3em] font-black transition-all block text-center"
              >
                PLEASE ACCEPT 🙇
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 text-white/10 text-[8px] font-mono tracking-widest text-right">
        LOCATION: UNKNOWN // 2024_EST <br />
        DESIGNED FOR JOGA // 22ND_EDITION
      </div>
    </section>
  );
}
