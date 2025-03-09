import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function NavHeader() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-lg font-semibold">Justine Michael M. Tabor</a>
        </Link>

        <ul className="flex space-x-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a className={cn(
                  "hover:text-primary transition-colors",
                  location === href && "text-primary font-medium"
                )}>
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}