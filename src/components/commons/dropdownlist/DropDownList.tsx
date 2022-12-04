import React, { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Img } from "../../../styles/components";

interface IDropDownListProps {
    children: ReactElement[] | ReactElement | null,
    title: string,
}

interface IDropDownLisItemtProps {
    children: ReactNode,

}

const fontStyle = css`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`
const Drop = styled.div`

    ${fontStyle}
    color: #8C939F;
`
const Header = styled.div`
    ${fontStyle}
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 4px;
    margin-top: 4px;
`
const Item = styled.div`
    margin-top: 18px;
`

export default function DropDownList({ children, title, ...props }: IDropDownListProps) {
    return (
        <Drop>
            <Header>
                <Img src="img/app/dropdown.png" alt="" mleft="7px" mright="15px" />
                {title}
            </Header>
            {children}
        </Drop>
    )
}

export function DropDownListItem({ children }: IDropDownLisItemtProps) {
    return (
        <Item>
            {children}
        </Item>
    )
}
