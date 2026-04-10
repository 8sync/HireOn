import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";

export default function AutoApplyScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1>Auto Apply Engine</h1>
          <div style={{ background: '#e6fffa', color: '#319795', padding: '6px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 500 }}>● Active</div>
        </div>
        <p>Let AI handle the initial outreach while you sleep</p>
      </div>

      <div className={styles.mainGrid}>
        <div className={`glass-panel ${styles.recentApps}`}>
          <h2 className={styles.sectionTitle}>Campaign Configuration</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Target Roles</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ padding: '6px 16px', background: 'var(--bg-subtle)', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid var(--surface-border)' }}>Frontend Engineer ✕</span>
                <span style={{ padding: '6px 16px', background: 'var(--bg-subtle)', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid var(--surface-border)' }}>React Developer ✕</span>
                <button style={{ padding: '6px 16px', background: 'transparent', border: '1px dashed var(--surface-border)', borderRadius: '20px', fontSize: '0.9rem', cursor: 'pointer' }}>+ Add Role</button>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Daily Limit</label>
              <input type="range" min="1" max="50" defaultValue="15" style={{ width: '100%', accentColor: 'var(--accent-color)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>1/day</span>
                <span>15/day</span>
                <span>50/day</span>
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: '16px', background: '#319795' }}>Pause Campaign</button>
          </div>
        </div>

        <div className={`glass-panel ${styles.jobMatches}`}>
          <h2 className={styles.sectionTitle}>Live Activity Pipeline</h2>
          <div className={styles.activityList}>
            {[
              { company: "Acme Corp", status: "Scanning Requirements", time: "Just now" },
              { company: "BetaTech", status: "Submitting Profile", time: "2 min ago" },
              { company: "Gamma Inc", status: "Skipped - Low Match", time: "15 min ago" }
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--surface-border)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: log.status.includes('Skipped') ? '#e2e8f0' : 'var(--accent-color)', marginTop: '6px' }}></div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 500 }}>{log.company}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{log.status}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
