"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { AppRoutes } from "../routes/app_routes";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/hireon-logo.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFooterCategory, setOpenFooterCategory] = useState<string | null>(null);

  const toggleFooterCategory = (category: string) => {
    if (openFooterCategory === category) {
      setOpenFooterCategory(null);
    } else {
      setOpenFooterCategory(category);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Focus on the upper middle of the screen
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select all sections with IDs that correspond to nav links
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // --- New: Scroll Reveal Observer ---
    const revealOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealed);
          revealObserver.unobserve(entry.target);
        }
      });
    }, revealOptions);

    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Absolute Persistent Global Header - Root Level */}
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <a href="#" className={styles.brandLogo}>
              <Image 
                src={logo} 
                alt="HireOn Logo" 
                height={28} 
                style={{ objectFit: 'contain', width: 'auto' }}
              />
            </a>
            <div className={styles.navLinks}>
              <a href="#manifesto" className={activeSection === "manifesto" ? styles.active : ""}>Reality</a>
              <a href="#process" className={activeSection === "process" ? styles.active : ""}>Process</a>
              <a href="#compare" className={activeSection === "compare" ? styles.active : ""}>Compare</a>
              <a href="#features" className={activeSection === "features" ? styles.active : ""}>Features</a>
              <a href="#testimonials" className={activeSection === "testimonials" ? styles.active : ""}>Feedback</a>
              <a href="#faq" className={activeSection === "faq" ? styles.active : ""}>FAQ</a>
            </div>
            <div className={styles.navActions} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Link href={AppRoutes.auth.login} className={styles.navSignIn} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sign In</Link>
              <Link href={AppRoutes.auth.register} className={`${styles.navCta} btn-primary`} style={{ padding: '12px 24px', borderRadius: '30px' }}>Get Started Free</Link>
              <button 
                className={styles.burgerBtn} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div className={`${styles.burgerIcon} ${isMenuOpen ? styles.burgerOpen : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </nav>

        </div>
      </header>

      <div className={`${styles.wrapper} fade-in`}>
        {/* Hero Section */}
      <div className={styles.container}>
        <main className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>🔥 Core Engine Updating... 1.2M Apps Filed</div>
              <h1 className={styles.headline}>Land your dream job. Without applying.</h1>
              <p className={styles.subtitle}>
                Job hunting shouldn&apos;t be a full-time job. HireOn acts as your personal AI recruiter, adapting your resume magically and submitting perfect applications to thousands of roles while you sleep.
              </p>
              <div className={styles.ctaGroup}>
                <Link href={AppRoutes.auth.register}>
                  <button className="btn-primary" style={{ padding: "20px 48px", fontSize: "1.2rem", borderRadius: "40px", boxShadow: "0 10px 25px rgba(49, 130, 206, 0.4)" }}>Start Auto-Applying</button>
                </Link>
                <Link href="#process">
                  <button className={styles.outlineBtn} style={{ padding: "20px 48px" }}>Explore Workflows</button>
                </Link>
              </div>
            </div>

            <div className={styles.visualContainer}>
              <div className={styles.mockup}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDots}>
                    <span></span><span></span><span></span>
                  </div>
                  <div style={{ margin: '0 auto', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Live Command Center</div>
                </div>
                <div className={styles.mockupBody}>
                  <div style={{ background: 'var(--accent-light)', padding: '24px', borderRadius: '16px', color: 'var(--accent-hover)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '1.2rem' }}>Target: Google & Meta Tier</strong>
                    <span className={styles.animFloat} style={{ background: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>Executing</span>
                  </div>
                  <div style={{ padding: '24px', border: '1px solid var(--surface-border)', borderRadius: '16px', position: 'relative' }}>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Scanning 125,000+ open global boards...</p>
                    <div style={{ width: '100%', height: '8px', background: 'var(--bg-subtle)', marginTop: '16px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div className={styles.animProgress} style={{ height: '100%', background: 'var(--accent-color)' }}></div>
                    </div>
                  </div>

                  <div style={{ position: 'relative', height: '120px', marginTop: '16px' }}>
                    <div className={styles.animItem1} style={{ position: 'absolute', width: '100%', fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 500 }}><span style={{ color: 'white', background: '#10b981', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>✓</span> Applied to Spotify Careers</span>
                      <span style={{ color: '#065f46', fontWeight: 700, background: '#d1fae5', padding: '6px 16px', borderRadius: '16px' }}>99% Match</span>
                    </div>
                    <div className={styles.animItem2} style={{ position: 'absolute', width: '100%', fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 500 }}><span style={{ color: 'white', background: '#10b981', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>✓</span> Applied to Vercel via Workday</span>
                      <span style={{ color: '#065f46', fontWeight: 700, background: '#d1fae5', padding: '6px 16px', borderRadius: '16px' }}>96% Match</span>
                    </div>
                    <div className={styles.animItem3} style={{ position: 'absolute', width: '100%', fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 500 }}><span style={{ color: 'white', background: '#10b981', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>✓</span> Applied to Meta Portal</span>
                      <span style={{ color: '#065f46', fontWeight: 700, background: '#d1fae5', padding: '6px 16px', borderRadius: '16px' }}>100% Match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Social Proof Integrations (Full Bleed Background) */}
      <div style={{ background: 'white' }}>
        <div className={styles.container}>
          <div className={styles.logoMarquee}>
            <div className={styles.logoItem}>Google</div>
            <div className={styles.logoItem}>Stripe</div>
            <div className={styles.logoItem}>Netflix</div>
            <div className={styles.logoItem}>Shopify</div>
            <div className={styles.logoItem}>Airbnb</div>
            <div className={styles.logoItem}>Vercel</div>
            <div className={styles.logoItem}>Robinhood</div>
          </div>
        </div>
      </div>

      {/* Manifesto Section (Editorial Long Scroll) */}
      <section id="manifesto" className={`${styles.manifestoSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.manifestoGrid}>
            <div className={`${styles.manifestoContent} ${styles.reveal} ${styles.revealDelay1}`}>
              <div className={styles.sectionLabel} style={{ background: '#fee2e2', color: '#ef4444', border: 'none' }}>The Reality</div>
              <h2 className={styles.manifestoTitle}>The rules of hiring have changed. <span style={{ color: 'var(--text-secondary)' }}>Your strategy hasn&apos;t.</span></h2>
              <p className={styles.manifestoText}>
                Every Fortune 500 company employs aggressive Applicant Tracking Systems (ATS). They utilize AI to scan, rank, and instantly reject <strong>98% of applicants</strong> before a human ever sees them.
              </p>
              <div className={styles.manifestoText}>
                If you are uploading a generic PDF in 2026, you are already losing to algorithms. We built HireOn to give you the same technical leverage as the corporations.
              </div>
            </div>
            <div className={`${styles.manifestoVisual} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.statsCard}>
                <div className={styles.statsCardHeader}>ATS Pulse</div>
                <div className={styles.statsCardValue}>98%</div>
                <div className={styles.statsCardLabel}>Average Initial Rejection Rate</div>
                <div className={styles.statsCardLine}></div>
                <div className={styles.statsCardFooter}>Source: Fortune 500 Hiring Data 2026</div>
              </div>
              <div className={styles.floatingAlert} style={{ top: '-40px', right: '-20px' }}>
                <span>✕</span> Insufficient Keyword Match
              </div>
              <div className={styles.floatingAlert} style={{ bottom: '20px', left: '-40px', background: '#ecfdf5', color: '#10b981', borderColor: '#10b981' }}>
                <span>✓</span> Optimized by HireOn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Process Flow */}
      <div className={styles.container}>
        <section id="process" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>The Execution Loop</div>
            <h2 className={styles.sectionTitle}>Three steps to securing your future.</h2>
          </div>

          <div className={styles.processGrid}>
            <div className={`${styles.processStep} ${styles.reveal} ${styles.revealDelay1}`}>
              <div className={styles.stepNumber}>1</div>
              <h3>Connect Data</h3>
              <p>Upload your background, GitHub, and past experience. We generate a hyper-flexible data graph representing you.</p>
            </div>
            <div className={`${styles.processStep} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.stepNumber}>2</div>
              <h3>Set Trajectory</h3>
              <p>Tell us exactly what you want. E.g. "Remote Product Manager roles passing $160k in the Fintech sector."</p>
            </div>
            <div className={`${styles.processStep} ${styles.reveal} ${styles.revealDelay3}`}>
              <div className={styles.stepNumber}>3</div>
              <h3>Silent Deployment</h3>
              <p>Close your laptop. Our agents actively rewrite your resume for every highly-targeted job and apply autonomously.</p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ background: 'var(--bg-subtle)' }}>
        {/* Comparison Table Section */}
        <div className={styles.container}>
          <section id="compare" className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>The Paradigm Shift</div>
              <h2 className={styles.sectionTitle}>Stop competing with robots.</h2>
              <p className={styles.sectionSubtitle}>Why use MS Word when companies are using AI to reject you?</p>
            </div>

            <div className={styles.comparisonCards}>
              {/* Old Way Card */}
              <div className={`${styles.vsCard} ${styles.reveal} ${styles.revealDelay1}`}>
                <div className={styles.vsCardHeader}>
                  <div className={styles.vsBadgeOld}>The Manual Method</div>
                  <h3>Wasting 100+ hours per month.</h3>
                </div>
                <div className={styles.vsCardBody}>
                  <div className={styles.vsItem}>
                    <div className={styles.vsIcon}>✕</div>
                    <div>
                      <strong>Blind Submissions:</strong>
                      <p>Applying to stale ghost jobs that were filled 3 weeks ago.</p>
                    </div>
                  </div>
                  <div className={styles.vsItem}>
                    <div className={styles.vsIcon}>✕</div>
                    <div>
                      <strong>Generic Resumes:</strong>
                      <p>Using the same PDF for every job, getting instantly rejected by ATS.</p>
                    </div>
                  </div>
                  <div className={styles.vsItem}>
                    <div className={styles.vsIcon}>✕</div>
                    <div>
                      <strong>Submission Fatigue:</strong>
                      <p>Spending 45 minutes on every Workday form manually.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.vsSeparator}>VS</div>

              {/* HireOn Way Card */}
              <div className={`${styles.vsCardHireon} ${styles.reveal} ${styles.revealDelay2}`}>
                <div className={styles.vsCardHeader}>
                  <div className={styles.vsBadgeNew}>The HireOn Advantage</div>
                  <h3>Infinite Scale. Zero Effort.</h3>
                </div>
                <div className={styles.vsCardBody}>
                  <div className={styles.vsItem}>
                    <div className={styles.vsIconCheck}>✦</div>
                    <div>
                      <strong>Market Intelligence:</strong>
                      <p>Only applying to high-velocity, verified active hiring pushes.</p>
                    </div>
                  </div>
                  <div className={styles.vsItem}>
                    <div className={styles.vsIconCheck}>✦</div>
                    <div>
                      <strong>Dynamic Adaptation:</strong>
                      <p>Resumes are rewritten per-job in milliseconds for 99% ATS match.</p>
                    </div>
                  </div>
                  <div className={styles.vsItem}>
                    <div className={styles.vsIconCheck}>✦</div>
                    <div>
                      <strong>Autonomous Proxy:</strong>
                      <p>Our agents handle the forms. You just show up for the interview.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.vsCardFooter}>
                  <div className={styles.vsStatBox}>
                    <div className={styles.vsStatValue}>100%</div>
                    <div className={styles.vsStatLabel}>Automation</div>
                  </div>
                  <div className={styles.vsStatBox}>
                    <div className={styles.vsStatValue}>0s</div>
                    <div className={styles.vsStatLabel}>Manual Labor</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.container}>
        {/* Expanded Features Section with Data Telemetry! */}
        <section id="features" className={`${styles.section} ${styles.reveal}`} style={{ paddingTop: '80px' }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Automated Workflow</div>
            <h2 className={styles.sectionTitle}>Scale your job hunt infinitely.</h2>
            <p className={styles.sectionSubtitle}>
              Operate like a recruiting agency of one. Let our automation handle the heavy lifting of formatting and applying, so you can focus entirely on interview preparation.
            </p>
          </div>



          {/* Feature 1 */}
          <div className={`${styles.featureRow} ${styles.reveal}`}>
            <div className={`${styles.featureContent} ${styles.reveal} ${styles.revealDelay1}`}>
              <h3>Beat the ATS Resume Scanners</h3>
              <p>Every major company uses Applicant Tracking Systems (ATS) to instantly reject resumes missing key buzzwords. Our Smart Resume engine instantly reads the live job description and fluidly adapts your experience to mirror exactly what the software wants to see.</p>
              <div className={styles.featureList}>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Instant 90%+ Passing Range:</strong> We optimize your document&apos;s internal keyword density algorithm to force the corporate parser to greenlight you to a human.</span>
                </div>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Massive A/B Testing:</strong> We spin up 50+ resume variations simultaneously on our servers, discovering which formatting rules yield the highest interview callback ratios dynamically.</span>
                </div>
              </div>
            </div>
            <div className={`${styles.featureVisual} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.animatedContainer}>
                <div className={styles.scanBeam}></div>
                <div style={{ borderBottom: '2px solid var(--surface-border)', paddingBottom: '20px' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>John Doe</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>Senior Software Engineer</div>
                </div>
                <div style={{ position: 'relative', height: '100px', marginTop: '32px' }}>
                  <div className={styles.animItem1} style={{ position: 'absolute', width: '100%', display: 'flex', gap: '20px', background: 'var(--accent-light)', padding: '20px', borderRadius: '16px' }}>
                    <div style={{ color: 'var(--accent-color)', fontSize: '1.4rem' }}>💡</div>
                    <div style={{ fontSize: '1.05rem', color: 'var(--accent-hover)' }}><strong>AI Event:</strong> Injecting &quot;GraphQL&quot; constraints...</div>
                  </div>
                  <div className={styles.animItem2} style={{ position: 'absolute', width: '100%', display: 'flex', gap: '20px', background: '#d1fae5', padding: '20px', borderRadius: '16px' }}>
                    <div style={{ color: '#10b981', fontSize: '1.4rem' }}>📈</div>
                    <div style={{ fontSize: '1.05rem', color: '#065f46' }}><strong>Resolved:</strong> Match Score reached 98%. PDF Ready.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: 'auto' }}>
                  <div style={{ width: '100%', height: '16px', background: 'var(--bg-subtle)', borderRadius: '8px' }}></div>
                  <div style={{ width: '80%', height: '16px', background: 'var(--bg-subtle)', borderRadius: '8px' }}></div>
                  <div style={{ width: '90%', height: '16px', background: 'var(--bg-subtle)', borderRadius: '8px' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Cover Letters */}
          <div className={`${styles.featureRow} ${styles.reverse} ${styles.reveal}`}>
            <div className={`${styles.featureContent} ${styles.reveal} ${styles.revealDelay1}`}>
              <h3>Hyper-Contextual Cover Letters</h3>
              <p>Stop writing generic &quot;To Whom It May Concern&quot; introductions. Our language models read the specific company&apos;s cultural values and the exact job requirements to generate a uniquely tailored document that sounds exactly like you in milliseconds.</p>
              <div className={styles.featureList}>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Tone Matching:</strong> Applying to a Valley startup? The tone is bold and concise. Applying to a traditional bank? The tone is formal and highly structured.</span>
                </div>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Instant Delivery:</strong> Attached automatically as an immaculate PDF to every application proxy that allows for supplemental documents.</span>
                </div>
              </div>
            </div>
            <div className={`${styles.featureVisual} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.animatedContainer}>
                <div style={{ background: '#f8fafc', padding: '16px', borderBottom: '1px solid var(--surface-border)', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Generative Document Engine</div>
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Generating Cover Letter...</div>
                  <div style={{ width: '40%' }}><div className={styles.animProgress} style={{ height: '8px', background: 'var(--accent-hover)', borderRadius: '4px' }}></div></div>
                  <div style={{ width: '100%' }}><div className={styles.animProgress} style={{ height: '8px', background: 'var(--surface-border)', borderRadius: '4px', animationDelay: '0.5s' }}></div></div>
                  <div style={{ width: '90%' }}><div className={styles.animProgress} style={{ height: '8px', background: 'var(--surface-border)', borderRadius: '4px', animationDelay: '1s' }}></div></div>
                  <div style={{ width: '95%' }}><div className={styles.animProgress} style={{ height: '8px', background: 'var(--surface-border)', borderRadius: '4px', animationDelay: '1.5s' }}></div></div>
                  <div style={{ width: '60%' }}><div className={styles.animProgress} style={{ height: '8px', background: 'var(--surface-border)', borderRadius: '4px', animationDelay: '2s' }}></div></div>
                  <div className={styles.animItem1} style={{ position: 'absolute', bottom: '32px', right: '32px', background: '#d1fae5', color: '#10b981', padding: '8px 16px', borderRadius: '20px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>Synthesized ✓</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Bento Grid */}
          <div className={`${styles.integrationBento} ${styles.reveal}`}>
            <div className={`${styles.bentoCard} ${styles.reveal} ${styles.revealDelay1}`}>
              <div className={styles.bentoHeader}>
                <div className={styles.bentoIcon} style={{ background: '#0ea5e9' }}>WD</div>
                <h4>Workday App API</h4>
              </div>
              <p>Native proxy parsing. 100% bypass of CAPTCHA & SSO login walls.</p>
              <div className={styles.bentoData}>
                <span>Latency: <strong>42ms</strong></span>
                <span>Success: <strong>99.8%</strong></span>
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.bentoHeader}>
                <div className={styles.bentoIcon} style={{ background: '#10b981' }}>GH</div>
                <h4>Greenhouse System</h4>
              </div>
              <p>Direct REST payload injection into the internal enterprise hiring queues.</p>
              <div className={styles.bentoData}>
                <span>Volume: <strong>140k/day</strong></span>
                <span>Rate: <strong>Zero-Limit</strong></span>
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.reveal} ${styles.revealDelay3}`}>
              <div className={styles.bentoHeader}>
                <div className={styles.bentoIcon} style={{ background: '#6366f1' }}>LV</div>
                <h4>Lever Webhooks</h4>
              </div>
              <p>Automated multi-step form execution with custom knockout logic handling.</p>
              <div className={styles.bentoData}>
                <span>Knockouts: <strong>Auto-Solved</strong></span>
                <span>Speed: <strong>Instant</strong></span>
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.reveal} ${styles.revealDelay4}`}>
              <div className={styles.bentoHeader}>
                <div className={styles.bentoIcon} style={{ background: '#0a66c2' }}>IN</div>
                <h4>LinkedIn Scripts</h4>
              </div>
              <p>Background script agent utilizing DOM element mapping to quick-apply.</p>
              <div className={styles.bentoData}>
                <span>Mapping: <strong>Dynamic DOM</strong></span>
                <span>Status: <strong>Active</strong></span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '-40px', marginBottom: '160px', color: 'var(--text-secondary)' }}>Native integration engines routing successfully to all top 4 corporate ATS standards.</div>

          {/* Feature 2: High Volume Auto Apply */}
          <div className={`${styles.featureRow} ${styles.reveal}`}>
            <div className={`${styles.featureContent} ${styles.reveal} ${styles.revealDelay1}`}>
              <h3>Zero-Click Auto Applications</h3>
              <p>Why type in your address and college dates 400 times? HireOn decrypts complex corporate portals and fills out dynamic Workday/Greenhouse forms perfectly on your behalf. Just define your salary range, and let the engine fire.</p>
              <div className={styles.featureList}>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Knockout Questions:</strong> Automatically synthesizes written answers regarding visa status, sponsorships, and location preferences locally.</span>
                </div>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Scale Over 450 Portals:</strong> We successfully proxy submissions to nearly half a thousand Fortune 500 company hiring backends continuously.</span>
                </div>
              </div>
            </div>
            <div className={`${styles.featureVisual} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.animatedContainer}>
                <div style={{ background: '#f8fafc', padding: '20px', borderBottom: '1px solid var(--surface-border)', fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Workday Autofill Agent</div>
                <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#d1fae5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</div>
                    <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '6px', flex: 1 }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#d1fae5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</div>
                    <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '6px', flex: 1 }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div className={styles.spinner} style={{ width: '32px', height: '32px', borderWidth: '4px' }}></div>
                    <div style={{ height: '12px', background: 'var(--bg-subtle)', borderRadius: '6px', flex: 1, overflow: 'hidden' }}>
                      <div className={styles.animProgress} style={{ background: 'var(--accent-color)', height: '100%' }}></div>
                    </div>
                  </div>
                  <div style={{ marginTop: 'auto', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.1rem', fontStyle: 'italic' }}>Bypassing CAPTCHA and submitting PDF...</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Market Scraping */}
          <div className={`${styles.featureRow} ${styles.reverse} ${styles.reveal}`}>
            <div className={`${styles.featureContent} ${styles.reveal} ${styles.revealDelay1}`}>
              <h3>Continuous Market Intelligence</h3>
              <p>HireOn isn&apos;t just a submission layer; it is an active listening engine. Our cloud infrastructure continuously synchronizes datasets from platforms like Glassdoor, Levels.fyi, and Blind.</p>
              <div className={styles.featureList}>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Filter out Ghost Jobs:</strong> We actively avoid stale, 90-day-old enterprise listings and prioritize high-velocity hiring pushes.</span>
                </div>
                <div className={styles.featureListItem}>
                  <span className={styles.checkIcon}>✦</span>
                  <span><strong>Live Salary Alignment:</strong> Only apply if the company&apos;s verified internal H1B/Offer data matches your absolute minimum target compensation.</span>
                </div>
              </div>
            </div>
            <div className={`${styles.featureVisual} ${styles.reveal} ${styles.revealDelay2}`}>
              <div className={styles.animatedContainer} style={{ background: 'var(--bg-secondary)', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
                <div className={styles.animBlink} style={{ fontSize: '3rem' }}>📡</div>
                <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '1.5rem' }}>Intercepting Data...</div>
                <div style={{
                  border: '1px solid var(--surface-border)',
                  padding: '16px', borderRadius: '16px', background: 'white',
                  width: '100%', textAlign: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                }}>
                  <strong style={{ color: '#ef4444' }}>[Declined Target]</strong> Ghost job flag detected at Acme Corp. <br />Avg compensation ($80k) falls below user parameters.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Social Proof Testimonials - FULL WIDTH */}
      <section id="testimonials" className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Wall of Love</div>
            <h2 className={styles.sectionTitle}>Thousands are securing interviews effortlessly.</h2>
          </div>
        </div>
        <div className={styles.testimonialsMarquee}>
          {/* Speed 1: Left */}
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeContent}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`t1-${i}`} className={styles.testimonialCard}>
                  <div className={styles.testimonialQuote}>
                    {i === 1 && "I went from 0 callbacks in 3 months of manual applying to 6 interviews in one week."}
                    {i === 2 && "The automated Workday form-filler is pure magic. I woke up to 4 screening calls on Monday."}
                    {i === 3 && "HireOn wrote me a deeply tailored letter for Netflix and the recruiter loved it."}
                    {i === 4 && "Finally a tool that understands how to beat the ATS algorithms. Worth every penny."}
                    {i === 5 && "Secured my dream role at Google. HireOn handled the first 50 applications for me."}
                    {i === 6 && "The semantic matching is insane. It's like having a personal agent working 24/7."}
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar} style={{ background: i % 2 === 0 ? '#dbeafe' : i % 3 === 0 ? '#fce7f3' : '#e0e7ff' }}>
                      {i === 1 && "SD"} {i === 2 && "JP"} {i === 3 && "MT"} {i === 4 && "RK"} {i === 5 && "AL"} {i === 6 && "BH"}
                    </div>
                    <div>
                      <strong>{i === 1 && "Sarah Davis"} {i === 2 && "James P."} {i === 3 && "Maria Torres"} {i === 4 && "Ryan K."} {i === 5 && "Alex L."} {i === 6 && "Ben H."}</strong>
                      <div className={styles.authorTitle}>{i === 1 && "Product Designer"} {i === 2 && "Frontend Engineer"} {i === 3 && "Data Scientist"} {i === 4 && "Sales Exec"} {i === 5 && "Software Lead"} {i === 6 && "Product Manager"}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className={styles.marqueeContent}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`d1-${i}`} className={styles.testimonialCard}>
                  <div className={styles.testimonialQuote}>
                    {i === 1 && "I went from 0 callbacks in 3 months of manual applying to 6 interviews in one week."}
                    {i === 2 && "The automated Workday form-filler is pure magic. I woke up to 4 screening calls on Monday."}
                    {i === 3 && "HireOn wrote me a deeply tailored letter for Netflix and the recruiter loved it."}
                    {i === 4 && "Finally a tool that understands how to beat the ATS algorithms. Worth every penny."}
                    {i === 5 && "Secured my dream role at Google. HireOn handled the first 50 applications for me."}
                    {i === 6 && "The semantic matching is insane. It's like having a personal agent working 24/7."}
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar} style={{ background: i % 2 === 0 ? '#dbeafe' : i % 3 === 0 ? '#fce7f3' : '#e0e7ff' }}>
                      {i === 1 && "SD"} {i === 2 && "JP"} {i === 3 && "MT"} {i === 4 && "RK"} {i === 5 && "AL"} {i === 6 && "BH"}
                    </div>
                    <div>
                      <strong>{i === 1 && "Sarah Davis"} {i === 2 && "James P."} {i === 3 && "Maria Torres"} {i === 4 && "Ryan K."} {i === 5 && "Alex L."} {i === 6 && "Ben H."}</strong>
                      <div className={styles.authorTitle}>{i === 1 && "Product Designer"} {i === 2 && "Frontend Engineer"} {i === 3 && "Data Scientist"} {i === 4 && "Sales Exec"} {i === 5 && "Software Lead"} {i === 6 && "Product Manager"}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving Right */}
          <div className={`${styles.marqueeRow} ${styles.marqueeReverse}`}>
            <div className={styles.marqueeContent}>
              {[7, 8, 9, 10, 11, 12].map((i) => (
                <div key={`t2-${i}`} className={styles.testimonialCard}>
                  <div className={styles.testimonialQuote}>
                    {i === 7 && "I was skeptical, but HireOn is actually doing what it says. 4 interviews lined up."}
                    {i === 8 && "Save yourself the headache. Let the robots fight the robots. HireOn is a lifesaver."}
                    {i === 9 && "My salary increased by 40% after using HireOn's targeting engine."}
                    {i === 10 && "Simple, efficient, and lethal. The best way to navigate the 2026 job market."}
                    {i === 11 && "The UI is clean and the automation is robust. Highly recommend to anyone."}
                    {i === 12 && "It's not just an app-filler; it's a career accelerator."}
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar} style={{ background: i % 2 === 0 ? '#dbeafe' : i % 4 === 0 ? '#fef3c7' : '#ecfdf5' }}>
                      {i === 7 && "KL"} {i === 8 && "TH"} {i === 9 && "AM"} {i === 10 && "DN"} {i === 11 && "CP"} {i === 12 && "JV"}
                    </div>
                    <div>
                      <strong>{i === 7 && "Karen L."} {i === 8 && "Tom H."} {i === 9 && "Anita M."} {i === 10 && "Dan N."} {i === 11 && "Chris P."} {i === 12 && "Julio V."}</strong>
                      <div className={styles.authorTitle}>{i === 7 && "UX Researcher"} {i === 8 && "Cloud Architect"} {i === 9 && "Data Analyst"} {i === 10 && "HR Tech"} {i === 11 && "Fullstack Eng"} {i === 12 && "Founder"}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for loop */}
            <div className={styles.marqueeContent}>
              {[7, 8, 9, 10, 11, 12].map((i) => (
                <div key={`d2-${i}`} className={styles.testimonialCard}>
                  <div className={styles.testimonialQuote}>
                    {i === 7 && "I was skeptical, but HireOn is actually doing what it says. 4 interviews lined up."}
                    {i === 8 && "Save yourself the headache. Let the robots fight the robots. HireOn is a lifesaver."}
                    {i === 9 && "My salary increased by 40% after using HireOn's targeting engine."}
                    {i === 10 && "Simple, efficient, and lethal. The best way to navigate the 2026 job market."}
                    {i === 11 && "The UI is clean and the automation is robust. Highly recommend to anyone."}
                    {i === 12 && "It's not just an app-filler; it's a career accelerator."}
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar} style={{ background: i % 2 === 0 ? '#dbeafe' : i % 4 === 0 ? '#fef3c7' : '#ecfdf5' }}>
                      {i === 7 && "KL"} {i === 8 && "TH"} {i === 9 && "AM"} {i === 10 && "DN"} {i === 11 && "CP"} {i === 12 && "JV"}
                    </div>
                    <div>
                      <strong>{i === 7 && "Karen L."} {i === 8 && "Tom H."} {i === 9 && "Anita M."} {i === 10 && "Dan N."} {i === 11 && "Chris P."} {i === 12 && "Julio V."}</strong>
                      <div className={styles.authorTitle}>{i === 7 && "UX Researcher"} {i === 8 && "Cloud Architect"} {i === 9 && "Data Analyst"} {i === 10 && "HR Tech"} {i === 11 && "Fullstack Eng"} {i === 12 && "Founder"}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* FAQ Section */}
        <section id="faq" className={styles.section} style={{ padding: '80px 0' }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Support</div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions.</h2>
          </div>
          <div className={styles.faqContainer}>
            <details className={`${styles.faqItem} ${styles.reveal} ${styles.revealDelay1}`}>
              <summary className={styles.faqSummary}>Will employers know I am using an AI to apply? <div className={styles.faqIcon}></div></summary>
              <div className={styles.faqContent}>No. Our AI doesn&apos;t just paste robotic blocks of text. It uses your actual historical data and tone-matches it to the company&apos;s culture. The applications generated are indistinguishable from human efforts.</div>
            </details>
            <details className={`${styles.faqItem} ${styles.reveal} ${styles.revealDelay2}`}>
              <summary className={styles.faqSummary}>Which job boards do you support? <div className={styles.faqIcon}></div></summary>
              <div className={styles.faqContent}>We currently integrate directly with LinkedIn, Indeed, Glassdoor, and native enterprise ATS portals including Workday, Greenhouse, and Lever.</div>
            </details>
            <details className={`${styles.faqItem} ${styles.reveal} ${styles.revealDelay3}`}>
              <summary className={styles.faqSummary}>Do I need to leave my computer on? <div className={styles.faqIcon}></div></summary>
              <div className={styles.faqContent}>No! Once you set up your profile and configure your campaign, our cloud servers take over. We apply to jobs entirely in the background while you sleep.</div>
            </details>
            <details className={`${styles.faqItem} ${styles.reveal} ${styles.revealDelay4}`}>
              <summary className={styles.faqSummary}>Is my personal data completely secure? <div className={styles.faqIcon}></div></summary>
              <div className={styles.faqContent}>Absolutely. All resume parsing and personal identifiers run through strict TLS encryption. We never sell your data to recruiters—we exclusively work for you, the candidate.</div>
            </details>
          </div>

          <div className={`${styles.reveal} ${styles.faqSupportCard}`}>
            <div className={styles.faqSupportVisual}>
              <div className={styles.supportDot}></div>
              <span>Live Support Protocol Active</span>
            </div>
            <h3 className={styles.faqSupportTitle}>Still have questions?</h3>
            <p className={styles.faqSupportText}>Our elite support team is available 24/7 to help you optimize your automated job hunt and refine your search strategy.</p>
            <div className={styles.ctaGroup} style={{ justifyContent: 'center' }}>
              <Link href="mailto:support@hireon.ai">
                <button className="btn-primary" style={{ padding: '20px 64px' }}>Contact Support</button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Consumer CTA (Final Conversion Section) */}
      <div className={`${styles.footerCtaBanner} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.ctaBadge}>Ready to Scale?</div>
          <h2 className={styles.ctaTitle}>Stop applying manually today.</h2>
          <p className={styles.ctaDescription}>
            The job market is a numbers game HireOn ensures you&apos;re playing with a stacked deck. Join 12,000+ engineers, designers, and managers automating their career growth.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link href={AppRoutes.auth.register}>
              <button className={styles.ctaPrimaryBtn}>Sign Up Now</button>
            </Link>
          </div>
          <div className={styles.ctaSecondarySignals}>
            <div className={styles.signalCard}>
              <span className={styles.signalIcon}>💳</span>
              <span>No credit card</span>
            </div>
            <div className={styles.signalCard}>
              <span className={styles.signalIcon}>⚡</span>
              <span>1.2M apps filed</span>
            </div>
            <div className={styles.signalCard}>
              <span className={styles.signalIcon}>🛡️</span>
              <span>Secure OAuth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern High-End Footer */}
      <footer className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div style={{ marginBottom: '24px' }}>
                <Image 
                  src={logo} 
                  alt="HireOn Logo" 
                  height={28} 
                  style={{ objectFit: 'contain', width: 'auto' }}
                />
              </div>
              <p>The autonomous execution layer for the modern professional. Scaling careers since 2024.</p>
              <div className={styles.socialLinks}>
                <Link href="#">𝕏</Link>
                <Link href="#">in</Link>
                <Link href="#">gh</Link>
              </div>
            </div>
            <div className={`${styles.footerLinks} ${openFooterCategory === 'platform' ? styles.footerOpen : ""}`}>
              <h4 onClick={() => toggleFooterCategory('platform')}>
                Platform 
                <span className={styles.footerChevron}>▼</span>
              </h4>
              <div className={styles.footerLinksContent}>
                <Link href="#process" onClick={() => setOpenFooterCategory(null)}>How it Works</Link>
                <Link href="#features" onClick={() => setOpenFooterCategory(null)}>AI Engine</Link>
                <Link href="#compare" onClick={() => setOpenFooterCategory(null)}>Compare</Link>
              </div>
            </div>
            <div className={`${styles.footerLinks} ${openFooterCategory === 'company' ? styles.footerOpen : ""}`}>
              <h4 onClick={() => toggleFooterCategory('company')}>
                Company
                <span className={styles.footerChevron}>▼</span>
              </h4>
              <div className={styles.footerLinksContent}>
                <Link href="#">About</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Blog</Link>
              </div>
            </div>
            <div className={`${styles.footerLinks} ${openFooterCategory === 'support' ? styles.footerOpen : ""}`}>
              <h4 onClick={() => toggleFooterCategory('support')}>
                Support
                <span className={styles.footerChevron}>▼</span>
              </h4>
              <div className={styles.footerLinksContent}>
                <Link href="#faq" onClick={() => setOpenFooterCategory(null)}>Help Center</Link>
                <Link href="#">Status</Link>
                <Link href="mailto:support@hireon.ai">Email Us</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 HireOn AI. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation Menu - Moved to Root for total stability */}
      {isMenuOpen && (
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
          <div className={styles.mobileDrawer}>
            <button className={styles.mobileCloseBtn} onClick={() => setIsMenuOpen(false)}>
              <span>✕</span>
            </button>
            <div className={styles.mobileLinks}>
              <a href="#manifesto" onClick={() => setIsMenuOpen(false)}>Reality</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#compare" onClick={() => setIsMenuOpen(false)}>Compare</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Feedback</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            </div>
            <div className={styles.mobileActions}>
              <Link href={AppRoutes.auth.login} className={styles.mobileSignIn} onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              <Link href={AppRoutes.auth.register} className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>Get Started Free</Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
