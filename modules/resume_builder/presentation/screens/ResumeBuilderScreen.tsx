import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";

export default function ResumeBuilderScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <h1>Resume Builder</h1>
        <p>Craft your perfect application</p>
      </div>

      <div className={styles.mainGrid}>
        <div className={`glass-panel ${styles.recentApps}`}>
          <h2 className={styles.sectionTitle}>Content Editor</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Professional Summary</label>
              <textarea 
                style={{ 
                  width: '100%', minHeight: '120px', padding: '16px', 
                  borderRadius: '12px', border: '1px solid var(--surface-border)',
                  fontFamily: 'inherit', resize: 'vertical'
                }}
                defaultValue="Experienced frontend developer with a passion for building beautifully crafted, responsive, and performant web applications."
              />
              <button style={{ alignSelf: 'flex-start', background: 'var(--accent-light)', color: 'var(--accent-hover)', padding: '6px 16px', border: 'none', borderRadius: '20px', fontSize: '0.85rem', cursor: 'pointer', marginTop: '8px' }}>✨ AI Optimize</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Work Experience</label>
              <div style={{ padding: '16px', border: '1px solid var(--surface-border)', borderRadius: '12px' }}>
                <h4 style={{ fontWeight: 500 }}>Frontend Engineer @ TechCorp</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>2021 - Present</p>
                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Led migration to Next.js reducing load times by 40%.</li>
                  <li>Architected scalable component library used by 5 teams.</li>
                </ul>
              </div>
              <button style={{ alignSelf: 'flex-start', background: 'transparent', color: 'var(--text-primary)', border: '1px dashed var(--surface-border)', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', width: '100%' }}>+ Add Experience</button>
            </div>

          </div>
        </div>

        <div className={`glass-panel ${styles.jobMatches}`} style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 className={styles.sectionTitle} style={{margin: 0}}>Live Preview</h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Minimalist Theme</div>
          </div>
          
          <div style={{ flex: 1, border: '1px solid var(--surface-border)', borderRadius: '4px', padding: '32px', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', fontSize: '0.75rem' }}>
            <h1 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>John Doe</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Frontend Developer • New York, NY</p>
            <div style={{ height: '1px', background: 'var(--surface-border)', marginBottom: '16px' }}></div>
            <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Experienced frontend developer with a passion for building beautifully crafted, responsive, and performant web applications.</p>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-primary)' }}>EXPERIENCE</h3>
            <div style={{ marginBottom: '4px' }}>
              <strong>Frontend Engineer</strong> — TechCorp
            </div>
            <ul style={{ paddingLeft: '16px', color: 'var(--text-secondary)' }}>
              <li style={{marginBottom: '4px'}}>Led migration to Next.js reducing load times by 40%.</li>
              <li>Architected scalable component library used by 5 teams.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <button className="btn-primary" style={{ flex: 1 }}>Export PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
