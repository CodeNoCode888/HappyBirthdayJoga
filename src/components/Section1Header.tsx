import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const quote = "When I talk to you I am happy. Because you listen, and my words find a home.";
const subText = "for joga <3";

export default function Section1Header() {
  const characters = Array.from(quote);

  return (
    <section className="h-screen w-full flex flex-col justify-between p-8 bg-joga-cream relative overflow-hidden border-b border-black/5">
      <div className="mt-40 max-w-2xl mx-auto md:mx-0">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8 font-mono"
        >
          Entry_Sequence_01
        </motion.p>
        
        <div className="mb-4">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeIn"
              }}
              className="text-3xl md:text-5xl font-serif leading-relaxed italic text-neutral-800"
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: characters.length * 0.05 + 0.5, duration: 1 }}
          className="mt-4 text-sm md:text-base font-light text-neutral-500 tracking-widest"
        >
          {subText}
        </motion.p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-neutral-300 rounded-full"></div>
        </motion.div>
        <span className="text-[10px] mt-2 uppercase tracking-tighter text-neutral-400 font-mono">scroll_digicam.exe</span>
      </div>
    </section>
  );
}
