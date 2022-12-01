import React from "react";
import { Img } from "../../styles/components";
import Avatar from "../commons/avatar/Avatar";
import * as S from './styles';

export default function Bord() {
    return (
        <Header />
    )
};

function Header() {
    return (
        <S.Header>
            <S.Options>
                <S.Groupoptions>
                    <S.Newoptions>
                        + Add new
                    </S.Newoptions>
                </S.Groupoptions>
                <S.Groupoptions>
                    <S.Search>
                        <S.Input type="text" placeholder="Search..." />
                        <Img src="img/app/search.png" alt="" />
                    </S.Search>
                    <S.Notify>
                        <S.Quantitynotify>99+</S.Quantitynotify>
                        <Img src="img/app/bell.png" alt="" />
                    </S.Notify>
                    <Avatar />
                </S.Groupoptions>
            </S.Options>
            <Line />
            <Columns />
        </S.Header>
    )
}

function Line() {
    return (
        <S.Line>
            <S.Grouptitle>
                <S.Titleline>
                    New task
                    <S.Quantitytask>3</S.Quantitytask>
                </S.Titleline>
                <S.Titleline>
                    Scheduled
                    <S.Quantitytask>3</S.Quantitytask>
                </S.Titleline>
                <S.Titleline>
                    In progress
                    <S.Quantitytask>3</S.Quantitytask>
                </S.Titleline>
                <S.Titleline>
                    Completed
                    <S.Quantitytask>3</S.Quantitytask>
                </S.Titleline>
            </S.Grouptitle>
            <S.Create>
                + Create status
            </S.Create>

        </S.Line>
    )
}
function Columns() {
    return (
        <S.Columns>
            <S.Column>
                <Note />
            </S.Column>
            <S.Column>
                <Note bgcolor="#D8DCFF" />
                <Note bgcolor="#F2BAE1" />
            </S.Column>
            <S.Column>
                <Note />
                <Note bgcolor="#D9E6A2" />
                <Note />
            </S.Column>
            <S.Column>
                <Note />
                <Note bgcolor="#D8DCFF" />
            </S.Column>
        </S.Columns>
    )
}

interface INoteProps {
    bgcolor?: string,
}
function Note({ bgcolor = "#ABE9CE" }: INoteProps) {

    return (
        <S.Note style={{ background: `${bgcolor}` }}>
            <S.Description>
                skldfjdsklf sadlkfjsdklf sdflk sdflkfnsd flksdfkl fsd sfds fds dsfds fsdf
            </S.Description>
            <S.Timetask>
                0:30h
            </S.Timetask>
        </S.Note>
    )
}