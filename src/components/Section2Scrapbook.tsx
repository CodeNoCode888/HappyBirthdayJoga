import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { JOGA_CONFIG } from '../config';

const STICKERS = [
  { icon: "✨", label: "GLITTER", x: 25, y: 30 },
  { icon: "💋", label: "KISS", x: 70, y: 25 },
  { icon: "🎀", label: "BOW", x: 18, y: 80 },
  { icon: "⭐", label: "STAR", x: 75, y: 85 },
  { icon: "💿", label: "DISCO", x: 48, y: 15 },
];

const RANSOM_STYLES = [
  "bg-white text-black -rotate-3",
  "bg-pink-400 text-white rotate-6",
  "bg-yellow-300 text-black -rotate-12",
  "bg-black text-white rotate-2 italic"
];

export default function Section2Scrapbook() {
  const [isBlown, setIsBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);
  const [showFoam, setShowFoam] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartBlow = () => {
    if (isBlown) return;
    setIsBlowing(true);
    timerRef.current = setTimeout(() => {
      handleBlowOut();
    }, 1500); 
  };

  const handleEndBlow = () => {
    setIsBlowing(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleBlowOut = () => {
    setIsBlown(true);
    setIsBlowing(false);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD1DC', '#ff0000', '#ffffff', '#FFD700']
    });
    
    setTimeout(() => {
      setShowFoam(true);
    }, 1000);
  };

  return (
    <section className="min-h-screen w-full bg-[#f8f8f8] py-24 px-6 relative overflow-hidden flex flex-col items-center border-t border-black/5">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      {/* Ransom Note Header */}
      <div className="ransom-text mb-20 flex flex-wrap justify-center max-w-2xl z-20">
        {"HB D!".split(" ").map((word, wordIdx) => (
          <div key={wordIdx} className="flex mx-2">
            {word.split("").map((char, charIdx) => {
              const style = RANSOM_STYLES[(wordIdx + charIdx) % RANSOM_STYLES.length];
              return (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (wordIdx * 5 + charIdx) * 0.05 }}
                  className={`text-5xl md:text-7xl p-3 font-bold border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)] transform ${style}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center gap-24 z-20 pb-32">
        {/* Cat Stickers Scattered Around (No Frames) */}
        <CatStickers />

        {/* Vintage Digicam (Canon-esque style) */}
        <motion.div 
          className="relative z-20"
          initial={{ rotate: -2 }}
          whileInView={{ rotate: 1 }}
        >
          <div className="bg-[#dcdcdc] p-4 md:p-8 rounded-[40px] shadow-2xl border-4 border-t-[#eee] border-l-[#eee] border-r-[#999] border-b-[#999] relative">
            {/* Lens details */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-20 bg-[#999] rounded-full border-2 border-[#888]" />
            <div className="absolute right-8 top-8 w-12 h-8 bg-[#333] rounded-md border-2 border-[#555] flex items-center justify-center">
              <div className="w-4 h-4 bg-red-600 rounded-full blur-[1px] animate-pulse" />
            </div>

            {/* Viewfinder Area */}
            <div className="bg-[#111] p-2 rounded-xl relative overflow-hidden group border-4 border-inset border-[#888]">
              <div className="w-[280px] md:w-[420px] aspect-[4/3] relative font-mono overflow-hidden">
                <img 
                  src={JOGA_CONFIG.mainPhotoUrl} 
                  alt="Joga" 
                  className="w-full h-full object-cover grayscale brightness-110 opacity-90 group-hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Viewfinder HUD */}
                <div className="absolute inset-0 p-4 font-mono text-[10px] text-green-400 pointer-events-none flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div>● REC</div>
                      <div>AUTO</div>
                    </div>
                    <div>[ 22 / 2002 ]</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-2">
                       <div className="w-4 h-2 bg-green-500 rounded-sm" />
                       <div>100%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 border border-green-400 rounded-full flex items-center justify-center opacity-30">
                        <div className="w-1 h-1 bg-green-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shaving Foam Overlay */}
                <AnimatePresence>
                  {showFoam && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                    >
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                      <svg className="w-full h-full text-white fill-current opacity-90 drop-shadow-lg p-6">
                        <text 
                          x="50%" 
                          y="50%" 
                          dominantBaseline="middle" 
                          textAnchor="middle" 
                          className="font-hand text-xl md:text-3xl"
                          transform="rotate(-5)"
                        >
                          HAPPY BIRTHDAY JOGA
                        </text>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Rear Buttons */}
            <div className="mt-6 flex justify-between items-end px-4">
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-[#ccc] border-2 border-t-white border-l-white border-r-[#888] border-b-[#888] rounded-full flex items-center justify-center shadow-md">
                   <div className="w-6 h-6 bg-[#999] rounded-full border border-black/20" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="w-6 h-2 bg-[#999] rounded-full" />
                   <div className="w-6 h-2 bg-[#999] rounded-full" />
                 </div>
               </div>
               <div className="text-[#888] font-mono text-[10px] tracking-widest pb-2 uppercase">
                 Canon PowerShot
               </div>
            </div>
          </div>

          {/* Decorations touching camera */}
          <div className="absolute -top-12 -right-8 text-7xl transform rotate-12 z-30 drop-shadow-xl">🎀</div>
          <div className="absolute -bottom-8 -left-8 text-6xl transform -rotate-12 z-30 drop-shadow-xl">💋</div>
        </motion.div>

        {/* Cake Section */}
        <div className="flex flex-col items-center gap-12 relative z-20">
          <div className="relative">
            {/* Y2K Fancy Cake */}
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="w-48 h-40 flex flex-col items-center justify-end relative"
            >
               {/* Sparkle around cake */}
               <div className="absolute inset-0 -translate-y-12 flex items-center justify-center pointer-events-none z-30">
                  <div className="text-4xl animate-pulse">✨</div>
               </div>

               {/* 3rd Tier */}
               <div className="w-24 h-8 bg-pink-50 border-x-4 border-white relative z-20 rounded-t-xl shadow-inner overflow-hidden">
                  <div className="w-full h-2 bg-white/60 border-b border-pink-100" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-black text-pink-300">🎀</div>
               </div>
               {/* 2nd Tier */}
               <div className="w-36 h-10 bg-pink-100 border-x-4 border-white relative z-10 shadow-lg">
                  <div className="absolute top-0 w-full h-3 bg-white flex justify-around">
                     {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-pink-50 rounded-full" />)}
                  </div>
               </div>
               {/* 1st Tier */}
               <div className="w-52 h-16 bg-pink-200 border-x-4 border-b-4 border-white relative shadow-[0_8px_0_#e0e0e0] rounded-lg">
                  <div className="absolute -top-1 w-full h-4 bg-white flex justify-around">
                     {[...Array(8)].map((_, i) => (
                       <div key={i} className="w-4 h-4 bg-white rounded-full -mt-2" />
                     ))}
                  </div>
                  <div className="text-[12px] text-pink-600 font-mono text-center mt-6 uppercase font-black tracking-[0.3em] bg-white/40 py-1 border-y border-white">
                    VINTAGE // 22
                  </div>
               </div>
               
               {/* 22 Candles */}
               <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-6 z-20">
                  <NumberCandle active={!isBlown} isBlowing={isBlowing && !isBlown} />
                  <NumberCandle active={!isBlown} isBlowing={isBlowing && !isBlown} />
               </div>

               {/* Tiara on top tier */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl z-30">👑</div>
            </motion.div>
          </div>

          <button
            onMouseDown={handleStartBlow}
            onMouseUp={handleEndBlow}
            onTouchStart={handleStartBlow}
            onTouchEnd={handleEndBlow}
            className={`px-12 py-5 rounded-full text-[14px] tracking-[0.3em] uppercase font-black border-4 transition-all select-none shadow-2xl relative group overflow-hidden
              ${isBlown 
                ? 'bg-neutral-100 text-neutral-300 border-neutral-200' 
                : 'bg-black text-white border-white hover:bg-white hover:text-black active:scale-95'}`}
            disabled={isBlown}
          >
            <span className="relative z-10">{isBlown ? 'HAPPY BIRTHDAY!' : 'Press & Hold to Blow ✨'}</span>
            {!isBlown && (
              <motion.div 
                className="absolute inset-0 bg-pink-500/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isBlowing ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "linear" }}
                style={{ originX: 0 }}
              />
            )}
          </button>
        </div>
      </div>

      <Stickers />
    </section>
  );
}

function NumberCandle({ active, isBlowing }: { active: boolean, isBlowing: boolean }) {
  return (
    <div className="relative">
      <div className="text-6xl font-black text-blue-400 drop-shadow-[3px_3px_0_white] select-none italic transform -skew-x-6">
        2
      </div>
      {active && (
        <motion.div 
          animate={{ 
            scale: isBlowing ? [1, 0.8, 1.2, 0.5] : [1, 1.1, 1],
            rotate: isBlowing ? [0, -20, 20, -10] : [0, 5, -5, 0]
          }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-8 bg-orange-400 rounded-full blur-[1px] z-10 shadow-[0_0_15px_rgba(251,146,60,0.8)]"
        >
          <div className="w-full h-full bg-yellow-200 rounded-full scale-50" />
        </motion.div>
      )}
    </div>
  );
}

function CatStickers() {
  return (
    <>
      {JOGA_CONFIG.catFrames.map((cat, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={{ top: -300, left: -600, right: 600, bottom: 300 }}
          className="absolute w-28 h-32 md:w-40 md:h-48 cursor-grab active:cursor-grabbing z-30 pointer-events-auto flex flex-col items-center justify-start p-2 bg-white shadow-xl rotate-[var(--rand-rot)]"
          style={{
            top: `${cat.y}%`,
            left: `${cat.x}%`,
            rotate: i % 2 === 0 ? '-5deg' : '5deg',
          } as any}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
        >
          <div className="w-full aspect-square border-2 border-neutral-100 bg-neutral-50 flex items-center justify-center relative overflow-hidden">
             {cat.url ? (
               <img 
                 src={cat.url} 
                 alt={cat.label} 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   // Fallback if image doesn't exist yet
                   (e.target as HTMLImageElement).style.display = 'none';
                 }}
               />
             ) : (
               <div className="absolute inset-0 opacity-10 paper-texture" />
             )}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[8px] md:text-[10px] text-neutral-400 font-mono text-center px-4 leading-tight uppercase font-black tracking-widest opacity-20">
                   {cat.label}
                </div>
             </div>
          </div>
          <div className="flex-1 flex items-center justify-center w-full">
            <span className="font-hand text-[10px] md:text-[12px] text-neutral-500 opacity-80">{cat.label}</span>
          </div>
          
          {cat.label.includes("01") && <div className="absolute top-1/2 left-1/2 text-2xl">🚬</div>}
          {cat.label.includes("02") && <div className="absolute top-1/4 left-1/4 text-xl">💧</div>}
          {cat.label.includes("03") && <div className="absolute bottom-4 left-0 text-4xl">💐</div>}
          {cat.label.includes("05") && <div className="absolute -top-4 -right-4 text-3xl">🎀</div>}
          {cat.label.includes("09") && <div className="absolute top-0 right-0 text-2xl animate-pulse">🦋</div>}
        </motion.div>
      ))}
    </>
  );
}

function Stickers() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-50">
      {STICKERS.map((sticker, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center"
          style={{
            top: `${sticker.y}%`,
            left: `${sticker.x}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [sticker.icon === '🎀' ? 0 : -10, 10, sticker.icon === '🎀' ? 0 : -10],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
        >
          <div className="text-6xl md:text-8xl drop-shadow-lg">{sticker.icon}</div>
        </motion.div>
      ))}
    </div>
  );
}
