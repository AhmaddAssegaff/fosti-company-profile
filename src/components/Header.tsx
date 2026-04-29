import { Container } from "./layout/Container"
import navData from "~/data/nav.json"
import { Button } from "./ui/button"
import Link from "next/link"
import { Separator } from "./ui/separator"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
            >
              FOSTI
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            {navData.navigation.map((item, index) => (
              <div key={item.href} className="flex items-center h-10 space-x-2">
                <Link href={item.href} className="w-24">
                  <Button variant="ghost" className="w-full text-center">
                    {item.label}
                  </Button>
                </Link>
                {index !== navData.navigation.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-6 mt-2"
                  />
                )}
              </div>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
