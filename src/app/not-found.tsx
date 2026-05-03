import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>

      <Link href="/">
        <Button variant={"link"}>Return Home</Button>
      </Link>
    </main>
  );
}
