import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";

export default function ApplicationsScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <h1>Applications Tracker</h1>
        <p>Manage and monitor your job pipeline</p>
      </div>

      <div className={styles.statsGrid} style={{ marginBottom: '16px' }}>
        <div className={`glass-panel ${styles.statCard}`} style={{ padding: '16px 24px' }}>
          <h3>Total Applied</h3>
          <div className={styles.statNumber} style={{ fontSize: '2rem' }}>142</div>
        </div>
        <div className={`glass-panel ${styles.statCard}`} style={{ padding: '16px 24px' }}>
          <h3>In Progress</h3>
          <div className={styles.statNumber} style={{ fontSize: '2rem' }}>24</div>
        </div>
        <div className={`glass-panel ${styles.statCard}`} style={{ padding: '16px 24px' }}>
          <h3>Interviews</h3>
          <div className={styles.statNumber} style={{ fontSize: '2rem', color: '#10b981' }}>8</div>
        </div>
        <div className={`glass-panel ${styles.statCard}`} style={{ padding: '16px 24px' }}>
          <h3>Rejected</h3>
          <div className={styles.statNumber} style={{ fontSize: '2rem', color: '#ef4444' }}>41</div>
        </div>
      </div>

      <div className={`glass-panel`} style={{ padding: '32px' }}>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '16px' }}>
          <button style={{ background: 'var(--accent-light)', color: 'var(--accent-hover)', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>All (142)</button>
          <button style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none', padding: '8px 16px', fontSize: '0.9rem', cursor: 'pointer' }}>Screening (24)</button>
          <button style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none', padding: '8px 16px', fontSize: '0.9rem', cursor: 'pointer' }}>Interviewing (8)</button>
          <button style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none', padding: '8px 16px', fontSize: '0.9rem', cursor: 'pointer' }}>Offers (1)</button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <th style={{ padding: '12px 16px', fontWeight: 500 }}>Company & Role</th>
              <th style={{ padding: '12px 16px', fontWeight: 500 }}>Date Applied</th>
              <th style={{ padding: '12px 16px', fontWeight: 500 }}>Status</th>
              <th style={{ padding: '12px 16px', fontWeight: 500 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { role: "Frontend Engineer", company: "Spotify", date: "Oct 12, 2023", status: "Interviewing", color: "#10b981", bg: "#d1fae5" },
              { role: "React Developer", company: "Vercel", date: "Oct 10, 2023", status: "Screening", color: "#b58900", bg: "#fdf6e3" },
              { role: "UI/UX Developer", company: "Apple", date: "Oct 05, 2023", status: "Rejected", color: "#ef4444", bg: "#fee2e2" },
              { role: "Software Engineer II", company: "Google", date: "Oct 01, 2023", status: "Offer", color: "#8b5cf6", bg: "#ede9fe" }
            ].map((app, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--surface-border)' }}>
                <td style={{ padding: '16px' }}>
                  <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{app.role}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{app.company}</div>
                </td>
                <td style={{ padding: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{app.date}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ background: app.bg, color: app.color, padding: '6px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 500 }}>{app.status}</span>
                </td>
                <td style={{ padding: '16px' }}>
                  <button style={{ background: 'transparent', border: '1px solid var(--surface-border)', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
