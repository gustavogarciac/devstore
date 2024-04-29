import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Search = async () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="relative flex group justify-center items-end overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            src={`/assets/moletom-never-stop-learning.png`}
            width={480}
            height={480}
            alt=""
            quality={100}
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-cyan-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Search
