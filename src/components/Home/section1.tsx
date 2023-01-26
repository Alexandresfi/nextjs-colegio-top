import { useState } from "react"
import { ContainerContents } from "./sections/Content"

export const Section1Home = () => {
    const [toggleMainContent, setToggleMainContent] = useState(0)
    const valueButtons = [
        {
            text: 'Missão',
            value: 0
        },
        {
            text: 'Visão',
            value: 1
        },
        {
            text: 'Valores',
            value: 2
        },
        {
            text: 'Anúncios',
            value: 3
        }
    ]
    
    function handleClick(item:number) {
        setToggleMainContent(item)
    }

    const toggleStyle = ['bg-white border-solid text-red-dark', 'hover:text-white active:bg-transparent']

    return(
        <section className=" bg-red-dark h-[669px]">
            <div className="max-w-screen-xl m-auto ">
                <h1 className="text-center text-4xl pt-[49px] pb-[66px]" >CAPACITANDO A EDUCAÇÃO POR MEIO DA INOVAÇÃO</h1>

                <div className="flex justify-between items-center max-w-[904px] mx-auto">
                    {valueButtons.map(item => (
                        <button 
                        className={`max-w-[199px] w-full h-[38px] ${item.value === toggleMainContent ? toggleStyle[1] : toggleStyle[0]} border-white border-[3px] text-base text-center font-semibold uppercase hover:bg-transparent hover:text-white active:bg-transparent`}
                        key={item.value}
                        onClick={()=>handleClick(item.value)}
                        >
                        {item.text}
                        </button>
                    ))}
                </div>
                <ContainerContents showContent={toggleMainContent}/>
            </div>
            
        </section>
    )
}