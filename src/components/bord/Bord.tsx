import React from "react";
import Avatar from "../commons/avatar/Avatar";
import css from './bord.module.css';

export default function Bord() {
    return (
        <div className={css.board}>
            <Header />
        </div>
    )
};

function Header() {
    return (
        <div className={css.header}>
            <div className={css.options}>
                <div className={css.leftoptions}>
                    <div className={css.newoptions}>
                        + Add new
                    </div>
                </div>
                <div className={css.rightoptions}>
                    <div className={css.search}>
                        <input type="text" placeholder="Search..." />
                        <img src="img/app/search.png" alt="" />
                    </div>
                    <div className={css.notify}>
                        <div className={css.quantitynotify}>99+</div>
                        <img src="img/app/bell.png" alt="" />

                    </div>
                    <div className={css.avatar}>
                        <Avatar />
                    </div>
                </div>
            </div>
            <Line />
            <Columns />
        </div>
    )
}

function Line() {
    return (
        <div className={css.line}>
            <div className={css.grouptitle}>
                <div className={css.titleline}>
                    New task
                    <div className={css.quantitytask}>3</div>
                </div>
                <div className={css.titleline}>
                    Scheduled
                    <div className={css.quantitytask}>3</div>
                </div>
                <div className={css.titleline}>
                    In progress
                    <div className={css.quantitytask}>3</div>
                </div>
                <div className={css.titleline}>
                    Completed
                    <div className={css.quantitytask}>3</div>
                </div>
            </div>
            <div className={css.create}>
                + Create status
            </div>

        </div>
    )
}
function Columns() {
    return (
        <div className={css.columns}>
            <div className={css.column}>
                <Note />
            </div>
            <div className={css.column}>
                <Note bgcolor="#D8DCFF"/>
                <Note bgcolor="#F2BAE1"/>
            </div>
            <div className={css.column}>
                <Note />
                <Note bgcolor="#D9E6A2"/>
                <Note />
            </div>
            <div className={css.column}>
                <Note />
                <Note bgcolor="#D8DCFF"/>
            </div>
        </div>
    )
}

interface INoteProps{
    bgcolor?:string,
}
function Note({bgcolor="#ABE9CE"}:INoteProps) {
    
    return (
        <div className={css.note } style = {{background:`${bgcolor}`}}>
            <div className={css.description}>
                skldfjdsklf sadlkfjsdklf sdflk sdflkfnsd flksdfkl fsd sfds fds dsfds fsdf
            </div>
            <div className={css.timetask}>
                0:30h
            </div>
        </div>
    )
}