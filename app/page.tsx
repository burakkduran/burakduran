import Socials from "@/components/socials";
import Image from "next/image";
import Map from "@/public/map2.png";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="text-zinc-600 dark:text-zinc-300">
      <p className="dark:text-zinc-400 mb-5">
        Hey there, It&apos;s{" "}
        <span className="font-bold  text-xl text-zinc-600 dark:text-white">
          Burak !
        </span>
      </p>
      <p>
        I am a student living in{" "}
        <span className="text-zinc-700 dark:text-zinc-100">Antalya</span>, who
        takes great pleasure in software development.
      </p>
      <p className="mt-5">
        My main focus is React, Next.js, TypeScript and RadixUI. You can reach
        me from{" "}
        <a
          className="text-black dark:text-white underline"
          href="mailto:burak.duran4@gmail.com"
        >
          burak.duran4@gmail.com
        </a>{" "}
        or my social media links below.
      </p>
      <Socials />

    </main>
  );
}
