import { Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

interface ThankProps {
  name: string;
}

const socials = [
  {
    href: "https://twitter.com/kalliadranoth",
    icon: Twitter,
    label: "Twitter",
  },
  { href: "https://github.com/jeffersondrs", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jeffersondrs/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function ThankYouSubmit({ name }: ThankProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 fade-in">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-3xl sm:text-2xl font-bold text-gradient">
          Obrigado por entrar em contato, {name.split(" ")[0]}!
        </h2>
        <p className="text-lg text-(--color-text-secondary)">
          Em breve retornarei o contato.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-(--color-text-muted) text-center">
          Enquanto isso, que tal me seguir nas redes sociais?
        </p>

        <div className="flex flex-row items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-text-secondary) hover:text-zinc-50 transition-colors duration-(--duration-base) p-2 rounded-(--radius-md) hover:bg-(--color-surface-elevated)"
            >
              <Icon size={28} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
