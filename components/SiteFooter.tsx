import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link aria-label="Salwa Qadir home" className="wordmark footer-wordmark" href="/">
          <span>SALWA</span>
          <span>QADIR</span>
        </Link>
        <p>WOMEN’S STRENGTH COACH · EDUCATOR · ATHLETE · FOUNDER</p>
        <p>© {new Date().getFullYear()} Salwa Qadir</p>
      </div>
    </footer>
  );
}
