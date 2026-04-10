import styles from "../../../dashboard/presentation/screens/DashboardScreen.module.css";
// reusing local dashboard styles struct for consistency, or own module

export default function JobMatchingScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <h1>Job Matching</h1>
        <p>AI-curated opportunities based on your skills</p>
      </div>

      <div className={styles.mainGrid} style={{ gridTemplateColumns: "1fr" }}>
        <div className={`glass-panel ${styles.recentApps}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 className={styles.sectionTitle} style={{margin: 0}}>Recommended Matches</h2>
            <button className="btn-primary">Tune Criteria</button>
          </div>
          
          <div className={styles.activityList}>
            {[
              { role: "Senior Frontend Developer", company: "Meta", score: 98, location: "Remote" },
              { role: "React Engineer", company: "Vercel", score: 94, location: "New York, NY" },
              { role: "UI/UX Developer", company: "Spotify", score: 89, location: "Hybrid" }
            ].map((job, i) => (
              <div key={i} className={styles.activityItem} style={{ padding: "20px 0" }}>
                <div className={styles.activityIcon} style={{ background: 'var(--accent-light)' }}></div>
                <div className={styles.activityDetails}>
                  <h4>{job.role}</h4>
                  <p>{job.company} • {job.location}</p>
                </div>
                <div style={{ marginRight: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-outfit)', color: 'var(--accent-color)' }}>{job.score}%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Match</div>
                </div>
                <button className={`btn-primary ${styles.outlineBtn}`} style={{ padding: '8px 24px' }}>Save</button>
                <button className="btn-primary" style={{ padding: '8px 24px', marginLeft: '12px' }}>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
