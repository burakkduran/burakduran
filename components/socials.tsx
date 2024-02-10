import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
export default function Socials() {
  return (
    <div className="text-black dark:text-zinc-300 flex gap-2 mt-6">
      <a href="">
        <Github size={24} />
      </a>
      <a href="">
        <Linkedin size={24} />
      </a>
      <a href="">
        <Twitter size={24} />
      </a>
      <a href="">
        <Instagram size={24} />
      </a>
    </div>
  );
}
