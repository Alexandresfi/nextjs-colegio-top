import { ButtonSection } from "./sections/Button"

export const Section1Home = () => {
    return(
        <section className=" bg-red-dark h-[669px]">
            <div className="max-w-screen-xl m-auto ">
                <h1 className="text-center text-white text-4xl pt-[49px] pb-[66px]" >CAPACITANDO A EDUCAÇÃO POR MEIO DA INOVAÇÃO</h1>

                <div className="flex justify-center items-center gap-[17px]">
                    <ButtonSection>Missão</ButtonSection>
                    <ButtonSection>Visão</ButtonSection>
                    <ButtonSection>Valores</ButtonSection>
                    <ButtonSection>Anuncios</ButtonSection>
                </div>
            </div>
            
        </section>
    )
}