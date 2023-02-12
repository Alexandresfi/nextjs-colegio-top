import Image from 'next/image'
import Link from 'next/link'

import Mission from '../../../assets/imgs/home/section1/Primeira/alunos3Ano.png'
import Vision from '../../../assets/imgs/home/section1/Primeira/visao.jpg'
import Values from '../../../assets/imgs/home/section1/Primeira/valores.jpg'
import Adverts from '../../../assets/imgs/home/section1/Primeira/anuncio.jpg'

import IconArrowRight from '../../../assets/icons/icon-arrow-right.svg'

interface ChildrenProps {
    showContent: number
}

export function ContainerContents ({showContent}:ChildrenProps) {
    const mainContent = [
        {
            image: Mission,
            label: 'Infantil',
            text: 'Visamos abordar a educação de forma ampla, envolvendo não somente a transmissão de conhecimento, mas também as habilidades sociais, emocionais e comportamentais, além de todo o contexto da vida dos alunos.'
        },
        {
            image: Vision,
            label: 'Fundamental 2',
            text: 'Ser uma Escola de referência a nível local e nacional pelo sucesso acadêmico e profissional dos seus alunos, pela qualidade do seu ambiente interno e relações externas.'
        },
        {
            image: Values,
            label: 'Fundamental 2',
            text: 'Queremos ser uma Escola, que promova uma cultura de liberdade e que esteja atenta à diversidade de todos os membros da comunidade educativa. Queremos ser uma Escola que contribua para a autonomia intelectual das crianças e adolescentes.'
        },
        {
            image: Adverts,
            label: 'Infantil',
            text: 'O Top Sistema de Ensino, fundando em 2014, situado nos Bancários, tem a missão de transformar e inspirar vidas, por meio de um projeto pedagógico sintonizado com as demandas do novo mundo. O Top vem com o sistema de ensino, onde crianças e adolescentes têm acesso imutável à conhecimentos que irão transformar suas vidas no mundo atual.'
        },
    ]
    
    return(
        <article>
            <div 
            className="flex flex-col lg:flex-row justify-center lg:justify-between items-center max-w-[350px] mx-auto mt-[51px] lg:max-w-[904px]  lg:mt-[122px]"
            >
                <figure className='h-[290px] max-w-[350px] lg:h-[260px] lg:max-w-[199px] w-full' >
                        <Image 
                        src={mainContent[showContent].image} 
                        alt={mainContent[showContent].label} 
                        className=' h-[290px] max-w-[350px] lg:max-w-[199px] lg:h-[232px] w-full text-center border-[5px] border-white'
                        />
                        <figcaption className='text-center font-semibold text-lg mt-1'>{mainContent[showContent].label}</figcaption>
                </figure>
                <div className='max-w-[340px] m-auto mt-14 lg:max-w-[592px]'>
                        <p className='text-left text-medium text-base min-h-[119px]'>{mainContent[showContent].text}</p>

                        <Link className='text-bold text-left text-base flex justify-start items-center translate-y-9' href='/about'>
                            Ler mais <Image src={IconArrowRight} alt='arrow right' className='ml-6'/>
                        </Link>
                </div>
            </div>
        </article>
    )

}