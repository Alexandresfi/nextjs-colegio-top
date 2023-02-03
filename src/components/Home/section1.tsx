import { useState } from "react"
import { Button } from "../Button"
import { ContainerContents } from "./sections/Content"

export const Section1Home = () => {
    const [toggleMainContent, setToggleMainContent] = useState(0)
    
    function handleClick(item:number) {
        setToggleMainContent(item)
    }

    return(
        <section className=" bg-red-dark h-[924px] lg:h-[669px]">
            <div className="max-w-screen-xl m-auto ">
                <h1 
                className="text-center text-2xl pt-[78px] pb-10 lg:text-4xl lg:pt-[49px] lg:pb-[66px]" 
                >
                    CAPACITANDO A EDUCAÇÃO POR MEIO DA INOVAÇÃO
                </h1>

                <div className="flex justify-between items-center max-w-[350px] lg:max-w-[904px] mx-auto">
                    <Button toggleStyle={0} showMainContent={toggleMainContent} onClick={()=>handleClick(0)}>Missão</Button>
                    <Button toggleStyle={1} showMainContent={toggleMainContent} onClick={()=>handleClick(1)}>Vissão</Button>
                    <Button toggleStyle={2} showMainContent={toggleMainContent} onClick={()=>handleClick(2)}>Valores</Button>
                    <Button toggleStyle={3} showMainContent={toggleMainContent} onClick={()=>handleClick(3)}>Anúncios</Button>
                </div>
                <ContainerContents showContent={toggleMainContent}/>
            </div>
            
        </section>
    )
}