'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export const CartWidget = () => {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  )
}
