export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Soft radial glow top center */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[600px] rounded-full bg-white opacity-[0.02] blur-[120px]"></div>
    </div>
  );
}
