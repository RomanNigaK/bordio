import React, { useState } from "react";
import * as S from './styles';
import * as C from './../../styles/components';

interface IItem {
    title: string,
    img: string,
    imgA: string,
}
export default function Tools() {
    const [itemToolsTitle, setItemToolsTitle] = useState<string>("Roadmap");
    const [items, setItems] = useState<IItem[]>([
        { title: "Roadmap", img: "img/app/tools/roadmap.png", imgA: "img/app/tools/roadmap_a.png" },
        { title: "Schedule", img: "img/app/tools/schedule.png", imgA: "img/app/tools/schedule_a.png" },
        { title: "Tasks", img: "img/app/tools/tasks.png", imgA: "img/app/tools/tasks_a.png" },
        { title: "Notes", img: "img/app/tools/notes.png", imgA: "img/app/tools/notes_a.png" },
        { title: "Files", img: "img/app/tools/files.png", imgA: "img/app/tools/files_a.png" },

    ])



    return (
        <S.Tools>
            <S.Header>Tools</S.Header>
            
                {
                    items.map(el => {
                        let image: string;
                        let isActive = false;
                        if (el.title === itemToolsTitle) {
                            image = el.imgA;
                           isActive = true;
                        }
                        else {
                            image = el.img;
                        }
                        
                        return (
                            <S.Item isActive={isActive} onClick={() => setItemToolsTitle(el.title)} key={el.title}>
                                {el.title === itemToolsTitle ? <S.Marker /> : null}
                                <S.Imgitem>
                                    <C.Img src={image} />
                                </S.Imgitem>
                                <S.TitleItem>{el.title}</S.TitleItem>
                            </S.Item>
                        )

                    })
                }
            
        </S.Tools>
    )
}