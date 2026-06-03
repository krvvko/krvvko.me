"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  DownloadSimple,
  EnvelopeSimple,
  House,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./index.module.css";

const LINKS = [
  { href: "/", label: "Home", Icon: House },
  { href: "/experience", label: "Experience", Icon: Briefcase },
  { href: "/contact", label: "Contact", Icon: EnvelopeSimple },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link className={styles.brand} href="/">
        <Image
          className={styles.logo}
          src="/favicon.ico"
          alt=""
          aria-hidden
          width={20}
          height={20}
          unoptimized
        />
        <span>
          krvvko<span className={styles.me}>.me</span>
        </span>
      </Link>

      <div className={styles.pill} role="tablist">
        {LINKS.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className={pathname === href ? styles.active : undefined}
            aria-current={pathname === href ? "page" : undefined}
          >
            <Icon className={styles.linkIcon} weight="bold" />
            <span className={styles.linkText}>{label}</span>
          </Link>
        ))}
      </div>

      <a
        className={styles.cta}
        href="/Resume.pdf"
        download
        aria-label="Download resume"
      >
        <span className={styles.ctaLabel}>Resume</span>
        <DownloadSimple weight="bold" />
      </a>
    </nav>
  );
}
