'use client'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const VictorianTrust = () => {
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
        <section style={{position: isfixed&&'fixed',left: isfixed&&'0',top: isfixed&&'0px'}}  className={` w-full`}  >
        <div class="box-border relative m-0 min-h-screen bg-[var(--brown-tint)] pt-[100px] px-0 pb-[150px] grid place-items-center">
            <button class="box-border absolute m-0 bg-[var(--brown-tint)] [font:inherit] bottom-full left-2/4 text-[rgb(0,_0,_0)] outline-[0px] border-[0px] min-w-[260px] pt-[18px] -translate-x-1/2 px-[30px] pb-[8px] cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" preserveAspectRatio="none" class="box-border absolute m-0 block max-w-full w-[34px] h-full bg-no-repeat bg-[100%_center] top-0 right-[calc(100%-1px)]">
                    <path d="m34,34H0c15.75-2.94,26.19-14.5,28.16-28.95.38-2.77,2.9-5.05,5.84-5.05" fill-rule="evenodd" stroke-width="0" fill="var(--brown-tint)" class="box-border relative m-0"></path>
                </svg>
                <span class="box-border relative m-0">Meet the team {''} 
                    <span class="box-border relative m-0 inline-block translate-x-[4px] translate-y-[-1px]">↓</span>
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" preserveAspectRatio="none" class="box-border absolute m-0 block max-w-full w-[34px] h-full bg-no-repeat bg-[100%_center] top-0 right-auto left-[calc(100%-1px)] scale-x-[-1]">
                    <path d="m34,34H0c15.75-2.94,26.19-14.5,28.16-28.95.38-2.77,2.9-5.05,5.84-5.05" fill-rule="evenodd" stroke-width="0" fill="var(--brown-tint)" class="box-border relative m-0"></path>
                </svg>
            </button>
            <ul class="box-border relative m-0 p-0 max-w-[2000px]">
                <li class="box-border relative m-0 [list-style:none] px-[20px] py-0 grid grid-cols-[repeat(12,_1fr)] gap-[20px] border-b-[1px] border-[rgba(0,_0,_0,_0.22)] pt-0">
                    <div class="box-border relative m-0 col-[1_/_6] px-0 py-[60px]">
                        <h3 class="font-[70] leading-[1.1] text-[62px] box-border relative m-0 break-words">VICTORIAN WOMEN'S TRUST</h3>
                        <div class="box-border absolute m-0 w-[440px] h-[294px] rounded-[var(--border-radius-medium)] overflow-hidden top-0 left-0 opacity-0 invisible [transition:opacity_0.3s] translate-x-[996px] translate-y-[3095px]">
                            <img alt="" loading="lazy" width="3500" height="2000" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F2184e22216fcbd3748b3679416f79f48e01f5394-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75" class="box-border relative m-0 block max-w-full w-full h-full object-cover text-transparent"></img>
                        </div>
                    </div>
                    <div class="box-border relative m-0 col-[6_/_12] flex flex-col items-start gap-[10px] px-0 py-[60px]">
                        <div class="box-border relative m-0 leading-[1.35]">
                            <p class="box-border relative mx-0 my-[16px] break-words mt-0 mb-0">Established in 1985, the Victorian Women’s Trust (VWT) is a proudly independent feminist organisation. We support women, girls and gender-diverse people to thrive. We create social change projects and campaigns; research the issues affecting our communities; run thought-provoking events; provide mentorship opportunities; and give grants to vital grassroots projects. VWT's advocacy work focuses on three high-impact areas: economic security, health and safety, and equal representation. Creating change in these areas is key to achieving true gender equality. VWT is 100% powered by donations from people in the community who share our vision for an equal future for all.</p>
                        </div>
                        <a href="https://www.vwt.org.au/" target="_blank" rel="noreferrer" class="box-border relative m-0 no-underline text-[rgb(255,_255,_255)] inline-flex justify-center items-center bg-[var(--black)] hover:bg-[#f500f6] border-[0.5px] border-[solid]  outline-[0px] pt-[10px] px-[10px] pb-[6px] text-[16px] leading-none rounded-[var(--border-radius-medium)] cursor-pointer [transition:0.3s]">
                            <span class="box-border relative m-0 [transition:0.3s]">Visit website</span>
                            {/* <div class="box-border absolute m-0 top-[calc(50% + 5px)] left-2/4 -translate-x-1/2  scale-100 [transition:0.2s] opacity-0">
                               
                            </div> */}
                        </a>
                    </div>
                </li>
                <li class="box-border relative m-0 [list-style:none] px-[20px] py-0 grid grid-cols-[repeat(12,_1fr)] gap-[20px] border-b-[1px] border-[rgba(0,_0,_0,_0.22)]">
                    <div class="box-border relative m-0 col-[1_/_6] px-0 py-[60px]">
                        <h3 class="font-[70] leading-[1.1] text-[62px] box-border relative m-0 break-words">YOUR CREATIVE</h3>
                        <div class="box-border absolute m-0 w-[440px] h-[294px] rounded-[var(--border-radius-medium)] overflow-hidden top-0 left-0 opacity-0 invisible [transition:opacity_0.3s] translate-x-[894px] translate-y-[2822px]">
                            <img alt="" loading="lazy" width="3500" height="2000" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6pz7cseq%2Fproduction%2F08aed04f3f98a7da369b3b8724ff2ed7909e7846-880x588.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75" class="box-border relative m-0 block max-w-full w-full h-full object-cover text-transparent"></img>
                        </div>
                    </div>
                    <div class="box-border relative m-0 col-[6_/_12] flex flex-col items-start gap-[10px] px-0 py-[60px]">
                        <div class="box-border relative m-0 leading-[1.35]">
                            <p class="box-border relative mx-0 my-[16px] break-words mt-0 mb-0">An independent creative agency based in Melbourne. We specialise in impact-led strategy, design & development. We are an award-winning, independent creative team specializing in impact-led strategy, communication design and technology builds. Our clients are those fixing the planet, tackling climate with complex science, enacting social justice and leading in ESG metrics. We’re full-time creatives and part-time activists.</p>
                        </div>
                        <a href="https://yourcreative.com.au/" target="_blank" rel="noreferrer" class="box-border relative m-0 no-underline text-[rgb(255,_255,_255)] inline-flex justify-center items-center border-[0.5px] border-[solid] bg-[var(--black)] hover:bg-[#f500f6] outline-[0px] pt-[10px] px-[10px] pb-[6px] text-[16px] leading-none rounded-[var(--border-radius-medium)] cursor-pointer [transition:0.3s]">
                            <span class="box-border relative m-0 [transition:0.3s]">Visit website</span>
                            {/* <div class="box-border absolute m-0 top-[calc(50% + 5px)] left-2/4 -translate-x-1/2 -translate-y-1/2 scale-100 [transition:0.2s] opacity-0">
                                <span class="box-border relative m-0 [display:inherit]">
                                    <span class="box-border relative m-[2px] inline-block bg-[#fff] w-[15px] h-[15px] rounded-[100%] animate-[react-spinners-BeatLoader-beat_0.7s_0s_infinite_linear] [animation-fill-mode:both]"></span>
                                    <span class="box-border relative m-[2px] inline-block bg-[#fff] w-[15px] h-[15px] rounded-[100%] animate-[react-spinners-BeatLoader-beat_0.7s_0.35s_infinite_linear] [animation-fill-mode:both]"></span>
                                    <span class="box-border relative m-[2px] inline-block bg-[#fff] w-[15px] h-[15px] rounded-[100%] animate-[react-spinners-BeatLoader-beat_0.7s_0s_infinite_linear] [animation-fill-mode:both]"></span>
                                </span>
                            </div> */}
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        </section>
      
    </div>
  )
}

export default VictorianTrust
