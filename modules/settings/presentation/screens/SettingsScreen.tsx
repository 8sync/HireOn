import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";

export default function SettingsScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <h1>Account Settings</h1>
        <p>Manage preferences and integrations</p>
      </div>

      <div className={styles.mainGrid}>
        <div className={`glass-panel ${styles.recentApps}`}>
          <h2 className={styles.sectionTitle}>Integrations</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid var(--surface-border)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: '#0a66c2', borderRadius: '8px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>in</div>
                <div>
                  <h4 style={{ fontWeight: 500 }}>LinkedIn</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Connected as user@example.com</p>
                </div>
              </div>
              <button style={{ background: 'transparent', border: '1px solid var(--surface-border)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', cursor: 'pointer' }}>Disconnect</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid var(--surface-border)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: '#14a800', borderRadius: '8px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Up</div>
                <div>
                  <h4 style={{ fontWeight: 500 }}>Upwork</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Not connected</p>
                </div>
              </div>
              <button className="btn-primary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>Connect</button>
            </div>
          </div>
          
          <h2 className={styles.sectionTitle} style={{ marginTop: '48px' }}>Notifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--accent-color)' }} />
              <span>Email me when I receive an interview invite</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--accent-color)' }} />
              <span>Email me a weekly summary of Auto Apply activity</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
