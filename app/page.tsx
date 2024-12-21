import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="card">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
          />
          <h1 className="text-4xl font-bold">Next.js React Text Adventure</h1>
          <p className="text-lg">
            A simple text adventure game built with Next.js and React.js
          </p>
          <button className="start-btn bg-black text-white pl-5 pr-5 pt-2 pb-2">
            Start Game!
          </button>
        </div>
        <p className="text-sm">You awaken in a dark room. You cannot see more than a few inches in front of you. All you see is the drip of water and the moan of fellow prisoners. What do you do? (Scream for help, Force the door open, Wait for something to happen)</p>
      </main>
    </div>
  );
}
