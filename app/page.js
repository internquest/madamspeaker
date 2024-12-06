import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TypeWriter from './components/TypeWriter';
import Hero from "./components/Hero";
import SmoothScroll from './components/SmoothScroll';
import Publicrecord from "./components/Publicrecord";
import IncomingCards from "./components/IncomingCards";
import WomenSpeaking from "./components/WomenSpeaking";

export default function Home() {
  return (
    <SmoothScroll>
      {/* <Header/>
      <Navbar/> */}
      <main className="">
        <section className="flex h-full min-h-screen bg-[var(--lavender)] text-[var(--black)]">
        <div className="w-full ml-auto mr-auto pl-[20px] pr-[20px]  relative m-0 flex max-w-[1260px]">
            <div className=" relative  mx-0 mb-0 w-full p-[30px] rounded-tl-[30px] rounded-br-none rounded-tr-[30px] rounded-bl-none flex justify-center bg-[var(--brown-tint)] items-center mt-[100px] before:content-[''] before:block before:w-[calc(100%-100px)] before:h-[calc(100%-100px)] before:absolute before:bottom-0 before:left-[50px] before:bg-[linear-gradient(to_bottom,var(--black),var(--brown-tint)_1px,var(--brown-tint)_20px)] before:bg-[length:100%_80px]">
                <div className=" absolute m-0 block h-auto top-[18%] left-[5%] w-[100px] [rotate:-5deg] opacity-100">
                  <Image src={'https://madamspeaker.org.au/_next/image?url=%2Fimages%2Fquote.png&w=384&q=75'} alt="Quote" width="142" height="764" className=" relative m-0 block max-w-full w-full h-auto text-transparent"/>
                    {/* <img alt="Quote" loading="lazy" width="142" height="764" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fimages%2Fquote.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fquote.png&w=384&q=75 2x" src="/_next/image?url=%2Fimages%2Fquote.png&w=384&q=75" className=" relative m-0 block max-w-full w-full h-auto text-transparent"></img> */}
                </div>
                <div className=" absolute m-0 block h-auto top-auto left-auto bottom-[18%] right-[2%] w-[100px] [rotate:172deg] opacity-100">
                  <Image width="142" height="764" alt="Quote"  src={'https://madamspeaker.org.au/_next/image?url=%2Fimages%2Fquote.png&w=384&q=75'} className=" relative m-0 block max-w-full w-full h-auto text-transparent"/>
                    {/* <img alt="Quote" loading="lazy" width="142" height="764" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fimages%2Fquote.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fquote.png&w=384&q=75 2x" src="/_next/image?url=%2Fimages%2Fquote.png&w=384&q=75" className=" relative m-0 block max-w-full w-full h-auto text-transparent"></img> */}
                </div>
                <h1 className="font-[70] leading-[1.1] text-[80px]  relative m-0 break-words max-w-[845px] text-center [rotate:-4deg] px-0 py-[100px]">
                    <div className=" absolute m-0 w-[282px] bottom-[92px] left-[331px]">
                        <div className=" relative m-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 613 46" width="613" height="46" preserveAspectRatio="xMidYMid meet" className=" relative m-0 block max-w-full w-full h-full [transform:translate3d(0px,_0px,_0px)] [content-visibility:visible]">
                                <defs className=" relative m-0">
                                    <clippath id="__lottie_element_2" className=" relative m-0">
                                        <rect width="613" height="46" x="0" y="0" className=" relative m-0"></rect>
                                    </clippath>
                                    <image href="" className=" relative m-0">
                                    </image>
                                    <g id="__lottie_element_3" className=" relative m-0">
                                        <g transform="matrix(1,0,0,1,306.5,23)" opacity="1" className=" relative m-0 block">
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)" className=" relative m-0">
                                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(103,255,0)" stroke-opacity="1" stroke-width="12" d=" M-298,16.5 C-278,14 -108,-2 -56.5,-1 C-5,0 98.5,-9 155,-13 C211.5,-17 280,-16 297.5,-16.5" className=" relative m-0"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <mask id="__lottie_element_3_1" mask-type="alpha" className=" relative m-0">
                                        <use href="#__lottie_element_3" className=" relative m-0"></use>
                                    </mask>
                                </defs>
                                <g clip-path="url(#__lottie_element_2)" className=" relative m-0">
                                    <g mask="url(#__lottie_element_3_1)" className=" relative m-0 block">
                                        <g transform="matrix(0.3199999928474426,0,0,0.3199999928474426,9.05999755859375,0.7600002288818359)" opacity="1" className=" relative m-0">
                                            <image width="1859px" height="139px" preserveAspectRatio="xMidYMid slice" href="" className=" relative m-0">
                                            </image>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <span className=" relative m-0">
                        <span data-testid="react-typed" className=" relative m-0">
                            <TypeWriter 
                                text='The majority of speeches 
                                <div>on the public record</div> are by men. Why so few <em>women</em>?'
                                speed={40}
                            />
                            {/* <span class="animate-cursor-blink" aria-hidden="true">|</span> */}
                        </span>
                    </span>
                </h1>
                <div className=" absolute m-0 w-[calc(100% - 100px)] flex justify-between items-center top-[40px] left-[50px] font-[var(--font-serif)]">
                    <span className=" relative m-0">Let’s face the facts</span>
                </div>
            </div>
        </div>

        </section>
        <Hero/>
        <Publicrecord/>
        <IncomingCards/>
        <WomenSpeaking/>
        {/* <div className="h-[400vh] w-full"></div> */}
      </main>
    </SmoothScroll>
  );
}
