"use client";

import React, { useState } from "react";

const SERVICES = [
  { icon: "💻", title: "Custom Software Development", desc: "Tailored, scalable software built from the ground up to solve your unique business challenges with precision and performance." },
  { icon: "🌐", title: "Website Development", desc: "Stunning, fast, and conversion-optimized websites that elevate your brand and deliver real results." },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform and native mobile applications that deliver seamless user experiences on iOS and Android." },
  { icon: "🤖", title: "Agentic AI", desc: "Intelligent AI agents that automate workflows, make decisions, and drive efficiency across your operations." },
];

const PORTFOLIO = [
  { tag: "Web Development", title: "FinEdge Dashboard", desc: "Real-time analytics platform for fintech startups with AI-powered insights.", bg: "linear-gradient(135deg,#1a0533,#0a2240)", emoji: "📊" },
  { tag: "Mobile App", title: "HealthTrack Pro", desc: "A wellness app with smart health monitoring and personalized recommendations.", bg: "linear-gradient(135deg,#001a2c,#0d2818)", emoji: "🏃" },
  { tag: "Agentic AI", title: "AutoPilot CRM", desc: "An AI agent that autonomously manages leads, follow-ups, and customer journeys.", bg: "linear-gradient(135deg,#1a0028,#001a28)", emoji: "🤖" },
  { tag: "Custom Software", title: "LogiFlow ERP", desc: "Full-stack ERP solution for logistics companies with real-time fleet management.", bg: "linear-gradient(135deg,#140022,#001428)", emoji: "🚚" },
  { tag: "Website", title: "LuxeStay Platform", desc: "Premium booking platform for boutique hotels with dynamic pricing.", bg: "linear-gradient(135deg,#1a1000,#001a14)", emoji: "🏨" },
  { tag: "Mobile App", title: "EduSpark LMS", desc: "Gamified learning management system for schools and online educators.", bg: "linear-gradient(135deg,#001814,#180028)", emoji: "🎓" },
];

const TEAM = [
  { emoji: "👨‍💼", name: "Mr. Muhammad Abbas", role: "CEO" },
  { emoji: "👨‍💻", name: "Mr. Azeem Ullah", role: "CTO" },
  { emoji: "🤝", name: "Mr. Zeshan Ashraf", role: "Sales" },
];

const REVIEWS = [
  { stars: "★★★★★", text: "Aazify transformed our outdated system into a sleek, powerful platform. The team was communicative, deadline-driven, and delivered beyond expectations.", name: "James Mitchell", company: "FinEdge Corp, USA" },
  { stars: "★★★★★", text: "Their Agentic AI solution cut our manual workload by 70%. Impressive technical skill and a real understanding of our business needs.", name: "Priya Sharma", company: "TechVentures, India" },
  { stars: "★★★★★", text: "Exceptional mobile app development. The UX is flawless, our users love it, and downloads tripled in the first month after launch.", name: "Oliver Brooks", company: "HealthFirst, UK" },
  { stars: "★★★★★", text: "Professional, talented, and creative team. Our website completely outperforms the competition. SEO metrics are through the roof.", name: "Lisa Fernandez", company: "LuxeStay Group, UAE" },
  { stars: "★★★★★", text: "From concept to deployment in just 6 weeks. The custom software Aazify built scales beautifully with our growing operations.", name: "Tariq Al-Rashid", company: "LogiFlow Ltd, KSA" },
  { stars: "★★★★★", text: "Amazing experience. They truly care about quality and kept us in the loop every step of the way. Will work with them again.", name: "Mei Lin", company: "EduSpark, Singapore" },
];

const FAQS = [
  { q: "What industries do you serve?", a: "We work across fintech, healthtech, edtech, logistics, e-commerce, real estate, and more. Our adaptable team brings domain expertise to every project." },
  { q: "How long does a typical project take?", a: "Timelines vary by complexity. A standard website takes 2–4 weeks, while custom software or mobile apps range from 6–16 weeks. We provide precise estimates after discovery." },
  { q: "Do you offer post-launch support?", a: "Absolutely. We provide flexible maintenance and support packages to keep your product running smoothly, secure, and updated after launch." },
  { q: "What is Agentic AI and how can it help my business?", a: "Agentic AI refers to autonomous AI systems that can perform tasks, make decisions, and interact with tools on your behalf. This can automate complex workflows, reduce costs, and scale operations." },
  { q: "How do you handle project communication?", a: "We assign a dedicated project manager to every engagement. You get regular updates, milestone reviews, and direct access to our team via Slack, email, or video calls." },
  { q: "Can you work with our existing tech stack?", a: "Yes. Our engineers are proficient across major frameworks and platforms. We can build new systems from scratch or integrate seamlessly with what you already have." },
];

const MARQUEE_ITEMS = [
  "React", "Node.js", "Python", "Flutter", "AWS", "OpenAI", "PostgreSQL", "Next.js", "Docker", "TensorFlow", "Kubernetes", "FastAPI",
  "React", "Node.js", "Python", "Flutter", "AWS", "OpenAI", "PostgreSQL", "Next.js", "Docker", "TensorFlow", "Kubernetes", "FastAPI",
];

export default function Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [toast, setToast] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const showToast = () => { setToast(true); setTimeout(() => setToast(false), 3000); };
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setNavOpen(false); };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); showToast(); setForm({ name: "", email: "", service: "", message: "" }); };

  return (
    <>
      <nav>
        <div className="nav-logo" onClick={() => scrollTo("home")}>aazify.</div>
        <ul className={`nav-links ${navOpen ? "open" : ""}`}>
          {["home", "services", "portfolio", "about", "team", "reviews", "faqs", "contact"].map(s => (
            <li key={s}><a onClick={() => scrollTo(s)} style={{ textTransform: "capitalize" }}>{s}</a></li>
          ))}
          <li><a className="nav-cta" onClick={() => scrollTo("contact")}>Let's Talk</a></li>
        </ul>
        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <span style={navOpen ? { transform: "rotate(45deg) translateY(7px)" } : {}} />
          <span style={navOpen ? { opacity: 0 } : {}} />
          <span style={navOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {}} />
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-badge">⚡ Next-Gen Software Solutions</div>
        <h1 className="hero-title">We Build <span>Digital Products</span> That Define Tomorrow</h1>
        <p className="hero-sub">Aazify crafts custom software, stunning websites, powerful mobile apps, and intelligent AI agents that transform how businesses operate and grow.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("services")}>Explore Services</button>
          <button className="btn-secondary" onClick={() => scrollTo("portfolio")}>View Our Work</button>
        </div>
        <div className="hero-stats">
          {[['50+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['5+', 'Years Experience'], ['12+', 'Industries Served']].map(([n, l]) => (
            <div className="stat-item" key={String(l)}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          {MARQUEE_ITEMS.map((t, i) => (
            <div className="marquee-item" key={i}><div className="marquee-dot" />{t}</div>
          ))}
        </div>
      </div>

      <section id="services">
        <div className="section-tag">What We Do</div>
        <h2 className="section-title">Services Designed to <span style={{ color: 'var(--accent)' }}>Scale</span></h2>
        <p className="section-sub">From idea to deployment, we cover every dimension of modern software development with precision and creativity.</p>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grad-line" />

      <section id="portfolio">
        <div className="section-tag">Our Work</div>
        <h2 className="section-title">Projects We're <span style={{ color: 'var(--accent)' }}>Proud Of</span></h2>
        <p className="section-sub">A curated selection of solutions we've built for forward-thinking companies around the world.</p>
        <div className="portfolio-grid">
          {PORTFOLIO.map(p => (
            <div className="portfolio-card" key={p.title}>
              <div className="portfolio-img" style={{ background: p.bg }}>
                <span style={{ fontSize: '4rem' }}>{p.emoji}</span>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grad-line" />

      <section id="about">
        <div className="about-grid">
          <div>
            <div className="section-tag">About Us</div>
            <h2 className="section-title" style={{ maxWidth: '100%' }}>Our <span style={{ color: 'var(--accent)' }}>Story</span> & Mission</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Aazify was founded with a single conviction: <strong style={{ color: 'var(--text)' }}>technology should be a growth multiplier, not a bottleneck</strong>. We're a passionate team of engineers, designers, and AI specialists based in Pakistan, building solutions that compete on a global stage.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
              Our mission is to empower businesses of every size — from ambitious startups to established enterprises — with bespoke digital products that are beautiful, reliable, and built to last.
            </p>
            <div className="about-features">
              {[
                ['🎯', 'Client-First Philosophy', 'Every decision we make is guided by your goals and outcomes, not just deliverables.'],
                ['🔬', 'Research-Driven', 'We invest in understanding your domain before writing a single line of code.'],
                ['🚀', 'Agile & Transparent', 'Fast iterations, regular updates, and complete visibility into every phase of your project.'],
              ].map(([i, h, p]) => (
                <div className="about-feat" key={String(h)}>
                  <div className="about-feat-icon">{i}</div>
                  <div><h4>{h}</h4><p>{p}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-visual-inner" />
            <div className="about-visual-text">az</div>
          </div>
        </div>
      </section>

      <div className="grad-line" />

      <section id="team">
        <div className="section-tag">The People</div>
        <h2 className="section-title">Meet Our <span style={{ color: 'var(--accent)' }}>Team</span></h2>
        <p className="section-sub">Talented individuals united by a love for great software and a drive to build the extraordinary.</p>
        <div className="team-grid">
          {TEAM.map(m => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">{m.emoji}</div>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grad-line" />

      <section id="reviews">
        <div className="section-tag">Client Voices</div>
        <h2 className="section-title">What Our <span style={{ color: 'var(--accent)' }}>Clients</span> Say</h2>
        <p className="section-sub">Real feedback from real businesses we've helped grow and transform.</p>
        <div className="reviews-grid">
          {REVIEWS.map(r => (
            <div className="review-card" key={r.name}>
              <div className="review-stars">{r.stars}</div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{r.name[0]}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-company">{r.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grad-line" />

      <section id="faqs">
        <div className="section-tag">Got Questions?</div>
        <h2 className="section-title">Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span></h2>
        <p className="section-sub">Everything you need to know before we get started.</p>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className={`faq-q ${openFaq === i ? 'open' : ''}`}>
                <span style={{ color: 'var(--text)' }}>{f.q}</span>
                <span>+</span>
              </div>
              <div className={`faq-a ${openFaq === i ? 'open' : ''}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="grad-line" />

      <section id="contact">
        <div className="contact-wrap">
          <div>
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title" style={{ maxWidth: '100%' }}>Let's Build Something <span style={{ color: 'var(--accent)' }}>Great</span></h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>Ready to start your next project? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours.</p>
            <div className="contact-info">
              {[
                ['🌍', 'Website', 'www.aazify.com'],
                ['📧', 'Email', 'aazify.com@gmail.com'],
                ['📍', 'Location', 'Depalpur, Okara, Pakistan'],
                ['⏰', 'Working Hours', 'Mon–Sat, 9am–6pm PKT'],
              ].map(([icon, label, val]) => (
                <div className="contact-item" key={String(label)}>
                  <div className="contact-item-icon">{icon}</div>
                  <div><span>{label}</span><strong>{val}</strong></div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className="form-group">
              <label>Service Interested In</label>
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required>
                <option value="">Select a service…</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea rows={5} placeholder="Tell us about your project…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', borderRadius: '12px', padding: '1rem', fontSize: '1rem' }}>
              Send Message →
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: '1.8rem' }}>aazify.</div>
            <p>Building digital products that define tomorrow. Based in Depalpur, Okara, Pakistan — serving clients worldwide.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map(s => <li key={s.title}><a onClick={() => scrollTo('services')}>{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {['About Us', 'Our Story', 'Our Mission', 'Our Team', 'Portfolio', 'Client Reviews'].map(l => (
                <li key={l}><a onClick={() => scrollTo(l.toLowerCase().replace(/ /g, ''))}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {['FAQs', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Cookies Policy'].map(l => (
                <li key={l}><a>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Aazify.com — All rights reserved.</span>
          <span>Crafted with ❤️ in Pakistan</span>
        </div>
      </footer>

      <div className={`toast ${toast ? 'show' : ''}`}>
        ✓ Message sent! We'll reply within 24 hours.
      </div>
    </>
  );
}
