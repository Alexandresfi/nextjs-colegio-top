
import React, { ButtonHTMLAttributes, FunctionComponent, PropsWithChildren } from "react"

type ButtonProps = {
    children: string
    toggleStyle: number
    showMainContent: number
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button:FunctionComponent<ButtonProps> = (props) => {
    const {...otherProps} = props
    const toggleStyle = ['bg-white border-solid text-red-dark', 'hover:text-white active:bg-transparent']
    return(
        <button 
        {...otherProps} 
        className={`text-xs lg:text-base max-w-[83px] lg:max-w-[199px] w-full h-[38px] ${props.toggleStyle === props.showMainContent ? toggleStyle[1] : toggleStyle[0]} border-white border-[3px] text-center font-semibold uppercase hover:bg-transparent hover:text-white active:bg-transparent`} >
            {props.children}
        </button>
    )
}