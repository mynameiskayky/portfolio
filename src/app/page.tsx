"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sign from "../../public/sign";
import {
  GithubLogo,
  DribbbleLogo,
  LinkedinLogo,
  Envelope,
} from "@phosphor-icons/react";

interface NowPlayingSong {
  album: string;
  albumImageUrl: string;
  artists: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export default function Home() {
  const [greeting, setGreeting] = useState<string>("");
  const [song, setSong] = useState<NowPlayingSong>();

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/now-playing");
      const data: NowPlayingSong = await response.json();
      setSong(data);
    }

    getData();
  }, [song]);

  useEffect(() => {
    const determineGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    determineGreeting();
  }, []);

  return (
    <main className="grid">
      <div className="border-b border-neutral-700">
        <div className="mx-auto grid h-12 max-w-7xl grid-cols-12">
          <div className="col-span-4 border-x border-neutral-700" />
          <div className="col-span-3 border-r border-neutral-700" />
          <div className="col-span-1 border-r border-neutral-700" />
          <div className="col-span-4 border-r border-neutral-700" />
        </div>
      </div>
      <header className="mx-auto relative grid max-w-7xl grid-cols-12 border-l border-neutral-700">
        <div className="relative flex w-full">
          <h1 className="text-[7.25rem] font-display w-fit z-50 text-neutral-100 font-bold pl-8 -tracking-wider">
            Kayky.
          </h1>
          {greeting && (
            <span className="px-4 py-2 rounded-full font-display whitespace-nowrap h-fit mt-8 font-bold text-base bg-[#E1FF2D] text-[#294B07]">
              {greeting}!
            </span>
          )}
        </div>

        <div className="col-span-3 border-r border-neutral-700" />
        <div className="col-span-3 border-r border-neutral-700" />
        <div className="col-span-1 border-r border-neutral-700" />

        <div className="col-span-4 flex flex-col p-8 gap-4 justify-end items-end border-r border-neutral-700">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#74DA0D]" />
            <p className="text-neutral-500 font-medium text-sm">
              Coding && Listening
            </p>
          </div>
          <div className="h-[1px] w-11/12 bg-neutral-700" />
          <div className="flex items-center gap-5">
            <div className="text-right">
              <Link
                href={song?.songUrl || ""}
                passHref={true}
                className="font-bold text-lg text-neutral-100"
              >
                {song?.title}
              </Link>
              <p className="font-medium text-sm text-neutral-400">
                {song?.artists}
              </p>
            </div>
            <img
              className="h-12 w-12 rounded-full animate-[spin_3s_linear_infinite]"
              src={song?.albumImageUrl}
              alt="Você Está Com Febre?"
            />
          </div>
        </div>
      </header>

      <div className="border-b border-neutral-700" />

      <section className="border-x w-screen border-neutral-700 mx-auto relative grid max-w-7xl grid-cols-12">
        <div className="col-span-4 p-8">
          <h4 className="text-[2.5rem] font-bold mb-6">About me</h4>
          <p className="text-lg text-neutral-300 mb-3">
            I am Kayky, a{" "}
            <span className="font-medium text-neutral-50">
              Frontend Developer
            </span>{" "}
            passionate about the intersection of art and code.
          </p>
          <p className="text-lg text-neutral-300 mb-10">
            With{" "}
            <span className="font-medium text-neutral-50">
              over 2 years of experience in developing unique products
            </span>
            , my true passion is crafting high-performance applications that
            showcase the visual excellence of original design.
          </p>

          <Sign />

          <div className="w-full flex items-end mt-2 flex-col gap-3">
            <h5 className="text-lg font-bold text-neutral-100">Find me at</h5>
            <aside className="flex gap-2">
              <Envelope className="border w-8 h-8 border-neutral-700 p-[7px] rounded-full text-neutral-100" />
              <DribbbleLogo className="border w-8 h-8 border-neutral-700 p-[7px] rounded-full text-neutral-100" />
              <GithubLogo className="border w-8 h-8 border-neutral-700 p-[7px] rounded-full text-neutral-100" />
              <LinkedinLogo className="border w-8 h-8 border-neutral-700 p-[7px] rounded-full text-neutral-100" />
            </aside>
          </div>
        </div>
        <div className="border-neutral-700 border-x col-span-4 p-8"></div>
      </section>

      <div className="border-b border-neutral-700" />
    </main>
  );
}
