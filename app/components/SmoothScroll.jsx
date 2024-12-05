'use client'

import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
     
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div data-scroll-container>
      {children}
    </div>
  )
}
