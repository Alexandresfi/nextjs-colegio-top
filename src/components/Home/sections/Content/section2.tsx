import Image from "next/image"
import Link from "next/link"
import VideoPlay from "../../../../assets/imgs/home/section2/video-play.png"


export const Section2Home = () => {
    return(
        <section className="flex flex-col-reverse gap-[77px] lg:flex-row lg:gap-0 lg:justify-between">
            
            <div className="text-lef max-w-[322px] m-auto">
                <div className=" uppercase">
                    <h3 className="text-sm uppercase text-red-dark">
                        Bem-vindo ao Colégio TOP
                    </h3>
                    <h2 className="text-2xl text-red-dark">Educação é o futuro</h2>
                </div>
                <div className="h-[148px] " >
                    <p className="mt-4 mb-12 text-black-dark text-[13px] leading-[16px]">
                    Compromisso com a educação é muito mais que ter 
                    bons professores e bons livros. É escolher ser uma 
                    escola que concentra esforços na qualidade do 
                    serviço prestado com um plano pedagógico bem 
                    definido e alinhado com o que a há de mais moderno
                    em educação no mundo inteiro.
                    </p>
                    <Link href='/about' className="max-w-[223px] w-full h-[61px] flex items-center justify-center uppercase text-red-dark border-[3px] rounded-[60px]">Mais osbre nós</Link>
                </div>
            </div>

            <div className="relative">
                <video 
                    // poster="../../../../assets/imgs/home/section2/capa-video.jpg"
                    className="bg-[linear-gradient(0deg, rgba(103, 0, 23, 0.3), rgba(103, 0, 23, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))] rounded-[100px] w-[347px] h-auto lg:w-[489.6px] mx-auto"
                >
                    <source 
                        src={require('../../../../assets/imgs/home/section2/video.mp4')}
                    />
                </video>
                <div 
                    className="bg-[linear-gradient(0deg, rgba(103, 0, 23, 0.3), rgba(103, 0, 23, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))] absolute top-[103px] rounded-[100px] flex items-center justify-center w-[347px] h-[31px] lg:w-[489.6px] lg:h-[0px] lg:top-[140px]"
                >
                    <Image width='90' height='270' src={VideoPlay} alt="play" />
                </div>
            </div>
        </section>
    )
}