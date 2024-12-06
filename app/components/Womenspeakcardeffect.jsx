'use client'
import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Womenspeakcardeffect = ({bgtype,text,index,isconinview}) => {
    const ref = useRef(null)
    const [hoverstate, sethoverstate] = useState(false)
    const isInView = useInView(ref)
    console.log(hoverstate,isInView);
    
    return (
        <motion.li onMouseEnter={()=>sethoverstate(true)} onMouseLeave={()=>sethoverstate(false)} 
            ref={ref}
            className={`   box-border relative hover:scale-105  m-0 [list-style:none] [aspect-ratio:276.24_/_185.25] flex justify-center  duration-500 items-center  uppercase text-center  [background-size:100%] bg-no-repeat transform-none ${bgtype}`}
            style={{
                opacity: hoverstate||isInView ? 1 : 0,
                // transition:isInView?hoverstate?"opacity 1s ,transform .5s ":'opacity 1s 1s ,transform .5s':''
                transition:hoverstate?"transform .5s ":`opacity 1.5s ${index*0.1}s,transform .5s`
            }}
        >
            <a href="/speech-archive?category=childrens-rights" className="box-border relative m-0 no-underline [color:inherit] w-full h-full flex justify-center items-center pt-[50px] px-[10px] pb-[35px]">
                <span className="box-border relative m-0">
                    <p className="box-border relative m-0 break-words text-[20px] font-[70] leading-none">{text}</p>
                </span>
            </a>
        </motion.li>
    )
}

export default Womenspeakcardeffect
