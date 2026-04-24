import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-8 py-12 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 border-t border-white/10 mt-auto">
      <div className="font-black text-white text-xs mb-4 md:mb-0">
        RIZKY_DIAS
      </div>
      
      <div className="flex gap-8 mb-4 md:mb-0">
        <Link href="#" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">GITHUB</Link>
        <Link href="#" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">LINKEDIN</Link>
        <Link href="#" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">INSTAGRAM</Link>
        <Link href="#" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">READ_CV</Link>
      </div>
      
      <div>
        ©2024 RIZKY_DIAS // ALL_RIGHTS_RESERVED
      </div>
    </footer>
  );
}
