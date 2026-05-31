"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import navData from "~/data/nav.json";
import { Container } from "./layout/Container";
import { ModeToggle } from "./ui/toggle-dark-light-mode";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-zinc-50 dark:bg-zinc-900">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            >
              FOSTI
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navData.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ModeToggle />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-muted"
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <Container>
          <div className="flex flex-col gap-2 py-4">
            {navData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm transition-colors ${isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};
