import styles from './styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 style={{color:"white"}}>My Blog</h1>
        <nav className={styles.nav}>
          <a href="/">Home</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p style={{color:"white"}}>© 2024 Siddharth Jain Blogs</p>
      </footer>
    </div>
  );
}
