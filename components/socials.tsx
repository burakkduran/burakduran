import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
export default function Socials() {
  return (
    <div className="flex gap-2 mt-6">
      <a href="https://github.com/burakkduran" target="_blank" aria-label="GitHub">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/burakkduran/" target="_blank" aria-label="LinkedIn">
        <Linkedin size={24} />
      </a>
      <a href="https://twitter.com/burakkduran" target="_blank" aria-label="Twitter">
        <Twitter size={24} />
      </a>
      <a href="https://www.instagram.com/burakxdrn/" target="_blank" aria-label="Instagram">
        <Instagram size={24} />
      </a>
    </div>
  );
}
