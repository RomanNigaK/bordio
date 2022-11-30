import React from "react";
import Avatar from "../commons/avatar/Avatar";
import DropDownList, { DropDownListItem } from "../commons/dropdownlist/DropDownList";

import css from "./mainmenu.module.css";
export default function MainMenu() {

    return (
        <div className={css.mainmenu}>
            <div className={css.logo}>
                <img src="img/app/bordio/logo.png" alt="bordio" />
            </div>
            <div className={css.seach}>
                <Search />
            </div>
            <div className={css.header}>
                <Avatar />
                <div className={css.title}>My workspace</div>
            </div>
            <div className={css.dropdownlist}>
                <DropDownList title="Favorites">
                    <DropDownListItem>Marketing</DropDownListItem>
                    <DropDownListItem>Mobile App</DropDownListItem>
                </DropDownList>
            </div>
            <div className={css.dropdownlist}>
                <DropDownList title="My Projects">
                    <DropDownListItem>Marketing</DropDownListItem>
                    <DropDownListItem>Landing Pages</DropDownListItem>
                    <DropDownListItem>Wedding</DropDownListItem>
                    <DropDownListItem>Mobile App</DropDownListItem>
                    <DropDownListItem>House Construction</DropDownListItem>
                </DropDownList>
            </div>            
        </div>
    )

};

function Search() {
    return (
        <div className={css.search}>
            <input type="text" placeholder="Search..." />
            <img src="img/app/search.png" alt="search" />
        </div>
    )
}




