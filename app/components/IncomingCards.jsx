'use client'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react'

const IncomingCards = () => {
    const containerref = useRef(null);
    const [secdivtrans, setsecdivtrans] = useState(1290);
    const [containdivtrans, setcontaindivtrans] = useState(0);
    const [scrollval, setscrollval] = useState(0);
    const [thirddivtrans, setthirddivtrans] = useState(1290);
    const [thirdrotateval, setthirdrotateval] = useState(0);
    // const con = useRef(null);
    const {scrollYProgress}=useScroll({
        target: containerref,
        offset: ['start start', 'end end'],
    })
    const divmotionval=useTransform(scrollYProgress,[0,1],[0,500])
    const thirdmotionval=useTransform(scrollYProgress,[.6,.8],[1290,280])
    const thirdmotionrotateval=useTransform(scrollYProgress,[.6,.8],[15,3.3])
    useMotionValueEvent(divmotionval,'change',(latest)=>{
        // console.log(latest);
        setcontaindivtrans(latest);
    })
    useMotionValueEvent(thirdmotionval,'change',(latest)=>{
        // console.log(latest);
        setthirddivtrans(latest);
    })
    useMotionValueEvent(thirdmotionrotateval,'change',(latest)=>{
        // console.log(latest);
        setthirdrotateval(latest);
    })
    const secrotatemotionval=useTransform(scrollYProgress,[0,.8],[15,-15])
    useMotionValueEvent(scrollYProgress,'change',(latest)=>{
        // if(secdivtrans<151){
        //     setsecdivtrans(150)
        // }else{
            setscrollval(latest);
            setsecdivtrans(Math.max(140,1290*(1-latest*2)))
        }
    )
    // console.log(divmotionval.get());
    
    // console.log(scrollval);
    
  return (
    <div className='z-auto relative '>
        <section ref={containerref} >
            <section className='h-[500vh]   w-full max-w-[820px] my-0 mx-auto text-white '>
                <div style={{transform: `translateY(-${containdivtrans}px)`}} className='h-screen flex items-center justify-center sticky top-[calc(50%-183px)] w-full mx-auto px-5 '>
                <div className="box-border absolute m-0 -top-[30px] left-[calc(50%-350px)] text-[var(--black)] flex justify-center items-start text-center w-full max-w-[700px] h-[430px] rounded-[10px] p-[20px] pt-[65px] [rotate:3deg] bg-[var(--peach)]">
            <h2 className="font-[70] leading-[1.1] text-[58px] box-border relative m-0 break-words">We grow up mainly hearing male voices in our society.</h2>
            <svg width="626" height="333" viewBox="0 0 626 333" fill="none"
                xmlns="http://www.w3.org/2000/svg" className="box-border absolute m-0 block max-w-full top-[40px] left-[30px] w-[calc(100% - 60px)] h-auto">
                <path d="M0.0859375 37.6484H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 74.4922H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 0.804688L625.298 0.804688" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 111.336H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 258.711H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 148.18H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 332.391H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 295.547H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 185.023H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 221.867H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
            </svg>
                </div>
                <div style={{transform: `translateY(${secdivtrans}px) rotate(${Math.max(-2,secrotatemotionval.get())}deg)`}} className="box-border absolute m-0 top-0 left-[calc(50%-350px)] flex justify-center items-start text-center w-full max-w-[700px] h-[430px] rounded-[10px] p-[20px] pt-[65px] bg-[var(--tomato)] [rotate:none]">
                   <h2 className="font-[70] leading-[1.1] text-[58px] box-border relative m-0 break-words">We come to associate power, leadership and authority with masculinity.</h2>
                  <svg width="626" height="333" viewBox="0 0 626 333" fill="none"
                xmlns="http://www.w3.org/2000/svg" className="box-border absolute m-0 block max-w-full top-[40px] left-[30px] w-[calc(100% - 60px)] h-auto">
                <path d="M0.0859375 37.6484H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 74.4922H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 0.804688L625.298 0.804688" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 111.336H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 258.711H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 148.18H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 332.391H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 295.547H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 185.023H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                <path d="M0.0859375 221.867H625.298" stroke="black" stroke-width="0.358776" className="box-border relative m-0"></path>
                  </svg>
                </div>
                <div style={{transform:  `translateY(${thirddivtrans}px) rotate(${thirdrotateval}deg)`}} class="box-border absolute m-0 top-0 left-[calc(50%-350px)] flex justify-center items-start text-center w-full max-w-[700px] h-[430px] rounded-[10px] p-[20px] pt-[65px] bg-[var(--chanterelle)] [rotate:none] ">
            <h2 class="font-[70] leading-[1.1] text-[58px] box-border relative m-0 break-words">Women have always spoken out, yet their voices have not been amplified. We can change this.</h2>
            <svg width="626" height="333" viewBox="0 0 626 333" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="box-border absolute m-0 block max-w-full top-[40px] left-[30px] w-[calc(100% - 60px)] h-auto">
                <path d="M0.0859375 37.6484H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 74.4922H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 0.804688L625.298 0.804688" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 111.336H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 258.711H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 148.18H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 332.391H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 295.547H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 185.023H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
                <path d="M0.0859375 221.867H625.298" stroke="black" stroke-width="0.358776" class="box-border relative m-0"></path>
            </svg>
                </div>
                </div>
            </section>
        </section>
      
    </div>
  )
}

export default IncomingCards
