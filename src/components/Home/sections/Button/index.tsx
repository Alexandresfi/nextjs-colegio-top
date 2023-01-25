import { ReactNode } from "react"

interface ChildrenProps {
    children: ReactNode
}
export const ButtonSection = ({children}:ChildrenProps) => {
    return (
        <button className="max-w-[199px] w-full h-[38px] bg-white border-solid border-white border-[3px] text-red-dark text-base text-center font-semibold uppercase hover:bg-transparent hover:text-white active:bg-transparent active:text-white"
            type="button"
        >
            {children}
        </button>
    )

}