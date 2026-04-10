import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";

export default function ProfileScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <h1>Your Profile</h1>
        <p>Manage your personal and professional details</p>
      </div>

      <div className={styles.mainGrid}>
        <div className={`glass-panel ${styles.recentApps}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--accent-light)', border: '4px solid white', boxShadow: 'var(--shadow-md)' }}></div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>User Name</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Senior Frontend Developer • New York, NY</p>
              <button className="btn-primary" style={{ marginTop: '12px', padding: '6px 16px', fontSize: '0.85rem' }}>Change Photo</button>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Basic Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>First Name</label>
              <input type="text" defaultValue="User" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--surface-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Last Name</label>
              <input type="text" defaultValue="Name" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--surface-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
              <input type="email" defaultValue="user@example.com" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--surface-border)', outline: 'none' }} />
            </div>
          </div>
          
          <button className="btn-primary" style={{ marginTop: '32px' }}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
