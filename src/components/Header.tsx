"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "./layout/Container";
import navData from "~/data/nav.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/toggle-dark-light-mode";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur shadow-md shadow-black/15 dark:shadow-white/15">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            >
              FOSTI
            </Link>
          </div>

          <nav className="hidden items-center space-x-2 md:flex">
            {navData.navigation.map((item, index) => (
              <div key={item.href} className="flex h-10 items-center space-x-2">
                <Link href={item.href} className="w-24">
                  <Button
                    variant="ghost"
                    className={`w-full text-center ${isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.label}
                  </Button>
                </Link>
                {index !== navData.navigation.length - 1 && (
                  <Separator orientation="vertical" className="mt-2 h-6" />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center space-y-2 py-4 duration-300">
          {navData.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-40 transition-none">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
