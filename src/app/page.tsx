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
import Image from "next/image";

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

    const intervalId = setInterval(getData, 1500);
    return () => clearInterval(intervalId);
  }, []);

  async function getStatusCoding() {
    try {
      const api = process.env.WAKATIME_API_KEY;
      const apiKey = "waka_b417987d-ce91-4ec2-82e2-8046080a8a6d";
      const encodedKey = btoa(apiKey);
      const headers = {
        Authorization: `Basic ${apiKey}`,
      };
      const response = await fetch(`${api}users/current/stats`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar os dados de codificação", error);
    }
  }
  getStatusCoding();

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
            I&#39;m Kayky, a{" "}
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

        <div className="border-neutral-700 border-x col-span-4 p-8 select-none">
          <div className="relative grid place-items-center w-full h-full">
            <div className="bg-gradient-to-b from-neutral-900/10 from-10% via-neutral-900/70 via-55% to-neutral-900/90 to-90% rounded-2xl w-full h-full absolute" />
            <div className="border border-neutral-600 absolute inset-4 rounded-2xl" />
            <img
              src={"/me.jpg"}
              alt="asd"
              className="w-full h-full rounded-2xl border-t border-neutral-400 object-cover"
            />
            <div className="absolute bottom-6 p-1 flex items-center gap-1 rounded-full border border-neutral-700 bg-gradient-to-br from-neutral-900/60 via-neutral-400/20 to-transparent backdrop-filter backdrop-blur-12.5">
              <div className="w-2 h-2 rounded-full bg-neutral-400" />
              <div className="w-2 h-2 rounded-full bg-neutral-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-100" />
              <div className="w-2 h-2 rounded-full bg-neutral-400" />
              <div className="w-2 h-2 rounded-full bg-neutral-400" />
            </div>
          </div>
        </div>

        <div className="col-span-4 p-8 flex flex-col gap-8 relative">
          <div>
            <h3 className="text-neutral-100 font-bold text-2xl pb-4">
              Education
            </h3>

            <div className="flex items-start gap-6">
              <span className="font-medium min-w-[66px] text-[10px] leading-5 text-neutral-400">
                2022 — 2025
              </span>
              <div className="grid gap-1">
                <h4 className="font-medium text-base text-neutral-200 leading-5">
                  Bachelor&#39;s Degree in Software Engineering
                </h4>
                <p className="text-[10px] text-neutral-400">at Unicesumar</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <h3 className="text-neutral-100 font-bold text-2xl pb-1">
              Experience
            </h3>

            <div className="flex items-start gap-6">
              <span className="font-medium min-w-[66px] text-[10px] leading-5 text-neutral-400">
                2023 — Now
              </span>
              <div className="grid gap-1">
                <h4 className="font-medium text-base text-neutral-200 leading-5">
                  Front-end Developer
                </h4>
                <p className="text-[10px] text-neutral-400">as Freelancer</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="font-medium min-w-[66px] text-[10px] leading-5 text-neutral-400">
                2022 — 2024
              </span>
              <div className="grid gap-1">
                <h4 className="font-medium text-base text-neutral-200 leading-5">
                  Front-end Developer
                </h4>
                <p className="text-[10px] text-neutral-400">at Lumx</p>
              </div>
            </div>
          </div>

          <div className="absolute grid gap-4 text-center inset-x-8 bottom-8 p-2 justify-center border-t border-neutral-700">
            <h5 className="font-medium pt-2 text-sm text-neutral-500">
              Companies I&#39;ve collaborated with
            </h5>
            <aside className="relative -mx-8 overflow-hidden">
              <div className="flex justify-center animate-wiggle items-center gap-6 text-red-700 fill-teal-500 stroke-red-800">
                <Image
                  priority
                  width={180}
                  height={40}
                  src="/surfie-junkie-vlub.svg"
                  alt="Surfie Junkie Logo"
                />
                <Image
                  priority
                  width={180}
                  height={40}
                  src="/nestle.svg"
                  alt="Nestlé Logo"
                />
                <Image
                  width={180}
                  height={40}
                  priority
                  className="stroke-neutral-50 fill-white text-neutral-50"
                  src="/reserva.svg"
                  alt="Reserva Logo"
                />
                <Image
                  priority
                  width={180}
                  height={40}
                  className="stroke-white text-neutral-50"
                  src="/surfie-junkie-vlub.svg"
                  alt="Surfie Junkie Logo"
                />
                <Image
                  priority
                  width={180}
                  height={40}
                  src="/nestle.svg"
                  alt="Nestlé Logo"
                />
                <Image
                  width={180}
                  height={40}
                  priority
                  src="/reserva.svg"
                  alt="Reserva Logo"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="border-b border-neutral-700" />
    </main>
  );
}
