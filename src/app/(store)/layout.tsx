import { Header } from '@/components/header'
import { CartContextProvider } from '@/contexts/cart-context'
import { PropsWithChildren } from 'react'

export default function StoreLayout(props: PropsWithChildren) {
  return (
    <CartContextProvider>
      <div className="mx-auto grid grid-rows-[min-content_max-content] gap-5 p-8 min-h-screen w-full max-w-[1600px]">
        <Header />
        {props.children}
      </div>
    </CartContextProvider>
  )
}
