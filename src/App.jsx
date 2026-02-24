import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Crown, Activity, Star,
    Wallet, PieChart, Award, Network, Users,
    Globe, ShieldCheck, Lock, CheckCircle
} from 'lucide-react';

/* ── Ornamental Divider ────────────────────────── */
const Divider = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 auto 20px', maxWidth: 320, justifyContent: 'center' }}>
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(to right,transparent,#D4AF37)' }} />
        <div style={{ width: 7, height: 7, background: '#D4AF37', borderRadius: '50%' }} />
        <div style={{ width: 5, height: 5, background: '#D4AF37', borderRadius: '50%', opacity: .5 }} />
        <div style={{ width: 7, height: 7, background: '#D4AF37', borderRadius: '50%' }} />
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(to left,transparent,#D4AF37)' }} />
    </div>
);

/* ── Stat Pill ─────────────────────────────────── */
const Stat = ({ val, lbl }) => (
    <div>
        <div style={{
            fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '2rem',
            background: 'linear-gradient(135deg,#FFD700,#B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>{val}</div>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: 2, opacity: .4, textTransform: 'uppercase' }}>{lbl}</div>
    </div>
);

/* ── Mini Phone ────────────────────────────────── */
const Phone = ({ theme, delay, rotateZ, tx, zIndex, label, earnings, stats }) => {
    const acc = theme === 'gold' ? '#B8860B' : theme === 'silver' ? '#444' : '#D4AF37';
    const cls = `mobile-shell phone-${theme}`;
    return (
        <motion.div className={cls}
            initial={{ opacity: 0, scale: .8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateZ, x: tx }}
            transition={{ duration: 1.1, delay, ease: 'easeOut' }}
            style={{ zIndex }}
            whileHover={{ y: -14, scale: 1.04, zIndex: 50 }}>
            <div className="mobile-inner">
                <div className="mobile-top-bar" />
                <div style={{ padding: '30px 13px 13px', height: '100%', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '.5rem', opacity: .4, textTransform: 'uppercase', letterSpacing: 2 }}>{label}</div>
                            <div style={{ fontWeight: 900, fontSize: '.85rem' }}>IVAMAX Pro</div>
                        </div>
                        <div style={{ width: 26, height: 26, borderRadius: '50%', background: acc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Star size={11} color="white" />
                        </div>
                    </div>

                    <div style={{
                        background: theme === 'gold' ? 'linear-gradient(135deg,#FFD700,#B8860B)' : '#f7f7f7',
                        border: theme === 'gold' ? 'none' : '1px solid #eee',
                        padding: '11px', borderRadius: 14,
                        color: theme === 'gold' ? 'white' : '#111'
                    }}>
                        <div style={{ fontSize: '.52rem', opacity: .6, marginBottom: 3 }}>Portfolio Value</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900 }}>{earnings}</div>
                    </div>

                    {stats.map((s, i) => (
                        <div key={i} style={{
                            background: '#fff', border: '1px solid #f0f0f0', padding: '7px 11px',
                            borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                                <span style={{ color: acc }}>{s.icon}</span>
                                <span style={{ fontWeight: 700, fontSize: '.62rem' }}>{s.name}</span>
                            </div>
                            <span style={{ fontWeight: 900, fontSize: '.67rem' }}>{s.val}</span>
                        </div>
                    ))}

                    <div style={{
                        marginTop: 'auto', paddingTop: 7, borderTop: '1px solid #f0f0f0',
                        display: 'flex', justifyContent: 'space-around', opacity: .25
                    }}>
                        <Wallet size={12} /><PieChart size={12} /><Award size={12} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════
   APP
═══════════════════════════════════════════════ */
export default function App() {
    return (
        <div style={{ background: '#fff', fontFamily: "'Outfit',sans-serif" }}>
            <div className="bg-meshgrid" />

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 1 – HERO                      ║
          ╚══════════════════════════════════════╝ */}
            <section style={{ background: 'linear-gradient(158deg,#fff 55%,#FDF8E8 100%)', minHeight: '100vh', overflow: 'hidden' }}>
                <div className="stage-floor" />
                <div className="container">
                    <div className="grid-2" style={{ gap: 32 }}>

                        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9 }}>
                            <div className="section-tag">GLOBAL FOUNDER NETWORK · EST. 2024</div>
                            <h1 className="display-title" style={{ marginBottom: 14 }}>
                                <span className="shimmer-gold-text">IVAMAX</span><br />
                                MULTI-ASSET EMPIRE.
                            </h1>
                            <p className="p-body" style={{ maxWidth: 440, marginBottom: 28 }}>
                                The world's most sophisticated Binary Royalty System — built for elite founders,
                                designed for generational wealth across 85+ countries.
                            </p>
                            <div style={{ display: 'flex', gap: 36 }}>
                                <Stat val="12k+" lbl="Founders" />
                                <Stat val="85+" lbl="Countries" />
                                <Stat val="$2,500" lbl="Max/Month" />
                            </div>
                        </motion.div>

                        <div className="phone-stack">
                            <Phone theme="silver" delay={.5} rotateZ={-13} tx={-130} zIndex={10}
                                label="NODE-ALPHA" earnings="$8,240"
                                stats={[{ name: 'Staking', val: '4.2%', icon: <Zap size={11} /> }, { name: 'Network', val: '1.2k', icon: <Network size={11} /> }]} />
                            <Phone theme="gold" delay={.15} rotateZ={0} tx={0} zIndex={30}
                                label="FOUNDER ELITE" earnings="$42,100"
                                stats={[{ name: 'Staking', val: '12.5%', icon: <Zap size={11} /> }, { name: 'Royalty', val: '$2,500', icon: <Crown size={11} /> }, { name: 'Network', val: '52k', icon: <Users size={11} /> }]} />
                            <Phone theme="white" delay={.7} rotateZ={13} tx={130} zIndex={10}
                                label="NODE-BETA" earnings="$12,800"
                                stats={[{ name: 'Staking', val: '6.8%', icon: <Zap size={11} /> }, { name: 'Network', val: '4.8k', icon: <Network size={11} /> }]} />
                        </div>

                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 2 – BRP ECOSYSTEM             ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 36 }}>
                        <div className="section-tag mx-auto">THE INCOME SYSTEM</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', marginBottom: 10 }}>
                            BRP <span className="gold-text">Ecosystem</span>
                        </h2>
                        <p className="p-body" style={{ maxWidth: 480, margin: '0 auto' }}>
                            Three revenue streams engineered for exponential generational wealth.
                        </p>
                    </div>

                    <div className="grid-2" style={{ gap: 36 }}>
                        {/* Left — Animated Crypto Metric Cards Grid */}
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                                {[
                                    { icon: '₿', label: 'Binary Royalty', value: '$2,500/mo', sub: 'Per Cycle', bg: '#FFF8E0', border: '#D4AF37', ic: '#B8860B' },
                                    { icon: '👥', label: 'Active Network', value: '52,000+', sub: 'Founders Live', bg: '#F0FFF4', border: '#16a34a', ic: '#15803d' },
                                    { icon: '📈', label: 'IMX Token ROI', value: '100×', sub: '$0.10 → $10', bg: '#EFF6FF', border: '#2563eb', ic: '#1d4ed8' },
                                    { icon: '👑', label: 'Founder VIP', value: 'Top Rank', sub: 'Elite Status', bg: '#FAF5FF', border: '#9333ea', ic: '#7e22ce' },
                                    { icon: '⚡', label: 'Daily Staking', value: '12.5% APY', sub: 'Compounding', bg: '#FFF7ED', border: '#ea580c', ic: '#c2410c' },
                                    { icon: '🌍', label: 'Global Reach', value: '85 Nations', sub: 'Worldwide', bg: '#F0FDFA', border: '#0891b2', ic: '#0e7490' },
                                ].map((c, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 20, scale: 0.92 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ delay: i * 0.08, duration: 0.45, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -6, scale: 1.03 }}
                                        style={{
                                            background: c.bg, border: `2px solid ${c.border}`,
                                            borderRadius: 20, padding: '16px 18px',
                                            boxShadow: `0 6px 20px ${c.border}22`, cursor: 'default'
                                        }}>
                                        <div style={{ fontSize: '1.6rem', marginBottom: 6 }}>{c.icon}</div>
                                        <div style={{ fontSize: '.65rem', fontWeight: 800, letterSpacing: 2, color: c.ic, textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
                                        <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.2rem', color: '#111', lineHeight: 1.1 }}>{c.value}</div>
                                        <div style={{ fontSize: '.68rem', color: '#888', marginTop: 3, fontWeight: 600 }}>{c.sub}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Income types */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {[
                                { icon: Activity, title: 'Binary Pair Matching Royalty', desc: 'Earn on every matched pair — left meets right, and income flows instantly.' },
                                { icon: Users, title: 'Direct Referral Royalty', desc: 'Earn instant rewards for every new founder you bring into the network.' },
                                { icon: Crown, title: 'Founder Club Royalty', desc: 'Ascend to the elite board and share in global ecosystem monthly profits.' },
                            ].map((item, i) => (
                                <motion.div key={i} initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * .12 }} viewport={{ once: true }}
                                    style={{
                                        display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 22px',
                                        background: 'white', borderRadius: 22, border: '2px solid #222',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
                                    }}>
                                    <div className="icon-gold"><item.icon size={22} color="white" /></div>
                                    <div>
                                        <h4 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1rem', marginBottom: 4 }}>{item.title}</h4>
                                        <p style={{ color: '#777', fontSize: '.85rem', lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 3 – BINARY MATCHING           ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>

                        {/* ── LEFT: Info + Rules ── */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="section-tag">HOW IT WORKS</div>
                            <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.7rem)', marginBottom: 16 }}>
                                Binary <span className="gold-text">Matching</span> System
                            </h2>
                            <p className="p-body" style={{ marginBottom: 22 }}>
                                Two powerful legs — Left & Right. Every matched pair generates instant royalty income.
                            </p>

                            {/* Rule Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {[
                                    { num: '01', text: 'Two Legs — Left Side & Right Side', color: '#D4AF37' },
                                    { num: '02', text: 'Matching based on the Minimum Count', color: '#16a34a' },
                                    { num: '03', text: 'Unlimited Spillover from your direct line', color: '#2563eb' },
                                    { num: '04', text: 'Real-time Pair Calculation & Payout', color: '#9333ea' },
                                ].map((rule, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                                        whileHover={{ x: 6 }}
                                        style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#fff', border: '2px solid #f0f0f0', borderRadius: 16, padding: '12px 16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                                        <div style={{ width: 38, height: 38, borderRadius: 12, background: `${rule.color}15`, border: `2px solid ${rule.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <span style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '.75rem', color: rule.color }}>{rule.num}</span>
                                        </div>
                                        <span style={{ fontWeight: 600, fontSize: '.9rem', color: '#333' }}>{rule.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Formula box */}
                            <div style={{ marginTop: 18, background: '#FDF8E8', borderRadius: 16, padding: '14px 20px', border: '1.5px solid #E8D8A0', display: 'flex', gap: 16, alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '.62rem', fontWeight: 800, letterSpacing: 3, color: '#aaa', marginBottom: 4 }}>FORMULA</div>
                                    <code style={{ fontSize: '1rem', fontWeight: 900, color: '#8B6E27', fontFamily: 'monospace' }}>Pairs = Min(Left IDs, Right IDs)</code>
                                </div>
                                <div style={{ borderLeft: '2px solid #E8D8A0', paddingLeft: 16, flexShrink: 0 }}>
                                    <div style={{ fontSize: '.62rem', fontWeight: 800, letterSpacing: 2, color: '#aaa', marginBottom: 3 }}>EXAMPLE</div>
                                    <div style={{ fontWeight: 900, color: '#D4AF37', fontSize: '1rem' }}>15 Pairs</div>
                                    <div style={{ fontSize: '.7rem', color: '#888' }}>L=20, R=15</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── RIGHT: Premium Binary Tree ── */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ background: '#fff', border: '2px solid #222', borderRadius: 28, padding: '28px 24px 20px', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}>
                                {/* Tree SVG */}
                                <svg viewBox="0 0 400 300" width="100%" style={{ overflow: 'visible' }}>
                                    <defs>
                                        <radialGradient id="youGrad" cx="35%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="#FFF5A0" />
                                            <stop offset="40%" stopColor="#FFD700" />
                                            <stop offset="100%" stopColor="#8B6E27" />
                                        </radialGradient>
                                        <radialGradient id="abGrad" cx="35%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="#fff" />
                                            <stop offset="100%" stopColor="#f5f5f5" />
                                        </radialGradient>
                                        <filter id="nodeShadow">
                                            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B8860B" floodOpacity="0.25" />
                                        </filter>
                                        <filter id="nodeShadowSm">
                                            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.08" />
                                        </filter>
                                        <marker id="mArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                                            <path d="M0,0 L8,4 L0,8 Z" fill="#222" />
                                        </marker>
                                        <marker id="mArrowGold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                                            <path d="M0,0 L8,4 L0,8 Z" fill="#D4AF37" />
                                        </marker>
                                    </defs>

                                    {/* Connecting lines YOU→A, YOU→B */}
                                    <line x1="200" y1="64" x2="100" y2="148" stroke="#222" strokeWidth="2.5" markerEnd="url(#mArrow)" />
                                    <line x1="200" y1="64" x2="300" y2="148" stroke="#222" strokeWidth="2.5" markerEnd="url(#mArrow)" />

                                    {/* A→ spillover C,D */}
                                    <line x1="88" y1="178" x2="48" y2="248" stroke="#D4AF37" strokeWidth="1.8" strokeDasharray="5,4" markerEnd="url(#mArrowGold)" />
                                    <line x1="112" y1="178" x2="140" y2="248" stroke="#D4AF37" strokeWidth="1.8" strokeDasharray="5,4" markerEnd="url(#mArrowGold)" />

                                    {/* Leg Labels */}
                                    <rect x="50" y="108" width="80" height="24" rx="12" fill="#16a34a15" stroke="#16a34a40" strokeWidth="1.5" />
                                    <text x="90" y="124" textAnchor="middle" style={{ fontSize: 10, fontWeight: 800, fill: '#16a34a', letterSpacing: 1.5 }}>LEFT LEG</text>
                                    <rect x="270" y="108" width="82" height="24" rx="12" fill="#2563eb15" stroke="#2563eb40" strokeWidth="1.5" />
                                    <text x="311" y="124" textAnchor="middle" style={{ fontSize: 10, fontWeight: 800, fill: '#2563eb', letterSpacing: 1.5 }}>RIGHT LEG</text>

                                    {/* YOU Node */}
                                    <circle cx="200" cy="42" r="40" fill="url(#youGrad)" filter="url(#nodeShadow)" stroke="#8B6E27" strokeWidth="3" />
                                    <text x="200" y="47" textAnchor="middle" style={{ fontWeight: 900, fontSize: 14, fill: '#fff', fontFamily: 'serif', letterSpacing: 1 }}>YOU</text>

                                    {/* A Node */}
                                    <circle cx="100" cy="164" r="32" fill="url(#abGrad)" filter="url(#nodeShadowSm)" stroke="#222" strokeWidth="2.5" />
                                    <text x="100" y="170" textAnchor="middle" style={{ fontWeight: 900, fontSize: 16, fill: '#111', fontFamily: 'serif' }}>A</text>

                                    {/* B Node */}
                                    <circle cx="300" cy="164" r="32" fill="url(#abGrad)" filter="url(#nodeShadowSm)" stroke="#222" strokeWidth="2.5" />
                                    <text x="300" y="170" textAnchor="middle" style={{ fontWeight: 900, fontSize: 16, fill: '#111', fontFamily: 'serif' }}>B</text>

                                    {/* Spillover C,D (dashed) */}
                                    <circle cx="44" cy="264" r="24" fill="#FFF8E0" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,3" />
                                    <text x="44" y="270" textAnchor="middle" style={{ fontWeight: 800, fontSize: 13, fill: '#B8860B', fontFamily: 'serif' }}>C</text>
                                    <circle cx="144" cy="264" r="24" fill="#FFF8E0" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,3" />
                                    <text x="144" y="270" textAnchor="middle" style={{ fontWeight: 800, fontSize: 13, fill: '#B8860B', fontFamily: 'serif' }}>D</text>

                                    {/* Spillover label */}
                                    <text x="200" y="295" textAnchor="middle" style={{ fontSize: 9, fill: '#aaa', fontWeight: 800, letterSpacing: 3 }}>SPILLOVER NODES</text>

                                    {/* ✓ Pair match indicator */}
                                    <rect x="160" y="100" width="80" height="28" rx="14" fill="#D4AF37" />
                                    <text x="200" y="118" textAnchor="middle" style={{ fontSize: 11, fontWeight: 900, fill: '#fff', letterSpacing: 1 }}>✓ MATCHED</text>
                                </svg>

                                {/* Stat Pills Row */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginTop: 16 }}>
                                    {[
                                        { lbl: 'Left IDs', val: '20', clr: '#16a34a' },
                                        { lbl: 'Right IDs', val: '15', clr: '#2563eb' },
                                        { lbl: 'Matched', val: '15', clr: '#D4AF37' },
                                        { lbl: 'Carry', val: '5', clr: '#9333ea' },
                                    ].map((s, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                                            style={{ textAlign: 'center', background: `${s.clr}0d`, border: `1.5px solid ${s.clr}35`, borderRadius: 12, padding: '8px 6px' }}>
                                            <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.3rem', color: s.clr }}>{s.val}</div>
                                            <div style={{ fontSize: '.6rem', fontWeight: 800, color: '#888', letterSpacing: 1.5, textTransform: 'uppercase' }}>{s.lbl}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 4 – PRICE PROGRESSION         ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: 24 }}>
                        <div className="section-tag mx-auto">TOKEN ECONOMICS</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', marginBottom: 6 }}>
                            Entry Price <span className="gold-text">Progression</span>
                        </h2>
                        <p className="p-body">Three phases delivering exponential returns for early founders.</p>
                    </div>

                    {/* ── Price Track Bar ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ background: 'white', border: '2px solid #222', borderRadius: 22, padding: '18px 32px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 0, overflow: 'hidden', position: 'relative' }}>
                        {/* bg glow */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#FFFBEA,#fff 60%)', pointerEvents: 'none' }} />
                        {[
                            { price: '$0.10', label: 'Entry', clr: '#16a34a' },
                            { price: '$0.20', label: 'Phase 1', clr: '#D4AF37' },
                            { price: '$1.00', label: 'Phase 2', clr: '#ea580c' },
                            { price: '$10.00', label: 'Listing', clr: '#7c3aed' },
                        ].map((p, i, arr) => (
                            <React.Fragment key={i}>
                                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.18, type: 'spring' }} viewport={{ once: true }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, zIndex: 2 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: p.clr, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 4px ${p.clr}22, 0 6px 18px ${p.clr}44` }}>
                                        <span style={{ color: '#fff', fontWeight: 900, fontSize: '.62rem', letterSpacing: 0.5 }}>{p.price}</span>
                                    </div>
                                    <span style={{ fontSize: '.6rem', fontWeight: 800, color: p.clr, letterSpacing: 2 }}>{p.label}</span>
                                </motion.div>
                                {i < arr.length - 1 && (
                                    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: i * 0.18 + 0.1, duration: 0.5 }} viewport={{ once: true }}
                                        style={{ flex: 1, height: 3, background: `linear-gradient(90deg,${p.clr},${arr[i + 1].clr})`, transformOrigin: 'left', position: 'relative', zIndex: 1 }}>
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#fff', border: '1.5px solid #ddd', borderRadius: 8, padding: '2px 8px' }}>
                                            <span style={{ fontSize: '.58rem', fontWeight: 900, color: arr[i + 1].clr }}>
                                                {i === 0 ? '2×' : i === 1 ? '5×' : '100×'}
                                            </span>
                                        </div>
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                        {/* Big label */}
                        <div style={{ position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)', textAlign: 'right' }}>
                            <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.6rem', lineHeight: 1 }}>
                                <span className="shimmer-gold-text">$0.10 → $10</span>
                            </div>
                            <div style={{ fontSize: '.6rem', fontWeight: 800, letterSpacing: 2, color: '#aaa', marginTop: 3 }}>IMX TOKEN · 100× POTENTIAL</div>
                        </div>
                    </motion.div>

                    {/* ── 3 Phase Cards ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
                        {[
                            {
                                n: '01', phase: 'Early Entry', badge: '2× Gain',
                                floor: '$0.10', target: '$0.20', gain: '+100%',
                                desc: 'Invest $250 at launch → 2,500 IMX. Value doubles to $500 at slab end.',
                                clr: '#16a34a', bg: '#F0FFF4', border: '#16a34a'
                            },
                            {
                                n: '02', phase: 'Network Phase', badge: '5× Growth',
                                floor: '$0.20', target: '$1.00', gain: '+400%',
                                desc: 'Ecosystem expansion drives token price from $0.20 to $1.00.',
                                clr: '#ea580c', bg: '#FFF7ED', border: '#ea580c'
                            },
                            {
                                n: '03', phase: 'Listing Phase', badge: '100× Potential',
                                floor: '$1.00', target: '$10.00', gain: '+900%',
                                desc: 'Exchange listing: 2,500 IMX × $10 = $25,000 projected value.',
                                clr: '#7c3aed', bg: '#FAF5FF', border: '#7c3aed'
                            },
                        ].map((item, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                style={{ background: item.bg, borderRadius: 22, border: `2px solid ${item.border}40`, padding: '18px 20px', boxShadow: `0 8px 24px ${item.clr}12`, position: 'relative', overflow: 'hidden' }}>
                                {/* Phase number watermark */}
                                <div style={{ position: 'absolute', top: -8, right: 12, fontFamily: "'DM Serif Display',serif", fontSize: '5rem', fontWeight: 900, color: `${item.clr}10`, lineHeight: 1, userSelect: 'none' }}>{item.n}</div>
                                {/* Badge */}
                                <div style={{ display: 'inline-block', background: item.clr, color: '#fff', borderRadius: 100, padding: '3px 12px', fontSize: '.6rem', fontWeight: 900, letterSpacing: 2, marginBottom: 10 }}>{item.badge}</div>
                                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.1rem', color: '#111', marginBottom: 12 }}>{item.phase}</h3>
                                {/* Price row */}
                                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                                    <div style={{ flex: 1, background: '#fff', border: `1.5px solid ${item.clr}30`, borderRadius: 12, padding: '8px 12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '.58rem', fontWeight: 700, color: '#aaa', letterSpacing: 1.5 }}>FLOOR</div>
                                        <div style={{ fontWeight: 900, fontSize: '1rem', color: '#333' }}>{item.floor}</div>
                                    </div>
                                    <div style={{ fontSize: '1rem', color: item.clr, fontWeight: 900 }}>→</div>
                                    <div style={{ flex: 1, background: item.clr, borderRadius: 12, padding: '8px 12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '.58rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5 }}>TARGET</div>
                                        <div style={{ fontWeight: 900, fontSize: '1rem', color: '#fff' }}>{item.target}</div>
                                    </div>
                                </div>
                                {/* Gain pill + desc */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <span style={{ background: `${item.clr}15`, color: item.clr, border: `1px solid ${item.clr}40`, borderRadius: 8, padding: '2px 10px', fontSize: '.72rem', fontWeight: 900 }}>{item.gain}</span>
                                </div>
                                <p style={{ fontSize: '.78rem', color: '#666', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 5 – RANK TABLE                ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-light">
                <div className="container">
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: 10 }}>
                        <div className="section-tag mx-auto">RANK HIERARCHY</div>
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.4rem,2.2vw,2rem)', marginBottom: 2 }}>
                            Rank & <span className="gold-text">Royalty</span> System
                        </h2>
                        <p style={{ fontSize: '.75rem', color: '#888', fontWeight: 600 }}>10-rank binary pair matching royalty structure — left & right leg achievement.</p>
                    </div>

                    {/* ── 10 Rank Cards Grid ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 7 }}>
                        {[
                            { rank: 1, name: 'Associate', left: 1, right: 1, total: 2, royalty: '1%', monthly: '$2.5', clr: '#64748b' },
                            { rank: 2, name: 'Jn. Executive', left: 2, right: 2, total: 4, royalty: '2%', monthly: '$5', clr: '#0891b2' },
                            { rank: 3, name: 'Sn. Executive', left: 4, right: 4, total: 8, royalty: '4%', monthly: '$10', clr: '#16a34a' },
                            { rank: 4, name: 'Asst. Manager', left: 8, right: 8, total: 16, royalty: '8%', monthly: '$20', clr: '#ca8a04' },
                            { rank: 5, name: 'Manager', left: 16, right: 16, total: 32, royalty: '15%', monthly: '$37.5', clr: '#ea580c' },
                            { rank: 6, name: 'Asst. Director', left: 32, right: 32, total: 64, royalty: '30%', monthly: '$75', clr: '#dc2626' },
                            { rank: 7, name: 'Director', left: 64, right: 64, total: 128, royalty: '60%', monthly: '$150', clr: '#9333ea' },
                            { rank: 8, name: 'Asso. President', left: 128, right: 128, total: 256, royalty: '125%', monthly: '$312.5', clr: '#7c3aed' },
                            { rank: 9, name: 'President', left: 256, right: 256, total: 512, royalty: '250%', monthly: '$625', clr: '#b45309' },
                            { rank: 10, name: 'CEO', left: 512, right: 512, total: 1024, royalty: '500%', monthly: '$1,250', clr: '#D4AF37', elite: true },
                        ].map((r, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                                whileHover={{ y: -3, scale: 1.02 }}
                                style={{
                                    background: r.elite ? 'linear-gradient(135deg,#FFF8DC,#FDF3C0)' : '#fff',
                                    border: `1.5px solid ${r.clr}40`,
                                    borderRadius: 14,
                                    padding: '9px 8px',
                                    boxShadow: r.elite ? `0 6px 20px ${r.clr}30` : `0 3px 10px ${r.clr}10`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                {/* Watermark */}
                                <div style={{ position: 'absolute', top: -4, right: 5, fontSize: '2.8rem', fontFamily: "'DM Serif Display',serif", fontWeight: 900, color: `${r.clr}10`, lineHeight: 1, userSelect: 'none' }}>{r.rank}</div>

                                {/* Rank badge */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 5 }}>
                                    <span style={{ background: r.clr, color: '#fff', borderRadius: 100, padding: '1px 7px', fontSize: '.48rem', fontWeight: 800, letterSpacing: 1 }}>R{r.rank}</span>
                                    {r.elite && <span style={{ fontSize: '.6rem' }}>👑</span>}
                                </div>

                                {/* Name */}
                                <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 700, fontSize: '.75rem', color: '#111', lineHeight: 1.2, marginBottom: 6 }}>{r.name}</div>

                                {/* L / R pair boxes */}
                                <div style={{ display: 'flex', gap: 3, marginBottom: 5 }}>
                                    <div style={{ flex: 1, background: '#16a34a10', border: '1px solid #16a34a25', borderRadius: 6, padding: '3px 2px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '.4rem', fontWeight: 800, color: '#16a34a', letterSpacing: 1 }}>L</div>
                                        <div style={{ fontWeight: 900, fontSize: '.82rem', color: '#16a34a' }}>{r.left}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '.6rem', color: '#ccc', fontWeight: 700 }}>:</div>
                                    <div style={{ flex: 1, background: '#2563eb10', border: '1px solid #2563eb25', borderRadius: 6, padding: '3px 2px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '.4rem', fontWeight: 800, color: '#2563eb', letterSpacing: 1 }}>R</div>
                                        <div style={{ fontWeight: 900, fontSize: '.82rem', color: '#2563eb' }}>{r.right}</div>
                                    </div>
                                </div>

                                {/* Total */}
                                <div style={{ background: '#f8f8f8', borderRadius: 6, padding: '2px 6px', marginBottom: 5, textAlign: 'center' }}>
                                    <span style={{ fontSize: '.55rem', color: '#999', fontWeight: 700 }}>{r.total} Pairs</span>
                                </div>

                                {/* Royalty & Monthly */}
                                <div style={{ borderTop: `1px solid ${r.clr}20`, paddingTop: 5 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <span style={{ fontSize: '.5rem', fontWeight: 700, color: '#bbb' }}>Royalty</span>
                                        <span style={{ fontSize: '.62rem', fontWeight: 900, color: r.clr }}>{r.royalty}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '.5rem', fontWeight: 700, color: '#bbb' }}>Monthly</span>
                                        <span style={{ fontSize: r.elite ? '.85rem' : '.72rem', fontWeight: 900, color: r.elite ? '#B8860B' : '#111' }}>{r.monthly}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom banner */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ marginTop: 8, background: 'linear-gradient(135deg,#111,#2a2a2a)', borderRadius: 12, padding: '10px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>👑</span>
                            <div>
                                <div style={{ color: '#FFD700', fontFamily: "'DM Serif Display',serif", fontWeight: 700, fontSize: '.88rem' }}>CEO Rank — Highest Achievement</div>
                                <div style={{ color: '#aaa', fontSize: '.62rem', fontWeight: 500, marginTop: 1 }}>512 Left + 512 Right = 1,024 Total Pairs · Fixed Royalty: 500%</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: '#fff', fontSize: '.55rem', fontWeight: 700, letterSpacing: 2, opacity: .7 }}>MONTHLY ROYALTY</div>
                            <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.3rem', background: 'linear-gradient(135deg,#FFD700,#B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$1,250</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 6 – PAIR MATCHING ROYALTY     ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 18 }}>
                        <div className="section-tag mx-auto">BINARY ROYALTY TABLE</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: 4 }}>
                            Pair Matching <span className="gold-text">Royalty</span>
                        </h2>
                        <p style={{ fontSize: '.78rem', color: '#888', fontWeight: 700, letterSpacing: 2 }}>✦ $250 Per ID Investment ✦</p>
                    </div>
                    <div style={{ background: 'white', border: '2px solid #222', borderRadius: 24, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'linear-gradient(135deg,#D4AF37,#8B6E27)' }}>
                                    {['SR. NO.', 'LEFT', 'RIGHT', 'TOTAL ID', 'RANK NAME'].map(h => (
                                        <th key={h} style={{ padding: '13px 16px', color: 'white', fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '.8rem', textAlign: 'center', letterSpacing: 1 }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    [1, 1, 1, 2, 'ASSOCIATE'],
                                    [2, 2, 2, 4, 'JN. EXECUTIVE'],
                                    [3, 4, 4, 8, 'SN. EXECUTIVE'],
                                    [4, 8, 8, 16, 'ASS. MANAGER'],
                                    [5, 16, 16, 32, 'MANAGER'],
                                    [6, 32, 32, 64, 'ASS. DIRECTOR'],
                                    [7, 64, 64, 128, 'PRESIDENT'],
                                    [8, 128, 128, 256, 'ASSO. PRESIDENT'],
                                    [9, 256, 256, 512, 'DIRECTOR'],
                                    [10, 512, 512, 1024, 'CEO'],
                                    [11, 1024, 1024, 2048, 'FOUNDER'],
                                ].map((r, i) => (
                                    <motion.tr key={i}
                                        initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }} viewport={{ once: true }}
                                        style={{ background: i === 10 ? '#FFFBEA' : i % 2 === 0 ? '#FAFAFA' : '#fff', borderBottom: '1px solid #f0f0f0' }}>
                                        {[r[0], r[1], r[2], r[3]].map((v, j) => (
                                            <td key={j} style={{ textAlign: 'center', padding: '9px 14px', fontWeight: j === 0 ? 900 : 700, color: j === 0 ? '#D4AF37' : '#333', fontSize: '.85rem' }}>{v}</td>
                                        ))}
                                        <td style={{ textAlign: 'center', padding: '9px 14px', fontWeight: 900, fontSize: '.85rem', color: i === 10 ? '#B8860B' : '#111', letterSpacing: 1 }}>
                                            {i === 10 ? <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}><Crown size={13} color="#D4AF37" />{r[4]}</span> : r[4]}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 7 – RANKING & ROYALTIES       ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 18 }}>
                        <div className="section-tag mx-auto">INCOME BREAKDOWN</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: 4 }}>
                            Ranking & <span className="gold-text">Royalties</span>
                        </h2>
                    </div>
                    <div style={{ background: 'white', border: '2px solid #222', borderRadius: 24, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'linear-gradient(135deg,#D4AF37,#8B6E27)' }}>
                                    {['SR. NO.', 'RANK NAME', 'MONTHLY FIX ROYALTY %', 'MONTHLY FIX AMOUNT IN $'].map(h => (
                                        <th key={h} style={{ padding: '13px 18px', color: 'white', fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '.78rem', textAlign: 'center', letterSpacing: 1 }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    [1, 'ASSOCIATE', 1, 2.5],
                                    [2, 'JN. EXECUTIVE', 2, 5],
                                    [3, 'SN. EXECUTIVE', 4, 10],
                                    [4, 'ASS. MANAGER', 8, 20],
                                    [5, 'MANAGER', 15, 37.5],
                                    [6, 'ASS. DIRECTOR', 30, 75],
                                    [7, 'DIRECTOR', 60, 150],
                                    [8, 'ASSO. PRESIDENT', 125, 312.5],
                                    [9, 'PRESIDENT', 250, 625],
                                    [10, 'CEO', 500, 1250],
                                    [11, 'FOUNDER', 1000, 2500],
                                ].map((r, i) => (
                                    <motion.tr key={i}
                                        initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }} viewport={{ once: true }}
                                        style={{ background: i === 10 ? '#FFFBEA' : i % 2 === 0 ? '#FAFAFA' : '#fff', borderBottom: '1px solid #f0f0f0' }}>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 900, color: '#D4AF37', fontSize: '.85rem' }}>{r[0]}</td>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 900, fontSize: '.85rem', color: i === 10 ? '#B8860B' : '#111', letterSpacing: 1 }}>
                                            {i === 10 ? <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}><Crown size={13} color="#D4AF37" />{r[1]}</span> : r[1]}
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 700, fontSize: '.9rem', color: '#555' }}>{r[2]}%</td>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 900, fontSize: '.95rem', color: i === 10 ? '#D4AF37' : '#111' }}>${r[3].toLocaleString()}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 8 – DEDUCTION SYSTEM          ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 18 }}>
                        <div className="section-tag mx-auto">TRANSPARENCY IN PAYOUTS</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: 4 }}>
                            Deduction <span className="gold-text">System</span>
                        </h2>
                    </div>
                    <div style={{ background: 'white', border: '2px solid #222', borderRadius: 24, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'linear-gradient(135deg,#D4AF37,#8B6E27)' }}>
                                    <th style={{ padding: '13px 18px', color: 'white', fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '.78rem', textAlign: 'center', letterSpacing: 1 }}>RANK NAME</th>
                                    <th style={{ padding: '13px 18px', color: 'white', fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '.78rem', textAlign: 'center', letterSpacing: 1 }}>MONTHLY FIX ROYALTY %</th>
                                    <th colSpan={2} style={{ padding: '13px 18px', color: 'white', fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '.78rem', textAlign: 'center', letterSpacing: 1, borderLeft: '1px solid rgba(255,255,255,0.3)' }}>DEDUCTION SYSTEM</th>
                                </tr>
                                <tr style={{ background: 'linear-gradient(135deg,#C9A227,#7a5c0c)' }}>
                                    <th></th><th></th>
                                    <th style={{ padding: '9px 14px', color: '#FFF8DC', fontSize: '.72rem', fontWeight: 800, textAlign: 'center', letterSpacing: 1, borderLeft: '1px solid rgba(255,255,255,0.2)' }}>FOR IVAMAX</th>
                                    <th style={{ padding: '9px 14px', color: '#FFF8DC', fontSize: '.72rem', fontWeight: 800, textAlign: 'center', letterSpacing: 1 }}>FOR ROYALTY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['ASSOCIATE', 1, '0', '0'],
                                    ['JN. EXECUTIVE', 2, '0', '0'],
                                    ['SN. EXECUTIVE', 4, '0', '0'],
                                    ['ASS. MANAGER', 8, '0', '0'],
                                    ['MANAGER', 15, '0', '10%'],
                                    ['ASS. DIRECTOR', 30, '0', '10%'],
                                    ['DIRECTOR', 60, '0', '10%'],
                                    ['ASSO. PRESIDENT', 125, '20%', '10%'],
                                    ['PRESIDENT', 250, '20%', '10%'],
                                    ['CEO', 500, '20%', '10%'],
                                    ['FOUNDER', 1000, '20%', '10%'],
                                ].map((r, i) => (
                                    <motion.tr key={i}
                                        initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.04 }} viewport={{ once: true }}
                                        style={{ background: i === 10 ? '#FFFBEA' : i % 2 === 0 ? '#FAFAFA' : '#fff', borderBottom: '1px solid #f0f0f0' }}>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 900, fontSize: '.85rem', color: i === 10 ? '#B8860B' : '#111', letterSpacing: 1 }}>{r[0]}</td>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 700, fontSize: '.9rem', color: '#555' }}>{r[1]}%</td>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 900, fontSize: '.9rem', color: r[2] === '0' ? '#bbb' : '#e74c3c' }}>{r[2]}</td>
                                        <td style={{ textAlign: 'center', padding: '9px 18px', fontWeight: 900, fontSize: '.9rem', color: r[3] === '0' ? '#bbb' : '#e74c3c' }}>{r[3]}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 9 – DIRECT REFERRAL ROYALTY   ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 22 }}>
                        <div className="section-tag mx-auto">REFERRAL INCOME</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: 4 }}>
                            Direct Referral <span className="gold-text">Royalty</span>
                        </h2>
                        <p style={{ fontSize: '.78rem', color: '#888', fontWeight: 700, letterSpacing: 2 }}>Direct Income Benefits</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'center' }}>
                        {/* Left – coin tree */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <svg viewBox="0 0 300 320" width="100%" style={{ maxHeight: 300 }}>
                                <defs>
                                    <radialGradient id="cg" cx="38%" cy="32%" r="68%">
                                        <stop offset="0%" stopColor="#FFF5A0" />
                                        <stop offset="40%" stopColor="#FFD700" />
                                        <stop offset="100%" stopColor="#8B6E27" />
                                    </radialGradient>
                                    <filter id="cshadow"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#B8860B" floodOpacity="0.35" /></filter>
                                </defs>
                                {/* YOU */}
                                <circle cx="150" cy="50" r="36" fill="url(#cg)" filter="url(#cshadow)" stroke="#8B6E27" strokeWidth="3" />
                                <text x="150" y="56" textAnchor="middle" style={{ fontWeight: 900, fontSize: 13, fill: '#5a3e0c', fontFamily: 'serif' }}>YOU</text>
                                {/* Lines YOU→A,B */}
                                <line x1="120" y1="82" x2="80" y2="155" stroke="#8B6E27" strokeWidth="2" markerEnd="url(#arrow)" />
                                <line x1="180" y1="82" x2="220" y2="155" stroke="#8B6E27" strokeWidth="2" markerEnd="url(#arrow)" />
                                <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8B6E27" /></marker></defs>
                                {/* Label "Direct" */}
                                <text x="85" y="122" textAnchor="middle" transform="rotate(-40,85,122)" style={{ fontSize: 9, fill: '#8B6E27', fontWeight: 700, letterSpacing: 1 }}>Direct</text>
                                <text x="215" y="122" textAnchor="middle" transform="rotate(40,215,122)" style={{ fontSize: 9, fill: '#8B6E27', fontWeight: 700, letterSpacing: 1 }}>Direct</text>
                                {/* A, B */}
                                <circle cx="75" cy="175" r="30" fill="url(#cg)" filter="url(#cshadow)" stroke="#8B6E27" strokeWidth="2.5" />
                                <text x="75" y="181" textAnchor="middle" style={{ fontWeight: 900, fontSize: 14, fill: '#5a3e0c', fontFamily: 'serif' }}>A</text>
                                <circle cx="225" cy="175" r="30" fill="url(#cg)" filter="url(#cshadow)" stroke="#8B6E27" strokeWidth="2.5" />
                                <text x="225" y="181" textAnchor="middle" style={{ fontWeight: 900, fontSize: 14, fill: '#5a3e0c', fontFamily: 'serif' }}>B</text>
                                {/* Lines A→C, B→D */}
                                <line x1="62" y1="204" x2="55" y2="265" stroke="#8B6E27" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4,3" />
                                <line x1="88" y1="204" x2="95" y2="265" stroke="#8B6E27" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4,3" />
                                <line x1="210" y1="204" x2="200" y2="265" stroke="#8B6E27" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4,3" />
                                <line x1="240" y1="204" x2="250" y2="265" stroke="#8B6E27" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4,3" />
                                {/* C, D */}
                                <circle cx="55" cy="285" r="24" fill="url(#cg)" opacity="0.85" stroke="#8B6E27" strokeWidth="2" />
                                <text x="55" y="291" textAnchor="middle" style={{ fontWeight: 900, fontSize: 12, fill: '#5a3e0c', fontFamily: 'serif' }}>C</text>
                                <circle cx="100" cy="285" r="24" fill="url(#cg)" opacity="0.85" stroke="#8B6E27" strokeWidth="2" />
                                <text x="100" y="291" textAnchor="middle" style={{ fontWeight: 900, fontSize: 12, fill: '#5a3e0c', fontFamily: 'serif' }}>D</text>
                                <circle cx="200" cy="285" r="24" fill="url(#cg)" opacity="0.85" stroke="#8B6E27" strokeWidth="2" />
                                <text x="200" y="291" textAnchor="middle" style={{ fontWeight: 900, fontSize: 12, fill: '#5a3e0c', fontFamily: 'serif' }}>E</text>
                                <circle cx="250" cy="285" r="24" fill="url(#cg)" opacity="0.85" stroke="#8B6E27" strokeWidth="2" />
                                <text x="250" y="291" textAnchor="middle" style={{ fontWeight: 900, fontSize: 12, fill: '#5a3e0c', fontFamily: 'serif' }}>F</text>
                            </svg>
                        </motion.div>
                        {/* Right – info box */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ background: '#FFFBEA', border: '2px solid #D4AF37', borderRadius: 24, padding: '28px 30px', boxShadow: '0 12px 36px rgba(212,175,55,0.12)' }}>
                                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.2rem', marginBottom: 16, color: '#8B6E27' }}>Key Benefits</h3>
                                {['Unlimited direct referrals allowed', 'Earn 10% direct royalty from each referral', 'Monthly fixed income system', 'Admin deduction: 10%'].map((b, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, fontSize: '.9rem', fontWeight: 600 }}>
                                        <CheckCircle size={16} color="#D4AF37" style={{ flexShrink: 0 }} />{b}
                                    </div>
                                ))}
                                <div style={{ marginTop: 18, background: '#fff', borderRadius: 16, padding: '16px 20px', border: '1px solid #e8d8a0' }}>
                                    <div style={{ fontWeight: 900, fontSize: '.75rem', letterSpacing: 2, color: '#8B6E27', marginBottom: 8 }}>EXAMPLE</div>
                                    <p style={{ fontSize: '.82rem', color: '#555', lineHeight: 1.7, fontWeight: 500 }}>
                                        YOU directly refer 20 IDs. Total payout = <strong>₹15,00,000</strong>.<br />
                                        10% Admin deduction → <span style={{ fontWeight: 900, color: '#D4AF37' }}>₹1,50,000 credited to YOUR ID</span> monthly.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 10 – FOUNDER CLUB ROYALTY     ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 22 }}>
                        <div className="section-tag mx-auto">ELITE INCOME</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: 4 }}>
                            Founder Club <span className="gold-text">Royalty</span>
                        </h2>
                        <p style={{ fontSize: '.78rem', color: '#888', fontWeight: 700, letterSpacing: 2 }}>Founder Club Qualification</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'center' }}>
                        {/* Left – smaller tree */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <svg viewBox="0 0 300 300" width="100%" style={{ maxHeight: 280 }}>
                                <defs>
                                    <radialGradient id="cg2" cx="38%" cy="32%" r="68%">
                                        <stop offset="0%" stopColor="#FFF5A0" />
                                        <stop offset="40%" stopColor="#FFD700" />
                                        <stop offset="100%" stopColor="#8B6E27" />
                                    </radialGradient>
                                    <filter id="cs2"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#B8860B" floodOpacity="0.4" /></filter>
                                    <marker id="ar2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8B6E27" /></marker>
                                </defs>
                                {/* YOU */}
                                <circle cx="150" cy="55" r="40" fill="url(#cg2)" filter="url(#cs2)" stroke="#8B6E27" strokeWidth="3" />
                                <text x="150" y="62" textAnchor="middle" style={{ fontWeight: 900, fontSize: 14, fill: '#5a3e0c', fontFamily: 'serif' }}>YOU</text>
                                {/* Lines */}
                                <line x1="115" y1="90" x2="75" y2="170" stroke="#8B6E27" strokeWidth="2.5" markerEnd="url(#ar2)" />
                                <line x1="185" y1="90" x2="225" y2="170" stroke="#8B6E27" strokeWidth="2.5" markerEnd="url(#ar2)" />
                                <text x="68" y="135" textAnchor="middle" transform="rotate(-55,68,135)" style={{ fontSize: 9, fill: '#8B6E27', fontWeight: 800, letterSpacing: 1 }}>Direct Placing</text>
                                <text x="232" y="135" textAnchor="middle" transform="rotate(55,232,135)" style={{ fontSize: 9, fill: '#8B6E27', fontWeight: 800, letterSpacing: 1 }}>Direct Placing</text>
                                {/* A, B */}
                                <circle cx="70" cy="195" r="34" fill="url(#cg2)" filter="url(#cs2)" stroke="#8B6E27" strokeWidth="2.5" />
                                <text x="70" y="201" textAnchor="middle" style={{ fontWeight: 900, fontSize: 16, fill: '#5a3e0c', fontFamily: 'serif' }}>A</text>
                                <circle cx="230" cy="195" r="34" fill="url(#cg2)" filter="url(#cs2)" stroke="#8B6E27" strokeWidth="2.5" />
                                <text x="230" y="201" textAnchor="middle" style={{ fontWeight: 900, fontSize: 16, fill: '#5a3e0c', fontFamily: 'serif' }}>B</text>
                                {/* Labels */}
                                <text x="70" y="244" textAnchor="middle" style={{ fontSize: 10, fill: '#8B6E27', fontWeight: 700, letterSpacing: 1 }}>Achieve Founder</text>
                                <text x="230" y="244" textAnchor="middle" style={{ fontSize: 10, fill: '#8B6E27', fontWeight: 700, letterSpacing: 1 }}>Achieve Founder</text>
                            </svg>
                        </motion.div>
                        {/* Right – qualification box */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ background: '#FFFBEA', border: '2px solid #D4AF37', borderRadius: 24, padding: '28px 30px', boxShadow: '0 12px 36px rgba(212,175,55,0.12)' }}>
                                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.25rem', marginBottom: 18, color: '#8B6E27', fontStyle: 'italic' }}>Founder Club Qualification</h3>
                                {[
                                    { icon: '👥', text: 'Minimum 2 direct founders required' },
                                    { icon: '🏆', text: 'Enter Founder Club after qualification' },
                                    { icon: '👑', text: 'Extra royalty for Founder Club achievers' },
                                ].map((b, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14, fontSize: '.9rem', fontWeight: 600 }}>
                                        <span style={{ fontSize: '1.4rem' }}>{b.icon}</span>{b.text}
                                    </div>
                                ))}
                                {/* Big bonus banner */}
                                <motion.div
                                    animate={{ boxShadow: ['0 0 20px rgba(212,175,55,0.3)', '0 0 40px rgba(212,175,55,0.6)', '0 0 20px rgba(212,175,55,0.3)'] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    style={{ marginTop: 20, background: 'linear-gradient(135deg,#D4AF37,#8B6E27)', borderRadius: 18, padding: '20px 24px', textAlign: 'center' }}>
                                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '.7rem', fontWeight: 800, letterSpacing: 3, marginBottom: 6 }}>FOUNDER CLUB BONUS</div>
                                    <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '2.2rem', color: '#fff', lineHeight: 1.1 }}>₹ 2.5 Lakh</div>
                                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.78rem', fontWeight: 600, marginTop: 4 }}>additional royalty per cycle</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 11 – GLOBAL BANNER            ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    <div style={{ borderRadius: 36, border: '2px solid #222', overflow: 'hidden', position: 'relative' }}>
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85"
                            alt="Global Expansion"
                            style={{ width: '100%', height: 430, objectFit: 'cover', objectPosition: 'center' }}
                        />
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(90deg,rgba(255,252,242,.97) 45%,rgba(255,252,242,.05) 100%)'
                        }} />
                        <div style={{ position: 'absolute', top: '50%', left: 56, transform: 'translateY(-50%)', maxWidth: 560 }}>
                            <div className="section-tag">THE EMPIRE IS GLOBAL</div>
                            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem,4vw,3.8rem)', marginBottom: 14 }}>
                                Expanding <span className="shimmer-gold-text">Globally.</span>
                            </h2>
                            <p className="p-body" style={{ marginBottom: 28 }}>
                                Over 12,000 founders from 85+ countries are already building legacies inside IVAMAX.
                            </p>
                            <div style={{ display: 'flex', gap: 44 }}>
                                <Stat val="85+" lbl="Countries" />
                                <Stat val="12k+" lbl="Founders" />
                                <Stat val="$2.5L" lbl="Max Bonus" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 12 – KEY BENEFITS / BRP PLAN  ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 28 }}>
                        <div className="section-tag mx-auto">WHY CHOOSE BRP PLAN?</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', marginBottom: 8 }}>
                            Key <span className="gold-text">Benefits</span>
                        </h2>
                        <p className="p-body">Everything you need to build generational wealth — in one plan.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'center' }}>

                        {/* LEFT — Coin Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
                        >
                            {/* Glow ring */}
                            <motion.div
                                animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                style={{
                                    position: 'absolute', width: 320, height: 320, borderRadius: '50%',
                                    background: 'radial-gradient(circle,#FFD70044 0%,transparent 70%)',
                                    pointerEvents: 'none'
                                }}
                            />
                            {/* Coin SVG */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ position: 'relative', zIndex: 2 }}
                            >
                                <svg viewBox="0 0 260 260" width="260" height="260">
                                    <defs>
                                        <radialGradient id="coinGrad" cx="35%" cy="28%" r="72%">
                                            <stop offset="0%" stopColor="#FFF5A0" />
                                            <stop offset="35%" stopColor="#FFD700" />
                                            <stop offset="70%" stopColor="#B8860B" />
                                            <stop offset="100%" stopColor="#5a3c00" />
                                        </radialGradient>
                                        <radialGradient id="coinInnerGrad" cx="38%" cy="30%" r="68%">
                                            <stop offset="0%" stopColor="#FFF8C0" />
                                            <stop offset="50%" stopColor="#DAA520" />
                                            <stop offset="100%" stopColor="#7a5000" />
                                        </radialGradient>
                                        <filter id="coinShadow">
                                            <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#B8860B" floodOpacity="0.5" />
                                        </filter>
                                    </defs>
                                    {/* Outer coin */}
                                    <circle cx="130" cy="130" r="125" fill="url(#coinGrad)" filter="url(#coinShadow)" />
                                    {/* Rim detail */}
                                    <circle cx="130" cy="130" r="125" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.5" />
                                    <circle cx="130" cy="130" r="115" fill="none" stroke="#8B6E27" strokeWidth="1.5" opacity="0.4" />
                                    {/* Inner circle */}
                                    <circle cx="130" cy="130" r="100" fill="url(#coinInnerGrad)" />
                                    <circle cx="130" cy="130" r="100" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.6" />
                                    {/* Circuit pattern ring */}
                                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                                        <rect key={i}
                                            x="126" y="28" width="8" height="14" rx="2"
                                            fill="#5a3c00" opacity="0.4"
                                            transform={`rotate(${angle} 130 130)`}
                                        />
                                    ))}
                                    {/* IVAMAX text ring */}
                                    <text style={{ fontSize: 11, fontWeight: 900, letterSpacing: 4, fill: '#5a3c00', fontFamily: 'serif' }}>
                                        <textPath href="#coinCircle" startOffset="0%">• IVAMAX • IVAMAX • IVAMAX •</textPath>
                                    </text>
                                    <path id="coinCircle" d="M 130,55 a 75,75 0 1,1 -0.01,0" fill="none" />
                                    {/* V logo */}
                                    <text x="130" y="148" textAnchor="middle" style={{ fontWeight: 900, fontSize: 56, fill: '#3a2500', fontFamily: 'serif', opacity: 0.9 }}>₿</text>
                                    {/* IVAMAX label bottom */}
                                    <text x="130" y="210" textAnchor="middle" style={{ fontSize: 13, fontWeight: 900, fill: '#3a2500', letterSpacing: 4, fontFamily: 'serif' }}>IVAMAX</text>
                                </svg>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }} viewport={{ once: true }}
                                style={{
                                    position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)',
                                    background: 'linear-gradient(135deg,#D4AF37,#8B6E27)',
                                    borderRadius: 100, padding: '8px 24px',
                                    color: '#fff', fontWeight: 900, fontSize: '.8rem', letterSpacing: 2,
                                    boxShadow: '0 8px 24px rgba(212,175,55,0.4)', whiteSpace: 'nowrap', zIndex: 3
                                }}
                            >
                                WHY CHOOSE BRP PLAN?
                            </motion.div>
                        </motion.div>

                        {/* RIGHT — Benefits list */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Ornate border box */}
                            <div style={{
                                background: 'linear-gradient(145deg,#FFFDF0,#FFF8DC)',
                                border: '2px solid #D4AF37',
                                borderRadius: 24, padding: '28px 30px',
                                boxShadow: '0 16px 48px rgba(212,175,55,0.18)',
                                position: 'relative', overflow: 'hidden'
                            }}>
                                {/* Corner ornaments */}
                                <div style={{ position: 'absolute', top: 6, left: 6, width: 30, height: 30, borderTop: '3px solid #D4AF37', borderLeft: '3px solid #D4AF37', borderRadius: '4px 0 0 0' }} />
                                <div style={{ position: 'absolute', top: 6, right: 6, width: 30, height: 30, borderTop: '3px solid #D4AF37', borderRight: '3px solid #D4AF37', borderRadius: '0 4px 0 0' }} />
                                <div style={{ position: 'absolute', bottom: 6, left: 6, width: 30, height: 30, borderBottom: '3px solid #D4AF37', borderLeft: '3px solid #D4AF37', borderRadius: '0 0 0 4px' }} />
                                <div style={{ position: 'absolute', bottom: 6, right: 6, width: 30, height: 30, borderBottom: '3px solid #D4AF37', borderRight: '3px solid #D4AF37', borderRadius: '0 0 4px 0' }} />

                                <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1rem', color: '#8B6E27', letterSpacing: 2, textAlign: 'center', marginBottom: 18 }}>
                                    — WHY CHOOSE BRP PLAN? —
                                </div>

                                {[
                                    { benefit: 'Low entry: $250', clr: '#D4AF37' },
                                    { benefit: 'Token valuation growth', clr: '#D4AF37' },
                                    { benefit: 'Monthly royalty income', clr: '#D4AF37' },
                                    { benefit: '3 income streams', clr: '#D4AF37' },
                                    { benefit: 'Lifetime royalty after rank', clr: '#D4AF37' },
                                    { benefit: 'Founder Club bonus', clr: '#D4AF37' },
                                ].map((item, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                                        whileHover={{ x: 6 }}
                                        style={{
                                            display: 'flex', gap: 14, alignItems: 'center',
                                            marginBottom: i < 5 ? 12 : 0,
                                            padding: '10px 14px',
                                            background: 'rgba(255,255,255,0.7)',
                                            borderRadius: 14,
                                            border: '1.5px solid rgba(212,175,55,0.3)',
                                            boxShadow: '0 2px 8px rgba(212,175,55,0.08)'
                                        }}
                                    >
                                        {/* Shield checkmark icon */}
                                        <div style={{
                                            width: 36, height: 36, flexShrink: 0,
                                            background: 'linear-gradient(135deg,#D4AF37,#8B6E27)',
                                            borderRadius: 10,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 4px 12px rgba(212,175,55,0.35)'
                                        }}>
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6L12 2z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5" />
                                                <path d="M8.5 12l2.5 2.5 4.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span style={{ fontWeight: 700, fontSize: '.95rem', color: '#2a1800' }}>{item.benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════╗
          ║  SLIDE 13 – STAKING & ENTRY PLAN    ║
          ╚══════════════════════════════════════╝ */}
            <section className="slide-ivory">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 28 }}>
                        <div className="section-tag mx-auto">INVESTMENT STRUCTURE</div>
                        <Divider />
                        <h2 className="display-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', marginBottom: 8 }}>
                            Staking & <span className="gold-text">Entry Plan</span>
                        </h2>
                        <p className="p-body">One $250 entry. Multiple income streams. Unlimited upside.</p>
                    </div>

                    {/* Main 3-col layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: 20, alignItems: 'start' }}>

                        {/* LEFT — Entry breakdown */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{
                                background: '#fff', border: '2px solid #222',
                                borderRadius: 24, padding: '24px 22px',
                                boxShadow: '0 12px 36px rgba(0,0,0,0.05)'
                            }}>
                                <div className="section-tag" style={{ marginBottom: 16 }}>ENTRY BREAKDOWN</div>
                                {[
                                    { label: 'Total Entry', value: '$250', clr: '#111', big: true },
                                    { label: 'IMX Tokens (2500)', value: '$125', clr: '#D4AF37', desc: '@ $0.10 each' },
                                    { label: 'Working Capital', value: '$75', clr: '#16a34a', desc: 'Platform operation' },
                                    { label: 'Admin & Setup', value: '$50', clr: '#9333ea', desc: 'One-time fee' },
                                ].map((item, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                                        style={{
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            padding: item.big ? '14px 16px' : '10px 14px',
                                            background: item.big ? 'linear-gradient(135deg,#D4AF37,#8B6E27)' : '#FAFAFA',
                                            borderRadius: 14, marginBottom: 10,
                                            border: item.big ? 'none' : '1.5px solid #f0f0f0'
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: item.big ? '.95rem' : '.82rem', color: item.big ? '#fff' : '#333' }}>{item.label}</div>
                                            {item.desc && <div style={{ fontSize: '.62rem', color: item.big ? 'rgba(255,255,255,0.7)' : '#999', fontWeight: 600, marginTop: 1 }}>{item.desc}</div>}
                                        </div>
                                        <div style={{
                                            fontFamily: "'DM Serif Display',serif",
                                            fontWeight: 900,
                                            fontSize: item.big ? '1.3rem' : '1rem',
                                            color: item.big ? '#fff' : item.clr
                                        }}>{item.value}</div>
                                    </motion.div>
                                ))}

                                {/* Token info pill */}
                                <div style={{
                                    marginTop: 6, background: '#FFF8DC', border: '1.5px solid #D4AF37',
                                    borderRadius: 12, padding: '10px 14px', textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '.6rem', fontWeight: 800, color: '#8B6E27', letterSpacing: 2, marginBottom: 3 }}>TOKEN ALLOCATION</div>
                                    <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.2rem', color: '#B8860B' }}>2,500 IMX</div>
                                    <div style={{ fontSize: '.65rem', color: '#888', fontWeight: 600 }}>per $250 entry · locked 12 months</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CENTER — Visual Donut + Flow */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Donut chart */}
                            <div style={{
                                background: '#fff', border: '2px solid #222', borderRadius: 24,
                                padding: '24px 20px', marginBottom: 16,
                                boxShadow: '0 12px 36px rgba(0,0,0,0.05)', textAlign: 'center'
                            }}>
                                <div style={{ marginBottom: 10, fontSize: '.62rem', fontWeight: 800, letterSpacing: 3, color: '#888' }}>FUND ALLOCATION</div>
                                <svg viewBox="0 0 200 200" width="180" style={{ overflow: 'visible', margin: '0 auto', display: 'block' }}>
                                    <defs>
                                        <filter id="ds"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.1" /></filter>
                                    </defs>
                                    {/* Donut segments: 50% tokens, 30% working, 20% admin */}
                                    {/* Total circle 2π×70 ≈ 439.8 */}
                                    {/* Token 50% → 219.9, Working 30% → 131.9, Admin 20% → 87.96 */}
                                    <circle cx="100" cy="100" r="70" fill="none" stroke="#F5F5F5" strokeWidth="28" />
                                    {/* 50% gold - tokens */}
                                    <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="28"
                                        strokeDasharray="219.9 219.9" strokeDashoffset="0"
                                        transform="rotate(-90 100 100)" filter="url(#ds)" />
                                    {/* 30% green - working */}
                                    <circle cx="100" cy="100" r="70" fill="none" stroke="#16a34a" strokeWidth="28"
                                        strokeDasharray="131.9 307.9" strokeDashoffset="-219.9"
                                        transform="rotate(-90 100 100)" />
                                    {/* 20% purple - admin */}
                                    <circle cx="100" cy="100" r="70" fill="none" stroke="#9333ea" strokeWidth="28"
                                        strokeDasharray="87.96 351.84" strokeDashoffset="-351.84"
                                        transform="rotate(-90 100 100)" />
                                    {/* Center text */}
                                    <text x="100" y="94" textAnchor="middle" style={{ fontSize: 13, fontWeight: 900, fill: '#8B6E27', fontFamily: 'serif' }}>$250</text>
                                    <text x="100" y="112" textAnchor="middle" style={{ fontSize: 9, fontWeight: 700, fill: '#999', letterSpacing: 1.5 }}>ENTRY</text>
                                </svg>
                                {/* Legend */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 10 }}>
                                    {[
                                        { clr: '#D4AF37', label: '50% IMX' },
                                        { clr: '#16a34a', label: '30% Capital' },
                                        { clr: '#9333ea', label: '20% Admin' },
                                    ].map((l, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: l.clr }} />
                                            <span style={{ fontSize: '.62rem', fontWeight: 700, color: '#555' }}>{l.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3 income streams mini cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                                {[
                                    { icon: '⚡', label: 'Binary Royalty', sub: 'Pair Matching', clr: '#D4AF37' },
                                    { icon: '👥', label: 'Referral', sub: 'Direct Income', clr: '#16a34a' },
                                    { icon: '👑', label: 'Founder Club', sub: 'Elite Bonus', clr: '#9333ea' },
                                ].map((s, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.12 }} viewport={{ once: true }}
                                        whileHover={{ y: -4 }}
                                        style={{
                                            background: `${s.clr}0d`, border: `1.5px solid ${s.clr}40`,
                                            borderRadius: 14, padding: '11px 8px', textAlign: 'center'
                                        }}
                                    >
                                        <div style={{ fontSize: '1.3rem', marginBottom: 4 }}>{s.icon}</div>
                                        <div style={{ fontSize: '.62rem', fontWeight: 800, color: s.clr, letterSpacing: 1, marginBottom: 2 }}>{s.label}</div>
                                        <div style={{ fontSize: '.55rem', color: '#888', fontWeight: 600 }}>{s.sub}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT — Staking & Potential */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{
                                background: '#fff', border: '2px solid #222',
                                borderRadius: 24, padding: '24px 22px',
                                boxShadow: '0 12px 36px rgba(0,0,0,0.05)', marginBottom: 14
                            }}>
                                <div className="section-tag" style={{ marginBottom: 16 }}>TOKEN POTENTIAL</div>
                                {[
                                    { stage: 'Today', price: '$0.10', tokens: '2,500 IMX', worth: '$250', clr: '#16a34a' },
                                    { stage: 'Phase 1', price: '$0.20', tokens: '2,500 IMX', worth: '$500', clr: '#D4AF37' },
                                    { stage: 'Phase 2', price: '$1.00', tokens: '2,500 IMX', worth: '$2,500', clr: '#ea580c' },
                                    { stage: 'Listing', price: '$10.00', tokens: '2,500 IMX', worth: '$25,000', clr: '#7c3aed' },
                                ].map((item, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                                        style={{
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            padding: '9px 12px', borderRadius: 12,
                                            background: i === 3 ? `linear-gradient(135deg,${item.clr}15,${item.clr}08)` : '#FAFAFA',
                                            border: `1.5px solid ${item.clr}30`, marginBottom: 8
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontSize: '.6rem', fontWeight: 800, color: item.clr, letterSpacing: 2 }}>{item.stage}</div>
                                            <div style={{ fontWeight: 900, fontSize: '.9rem', color: '#111' }}>{item.price}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '.6rem', color: '#999', fontWeight: 600 }}>Portfolio</div>
                                            <div style={{ fontWeight: 900, fontSize: i === 3 ? '1rem' : '.88rem', color: item.clr }}>{item.worth}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* 100× banner */}
                            <motion.div
                                animate={{ boxShadow: ['0 0 20px rgba(212,175,55,0.3)', '0 0 40px rgba(212,175,55,0.6)', '0 0 20px rgba(212,175,55,0.3)'] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                style={{
                                    background: 'linear-gradient(135deg,#111,#2a2a2a)',
                                    borderRadius: 18, padding: '18px 20px', textAlign: 'center'
                                }}
                            >
                                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.6rem', fontWeight: 800, letterSpacing: 3, marginBottom: 6 }}>
                                    MAX POTENTIAL
                                </div>
                                <div style={{
                                    fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '2rem',
                                    background: 'linear-gradient(135deg,#FFD700,#B8860B)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1
                                }}>100×</div>
                                <div style={{ color: '#aaa', fontSize: '.72rem', fontWeight: 600, marginTop: 4 }}>
                                    $250 → $25,000 at listing
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FOOTER STRIP */}
            <footer style={{ background: '#fff', borderTop: '2px solid #222', padding: '28px 24px' }}>
                <div style={{
                    maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 12
                }}>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 900, fontSize: '1.5rem', fontStyle: 'italic' }}>
                        <span className="shimmer-gold-text">IVAMAX</span>
                    </div>
                    <div style={{ display: 'flex', gap: 28, opacity: .2 }}>
                        <ShieldCheck size={20} /><Lock size={20} /><Globe size={20} /><Award size={20} />
                    </div>
                    <p style={{ fontSize: '.7rem', opacity: .3, fontWeight: 700, letterSpacing: 3 }}>
                        © 2026 IVAMAX · THE ELITE FOUNDER NETWORK
                    </p>
                </div>
            </footer>
        </div >
    );
}
