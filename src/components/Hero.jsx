export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-[80px] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,107,53,0.12)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(59,130,246,0.07)_0%,transparent_50%),radial-gradient(ellipse_40%_30%_at_20%_70%,rgba(255,107,53,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_80%)] pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgba(255,107,53,0.1)] border border-[rgba(255,107,53,0.25)] rounded-full text-xs font-semibold tracking-[0.08em] uppercase text-accent2 mb-7 relative animate-fadeUp">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulseSlow"></span>
        Real-time breach monitoring for India
      </div>

      <h1 className="text-[clamp(42px,7vw,80px)] font-extrabold tracking-[-0.02em] leading-[1.05] max-w-[900px] relative animate-fadeUp" style={{ animationDelay: '0.1s' }}>
        <span className="block">Your digital life</span>
        <span className="block text-accent">protected in real time.</span>
      </h1>

      <p className="text-[clamp(16px,2vw,19px)] font-normal text-text2 max-w-[560px] mt-6 mx-auto leading-[1.6] tracking-[0.02em] relative animate-fadeUp" style={{ animationDelay: '0.2s' }}>
        ShieldLayer watches the dark web, breach databases, and fraud networks so you don't have to — and alerts you on WhatsApp before damage is done.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-4 mt-10 relative animate-fadeUp" style={{ animationDelay: '0.3s' }}>
        <a href="#pricing" className="btn btn-primary btn-lg">Start Free — No Card Needed</a>
        <a href="#how" className="btn btn-outline btn-lg">See How It Works</a>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-10 mt-[72px] pt-10 border-t border-border relative animate-fadeUp w-full max-w-4xl" style={{ animationDelay: '0.4s' }}>
        <div className="text-center">
          <div className="text-[28px] font-bold text-textMain tracking-[-0.02em]">₹<span className="text-accent">11,000</span>Cr</div>
          <div className="text-[12px] text-text3 tracking-[0.04em] mt-0.5">Cybercrime losses in India, 2023</div>
        </div>
        <div className="hidden sm:block w-[1px] h-10 bg-border"></div>
        <div className="text-center">
          <div className="text-[28px] font-bold text-textMain tracking-[-0.02em]"><span className="text-accent">197</span> Days</div>
          <div className="text-[12px] text-text3 tracking-[0.04em] mt-0.5">Avg. time victims discover a breach</div>
        </div>
        <div className="hidden sm:block w-[1px] h-10 bg-border"></div>
        <div className="text-center">
          <div className="text-[28px] font-bold text-textMain tracking-[-0.02em]">Under <span className="text-accent">3hrs</span></div>
          <div className="text-[12px] text-text3 tracking-[0.04em] mt-0.5">ShieldLayer's alert window</div>
        </div>
        <div className="hidden md:block w-[1px] h-10 bg-border"></div>
        <div className="text-center">
          <div className="text-[28px] font-bold text-textMain tracking-[-0.02em]"><span className="text-accent">63M</span></div>
          <div className="text-[12px] text-text3 tracking-[0.04em] mt-0.5">Indian MSMEs unprotected</div>
        </div>
      </div>
    </section>
  );
}
