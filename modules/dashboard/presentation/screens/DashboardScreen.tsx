import styles from "./DashboardScreen.module.css";

export default function DashboardScreen() {
  return (
    <div className={`fade-in ${styles.container}`}>
      <div className={styles.pageHeader}>
        <h1>Dashboard Snapshot</h1>
        <p>Your job search at a glance</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={`glass-panel ${styles.statCard}`}>
          <h3>Applications</h3>
          <div className={styles.statNumber}>124</div>
          <div className={styles.statMetric}>+12 this week</div>
        </div>
        <div className={`glass-panel ${styles.statCard}`}>
          <h3>Interviews</h3>
          <div className={styles.statNumber}>4</div>
          <div className={styles.statMetric}>2 upcoming</div>
        </div>
        <div className={`glass-panel ${styles.statCard}`}>
          <h3>Profile Views</h3>
          <div className={styles.statNumber}>89</div>
          <div className={styles.statMetric}>+40% vs last week</div>
        </div>
        <div className={`glass-panel ${styles.statCard} ${styles.aiCard}`}>
          <h3>AI Quality Score</h3>
          <div className={styles.statNumber}>92/100</div>
          <div className={styles.statMetric}>Resume is Highly Optimized</div>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={`glass-panel ${styles.recentApps}`}>
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <div className={styles.activityList}>
            {[1, 2, 3].map(i => (
              <div key={i} className={styles.activityItem}>
                <div className={styles.activityIcon}></div>
                <div className={styles.activityDetails}>
                  <h4>Senior Frontend Developer</h4>
                  <p>TechCorp Inc. • Applied 2h ago via Auto Apply</p>
                </div>
                <div className={styles.activityStatus}>In Review</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`glass-panel ${styles.jobMatches}`}>
          <h2 className={styles.sectionTitle}>Top AI Matches</h2>
          <div className={styles.matchList}>
            <div className={styles.matchItem}>
              <div className={styles.matchScore}>98%</div>
              <div className={styles.matchDetails}>
                <h4>React Specialist</h4>
                <p>Innovate LLC • Remote</p>
              </div>
            </div>
            <div className={styles.matchItem}>
              <div className={styles.matchScore}>95%</div>
              <div className={styles.matchDetails}>
                <h4>Full Stack Engineer</h4>
                <p>Global Systems • Hybrid</p>
              </div>
            </div>
          </div>
          <button className="btn-primary" style={{ width: "100%", marginTop: "16px" }}>View All Matches</button>
        </div>
      </div>
    </div>
  );
}
