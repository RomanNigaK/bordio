import React, { useState } from "react";
import css from './tools.module.css';
interface IItem {
    title: string,
    img: string,
    imgA:string,
}
export default function Tools() {
    const [itemToolsTitle, setItemToolsTitle] = useState<string>("Roadmap");
    const [items, setItems] = useState<IItem[]>([
        { title: "Roadmap", img: "img/app/tools/roadmap.png",imgA: "img/app/tools/roadmap_a.png"  },
        { title: "Schedule", img: "img/app/tools/schedule.png",imgA: "img/app/tools/schedule_a.png"},
        { title: "Tasks", img: "img/app/tools/tasks.png",imgA: "img/app/tools/tasks_a.png"},
        { title: "Notes", img: "img/app/tools/notes.png",imgA: "img/app/tools/notes_a.png"},
        { title: "Files", img: "img/app/tools/files.png",imgA: "img/app/tools/files_a.png"},

    ])



    return (
        <div className={css.tools}>
            <div className={css.header}>Tools</div>
            <div className={css.items}>
                {
                    items.map(el => {
                        let image:string;
                        let classname:string;
                        if(el.title===itemToolsTitle){
                            image = el.imgA;
                            classname = css.item+" "+css.item_active;
                        }
                        else{
                            image = el.img;
                            classname = css.item;
                        }
                        return (
                            <div className={classname} onClick={()=>setItemToolsTitle(el.title)}>
                                {el.title===itemToolsTitle?<div className={css.marker}></div>:null}
                                <div className={css.imgitem}>
                                    <img src={image} />
                                </div>
                                <div className={css.titleItem}>{el.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}