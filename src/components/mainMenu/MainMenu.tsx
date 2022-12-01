import React from "react";
import Avatar from "../commons/avatar/Avatar";
import DropDownList, { DropDownListItem } from "../commons/dropdownlist/DropDownList";
import styled, { css } from "styled-components";
import * as S from './styles';
import * as C from './../../styles/components';

export default function MainMenu() {
    return (
        <S.Mainmenu>
            <S.Logo>
                <C.Img src="img/app/bordio/logo.png" alt="bordio" />
            </S.Logo>
            <Search />
            <S.Header>
                <Avatar />
                <S.Title>My workspace</S.Title>
            </S.Header>
            <S.Dropdownlist>
                <DropDownList title="Favorites">
                    <DropDownListItem>Marketing</DropDownListItem>
                    <DropDownListItem>Mobile App</DropDownListItem>
                </DropDownList>
            </S.Dropdownlist>
            <S.Dropdownlist>
                <DropDownList title="My Projects">
                    <DropDownListItem>Marketing</DropDownListItem>
                    <DropDownListItem>Landing Pages</DropDownListItem>
                    <DropDownListItem>Wedding</DropDownListItem>
                    <DropDownListItem>Mobile App</DropDownListItem>
                    <DropDownListItem>House Construction</DropDownListItem>
                </DropDownList>
            </S.Dropdownlist>
        </S.Mainmenu>
    )

};

function Search() {
    return (
        <S.Search>
            <S.Input type="text" placeholder="Search..." />
            <C.Img src="img/app/search.png" alt="search" />
        </S.Search>
    )
}
