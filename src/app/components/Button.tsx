import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-3 font-semibold text-center transition-colors duration-300";

  const styles = {
    primary: "bg-secondary text-white hover:bg-yellow-600",
    secondary:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <Link href={href} className={`${baseStyles} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
