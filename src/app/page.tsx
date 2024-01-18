"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NowPlayingSong {
  album: string;
  albumImageUrl: string;
  artists: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export default function Home() {
  const [song, setSong] = useState<NowPlayingSong>();

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/now-playing");
      const data: NowPlayingSong = await response.json();
      setSong(data);
    }

    getData();
  }, [song]);

  return (
    <main className="">
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
          <span className="px-4 py-2 rounded-full font-display whitespace-nowrap h-fit mt-8 font-bold text-base bg-[#E1FF2D] text-[#294B07]">
            Good Afternoon!
          </span>
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

      <div className="border-b w-screen border-neutral-700" />
    </main>
  );
}
