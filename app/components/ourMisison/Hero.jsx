'use client'
import { useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Hero = () => {
    const [imgtransval, setimgtransval] = useState('0%');
    const {scrollYProgress}=useScroll()
    const imgprog=useTransform(scrollYProgress,[0,.5],['0%','200%'])
    // console.log(scrollYProgress);
    useMotionValueEvent(imgprog,'change',(latest)=>{
        // console.log(latest);
        setimgtransval(latest);
    })  
    
  return (
    <div className='relative z-auto block h-screen'>
<section className='fixed  top-0 left-0  w-full '>
    <div className='h-screen bg-[var(--chanterelle)] flex justify-center items-end'>
        <div className='flex flex-col max-w-[1100px] h-full max-h-[80%] bg-[var(--tomato)] pt-[50px] px-[50px] pb-[80px] rounded-tl-[18px] rounded-tr-[18px] '>
            <div className='flex justify-between items-center w-full mb-[60px] '>
                <span className='border border-[var(--black)] rounded-[5px] py-[2px] px-[6px] '>Our mission</span>
                <span className='border border-[var(--black)] rounded-[5px] py-[2px] px-[6px] '>Made by women</span>
            </div>
            <div className='flex flex-col h-full before:content-[""] before:block before:w-full relative before:h-full before:absolute before:bottom-[8px] before:left-0  before:bg-[linear-gradient(to_top,var(--black),var(--tomato)_1px,var(--tomato)_56px)] before:bg-[length:100%_56px] '>
                <h1 className='text-[56px] leading-[56px] z-[0] tracking-[-2.48px] '>
                    <strong className='font-[700]'>Setting the public record straight</strong>{' '}
                    and ending the invisibility of women’s contributions. We (women) will continue to speak on behalf of our communities, industries and citizens. Not just for each other." 
                </h1>
            </div>
        </div>
        <figure style={{transform:`translateY(-${imgtransval})`}} className='left-[10%] top-[8%] absolute h-[160px] w-[260px] '>
            <Image width={3500} height={2000} sizes='100vw' src={'https://madamspeaker.org.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2Fdf81d07089c1c4ff174fb369dd3da1b18163b22f-4096x2743.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75'} alt="Quote"  className={'rotate-[-10deg] w-full h-full rounded-[10px] object-center object-cover block'}/>
        </figure>
        <figure  style={{transform:`translateY(-${imgtransval})`}} className='left-[5%] top-[60%] absolute h-[160px] w-[260px] '>
            <Image width={3500} height={2000} sizes='100vw' src={'https://madamspeaker.org.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F69ad6eb183c65de532ec189bba0b6a8382e1b43c-2048x1488.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75'} alt="Quote"  className={'rotate-[6deg] w-full h-full rounded-[10px] object-center object-cover block'}/>
        </figure>
        <figure  style={{transform:`translateY(-${imgtransval})`}} className='left-[45%] top-[70%] absolute h-[160px] w-[260px] '>
            <Image width={3500} height={2000} sizes='100vw' src={'https://madamspeaker.org.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F3d02536bbd30d43992adc50518e9db233d9990c2-4096x2931.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75'} alt="Quote"  className={'rotate-[-10deg] w-full h-full rounded-[10px] object-center object-cover block'}/>
        </figure>
        <figure  style={{transform:`translateY(-${imgtransval})`}} className='left-[75%] top-[10%] absolute h-[160px] w-[260px] '>
            <Image width={3500} height={2000} sizes='100vw' src={'https://madamspeaker.org.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F69ad6eb183c65de532ec189bba0b6a8382e1b43c-2048x1488.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75'} alt="Quote"  className={'rotate-[8deg] w-full h-full rounded-[10px] object-center object-cover block'}/>
        </figure>
        <figure  style={{transform:`translateY(-${imgtransval})`}} className='left-[80%] top-[70%] absolute h-[160px] w-[260px] '>
            <Image width={3500} height={2000} sizes='100vw' src={'https://madamspeaker.org.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2Fb45f97630f44dbee1f637e36de91b6ce1013ba2e-4096x2734.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75'} alt="Quote"  className={'rotate-[-8deg] w-full h-full rounded-[10px] object-center object-cover block'}/>
        </figure>
    </div>
</section>
    </div>
  )
}

export default Hero
