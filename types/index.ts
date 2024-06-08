
import { MouseEventHandler } from "react";


export inerface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;


}