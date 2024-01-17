export default function Home() {
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
          <h1 className="text-[10.25rem] w-fit z-50 text-neutral-100 font-bold pl-8 -tracking-wider">
            Kayky.
          </h1>
          <span className="px-4 py-2 rounded-full whitespace-nowrap h-fit mt-8 font-bold text-base bg-[#E1FF2D] text-[#294B07]">
            Good Night!
          </span>
        </div>

        <div className="col-span-3 border-r border-neutral-700" />
        <div className="col-span-3 border-r border-neutral-700" />
        <div className="col-span-1 border-r border-neutral-700" />

        <div className="col-span-4 flex flex-col p-8 gap-4 justify-end items-end border-r border-neutral-700">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#74DA0D]" />
            <p className="text-neutral-500 font-medium text-sm">
              Codando && Ouvindo
            </p>
          </div>
          <div className="h-[1px] w-11/12 bg-neutral-700" />
          <div className="flex items-center gap-5">
            <div className="text-right">
              <h4 className="font-bold text-lg text-neutral-100">
                Você Está Com Febre?
              </h4>
              <p className="font-medium text-sm text-neutral-400">
                Febre90s, PumaPjl
              </p>
            </div>
            <img
              className="h-12 w-12 rounded-full animate-[spin_3s_linear_infinite]"
              src="https://i.scdn.co/image/ab67616d0000b2730bb4807628d14055f19141af"
              alt="Você Está Com Febre?"
            />
          </div>
        </div>
      </header>

      <div className="border-b w-screen border-neutral-700" />
    </main>
  );
}
