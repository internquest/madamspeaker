'use client'
import React, { useRef } from 'react'
import Womenspeakcardeffect from './Womenspeakcardeffect'
import { useInView } from 'framer-motion';

const WomenSpeaking = () => {
    const ref = useRef(null);
    const isinview=useInView(ref,{once:true})
    
  return (
    <div className='z-auto relative'>
        <section>
            <section className='min-h-[140vh] bg-[var(--peach)] text-[var(--blueberry)]'>
                <button className='rounded-tl-[40px] rounded-tr-[40px]  bg-inherit text-inherit absolute bottom-full left-1/2 min-w-[260px] pt-[18px] px-[30px] pb-[8px] translate-x-[-50%] cursor-pointer'>
                <span>Scroll down  <span>↓</span></span>
                </button>
                <div className='flex justify-center items-start h-full sticky top-0 max-w-[1440px] w-full mx-auto px-5'>
                <div class="box-border relative m-0 w-full text-center pt-[50px] px-0 pb-[200px]">
            <div class="font-[var(--font-serif)] box-border relative m-0 opacity-100">Women speaking about:</div>
            <ul ref={ref} class="box-border relative mt-[40px] mx-[auto] mb-0 p-0 w-full max-w-[1250px] grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-[15px]">
               <Womenspeakcardeffect isconinview={isinview} index={1} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={2} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={3} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={4} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={5} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={6} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={7} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={8} bgtype={'bgone'} text={`Diplomacy`}/><Womenspeakcardeffect index={1} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={2} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={3} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={4} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={5} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={6} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={7} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={8} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={9} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={10} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={11} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={12} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={13} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={14} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={15} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={16} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={17} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={18} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={19} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={20} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={21} bgtype={'bgone'} text={'Care and Support'}/>
               <Womenspeakcardeffect isconinview={isinview} index={22} bgtype={'bgsecond'} text={`Children's rights`}/>
               <Womenspeakcardeffect isconinview={isinview} index={23} bgtype={'bgthird'} text={`Culture and Arts`}/>
               <Womenspeakcardeffect isconinview={isinview} index={24} bgtype={'bgone'} text={`Diplomacy`}/>
               <Womenspeakcardeffect isconinview={isinview} index={25} bgtype={'bgone'} text={'Care and Support'}/>
           
               

               
             
                
            </ul>
        </div>
                </div>
            </section>
        </section>
      
    </div>
  )
}

export default WomenSpeaking
