'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppRoutes } from '../../../../routes/app_routes';
import logo from "../../../../assets/images/hireon-logo.png";
import styles from './Auth.module.css';

const features = [
  {
    title: "Reliable, Easy and Fast",
    subtitle: "HireOn helps you find the best talent and manage your team effortlessly.",
    visualType: 'analytics'
  },
  {
    title: "Scale With Confidence",
    subtitle: "Our automated matching system ensures you see qualified candidates.",
    visualType: 'team'
  },
  {
    title: "Effortless Team Flow",
    subtitle: "Built-in tools to track progress and maintain seamless communication.",
    visualType: 'automation'
  }
];

const RegisterScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [workflowStep, setWorkflowStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const workflowTimer = setInterval(() => {
      setWorkflowStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(workflowTimer);
  }, []);

  return (
    <div className={styles.authLayout}>
      <div className={styles.leftPanel}>
        <div className={styles.brandLogo}>
          <Image 
            src={logo} 
            alt="HireOn Logo" 
            height={32} 
            style={{ objectFit: 'contain', width: 'auto' }}
          />
        </div>

        <div className={styles.slideContainer}>
          <div 
            className={styles.slideWrapper} 
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Slide 1: Recruitment Analytics */}
            <div className={styles.slide}>
              <div className={styles.visualAnalytics} style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Active Talent</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>2,490</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>New Leads</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#10b981' }}>+128</div>
                  </div>
                </div>

                <div style={{ position: 'relative', height: '140px', width: '100%', marginBottom: '24px' }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <path d="M0 80 Q 50 40, 100 70 T 200 60 T 300 80 T 400 50" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                    <path d="M0 100 Q 50 60, 100 90 T 200 80 T 300 100 T 400 70" fill="none" stroke="#3b82f6" strokeWidth="3" />
                    <circle cx="200" cy="80" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                  </svg>
                  <div style={{ position: 'absolute', top: '15px', left: '165px', background: '#0f172a', color: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '600', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                    Match: 98%
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '12px 0', borderBottom: '1px solid #f1f5f9', marginBottom: '20px' }}>
                   {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((d, i) => (
                     <div key={d} style={{ fontSize: '0.7rem', color: i === 0 ? '#1e293b' : '#94a3b8', fontWeight: i === 0 ? '700' : '500' }}>{d}</div>
                   ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>Frontend Architect</div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Verified profile • Applied Today</div>
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#10b981' }}>Qualified</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>QA Engineer</div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Technical test • 2h ago</div>
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#3b82f6' }}>Interview</div>
                  </div>
                </div>

                <div className={styles.secondaryBadge} style={{ top: '60px', right: '-110px', width: '220px', padding: '16px' }}>
                  <div className={styles.badgeIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>👤</div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>Interview Set</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#3b82f6' }}>Sarah Jenkins</div>
                  </div>
                </div>

                <div className={styles.secondaryBadge} style={{ bottom: '40px', left: '-130px', width: '190px', height: 'auto', minHeight: '160px', flexDirection: 'column', justifyContent: 'center', padding: '20px', textAlign: 'center', gap: '12px' }}>
                  <div className={styles.badgeIcon} style={{ width: '40px', height: '40px', fontSize: '1rem' }}>✓</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '500', lineHeight: '1.4' }}>Candidate hired successfully</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1e293b' }}>Lead Dev</div>
                </div>
              </div>
            </div>

            {/* Slide 2: Team */}
            <div className={styles.slide}>
              <div className={styles.visualTeam}>
                <div style={{ marginBottom: '24px', fontSize: '1rem', fontWeight: '700', color: '#1a365d', textAlign: 'center' }}>Pipeline Automation</div>
                {[1, 2, 3, 4, 5].map((i, idx) => (
                  <div 
                    key={i} 
                    className={`${styles.teamItem} ${workflowStep === idx ? styles.workflowActive : ''}`}
                    style={{ 
                      transition: 'all 0.5s ease',
                      borderLeft: workflowStep === idx ? '6px solid #3b82f6' : '1px solid rgba(0,0,0,0.02)',
                      background: workflowStep === idx ? '#f8fafc' : 'white'
                    }}
                  >
                    <div className={styles.teamItemSkeleton}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: workflowStep === idx ? '#3b82f6' : '#dbeafe', transition: 'all 0.3s' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                        <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', width: '60%' }}></div>
                        <div style={{ height: '6px', background: '#f8fafc', borderRadius: '3px', width: '30%' }}></div>
                      </div>
                      {workflowStep === idx && (
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button className={`${styles.miniBtn} ${styles.btnPrimary}`}>Hire</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className={styles.mockBadge} style={{ background: '#3b82f6', color: 'white', right: '-80px' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>12+</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', opacity: 0.8 }}>Hires Today</span>
                </div>
                <div className={`${styles.secondaryBadge} ${styles.midLeft}`} style={{ left: '-100px' }}>
                  <div className={styles.avatarGroup}>
                    <div className={styles.avatar} style={{ background: '#cbd5e1' }}></div>
                    <div className={styles.avatar} style={{ background: '#94a3b8' }}></div>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', marginLeft: '8px' }}>Team Growing</span>
                </div>
              </div>
            </div>

            {/* Slide 3: Automation */}
            <div className={styles.slide}>
              <div className={styles.visualAutomation}>
                <div style={{ color: 'white', marginBottom: '16px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                   Live Deployment
                  <div style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginLeft: 'auto' }}>
                    <div style={{ width: '100%', height: '100%', background: '#10b981', borderRadius: '2px' }}></div>
                  </div>
                </div>
                <div style={{ padding: '24px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', background: 'rgba(255,255,255,0.05)' }}>
                  <div className={styles.codeBlock}>
                    <div>$ refreshing candidate pool...</div>
                    <div style={{ opacity: 0.7 }}>$ indexing skills matrix...</div>
                    <div style={{ color: '#3b82f6' }}>$ pipeline status: READY</div>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginTop: '20px' }}>
                    <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', borderRadius: '4px' }}></div>
                  </div>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}></div>
                  ))}
                </div>
                <div className={styles.mockBadge} style={{ background: '#1e1b4b', border: '1px solid rgba(255,255,255,0.2)', right: '-80px' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b82f6' }}>LIVE</span>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>CONSOLE</span>
                </div>
                <div className={`${styles.secondaryBadge} ${styles.bottomLeft}`} style={{ background: '#1e1b4b', color: 'white', border: '1px solid rgba(255,255,255,0.1)', left: '-100px' }}>
                  <div className={styles.badgeIcon} style={{ background: '#10b981' }}>●</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>Operational</span>
                    <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>Ping: 24ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Group: Narrative and Dots */}
        <div className={styles.bottomGroup}>
          <div key={activeSlide} className={styles.textFade}>
            <h1 className={styles.leftTitle}>{features[activeSlide].title}</h1>
            <p className={styles.leftSubtitle}>{features[activeSlide].subtitle}</p>
          </div>
          <div className={styles.dotContainer}>
            {features.map((_, index) => (
              <div 
                key={index} 
                className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <h2 className={styles.brandTitle}>Create an account</h2>
            <p className={styles.subtitle}>Join thousands of founders building the future.</p>
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialBtn}>
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.44-10.18l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span>Continue with Google</span>
            </button>
            <button className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 12c.03-3.03 2.48-4.5 2.58-4.58-1.41-2.06-3.58-2.34-4.36-2.37-1.85-.2-3.62 1.09-4.56 1.09-.95 0-2.4-1.07-3.95-1.04-2.03.03-3.91 1.18-4.96 3-2.1 3.68-.53 9.11 1.51 12.06 1 1.44 2.19 3.06 3.75 3 1.51-.06 2.08-.97 3.9-.97 1.82 0 2.34.97 3.92.94 1.62-.03 2.65-1.46 3.63-2.9 1.12-1.66 1.58-3.26 1.61-3.34-.04-.01-3.1-1.2-3.13-4.79zM15.48 4.6c.83-1.02 1.39-2.45 1.24-3.87-1.21.05-2.67.82-3.54 1.84-.77.9-1.46 2.35-1.27 3.72 1.35.1 2.73-.67 3.57-1.69z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          <div className={styles.separator}>Or with email</div>

          <form className={styles.form}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div className={styles.inputGroup} style={{ flex: 1 }}>
                <label>First Name</label>
                <input type="text" placeholder="e.g. John" required />
              </div>
              <div className={styles.inputGroup} style={{ flex: 1 }}>
                <label>Last Name</label>
                <input type="text" placeholder="e.g. Doe" required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="name@company.com" required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Password</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password" 
                  required 
                  style={{ width: '100%', paddingRight: '100px' }}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontWeight: '700', fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <Link href={AppRoutes.dashboard} className={styles.loginBtn}>
              Create Account
            </Link>

            <div className={styles.termsText}>
              By creating an account, you agree to our{' '}
              <Link href="#" className={styles.termsLink}>Terms of Service</Link> and{' '}
              <Link href="#" className={styles.termsLink}>Privacy Policy</Link>.
            </div>
          </form>

          <div className={styles.signupPrompt}>
            Already have an account? <Link href={AppRoutes.auth.login} className={styles.signupLink}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
