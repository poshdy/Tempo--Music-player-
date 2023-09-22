import React from 'react'
import { Skeleton } from '../ui/skeleton'

type Props = {}

const FavArtistsSkeleton = (props: Props) => {
  return (
   <section className='flex items-center gap-3 justify-center'>
    {[...Array(6).keys()].map((i)=>(
        <Skeleton key={i} className='w-28 aspect-square rounded-full'/>
    ))}
   </section>
  )
}

export default FavArtistsSkeleton