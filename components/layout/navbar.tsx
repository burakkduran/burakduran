import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "../ui/separator";
import NavbarLink from "./navbarLink";

export default function Navbar() {
  return (
    <nav className="py-4">
      <div className="flex justify-between items-center py-3">
        <div className="flex h-5 items-center space-x-3">
         <NavbarLink />
        </div>
        <ModeToggle />
      </div>
      <Separator />
    </nav>
  );
}
