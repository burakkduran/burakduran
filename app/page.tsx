export default function Home() {
  return (
    <main className="text-zinc-500 dark:text-zinc-300">
      <p className="dark:text-zinc-400">
        Hey there, It&apos;s{" "}
        <span className="font-bold  text-xl text-black dark:text-white">
          Burak !
        </span>
      </p>
      <p className="leading-7">
        I am a student living in Antalya, who takes great pleasure in software
        development.
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
    </main>
  );
}
