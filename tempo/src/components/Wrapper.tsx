import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children:React.ReactNode
    className?:string
}

const Wrapper = ({children , className}: Props) => {
  return (
    <section className={cn('container my-3',className)}>
        {children}
    </section>
  )
}

export default Wrapper