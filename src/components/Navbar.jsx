import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-[68px] bg-glass border-b transition-colors duration-200 ${scrolled ? 'border-white/10' : 'border-border'}`}>
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L4 8v8c0 7.18 5.16 13.9 12 15.47C22.84 29.9 28 23.18 28 16V8L16 2z" fill="rgba(255,107,53,0.15)" stroke="#FF6B35" strokeWidth="1.5" />
          <path d="M11 16l3.5 3.5L21 12" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg font-bold tracking-[0.03em] text-textMain">
          Shield<span className="text-accent">Layer</span>
        </span>
      </a>
      
      <ul className="hidden md:flex items-center gap-9 list-none">
        <li><a href="#features" className="text-text2 no-underline text-[13px] font-medium tracking-[0.04em] transition-colors hover:text-textMain">Features</a></li>
        <li><a href="#how" className="text-text2 no-underline text-[13px] font-medium tracking-[0.04em] transition-colors hover:text-textMain">How it Works</a></li>
        <li><a href="#pricing" className="text-text2 no-underline text-[13px] font-medium tracking-[0.04em] transition-colors hover:text-textMain">Pricing</a></li>
        <li><a href="#trust" className="text-text2 no-underline text-[13px] font-medium tracking-[0.04em] transition-colors hover:text-textMain">Trust</a></li>
      </ul>
      
      <div className="flex items-center gap-3">
        <a href="#" className="btn btn-ghost hidden sm:inline-flex">Log In</a>
        <a href="#pricing" className="btn btn-primary">Get Protected</a>
      </div>
    </nav>
  );
}
