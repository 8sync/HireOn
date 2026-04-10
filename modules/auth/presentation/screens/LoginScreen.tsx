import Link from "next/link";
import { AppRoutes } from "../../../../routes/app_routes";
import styles from "./Auth.module.css";

const GoogleIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.701z" />
  </svg>
);

const MetaIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1877F2">
    <path d="M24 12.073C24 5.449 18.627 0 12 0S0 5.449 0 12.073c0 5.98 4.388 10.954 10.125 11.927v-8.437H7.078v-3.49h3.047V9.418c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.956.925-1.956 1.874v2.253h3.328l-.532 3.49h-2.796v8.437C19.612 23.027 24 18.053 24 12.073z"/>
  </svg>
);

import Image from "next/image";
import logo from "../../../../assets/images/hireon-logo.png";

export default function LoginScreen() {
  return (
    <div className={styles.authLayout}>
      <div className={`glass-panel fade-in ${styles.authCard}`}>
        <div className={styles.authHeader}>
          <Link href="/">
            <Image 
              src={logo} 
              alt="HireOn Logo" 
              height={40} 
              priority 
              style={{ objectFit: 'contain', width: 'auto', marginBottom: '16px' }}
            />
          </Link>
          <p className={styles.subtitle}>Welcome back! Please enter your details.</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
              <input type="checkbox" style={{ accentColor: 'var(--accent-color)' }} />
              Remember me
            </label>
            <Link href="#" className={styles.link}>Forgot password?</Link>
          </div>

          <Link href={AppRoutes.dashboard} style={{ width: '100%' }}>
            <button type="button" className="btn-primary" style={{ width: '100%', marginTop: '8px', padding: '14px' }}>Sign In</button>
          </Link>
        </form>

        <div className={styles.separator}>or continue with</div>

        <div className={styles.socialButtons}>
          <button className={styles.socialBtn} aria-label="Sign In with Google">
            <GoogleIcon />
          </button>
          <button className={styles.socialBtn} aria-label="Sign In with Apple">
            <AppleIcon />
          </button>
          <button className={styles.socialBtn} aria-label="Sign In with Meta">
            <MetaIcon />
          </button>
        </div>

        <div className={styles.footerLink}>
          Don&apos;t have an account? <Link href={AppRoutes.auth.register} className={styles.link}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
