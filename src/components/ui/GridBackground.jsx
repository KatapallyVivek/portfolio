export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Permanent, static drafting grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"
      ></div>
      
      {/* Very soft central glow */}
      <div className="absolute left-0 right-0 top-[20%] m-auto h-[500px] w-[800px] rounded-full bg-white opacity-[0.02] blur-[150px]"></div>
    </div>
  );
}
