import React, { useState, useEffect, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ── Inline mock context so file is self-contained ──────────────────────────
const AppContext = React.createContext({ darkMode: false, setDarkMode: () => {} });

// ── Design tokens ──────────────────────────────────────────────────────────
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
`;

const STYLES = `
  :root {
    --amber:   #F59E0B;
    --amber-l: #FCD34D;
    --amber-d: #B45309;
    --ink:     #0D0C0A;
    --paper:   #FDFAF5;
    --muted:   #6B6860;
    --surface: #F5F0E8;
    --border:  rgba(245,158,11,0.18);
    --glow:    rgba(245,158,11,0.12);
  }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'DM Sans', sans-serif; background: var(--paper); color: var(--ink); }

  /* ── Grain overlay ── */
  .grain::after {
    content: '';
    position: fixed; inset: 0; pointer-events: none; z-index: 999;
    opacity: .025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
  }

  .font-display { font-family: 'Syne', sans-serif; }

  /* ── Amber glow button ── */
  .btn-amber {
    background: linear-gradient(135deg, var(--amber) 0%, var(--amber-l) 100%);
    color: #1a1200;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    letter-spacing: .02em;
    border: none;
    border-radius: 100px;
    padding: .9rem 2.2rem;
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;
    box-shadow: 0 6px 24px rgba(245,158,11,.35);
    display: inline-flex; align-items: center; gap: .55rem;
    font-size: .95rem;
  }
  .btn-amber:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(245,158,11,.45); }

  .btn-ghost {
    background: transparent;
    color: var(--ink);
    font-family: 'Syne', sans-serif; font-weight: 600;
    letter-spacing: .02em;
    border: 1.5px solid rgba(13,12,10,.15);
    border-radius: 100px;
    padding: .9rem 2.2rem;
    cursor: pointer;
    transition: border-color .2s, background .2s;
    display: inline-flex; align-items: center; gap: .55rem;
    font-size: .95rem;
  }
  .btn-ghost:hover { border-color: var(--amber); background: var(--glow); }

  /* ── Pill badge ── */
  .pill {
    display: inline-flex; align-items: center; gap: .4rem;
    background: linear-gradient(135deg, rgba(245,158,11,.1), rgba(252,211,77,.08));
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: .35rem 1rem;
    font-size: .78rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
    color: var(--amber-d);
  }

  /* ── Cards ── */
  .card-glass {
    background: rgba(255,255,255,.7);
    border: 1px solid rgba(245,158,11,.12);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0,0,0,.04);
    transition: transform .3s, box-shadow .3s;
  }
  .card-glass:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,.08); }

  /* ── Stat number ── */
  .stat-num {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    background: linear-gradient(135deg, var(--amber), var(--amber-d));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }

  /* ── Section label ── */
  .section-label {
    font-size: .72rem; font-weight: 700; letter-spacing: .16em;
    text-transform: uppercase; color: var(--amber-d);
    display: flex; align-items: center; gap: .5rem;
  }
  .section-label::before {
    content: ''; width: 24px; height: 1.5px; background: var(--amber); flex-shrink: 0;
  }

  /* ── Marquee ── */
  @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
  .marquee-inner { display: flex; width: max-content; animation: marquee 28s linear infinite; }

  /* ── FAQ accordion ── */
  details summary { list-style: none; }
  details summary::-webkit-details-marker { display: none; }
  details[open] summary .faq-icon { transform: rotate(45deg); }
  .faq-icon { transition: transform .3s; }

  /* ── Feature icon ── */
  .feat-icon {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.35rem; flex-shrink: 0;
    background: linear-gradient(135deg, rgba(245,158,11,.12), rgba(252,211,77,.07));
    border: 1px solid rgba(245,158,11,.2);
    color: var(--amber-d);
  }

  /* ── Step number ── */
  .step-num {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: 4rem; line-height: 1;
    background: linear-gradient(135deg, rgba(245,158,11,.18), rgba(245,158,11,.04));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }

  /* ── CTA strip ── */
  .cta-strip {
    background: linear-gradient(135deg, #1A1200 0%, #2D1E00 50%, #1A1200 100%);
    position: relative; overflow: hidden;
  }
  .cta-strip::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,.18), transparent);
  }

  /* ── Dashboard card ── */
  .dash-bar { height: 6px; border-radius: 100px; background: linear-gradient(90deg, var(--amber), var(--amber-l)); }

  /* ── Responsive utils ── */
  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; }
    .services-grid { grid-template-columns: 1fr !important; }
    .features-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 480px) {
    .features-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

// ── Tiny Icon components (SVG inline) ─────────────────────────────────────
const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);
const IcoAmazon  = () => <Icon size={18} d="M15.93 17.09c-.16.12-.37.13-.54.02C13.8 15.73 12.03 15 9.93 15c-1.16 0-2.3.25-3.38.73-.2.09-.44 0-.53-.2-.09-.2 0-.44.2-.53 1.2-.53 2.47-.8 3.71-.8 2.32 0 4.31.82 5.92 2.44.16.16.15.42-.02.55zm.65-1.82c-.2.15-.47.11-.62-.09-1.63-2.13-3.85-3.32-7.21-3.32-1.52 0-2.95.26-4.26.77-.24.09-.5-.03-.59-.27-.09-.24.03-.5.27-.59 1.42-.55 2.97-.84 4.58-.84 3.65 0 6.14 1.34 7.97 3.72.16.2.12.47-.08.62zm.07-1.84C14.67 11.1 11.89 10 8.5 10c-1.79 0-3.46.3-4.98.88-.28.11-.59-.03-.7-.31-.11-.28.03-.59.31-.7A17.12 17.12 0 018.5 9c3.65 0 6.69 1.2 9 3.55.22.22.22.58 0 .8-.22.22-.57.2-.79-.02z" />;
const IcoCheck   = () => <Icon size={14} d="M20 6L9 17l-5-5" />;
const IcoArrow   = () => <Icon size={15} d="M5 12h14M12 5l7 7-7 7" />;
const IcoRobot   = () => <Icon size={20} d="M12 2a2 2 0 012 2v1h3a2 2 0 012 2v2a2 2 0 01-2 2h-1v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1H5a2 2 0 01-2-2V7a2 2 0 012-2h3V4a2 2 0 012-2zm-2 7a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm-2 5v2m-4 2h8" />;
const IcoStar    = () => <Icon size={14} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />;
const IcoChart   = () => <Icon size={20} d="M3 3v18h18M18 9l-5 5-4-4-3 3" />;
const IcoShield  = () => <Icon size={20} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const IcoClock   = () => <Icon size={20} d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18v6l4 2" />;
const IcoUsers   = () => <Icon size={20} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4a3 3 0 100-6 3 3 0 000 6z" />;
const IcoPlus    = () => <Icon size={18} d="M12 5v14M5 12h14" />;
const IcoVideo   = () => <Icon size={16} d="M23 7l-7 5 7 5V7zM1 5h15a2 2 0 012 2v10a2 2 0 01-2 2H1V5z" />;
const IcoPercent = () => <Icon size={20} d="M19 5L5 19M6.5 6.5h.01M17.5 17.5h.01M6 6a.5.5 0 11-1 0 .5.5 0 011 0zm12 12a.5.5 0 11-1 0 .5.5 0 011 0z" />;

// ── Data ─────────────────────────────────────────────────────────────────
const stats = [
  { value: '245+', label: 'Stores managed',   icon: <IcoAmazon /> },
  { value: '157%', label: 'Avg. ROI increase', icon: <IcoPercent /> },
  { value: '99%',  label: 'Uptime guarantee',  icon: <IcoShield /> },
  { value: '24/7', label: 'Expert support',    icon: <IcoClock /> },
];

const services = [
  { title: 'Store Setup & Optimization', desc: 'Storefront design, brand registry, SEO, and content—built for conversion from day one.', icon: '⚙️', tag: 'Foundation' },
  { title: 'AI Product Research',        desc: 'Machine-learning scans millions of listings to surface only high-margin, low-competition products.', icon: '🧠', tag: 'Intelligence' },
  { title: 'Automated PPC Management',  desc: 'Bids optimized in real-time. ACOS cut by 45% on average with zero manual effort.', icon: '📈', tag: 'Advertising' },
  { title: 'Inventory Automation',       desc: 'Predictive reorder alerts, FBA cost optimization, and zero stockout guarantee.', icon: '📦', tag: 'Logistics' },
  { title: 'Review & Feedback Engine',  desc: 'Systematic review solicitation and reputation monitoring that keeps you at 4.8★+.', icon: '⭐', tag: 'Reputation' },
  { title: 'Analytics Dashboard',        desc: 'Real-time profits, ad spend, and market benchmarks in one clean view.', icon: '📊', tag: 'Insights' },
];

const features = [
  { title: 'AI Product Research',     stat: '90% success rate',        icon: '🔍' },
  { title: 'Auto-Pricing Engine',     stat: '+27% avg. profit',        icon: '🏷️' },
  { title: 'Review Automation',       stat: '4.8★ avg. rating',        icon: '⭐' },
  { title: 'Inventory AI',            stat: '99% stock availability',  icon: '📦' },
  { title: 'PPC Optimizer',           stat: '45% lower ACOS',          icon: '📈' },
  { title: 'Competitor Intelligence', stat: '24/7 tracking',           icon: '👁️' },
];

const steps = [
  { n: '01', title: 'Strategy Session', desc: 'We map your goals, catalog, and competitive landscape to build a custom automation blueprint.' },
  { n: '02', title: 'AI Setup',         desc: 'Our team wires every workflow—pricing, PPC, inventory, reviews—in under 14 days.' },
  { n: '03', title: 'Launch & Scale',   desc: 'Campaigns go live. AI optimizes around the clock. You watch the numbers climb.' },
  { n: '04', title: 'Continuous Growth',desc: 'Monthly strategy reviews ensure you stay ahead of Amazon algorithm changes.' },
];

const testimonials = [
  { name: 'Marcus Thompson', role: 'Amazon FBA Seller',       av: 'MT', rev: '+800%', quote: 'From $5k to $45k monthly in 6 months. The automation tools are genuinely incredible.' },
  { name: 'Sophia Chen',     role: 'E-commerce Entrepreneur', av: 'SC', rev: '+125%', quote: 'Saved 30+ hours weekly on manual tasks. Their AI optimization doubled my conversions.' },
  { name: 'David Rodriguez', role: 'Brand Owner',             av: 'DR', rev: '+350%', quote: 'Complete hands-off automation. I just check profits daily. Life-changing service.' },
];

const faqs = [
  { q: 'How quickly do you see results?',    a: 'Most clients see measurable improvements within 30 days. Full automation is live within 2 weeks.' },
  { q: 'Do I need Amazon experience?',       a: 'No. We handle everything from setup to ongoing optimization, with training and live support included.' },
  { q: 'What makes your AI different?',      a: 'Our models are trained exclusively on Amazon marketplace data and update continuously from millions of live signals.' },
  { q: 'Is there a long-term contract?',     a: 'No contracts. Month-to-month with a 30-day money-back guarantee. Zero risk to start.' },
  { q: 'Can you work with my existing store?', a: 'Absolutely. We audit, optimize, and automate existing stores or build new ones from scratch.' },
];

const marqueeItems = ['Product Research', 'PPC Management', 'Inventory AI', 'Review Engine', 'Competitor Intel', 'Profit Analytics', 'FBA Automation', 'Listing Optimization'];

// ── Sub-components ────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, y = 24, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const DashboardCard = () => {
  const bars = [42, 58, 67, 75, 82, 95, 88, 78, 88, 97, 100, 94];
  return (
    <motion.div
      className="card-glass p-6"
      initial={{ opacity: 0, scale: .97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .9, delay: .35, ease: [0.22,1,0.36,1] }}
      whileHover={{ y: -4 }}
      style={{ maxWidth: 440, width: '100%' }}
    >
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display:'flex', alignItems:'center', gap: '.65rem' }}>
          <span style={{ width:9, height:9, borderRadius:'50%', background:'#22c55e', display:'block', boxShadow:'0 0 0 3px rgba(34,197,94,.2)' }}></span>
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'.95rem' }}>Automation Dashboard</span>
        </div>
        <span style={{ background:'linear-gradient(135deg,rgba(34,197,94,.12),rgba(34,197,94,.06))', border:'1px solid rgba(34,197,94,.2)', borderRadius:100, padding:'.25rem .75rem', fontSize:'.7rem', fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color:'#15803d' }}>AI Active</span>
      </div>

      {/* KPIs */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'.75rem', marginBottom:'1.25rem' }}>
        {[{ label:"Today's Sales", val:'$4,827', color:'#16a34a' }, { label:'New Orders', val:'42', color:'#2563eb' }, { label:'Avg Rating', val:'4.8★', color:'#d97706' }].map((k,i) => (
          <div key={i} style={{ background:'rgba(245,240,232,.8)', borderRadius:14, padding:'.9rem .6rem', textAlign:'center' }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.1rem', color: k.color }}>{k.val}</div>
            <div style={{ fontSize:'.65rem', color:'#6B6860', marginTop:2 }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* AI tasks */}
      <div style={{ background:'rgba(245,158,11,.05)', border:'1px solid rgba(245,158,11,.12)', borderRadius:14, padding:'1rem', marginBottom:'1.25rem' }}>
        <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#B45309', marginBottom:'.6rem' }}>AI Completed Today</div>
        <div style={{ display:'flex', flexDirection:'column', gap:'.4rem' }}>
          {['Price optimized (+$2.14 avg)','PPC bids adjusted (-15% ACOS)','Inventory reordered (42 units)','Reviews solicited (8 new)'].map((t,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:'.5rem', fontSize:'.8rem', color:'#3d3830' }}>
              <span style={{ color:'#16a34a', flexShrink:0 }}>✓</span> {t}
            </div>
          ))}
        </div>
      </div>

      {/* Mini bar chart */}
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'.5rem' }}>
          <span style={{ fontSize:'.75rem', fontWeight:600, color:'#3d3830' }}>Monthly Revenue</span>
          <span style={{ fontSize:'.72rem', color:'#16a34a', fontWeight:600 }}>+47% vs last month</span>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:52 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              style={{ flex:1, borderRadius:'4px 4px 0 0', background:'linear-gradient(180deg,#F59E0B,#FCD34D)' }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration:.7, delay: 1 + i*.06, ease:'easeOut' }}
              className="dash-bar"
              title={`Month ${i+1}`}
            >
              <div style={{ height: `${h}%` }} className="dash-bar"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────
const Home2 = () => {
  const { darkMode } = useContext(AppContext);
  const [openFaq, setOpenFaq] = useState(null);

  // inject styles once
  useEffect(() => {
    const tag = document.createElement('style');
    tag.textContent = FONTS + STYLES;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="grain" style={{ overflowX:'hidden' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section style={{ minHeight: '92vh', display:'flex', alignItems:'center', position:'relative', paddingTop: '5rem', paddingBottom: '4rem' }}>
        {/* Soft radial glow background */}
        <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width: '55vw', height:'55vw', borderRadius:'50%', background:'radial-gradient(ellipse,rgba(245,158,11,.09),transparent 70%)', pointerEvents:'none' }}/>
          <div style={{ position:'absolute', bottom:'-15%', left:'-10%', width: '45vw', height:'45vw', borderRadius:'50%', background:'radial-gradient(ellipse,rgba(252,211,77,.06),transparent 70%)', pointerEvents:'none' }}/>
          {/* subtle dot grid */}
          <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(245,158,11,.12) 1px, transparent 1px)', backgroundSize:'32px 32px', opacity:.5 }}/>
        </div>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 1.5rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center', position:'relative', zIndex:1 }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div className="pill" initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6 }} style={{ marginBottom:'1.5rem' }}>
              <IcoAmazon /> Amazon Automation Experts
            </motion.div>

            <motion.h1
              className="font-display"
              style={{ fontSize:'clamp(2.6rem,5.5vw,4rem)', fontWeight:800, lineHeight:1.08, margin:'0 0 1.4rem', letterSpacing:'-.02em' }}
              initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7, delay:.08 }}
            >
              Fully automated<br />
              <span style={{ background:'linear-gradient(135deg,#F59E0B,#B45309)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                Amazon growth
              </span>
            </motion.h1>

            <motion.p
              style={{ fontSize:'1.1rem', lineHeight:1.7, color:'var(--muted)', maxWidth:460, margin:'0 0 2.2rem' }}
              initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:.65, delay:.18 }}
            >
              Let our AI system run your entire Amazon business—product research, PPC, inventory, and reviews.
              You focus on <strong style={{ color:'var(--ink)' }}>strategy</strong>. We handle the operations.
            </motion.p>

            <motion.div style={{ display:'flex', gap:'.85rem', flexWrap:'wrap', marginBottom:'2.8rem' }} initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, delay:.26 }}>
              <button className="btn-amber">Start Free Trial <IcoArrow /></button>
              <button className="btn-ghost" onClick={() => window.open('https://calendly.com/eliteant/30min','_blank')}>
                <IcoVideo /> Strategy Session
              </button>
            </motion.div>

            {/* Trust trio */}
            <motion.div style={{ display:'flex', gap:'2rem', flexWrap:'wrap' }} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.6, delay:.4 }}>
              {[{ val:'149', sub:'Active clients' },{ val:'4.9★', sub:'245+ reviews' },{ val:'$8.7M', sub:'Profit generated' }].map((t,i) => (
                <div key={i}>
                  <div className="font-display" style={{ fontSize:'1.45rem', fontWeight:800 }}>{t.val}</div>
                  <div style={{ fontSize:'.78rem', color:'var(--muted)' }}>{t.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <div style={{ display:'flex', justifyContent:'center', position:'relative' }}>
            {/* Decorative ring */}
            <motion.div
              style={{ position:'absolute', top:-24, right:-24, width:96, height:96, borderRadius:20, background:'linear-gradient(135deg,rgba(245,158,11,.15),rgba(252,211,77,.07))', border:'1px solid rgba(245,158,11,.25)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--amber)', fontSize:'2rem' }}
              animate={{ rotate: 360 }} transition={{ duration:22, repeat:Infinity, ease:'linear' }}
            >
              <IcoAmazon />
            </motion.div>
            {/* ROI badge */}
            <motion.div
              style={{ position:'absolute', bottom:-16, left:-16, zIndex:2, background:'rgba(255,255,255,.85)', backdropFilter:'blur(10px)', border:'1px solid rgba(245,158,11,.2)', borderRadius:16, padding:'1rem 1.2rem', textAlign:'center', boxShadow:'0 8px 24px rgba(0,0,0,.07)' }}
              animate={{ y:[0,-10,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
            >
              <div className="font-display" style={{ fontSize:'1.6rem', fontWeight:800, background:'linear-gradient(135deg,#F59E0B,#B45309)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>157%</div>
              <div style={{ fontSize:'.68rem', color:'var(--muted)' }}>Avg ROI</div>
            </motion.div>
            <DashboardCard />
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════════════ */}
      <div style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'.9rem 0', background:'rgba(245,158,11,.03)', overflow:'hidden' }}>
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ padding:'0 2.2rem', fontSize:'.78rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--muted)', whiteSpace:'nowrap' }}>
              {item} <span style={{ color:'var(--amber)', marginLeft:'2.2rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ STATS ═════════════════════════════════════════════════════════ */}
      <section style={{ padding:'5rem 1.5rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'2rem' }} className="stats-grid">
            {stats.map((s,i) => (
              <FadeIn key={i} delay={i*.08}>
                <div style={{ textAlign:'center' }}>
                  <div style={{ display:'flex', justifyContent:'center', marginBottom:'.6rem', color:'var(--amber-d)', fontSize:'1.1rem' }}>{s.icon}</div>
                  <div className="stat-num">{s.value}</div>
                  <div style={{ fontSize:'.82rem', color:'var(--muted)', marginTop:'.3rem' }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════════ */}
      <section style={{ padding:'5rem 1.5rem', background:'var(--surface)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom:'.75rem' }} className="section-label">What we do</div>
          </FadeIn>
          <FadeIn delay={.06}>
            <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:800, margin:'0 0 1rem', letterSpacing:'-.02em' }}>
              Complete Amazon automation suite
            </h2>
          </FadeIn>
          <FadeIn delay={.1}>
            <p style={{ color:'var(--muted)', fontSize:'1.05rem', maxWidth:520, marginBottom:'3rem' }}>
              Six interconnected systems that manage every layer of your Amazon business around the clock.
            </p>
          </FadeIn>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem' }} className="services-grid">
            {services.map((s,i) => (
              <FadeIn key={i} delay={i*.07}>
                <div className="card-glass" style={{ padding:'1.75rem', height:'100%' }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'1.1rem' }}>
                    <span style={{ fontSize:'1.8rem' }}>{s.icon}</span>
                    <span style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--amber-d)', background:'rgba(245,158,11,.08)', border:'1px solid var(--border)', borderRadius:100, padding:'.2rem .65rem' }}>{s.tag}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize:'1.05rem', fontWeight:700, margin:'0 0 .6rem' }}>{s.title}</h3>
                  <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.65, margin:0 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════════════════ */}
      <section style={{ padding:'5rem 1.5rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <FadeIn>
            <div className="section-label" style={{ marginBottom:'.75rem' }}>How it works</div>
          </FadeIn>
          <FadeIn delay={.05}>
            <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:800, margin:'0 0 3.5rem', letterSpacing:'-.02em' }}>
              Four steps to a hands-off Amazon business
            </h2>
          </FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'2.5rem' }} className="services-grid">
            {steps.map((s,i) => (
              <FadeIn key={i} delay={i*.09}>
                <div>
                  <div className="step-num">{s.n}</div>
                  <div style={{ width:32, height:2, background:'linear-gradient(90deg,var(--amber),transparent)', margin:'.6rem 0 1rem', borderRadius:2 }}></div>
                  <h3 className="font-display" style={{ fontWeight:700, fontSize:'1.05rem', margin:'0 0 .55rem' }}>{s.title}</h3>
                  <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.65, margin:0 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES GRID ═════════════════════════════════════════════════ */}
      <section style={{ padding:'5rem 1.5rem', background:'var(--surface)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <FadeIn>
            <div className="section-label" style={{ marginBottom:'.75rem' }}>Core features</div>
          </FadeIn>
          <FadeIn delay={.05}>
            <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:800, margin:'0 0 3rem', letterSpacing:'-.02em' }}>
              Every automation you need, built-in
            </h2>
          </FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem' }} className="features-grid">
            {features.map((f,i) => (
              <FadeIn key={i} delay={i*.06}>
                <div style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'1.4rem', background:'rgba(255,255,255,.75)', border:'1px solid rgba(245,158,11,.1)', borderRadius:18, transition:'box-shadow .2s' }}>
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <div className="font-display" style={{ fontWeight:700, fontSize:'.95rem', marginBottom:'.3rem' }}>{f.title}</div>
                    <div style={{ display:'inline-block', fontSize:'.72rem', fontWeight:700, color:'var(--amber-d)', background:'rgba(245,158,11,.08)', borderRadius:100, padding:'.15rem .65rem', letterSpacing:'.04em' }}>{f.stat}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════ */}
      <section style={{ padding:'5rem 1.5rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <FadeIn>
            <div className="section-label" style={{ marginBottom:'.75rem' }}>Client results</div>
          </FadeIn>
          <FadeIn delay={.05}>
            <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:800, margin:'0 0 3rem', letterSpacing:'-.02em' }}>
              Real numbers, real people
            </h2>
          </FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem' }} className="services-grid">
            {testimonials.map((t,i) => (
              <FadeIn key={i} delay={i*.09}>
                <div className="card-glass" style={{ padding:'1.75rem' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem' }}>
                    <div style={{ display:'flex', gap:2 }}>
                      {[...Array(5)].map((_,j) => <span key={j} style={{ color:'#F59E0B', fontSize:'.8rem' }}>★</span>)}
                    </div>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.35rem', color:'#16a34a' }}>{t.rev}</span>
                  </div>
                  <p style={{ fontSize:'.92rem', lineHeight:1.7, color:'#3d3830', fontStyle:'italic', margin:'0 0 1.4rem' }}>"{t.quote}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:'.85rem' }}>
                    <div style={{ width:40, height:40, borderRadius:'50%', background:'linear-gradient(135deg,#F59E0B,#FCD34D)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'.82rem', color:'#1a1200', flexShrink:0 }}>{t.av}</div>
                    <div>
                      <div className="font-display" style={{ fontWeight:700, fontSize:'.88rem' }}>{t.name}</div>
                      <div style={{ fontSize:'.75rem', color:'var(--muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding:'5rem 1.5rem', background:'var(--surface)' }}>
        <div style={{ maxWidth:740, margin:'0 auto' }}>
          <FadeIn>
            <div className="section-label" style={{ marginBottom:'.75rem' }}>Questions</div>
          </FadeIn>
          <FadeIn delay={.05}>
            <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:800, margin:'0 0 2.5rem', letterSpacing:'-.02em' }}>
              Frequently asked
            </h2>
          </FadeIn>
          <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
            {faqs.map((f,i) => (
              <FadeIn key={i} delay={i*.05}>
                <div style={{ background:'rgba(255,255,255,.75)', border:'1px solid rgba(245,158,11,.12)', borderRadius:16, overflow:'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1.15rem 1.4rem', background:'transparent', border:'none', cursor:'pointer', textAlign:'left', gap:'1rem' }}
                  >
                    <span className="font-display" style={{ fontWeight:600, fontSize:'.95rem' }}>{f.q}</span>
                    <span className="faq-icon" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none', transition:'transform .3s', color:'var(--amber)', flexShrink:0, fontSize:'1.2rem', fontWeight:300 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
                      transition={{ duration:.3 }}
                      style={{ padding:'0 1.4rem 1.15rem', color:'var(--muted)', fontSize:'.9rem', lineHeight:1.7 }}
                    >
                      {f.a}
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
      <section className="cta-strip" style={{ padding:'6rem 1.5rem' }}>
        <div style={{ maxWidth:780, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
          <FadeIn>
            <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:64, height:64, borderRadius:18, background:'rgba(245,158,11,.15)', border:'1px solid rgba(245,158,11,.25)', fontSize:'1.8rem', marginBottom:'1.5rem' }}>
              <IcoRobot />
            </div>
          </FadeIn>
          <FadeIn delay={.07}>
            <h2 className="font-display" style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, color:'#fff', margin:'0 0 1rem', letterSpacing:'-.02em' }}>
              Ready to automate your<br />Amazon business?
            </h2>
          </FadeIn>
          <FadeIn delay={.13}>
            <p style={{ color:'rgba(255,255,255,.65)', fontSize:'1.05rem', margin:'0 0 2.2rem', lineHeight:1.7 }}>
              Join 245+ sellers who automated their stores and increased profits by 157% on average.
            </p>
          </FadeIn>
          <FadeIn delay={.18}>
            <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
              <button className="btn-amber">Start Free Trial <IcoArrow /></button>
              <button style={{ background:'rgba(255,255,255,.08)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, border:'1.5px solid rgba(255,255,255,.2)', borderRadius:100, padding:'.9rem 2.2rem', cursor:'pointer', transition:'background .2s', display:'inline-flex', alignItems:'center', gap:'.5rem', fontSize:'.95rem' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,.13)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,.08)'}
              >
                Free Strategy Session
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={.22}>
            <p style={{ color:'rgba(255,255,255,.35)', fontSize:'.8rem', marginTop:'1.5rem' }}>
              30-day money-back guarantee · No long-term contracts · 24/7 support
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Home2;