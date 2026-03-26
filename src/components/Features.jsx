import { Search, Smartphone, ShieldCheck, Briefcase, Key, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-accent" />,
      color: "orange",
      title: "Dark Web Breach Monitoring",
      desc: "Continuous scanning of breach databases and dark web dumps. The moment your email, phone, or Aadhaar appears — you know."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue" />,
      color: "blue",
      title: "SIM Swap Early Warning",
      desc: "Detects telecom portability requests targeting your number before they complete — preventing 2FA bypass attacks on your accounts."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-green" />,
      color: "green",
      title: "Domain Spoofing Detection",
      desc: "Monitors for lookalike domains registered to impersonate you or your business — catches invoice fraud and BEC attacks early."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-accent" />,
      color: "orange",
      title: "Business Email Compromise",
      desc: "Detects login anomalies, suspicious forwarding rules, and unauthorized delegate access on your business email accounts."
    },
    {
      icon: <Key className="w-5 h-5 text-blue" />,
      color: "blue",
      title: "Identity Document Exposure",
      desc: "Monitors dark web for Aadhaar and PAN data being sold — preventing fraudulent credit lines opened in your name."
    },
    {
      icon: <Zap className="w-5 h-5 text-green" />,
      color: "green",
      title: "WhatsApp Instant Alerts",
      desc: "No dashboards. No security jargon. A clear message: what happened, how serious it is, and exactly what to do in the next 10 minutes."
    }
  ];

  const getIconStyles = (color) => {
    switch (color) {
      case 'blue': return 'bg-[rgba(59,130,246,0.15)] border-[rgba(59,130,246,0.2)]';
      case 'green': return 'bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.2)]';
      default: return 'bg-[rgba(255,107,53,0.18)] border-[rgba(255,107,53,0.2)]';
    }
  };

  return (
    <section className="bg-bg2 py-[100px] px-6" id="features">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16 animate-fadeUp">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-4">What We Monitor</div>
          <h2 className="text-[clamp(30px,4vw,46px)] font-bold tracking-[-0.02em] leading-[1.15] text-textMain">
            Full-spectrum protection. Plain language alerts.
          </h2>
          <p className="text-[16px] text-text2 mt-4 leading-[1.7] tracking-[0.02em] mx-auto">
            We watch everything. You get a WhatsApp message with exactly what happened and what to do — within minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-border border border-border rounded-[20px] overflow-hidden animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          {features.map((f, i) => (
            <div key={i} className="bg-bg2 p-9 transition-colors duration-200 relative overflow-hidden group hover:bg-surface">
              {/* Top border glow effect */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className={`w-11 h-11 border rounded-[10px] flex items-center justify-center mb-5 ${getIconStyles(f.color)}`}>
                {f.icon}
              </div>
              
              <div className="text-[16px] font-bold tracking-[0.02em] mb-2.5 text-textMain">
                {f.title}
              </div>
              <div className="text-[13.5px] text-text2 leading-[1.65] tracking-[0.02em]">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
