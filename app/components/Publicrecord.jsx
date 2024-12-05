'use client'
import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef, useState } from 'react'

const Publicrecord = () => {
    const ref = useRef(null);
    // const containref = useRef(null);
    
    //    const [prevScroll, setPrevScroll] = useState(0);
    const [leftmarue, setleftmarue] = useState(0)
    const [containertfix, setcontainerfixval] = useState(0)
    const {scrollYProgress}=useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const containermotionval=useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    // useMotionValueEvent(containermotionval,'change',(latest)=>{
        // console.log(containermotionval.scrollYProgress);
    // })
    useMotionValueEvent(scrollYProgress,'change',(latest)=>{
        // const direction = latest > prevScroll ? 1 : -1;
        setleftmarue(latest);
        // setPrevScroll(latest);
// arue(latest)
    // })
// latest)
    })
    // console.log(leftmarue);
    useMotionValueEvent(containermotionval.scrollYProgress,'change',(latest)=>{
        // console.log(latest);
        setcontainerfixval(latest);
    })  
        
    // console.log(containermotionval.scrollYProgress.get());
    
  return (
    <div ref={ref} className='z-auto relative h-[250vh]  '>
        <section style={{position: containertfix>.9&&leftmarue<1?'fixed':'',left: containertfix>.9&&leftmarue<1?'0':'',top: containertfix>.9&&leftmarue<1?'-900px':'',transform:leftmarue===1&&`translate(0px,702px)`}} className='w-full'>
        <section  className='h-[250vh] bg-[var(--black)] w-full relative text-white'>
            <button className='absolute bottom-full left-1/2 bg-[var(--black)] text-white min-w-[260px] pt-[18px] px-6 pb-2 -translate-x-1/2 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className='block w-[34px] h-full bg-no-repeat bg-[100%] absolute top-0 right-[calc(100%-1px)]' viewBox="0 0 34 34" preserveAspectRatio="none"><path d="m34,34H0c15.75-2.94,26.19-14.5,28.16-28.95.38-2.77,2.9-5.05,5.84-5.05" fill-rule="evenodd" stroke-width="0" fill="#0E0E0E"></path></svg>
            <span>Scroll down  <span>↓</span></span>
            <svg xmlns="http://www.w3.org/2000/svg" className='right-auto left-[calc(100%-1px)] scale-x-[-1] block w-[34px] h-full bg-no-repeat bg-[100%] absolute top-0 max-w-full ' viewBox="0 0 34 34" preserveAspectRatio="none"><path d="m34,34H0c15.75-2.94,26.19-14.5,28.16-28.95.38-2.77,2.9-5.05,5.84-5.05" fill-rule="evenodd" stroke-width="0" fill="#0E0E0E"></path></svg>
            </button>
            <div className='flex items-center justify-center sticky top-0 h-screen '>
                <div className='pt-[30px] px-[30px] pb-[20px] bg-white text-[var(--black)] rounded-[var(--border-radius-medium)] text-center uppercase z-[1] duration-500'>
                <h3 className='max-w-[600px] duration-500 text-[62px]'>Let's set the (public) record straight.</h3>
                </div>
                <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
<div className='absolute w-fit origin-[top_left] text-[34px] left-0 rotate-[-2.5deg] -translate-y-1/2 bmin1024maxh800:!top-[25%]'>
        <div style={{transform:`translateX(-${(leftmarue*100)/10}%)`}} class="box-border relative m-0 flex gap-[10px] [rotate:none] ">
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Grace Tame</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julia Gillard</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Miles Franklin</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dorothy Tangney</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Grace Tame</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julia Gillard</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Miles Franklin</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dorothy Tangney</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Grace Tame</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Julia Gillard</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Miles Franklin</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Dorothy Tangney</div>
        </div>

</div>
<div className='absolute w-fit right-0 left-auto rotate-[2.5deg] text-[34px] -translate-y-1/2 origin-[top_right] bmin1024maxh800:!top-[50%]'>
<div style={{transform:`translateX(${(leftmarue*100)/10}%)`}} class="box-border relative m-0 flex gap-[10px] [rotate:none] ">
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Grace Tame</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julia Gillard</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Miles Franklin</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dorothy Tangney</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Grace Tame</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julia Gillard</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Miles Franklin</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dorothy Tangney</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Grace Tame</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Julia Gillard</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Miles Franklin</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Dorothy Tangney</div>
        </div>
</div>
<div className='absolute w-fit right-0  rotate-[-2.5deg] text-[34px] -translate-y-1/2 origin-[top_left] bmin1024maxh800:!bottom-[8%] bottom-[25%] left-0 '>
<div style={{transform:`translateX(${-(leftmarue*100)/10}%)`}} class="box-border relative m-0 flex gap-[10px] [rotate:none] ">
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Grace Tame</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julia Gillard</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Miles Franklin</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dorothy Tangney</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Grace Tame</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julia Gillard</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Miles Franklin</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dorothy Tangney</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Justice Mary Gaudron</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Quentin Bryce</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Prof. Kim Rubenstein</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Grace Tame</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Penny Wong</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Kath Walker</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Lowitja O'Donoghue</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Faith Bandler</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Julia Gillard</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Diana Bryant</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr Fiona Stanley</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Stella Young</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Jessie Street</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rachel Perkins</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Prof. Marcia Langton</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Miles Franklin</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Anna Burke</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hannah Gadsby</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Julian Schultz</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Catherine Helen Spence</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Dr. Maria Tumarkin</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Margaret Reynolds</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Hon. Virginia Bell</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Hon. Susan Ryan</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Edith Cowan</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Vida Goldstein</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Rose Scott</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Prof. Alice Tay</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Cathy Foley</div>
            <div class="box-border relative m-0 bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Elizabeth Hastings</div>
            <div class="box-border relative m-0 bg-[var(--chanterelle)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Sabina Wolanski</div>
            <div class="box-border relative m-0 bg-[var(--tomato)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Gabrielle Jackson</div>
            <div class="box-border relative m-0 bg-[var(--lavender)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Yassmin Abdel-Magied</div>
            <div class="box-border relative m-0 bg-[var(--peach)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Aunty Pearl Gibbs</div>
            <div class="box-border relative m-0 bg-[var(--blueberry)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)] text-[rgb(0,_0,_0)]">Senator Patricia Giles</div>
            <div class="box-border relative m-0 text-[rgb(0,_0,_0)] border-[1px] border-[solid] border-[rgb(255,255,255)] pt-[14px] px-[14px] pb-[4px] whitespace-nowrap rounded-[var(--border-radius-small)]">Dorothy Tangney</div>
        </div>
</div>
                </div>
            </div>
             </section>
             </section>
    </div>
  )
}

export default Publicrecord
