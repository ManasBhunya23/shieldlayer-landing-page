export default function TrustAndFooter() {
  return (
    <>
      {/* TRUST */}
      <section id="trust" className="py-[100px] px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="animate-fadeUp">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-4">Why Trust Us</div>
            <h2 className="text-[clamp(30px,4vw,46px)] font-bold tracking-[-0.02em] leading-[1.15] text-textMain max-w-[600px]">
              Built on a principle: your data protects you, not us.
            </h2>
            <p className="text-[16px] text-text2 leading-[1.7] tracking-[0.02em] mt-4 max-w-[520px]">
              Your plaintext email, phone, and identity data is never stored. We hash everything at ingestion — we can only match, never read.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            <div className="bg-surface border border-border rounded-[20px] p-8">
              <div className="text-[42px] font-extrabold tracking-[-0.03em] text-textMain leading-none"><span className="text-accent">Hash</span>-First</div>
              <div className="text-[13px] text-text2 leading-[1.5] tracking-[0.03em] mt-2"> Plaintext PII never touches our database. Identifiers are SHA-256 hashed at the moment of onboarding — before anything is written to disk.</div>
            </div>
            <div className="bg-surface border border-border rounded-[20px] p-8">
              <div className="text-[42px] font-extrabold tracking-[-0.03em] text-textMain leading-none">AES-<span className="text-accent">256</span></div>
              <div className="text-[13px] text-text2 leading-[1.5] tracking-[0.03em] mt-2"> All monitoring configurations are encrypted at rest using AES-256-GCM. Encryption keys managed by HashiCorp Vault, not stored alongside data.</div>
            </div>
            <div className="bg-surface border border-border rounded-[20px] p-8">
              <div className="text-[42px] font-extrabold tracking-[-0.03em] text-textMain leading-none"><span className="text-accent">Zero</span> Sell</div>
              <div className="text-[13px] text-text2 leading-[1.5] tracking-[0.03em] mt-2"> We don't sell data. We don't show ads. Our only revenue is your subscription. Misaligned incentives are a security risk — we avoid them by design.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-bg2 text-center py-[100px] px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(255,107,53,0.1),transparent_70%)] pointer-events-none"></div>
        <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-0.02em] max-w-[700px] mx-auto mb-5 relative z-10 animate-fadeUp">
          Your neighbour already lost ₹2 lakh.<br />You don't have to.
        </h2>
        <p className="text-[16px] text-text2 leading-[1.65] tracking-[0.02em] max-w-[480px] mx-auto mb-10 relative z-10 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          Start free. Get your first breach check in 60 seconds. No card needed.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4 relative z-10 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          <a href="#pricing" className="btn btn-primary btn-lg">Start Protecting Now — Free</a>
          <a href="#features" className="btn btn-outline btn-lg">See All Features</a>
        </div>
        <div className="text-[12px] text-text3 tracking-[0.03em] mt-4 relative z-10 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          No credit card · Cancel anytime · WhatsApp alerts in under 3 hours
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg border-t border-border pt-14 pb-8 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2 text-left">
              <a href="#" className="inline-flex items-center gap-2.5 no-underline">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L4 8v8c0 7.18 5.16 13.9 12 15.47C22.84 29.9 28 23.18 28 16V8L16 2z" fill="rgba(255,107,53,0.15)" stroke="#FF6B35" strokeWidth="1.5" />
                  <path d="M11 16l3.5 3.5L21 12" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[16px] font-bold tracking-[0.03em] text-textMain">
                  Shield<span className="text-accent">Layer</span>
                </span>
              </a>
              <p className="text-[13px] text-text3 leading-[1.7] tracking-[0.02em] max-w-[260px] mt-3.5">
                Digital identity and asset protection for individuals and small businesses across India. Built in Faridabad.
              </p>
            </div>
            
            <div className="text-left">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-text3 mb-4.5">Product</div>
              <ul className="flex flex-col gap-3 list-none">
                <li><a href="#features" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Pricing</a></li>
                <li><a href="#how" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">How It Works</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div className="text-left">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-text3 mb-4.5">Company</div>
              <ul className="flex flex-col gap-3 list-none">
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">About</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Blog</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Careers</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-left">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-text3 mb-4.5">Legal</div>
              <ul className="flex flex-col gap-3 list-none">
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">Security</a></li>
                <li><a href="#" className="text-[13.5px] text-text2 tracking-[0.02em] hover:text-textMain transition-colors">DPDP Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-border gap-4 text-center md:text-left">
            <div className="text-[12px] text-text3 tracking-[0.03em]">© 2026 ShieldLayer. All rights reserved. Built for India.</div>
            <ul className="flex gap-6 list-none">
              <li><a href="#" className="text-[12px] text-text3 tracking-[0.03em] transition-colors hover:text-text2">Privacy</a></li>
              <li><a href="#" className="text-[12px] text-text3 tracking-[0.03em] transition-colors hover:text-text2">Terms</a></li>
              <li><a href="#" className="text-[12px] text-text3 tracking-[0.03em] transition-colors hover:text-text2">Security</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
