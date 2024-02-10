import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="select-none mb-6">
      <div className="flex justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold">Burak Duran</h1>
        </Link>
        <div className="flex gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
