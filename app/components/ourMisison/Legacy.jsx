'use client'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const Legacy = () => {
    const [compotranan, setcompotransan] = useState('0%')
    const [isfixed, setisfixed] = useState(false)
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })
    useMotionValueEvent(scrollYProgress,'change',(latest)=>{
       setcompotransan(latest);
    //    if(latest===1){
    //     setisfixed(true)
    // }
    // if(latest<1){
    //     setisfixed(false)
    // }
    })
    useEffect(()=>{
        if(compotranan===1){
            setisfixed(true)
        }
        if(compotranan<1){
            setisfixed(false)
        }
        console.log(isfixed);
        
    },[compotranan])
  return (
    <div ref={ref} className='relative block h-screen'>
      <section style={{position: isfixed&&'fixed',left: isfixed&&'0',top: isfixed&&'0px'}}  className={` w-full`}>
      <div class="box-border relative m-0 px-0 py-[100px] min-h-screen bg-[rgb(255,_255,_255)] grid grid-cols-[repeat(12,_1fr)] gap-[20px] items-center">
            <button class="box-border absolute m-0 [font:inherit] bottom-full left-2/4 bg-[rgb(255,_255,_255)] outline-[0px] border-[0px] min-w-[260px] pt-[18px] -translate-x-1/2 px-[30px] pb-[8px] cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" preserveAspectRatio="none" class="box-border absolute m-0 block max-w-full w-[34px] h-full bg-no-repeat bg-[100%_center] top-0 right-[calc(100%-1px)]">
                    <path d="m34,34H0c15.75-2.94,26.19-14.5,28.16-28.95.38-2.77,2.9-5.05,5.84-5.05" fill-rule="evenodd" stroke-width="0" fill="#0E0E0E" class="box-border relative m-0 fill-[rgb(255,_255,_255)]"></path>
                </svg>
                <span class="box-border relative m-0">About us  
                    <span class="box-border relative m-0 inline-block">↓</span>
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" preserveAspectRatio="none" class="box-border absolute m-0 block max-w-full w-[34px] h-full bg-no-repeat bg-[100%_center] top-0 right-auto left-[calc(100%-1px)] scale-x-[-1]">
                    <path d="m34,34H0c15.75-2.94,26.19-14.5,28.16-28.95.38-2.77,2.9-5.05,5.84-5.05" fill-rule="evenodd" stroke-width="0" fill="#0E0E0E" class="box-border relative m-0 fill-[rgb(255,_255,_255)]"></path>
                </svg>
            </button>
            <div class="box-border relative m-0 col-[2_/_8]">
                <h3 class="font-[70] leading-[1.1] text-[62px] box-border relative m-0 break-words mb-[60px] max-w-[800px]">A legacy for all women.</h3>
                <div class="box-border relative m-0 leading-[1.35] grid grid-cols-[repeat(2,_1fr)] gap-[20px]">
                    <p class="box-border relative m-0 break-words mt-0">Madam Speaker is a digital speech archive born from a collaboration between the Victorian Women's Trust and Your Creative. We will correct the public record by platforming women's vital contributions throughout Australian history.</p>
                    <p class="box-border relative m-0 break-words">Madam Speaker is about ending the invisibility of women’s voices, ensuring society embraces their authority. By centralising access to women's words, ideas, and opinions, Madam Speaker dismantles the outdated notion that authority is inherently male.</p>
                    <p class="box-border relative m-0 break-words">Our goal is to reshape perceptions of authority and leadership, creating space for future women leaders, confident in their own voices.</p>
                    <p class="box-border relative m-0 break-words mb-0">
                        <br class="box-border relative m-0"></br>
                    </p>
                </div>
            </div>
            <div class="box-border relative m-0 col-[8_/_12]">
                <img alt="" loading="lazy" width="3500" height="2000" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F7e2f455ea392a86c84011613e6db3d54428d8a3d-520x684.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75" class="box-border relative m-0 block max-w-full w-full h-full text-transparent"></img>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Legacy
