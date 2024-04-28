import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-6 lg:grid-cols-9 grid-rows-3 lg:grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-2 lg:row-span-6 h-[550px] lg:h-[856px]" />
      <Skeleton className="col-span-3 row-span-1 lg:row-span-3" />
      <Skeleton className="col-span-3 row-span-1 lg:row-span-3" />
    </div>
  )
}
