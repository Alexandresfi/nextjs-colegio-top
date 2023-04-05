import Image from "next/image"
import { imgCarossel } from "./images"

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

import Arrows from '../../../../assets/icons/icon-arrow-right.svg'



export const Carossel = () => {
    
    return(
        <div className="overflow-hidden lg:w-[940px] m-auto mt-16">
            <CarouselProvider
            naturalSlideWidth={80}
            naturalSlideHeight={125}
            totalSlides={8}
            isIntrinsicHeight ={true}
            className="bg-red"
            >
                <Slider 
                classNameTrayWrap="flex shrink-0" 
                classNameTray='flex gap-9 lg:gap-14' 
                className="flex"
                // horizontalPixelThreshold={10}
                >
                    {
                        imgCarossel.map((img, index) => (
                            <Slide index={0} key={index} >
                                <Image 
                                    width={440} 
                                    height={288} 
                                    src={img.path} 
                                    alt={img.name} 
                                    className="max-w-[259px] w-full h-[170px] lg:max-w-[440px] lg:h-[288px] " />
                            </Slide>
                        ))
                    }
                </Slider>
                <div className=" hidden lg:flex lg:gap-4 lg:justify-end lg:mt-11">
                    <ButtonBack>
                        <Image src={Arrows} alt="arrow right" className="rotate-180" />
                    </ButtonBack>

                    <ButtonNext>
                        <Image src={Arrows} alt="arrow left" />
                    </ButtonNext>
                </div>
            </CarouselProvider>

        </div>
    )
}