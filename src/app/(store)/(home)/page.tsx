import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-6 lg:grid-cols-9 grid-rows-3 lg:grid-rows-6 gap-6">
      <Link
        href="/"
        className="relative flex group justify-center items-end overflow-hidden col-span-6 row-span-2 lg:row-span-6 rounded-lg bg-zinc-900"
      >
        <Image
          src={'/assets/moletom-never-stop-learning.png'}
          width={920}
          height={920}
          alt=""
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-cyan-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative flex group justify-center items-end overflow-hidden col-span-3 row-span-1 lg:row-span-3 rounded-lg bg-zinc-900"
      >
        <Image
          src={'/assets/moletom-java.png'}
          width={920}
          height={920}
          alt=""
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-cyan-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative flex group justify-center items-end overflow-hidden col-span-3 row-span-1 lg:row-span-3 rounded-lg bg-zinc-900"
      >
        <Image
          src={'/assets/moletom-ai-side.png'}
          width={920}
          height={920}
          alt=""
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-cyan-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
