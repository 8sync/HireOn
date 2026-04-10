import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";

export default function AIAssistantScreen() {
  return (
    <div className={`fade-in ${styles.container}`} style={{ height: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column' }}>
      <div className={styles.pageHeader}>
        <h1>AI Career Assistant</h1>
        <p>Ask for resume tips, interview prep, or career advice</p>
      </div>

      <div className={`glass-panel`} style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ flex: 1, padding: '32px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', gap: '16px', maxWidth: '80%' }}>
            <div className={styles.avatar} style={{ flexShrink: 0, background: 'var(--accent-color)' }}></div>
            <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '16px', borderTopLeftRadius: 4, color: 'var(--text-primary)' }}>
              Hello! I'm your HireOn AI assistant. I noticed you have an interview with Vercel coming up. Would you like to do a mock interview or review commonly asked Next.js questions?
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', maxWidth: '80%', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
            <div className={styles.avatar} style={{ flexShrink: 0 }}></div>
            <div style={{ background: 'var(--accent-color)', color: 'white', padding: '16px', borderRadius: '16px', borderTopRightRadius: 4 }}>
              Let's review some commonly asked Next.js questions.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', maxWidth: '80%' }}>
            <div className={styles.avatar} style={{ flexShrink: 0, background: 'var(--accent-color)' }}></div>
            <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '16px', borderTopLeftRadius: 4, color: 'var(--text-primary)' }}>
              <p style={{ marginBottom: '12px' }}>Great! Here are 3 essential topics to brush up on for a Next.js centric role:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Server Components vs Client Components</strong> - Know exactly when and why to use 'use client'.</li>
                <li><strong>App Router Architecture</strong> - Be ready to explain layouts, nested routing, and data fetching strategies.</li>
                <li><strong>Caching</strong> - How Next.js caches fetch requests by default and how to revalidate them.</li>
              </ul>
            </div>
          </div>

        </div>

        <div style={{ padding: '24px', borderTop: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.5)' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              style={{ flex: 1, padding: '16px 24px', borderRadius: '30px', border: '1px solid var(--surface-border)', background: 'var(--bg-primary)', outline: 'none', fontSize: '1rem' }}
            />
            <button className="btn-primary" style={{ padding: '0 32px' }}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
