import Image from "next/image"
import Link from "next/link"
import { Open_Sans } from "@next/font/google";

import VideoPlay from "../../../assets/imgs/home/section2/video-play.png"
import { useRef, useState } from "react";

const open_Sans = Open_Sans({
    
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-open',
    subsets: ['latin']
  })

export const Section2Home = () => {

    const ref = useRef<HTMLVideoElement>(null)
    const [hiddenPlay, setHiddenPlay] = useState('visibility')

    function handleClickVideo() {
        ref.current?.play()
        setHiddenPlay('hidden')
        setTimeout(()=> {
            setHiddenPlay('visibility')
        }, 60000)
    }
    
    return(
        <section className={`flex flex-col-reverse gap-[77px] max-w-[937px] m-auto py-[102px] lg:flex-row lg:gap-0 lg:justify-between lg:py-[131px] ${open_Sans.variable} font-sans`}>
            
            <div className="text-lef max-w-[322px] mx-auto lg:max-w-[427px] lg:mx-0">
                <div className=" uppercase">
                    <h3 className="uppercase text-red-dark text-300 font-bold lg:text-sm">
                        Bem-vindo ao Colégio TOP
                    </h3>
                    <h2 className="text-2xl text-red-dark font-bold pt-px lg:pt-[17px] lg:text-3xl">Educação é o futuro</h2>
                </div>
                <div className="h-[148px]">
                    <p className="mt-4 mb-12 text-black-dark text-100 tracking-[-0.005em] lg:text-300">
                    Compromisso com a educação é muito mais que ter 
                    bons professores e bons livros. É escolher ser uma 
                    escola que concentra esforços na qualidade do 
                    serviço prestado com um plano pedagógico bem 
                    definido e alinhado com o que a há de mais moderno
                    em educação no mundo inteiro.
                    </p>
                    <Link 
                        href='/about' 
                        className="max-w-[223px] w-full h-[61px] flex items-center justify-center uppercase text-red-dark text-300 font-bold border-[3px] rounded-[60px]"
                    >
                        Mais sobre nós
                    </Link>
                </div>
            </div>

            <div className="relative">
                <video 
                    muted
                    className="rounded-[100px] w-[347px] h-auto lg:w-[489.6px] mx-auto"
                    ref={ref}
                >
                    <source 
                        src={require('../../../assets/imgs/home/section2/video.mp4')}
                    />

                </video>
                <div 
                    className={`bg-gradient-to-br to-red-dark from-[#6700162c]  absolute top-[-1px] left-2 rounded-[100px] flex items-center justify-center w-[347px] h-[196px] ${hiddenPlay} cursor-pointer lg:w-[489.6px] lg:h-[275px] lg:top-[0px] lg:left-0`}
                >
                    <Image 
                        width='90' 
                        height='270' 
                        src={VideoPlay} 
                        alt="play" 
                        onClick={handleClickVideo}
                    />
                </div>
            </div>
        </section>
    )
}