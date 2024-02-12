import Socials from "@/components/socials";
import Image from "next/image";
import HeaderImage from "@/public/burak.png";

export default function Home() {
  return (
    <main className="mt-2">
      <div className="flex flex-col items-center">
        <Image
          src={HeaderImage}
          alt="Burak Duran"
          width={256}
          height={256}
          className="rounded-full border border-gray-500"
        />
        <h3 className="text-4xl font-black mt-4">Burak Duran</h3>
      </div>
      <section className="mt-6 flex flex-col gap-4 dark:text-zinc-300">
        <p>
          Hey there, this is {" "}
          <span className="font-bold dark:text-white">Burak !</span>
        </p>
        <p>
          I am a student living in Antalya, who takes great pleasure in software
          development.
        </p>
        <p>
          My main focus is React, Next.js, TypeScript and RadixUI. You can reach
          me from{" "}
          <a className="underline" href="mailto:burak.duran4@gmail.com">
            burak.duran4@gmail.com
          </a>{" "}
          or my social media links below.
        </p>
      </section>
      <Socials />
    </main>
  );
}
