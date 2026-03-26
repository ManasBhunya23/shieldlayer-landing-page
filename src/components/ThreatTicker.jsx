export default function ThreatTicker() {
  const alerts = [
    { highlight: "ALERT:", text: "1.4 million cybercrime complaints in India in 2023" },
    { highlight: "", text: "AI-generated phishing now bypasses 39% of email filters" },
    { highlight: "NEW BREACH:", text: "Avg credential exploitation starts within 4 hours" },
    { highlight: "", text: "UPI fraud: ₹18 lakh crore in monthly transaction volume at risk" },
    { highlight: "SIM SWAP:", text: "340% increase in voice-based social engineering (2023–2025)" },
    { highlight: "", text: "BEC attacks targeting Indian SMBs up 4x in 18 months" },
  ];

  // duplicate for seamless loop
  const tickerItems = [...alerts, ...alerts];

  return (
    <div className="bg-[rgba(239,68,68,0.06)] border-y border-[rgba(239,68,68,0.15)] py-3 overflow-hidden relative">
      <div className="flex gap-16 animate-ticker whitespace-nowrap">
        {tickerItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs font-medium tracking-[0.04em] text-text2 shrink-0">
            <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
            {item.highlight && <span className="text-red font-semibold">{item.highlight}</span>}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
