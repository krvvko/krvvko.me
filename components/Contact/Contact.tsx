import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./index.module.css";

const SOCIALS = [
  { label: "GitHub", handle: "@krvvko", href: "https://github.com/krvvko" },
  { label: "X / Twitter", handle: "@KKrevvetka", href: "https://x.com/KKrevvetka" },
  { label: "Telegram", handle: "@meow_murrrrrrrrrrr", href: "https://t.me/meow_murrrrrrrrrrr" },
];

export default function Contact() {
  return (
    <Reveal as="section" className={styles.contact}>
      <span className={styles.eyebrow}>Say hello</span>
      <h2 className={styles.headline}>
        Let&apos;s build
        <br />
        something <em>good.</em>
      </h2>

      <a className={styles.mail} href="mailto:krvvko@gmail.com">
        krvvko@gmail.com
        <span className={styles.arrow}>
          <ArrowRight weight="bold" />
        </span>
      </a>

      <div className={styles.socials}>
        {SOCIALS.map(({ label, handle, href }) => (
          <a
            key={label}
            className={styles.soc}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <span className={styles.lab}>{label}</span>
              <span className={styles.at}>{handle}</span>
            </span>
            <span className={styles.ar}>
              <ArrowUpRight weight="bold" />
            </span>
          </a>
        ))}
      </div>

      <div className={styles.cv}>
        <Button href="/Resume.pdf" external icon={<DownloadSimple weight="bold" />}>
          Open Resume
        </Button>
      </div>

      <div className={styles.footer}>
        <span>© 2026 — krvvko.me</span>
        <span>Designed &amp; built by krvvko · Made with shrimp 🦐</span>
      </div>
    </Reveal>
  );
}
