import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
export default function Socials() {
  return (
    <div className="flex gap-2 mt-6">
      <a href="https://github.com/burakkduran" target="_blank">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/burakkduran/">
        <Linkedin size={24} />
      </a>
      <a href="https://twitter.com/burakkduran">
        <Twitter size={24} />
      </a>
      <a href="https://www.instagram.com/burakxdrn/">
        <Instagram size={24} />
      </a>
    </div>
  );
}
