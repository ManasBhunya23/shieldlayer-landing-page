import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Shield Free",
      price: "0",
      desc: "Basic protection for individuals getting started.",
      features: [
        "Basic breach check on signup",
        "Email monitoring",
        "3 alerts per month",
        "WhatsApp delivery"
      ]
    },
    {
      name: "Shield Personal",
      price: "199",
      desc: "Full protection for individuals with digital financial assets.",
      featured: true,
      features: [
        "Unlimited breach monitoring",
        "Dark web scans (continuous)",
        "SIM swap early warning",
        "Aadhaar & PAN exposure alerts",
        "WhatsApp + SMS alerts",
        "Guided response flows"
      ]
    },
    {
      name: "Shield Pro",
      price: "499",
      desc: "For individuals protecting their entire family.",
      features: [
        "Everything in Personal",
        "Up to 5 identities",
        "Phone & Aadhaar monitoring",
        "Family dashboard",
        "Priority support"
      ]
    },
    {
      name: "Shield Business",
      price: "1,999",
      desc: "For SMBs with 2–20 staff and real exposure.",
      features: [
        "Domain spoofing detection",
        "BEC & invoice fraud alerts",
        "Employee credential tracking",
        "Compliance reporting",
        "API access"
      ]
    }
  ];

  return (
    <section className="bg-bg2 py-[100px] px-6" id="pricing">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14 animate-fadeUp">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-4">Pricing</div>
          <h2 className="text-[clamp(30px,4vw,46px)] font-bold tracking-[-0.02em] leading-[1.15] text-textMain">
            The protection gap, finally filled.
          </h2>
          <p className="text-[16px] text-text2 leading-[1.7] tracking-[0.02em] mt-4 mx-auto max-w-[600px]">
            Between free antivirus and ₹5 lakh enterprise tools — ShieldLayer exists for the 500 million people in between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-7 rounded-[20px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl ${
                plan.featured 
                ? 'bg-gradient-to-br from-surface2 to-surface border border-accent shadow-[0_0_40px_rgba(255,107,53,0.18)] z-10' 
                : 'bg-surface border border-border'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold tracking-[0.1em] uppercase py-1 px-3.5 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-3 ${plan.featured ? 'text-accent' : 'text-text3'}`}>
                {plan.name}
              </div>
              
              <div className="text-[36px] font-extrabold tracking-[-0.03em] text-textMain leading-none mb-2.5">
                {plan.price !== "0" && <span className="text-[18px] font-semibold align-super mr-0.5">₹</span>}
                {plan.price !== "0" ? plan.price : `₹${plan.price}`}
                <span className="text-[13px] font-normal text-text3 tracking-normal ml-0.5">/mo</span>
              </div>
              
              <div className="text-[12.5px] text-text2 leading-[1.6] tracking-[0.02em] mb-6 min-h-[40px]">
                {plan.desc}
              </div>
              
              <div className="h-px bg-border w-full mb-6"></div>
              
              <ul className="flex flex-col gap-3 mb-7 list-none">
                {plan.features.map((feat, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-[13px] leading-[1.4] tracking-[0.02em] ${plan.featured ? 'text-textMain' : 'text-text2'}`}>
                    <Check className="w-4 h-4 text-green shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full justify-center ${plan.featured ? 'btn btn-primary' : 'btn btn-ghost'}`}>
                {plan.featured ? `Get ${plan.name}` : plan.price === "0" ? 'Get Started Free' : `Get ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
