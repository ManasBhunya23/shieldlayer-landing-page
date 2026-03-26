import { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "You tell us what to protect",
      desc: "Add your email, phone number, domain, or business name. We hash everything immediately — your plaintext data never persists on our servers."
    },
    {
      num: "02",
      title: "We watch. Constantly.",
      desc: "Our intelligence layer scans dark web databases, breach feeds, phishing registries, and fraud channels around the clock — including Telegram fraud groups targeting India."
    },
    {
      num: "03",
      title: "You get a WhatsApp alert with a clear action",
      desc: "Within minutes of a match. Plain Hindi or English. Severity level. Exact steps to take. No dashboard to log into. No confusing reports."
    },
    {
      num: "04",
      title: "You act. Problem solved in minutes.",
      desc: "Guided response flows walk you through the fix — changing passwords, contacting banks, or alerting clients — with templates and direct support links built in."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="relative overflow-hidden py-[100px] px-6" id="how">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <div className="animate-fadeUp">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-4">How It Works</div>
            <h2 className="text-[clamp(30px,4vw,46px)] font-bold tracking-[-0.02em] leading-[1.15] text-textMain max-w-[600px]">
              Protection in 3 steps. Zero technical knowledge needed.
            </h2>

            <div className="flex flex-col mt-10">
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className={`flex gap-6 py-7 border-b border-border cursor-pointer transition-all duration-200 ${i === 0 ? 'pt-0' : ''} ${i === steps.length - 1 ? 'border-b-0 pb-0' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className={`text-[11px] font-bold tracking-[0.1em] pt-1 shrink-0 w-8 transition-colors ${activeStep === i ? 'text-accent' : 'text-text3'}`}>
                    {step.num}
                  </div>
                  <div>
                    <div className={`text-[16px] font-bold tracking-[0.02em] mb-2 transition-colors duration-200 ${activeStep === i ? 'text-textMain' : 'text-text2'}`}>
                      {step.title}
                    </div>
                    <div className={`text-[13.5px] text-text3 leading-[1.65] tracking-[0.02em] overflow-hidden transition-all duration-300 ${activeStep === i ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4 bg-surface border border-border rounded-[20px] p-8 min-h-[380px] relative overflow-hidden animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(255,107,53,0.18),transparent_70%)] pointer-events-none"></div>
            
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-text3 mb-2">Live Alert Simulation</div>

            {/* WhatsApp Widget */}
            <div className="bg-[#0f1117] border border-border rounded-[14px] overflow-hidden text-[13px] shadow-lg">
              <div className="bg-[#1a2027] px-4 py-3 flex items-center gap-2.5 border-b border-border">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[14px] bg-gradient-to-br from-accent to-[#d44f1e]">
                  🛡️
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-textMain leading-tight">ShieldLayer Alerts</div>
                  <div className="text-[11px] text-green leading-tight">● Online</div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="bg-[#1e2330] p-2.5 rounded-[12px] rounded-br-[2px] max-w-[85%] text-text2 leading-[1.5]">
                  <span className="inline-block bg-[rgba(239,68,68,0.2)] text-red text-[10px] font-bold px-2 py-0.5 rounded-[4px] mb-1.5 tracking-[0.06em]">⚠ BREACH DETECTED</span>
                  <strong className="text-textMain block mb-0.5 font-semibold">Your email was found in a data breach</strong>
                  Source: "MegaDataLeak_2025" — leaked 2.1M records. Your password hash and phone number were exposed.
                  <div className="text-[11px] text-text3 mt-1 tracking-[0.03em]">Action required → Change your password immediately on all linked accounts.</div>
                </div>
              </div>
            </div>

            {/* Mock Alerts */}
            <div className="bg-bg border-l-4 border-l-red border-y border-r border-y-border border-r-border rounded-lg p-4 flex items-start gap-3.5 mt-2 animate-slideIn">
               <div className="text-[18px] shrink-0 mt-0.5">🔴</div>
               <div>
                  <div className="text-[13px] font-bold tracking-[0.02em] text-textMain mb-1">Credential Breach — High Severity</div>
                  <div className="text-[12px] text-text2 leading-[1.5]">raj.sharma@gmail.com found in MegaLeak_2025. Password hash exposed. Act within 1 hour.</div>
                  <div className="text-[11px] text-text3 mt-1 tracking-[0.03em]">3 minutes ago</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
