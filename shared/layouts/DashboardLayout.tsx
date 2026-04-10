import Link from "next/link";
import { AppRoutes } from "../../routes/app_routes";
import styles from "./DashboardLayout.module.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>HireOn</div>
        <nav className={styles.nav}>
          <Link href={AppRoutes.dashboard} className={styles.navItem}>Dashboard</Link>
          <Link href={AppRoutes.jobMatching} className={styles.navItem}>Job Matching</Link>
          <Link href={AppRoutes.resumeBuilder} className={styles.navItem}>Resume Builder</Link>
          <Link href={AppRoutes.autoApply} className={styles.navItem}>Auto Apply</Link>
          <Link href={AppRoutes.applications} className={styles.navItem}>Applications</Link>
          <Link href={AppRoutes.aiAssistant} className={styles.navItem}>AI Assistant</Link>
        </nav>
        
        <div className={styles.bottomNav}>
          <Link href={AppRoutes.profile} className={styles.navItem}>Profile</Link>
          <Link href={AppRoutes.settings} className={styles.navItem}>Settings</Link>
          <Link href={AppRoutes.home} className={styles.navItem}>Sign out</Link>
        </div>
      </aside>
      
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search jobs, companies, or keywords..." />
          </div>
          <div className={styles.userProfile}>
            <div className={styles.avatar}></div>
            <span className={styles.userName}>Hello, User</span>
          </div>
        </header>
        
        <div className={styles.contentWrap}>
          {children}
        </div>
      </main>
    </div>
  );
}
