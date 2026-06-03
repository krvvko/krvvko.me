import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./index.module.css";

type Variant = "primary" | "ghost";

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonAsLink = BaseProps & {
  href: string;
  download?: boolean;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, extra?: string) {
  return [styles.btn, styles[variant], extra].filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", children, icon, className } = props;
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, download, external } = props;
    const isPlainAnchor =
      download ||
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:");

    if (isPlainAnchor) {
      return (
        <a
          href={href}
          className={classes(variant, className)}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes(variant, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes(variant, className)}
    >
      {content}
    </button>
  );
}
