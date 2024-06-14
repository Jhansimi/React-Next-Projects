
import { MouseEventHandler } from "react";


export inerface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";


}

export interface searchManufacturerProps{
    manufacturer:string,
    setMenufacturer:(manufacturer:string)=>void
}