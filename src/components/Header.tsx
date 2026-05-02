import { Container } from "./layout/Container";
import navData from "~/data/nav.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/toggle-dark-light-mode";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
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
                  <Button variant="ghost" className="w-full text-center">
                    {item.label}
                  </Button>
                </Link>
                {index !== navData.navigation.length - 1 && (
                  <Separator orientation="vertical" className="mt-2 h-6" />
                )}
              </div>
            ))}
          </nav>

          <ModeToggle />
        </div>
      </Container>
    </header>
  );
};
