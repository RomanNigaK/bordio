import React,{ ReactElement, ReactNode } from "react";
import css from './dropdownlist.module.css';
interface IDropDownListProps{
    children:ReactElement[]|ReactElement|null,
    title:string,
}

interface IDropDownLisItemtProps{
    children:ReactNode,
    
}
export default function DropDownList({children,title,...props}:IDropDownListProps){
    return(
        <div className={css.drop}>
            <div className={css.header}>
                <img src="img/app/dropdown.png" alt="" />
                {title}
            </div>
           
            {children}
           
            
        </div>
    )
}

export function DropDownListItem({children}:IDropDownLisItemtProps){
    return(
        <div className={css.item}>
        {children}
        </div>
    )
}
