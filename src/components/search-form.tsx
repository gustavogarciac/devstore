'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'

export const SearchForm = () => {
  const router = useRouter()

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q
    if (!query) return null

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-500"
      />
    </form>
  )
}
