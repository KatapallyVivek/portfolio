import { motion } from 'framer-motion';

export default function HeroWorkspace() {
  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] select-none pointer-events-none">
      
      {/* Code Editor */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-[10%] right-[10%] w-[320px] rounded-xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        </div>
        <div className="p-4 text-xs font-mono leading-relaxed text-text-secondary">
          <p><span className="text-purple-400">const</span> <span className="text-blue-400">build</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</p>
          <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"quality"</span>;</p>
          <p>{'}'};</p>
        </div>
      </motion.div>

      {/* Linux Terminal */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[40%] left-[5%] w-[280px] rounded-xl border border-white/10 bg-[#09090b]/90 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex items-center justify-between">
          <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Terminal</span>
        </div>
        <div className="p-4 text-xs font-mono text-text-secondary space-y-2">
          <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> whoami</p>
          <p className="text-text-primary">vivek-katapally</p>
          <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> ls</p>
          <p className="text-text-primary">countro expense-tracker</p>
        </div>
      </motion.div>

      {/* Floating Snippets */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[40%] px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono text-text-secondary"
      >
        git push origin main
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] left-[20%] px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono text-text-secondary"
      >
        &lt;Project /&gt;
      </motion.div>
    </div>
  );
}
