import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./index.module.css";

const FACTS = [
  { n: "6", unit: "+", label: "Years shipping" },
  { n: "20", unit: "+", label: "Projects shipped" },
  { n: "10", unit: "k+", label: "Users on solo apps" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Reveal className={styles.copy}>
        <h1 className={styles.headline}>
          <span>Full-stack</span>
          <span>
            <em>Developer.</em>
          </span>
        </h1>

        <div className={styles.role}>
          <span>Kostya Krevvetka</span>
          <span className={styles.sep}>/</span>
          <span className={styles.pin}>Massachusetts, US · ET</span>
        </div>

        <p className={styles.bio}>
          Frontend-focused full-stack developer with 6 years of experience.
          I&apos;ve worked on team products with hundreds of thousands of
          users, and built and maintain my own apps with 10k+ users.
        </p>

        <div className={styles.ctaRow}>
          <Button href="/experience" icon={<ArrowRight weight="bold" />}>
            View work
          </Button>
          <Button href="/contact" variant="ghost">
            Get in touch
          </Button>
        </div>

        <div className={styles.facts}>
          {FACTS.map(({ n, unit, label }) => (
            <div key={label} className={styles.fact}>
              <div className={styles.factN}>
                {n}
                <span>{unit}</span>
              </div>
              <div className={styles.factL}>{label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
