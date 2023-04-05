import { Open_Sans } from "@next/font/google";
import Link from "next/link";
import { Carossel } from "../Content/Carossel";

const open_Sans = Open_Sans({
    
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-open',
    subsets: ['latin']
  })

export const Section3Home = () => {
    return(
        <section className={`bg-red-dark ${open_Sans.variable} font-sans pt-[65px] pb-[100px]`} >
            <div>
                <div className="flex flex-col gap-5 items-start lg:flex-row lg:justify-between px-5 max-w-[937px] m-auto lg:gap-0 lg:p-0" >
                    <h1 className="text-4xl font-sans lg:text-600 lg:max-w-[405px] lg:w-full" >Sobre o Top</h1>
                    <div>
                        <h3 className="text-300 font-semibold w-full lg:max-w-[608px] lg:pt-3.5" >
                            Um lugar de aprendizagem, discussão, inovação, expressão e discurso
                        </h3>
                        <p className="text-xs font-semibold pb-10 pt-6 w-full lg:max-w-[612px] shrink-0 " >
                            A forma de obter conhecimento mudou completamente, apenas com alguns cliques podemos ter acesso a qualquer tipo 
                            de conhecimento e ou informação, sendo assim, precisamos mudar a forma de ensinar. 
                            A Top então vem com o sistema de ensino 4.0, onde crianças e adolescentes 
                            tem acesso imutavel a conhecimentos que vão transformar suas vidas no mercado de hoje em dia. 
                        </p>
                        <Link 
                            href='/about' 
                            className="max-w-[195px] w-full h-[61px] rounded-[100px] border-2 border-white py-4 px-8 font-bold text-200"
                        >
                            Nossa História
                        </Link>
                    </div>
                </div>

                <div>
                    <Carossel />
                </div>
            </div>
        </section>
    )
}