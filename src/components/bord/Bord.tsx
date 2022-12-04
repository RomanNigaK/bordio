import React, { useState, useRef, useCallback, PropsWithChildren, RefObject } from "react";
import { Img } from "../../styles/components";
import Avatar from "../commons/avatar/Avatar";
import Select from "../commons/select/Select";
import * as S from './styles';
import { useDrag, useDrop } from 'react-dnd';


interface IState {
    id: number,
    text: string,
    timeOnTask: number[] | null,
    statusTask: string,
    color: string,
}

interface ILineProps{
    initialState:IState[],
    nameSatusText:string[],
}

interface IColumnsProps extends ILineProps{
    dispatchState:Function,
}

interface IColumn {
    type: string,
    upDate: Function,
    state: IState[],
}

interface IItem {
    id: number
}

interface IContNodeProps extends PropsWithChildren {
    cb: Function,
    el: IState,
}

interface INode extends IState {
    cb: Function,
    contanerNoteRef: React.RefObject<HTMLInputElement>,
}

function Bord() {
    const [initialState, dispatchState] = useState<IState[]>(
        [
            { id: 0, text: "Check email", timeOnTask: [0, 20], statusTask: "New task", color: "#ABE9CE" },
            { id: 1, text: "Compare PPC agencies and make a report for Steven", timeOnTask: [3, 0], statusTask: "New task", color: "#D8DCFF" },
            { id: 2, text: "Meeting with Amanda (PR department)", timeOnTask: [0, 30], statusTask: "New task", color: "#D8DCFF" },
            { id: 3, text: "Get Patrick's approval for homepage new design email", timeOnTask: [0, 20], statusTask: "New task", color: "#ABE9CE" },
            { id: 4, text: "Write a blogpost 7 best strategies for SEO in 2020", timeOnTask: [0, 20], statusTask: "Scheduled", color: "#FFDFBA" },
            { id: 5, text: "New Ad copies for Manamaja", timeOnTask: [5, 0], statusTask: "Scheduled", color: "#D9E6A2" },
            { id: 6, text: "Check email", timeOnTask: [0, 20], statusTask: "In progress", color: "#FFDFBA" },
            { id: 7, text: "Record a video comment about last week's analytics report", timeOnTask: [0, 20], statusTask: "In progress", color: "#F2BAE1" },
            { id: 8, text: "Process all resumes for Content Marketer position", timeOnTask: [1, 0], statusTask: "In progress", color: "#FFDFBA" },
            { id: 9, text: "Check email", timeOnTask: [0, 20], statusTask: "Completed", color: "#FFDFBA" },
            { id: 10, text: "Weekly planning session", timeOnTask: [0, 45], statusTask: "Completed", color: "#ABE9CE" },
            { id: 11, text: "Create 5+ target audiences in Facebook for Samsung ...", timeOnTask: [0, 30], statusTask: "Completed", color: "#FFDFBA" },
            { id: 12, text: "Check FB Banner Design and give feedback", timeOnTask: [2, 30], statusTask: "Completed", color: "#ABE9CE" },
            { id: 13, text: "Check email", timeOnTask: [0, 20], statusTask: "Completed", color: "#F2BAE1" },

        ]
    )
    const [nameSatusText, setnameStatusText] = useState<string[]>(["New task", "Scheduled", "In progress", "Completed"]);
    return (
        <div>
            <div>
                <Header />
            </div>
            <Line initialState={initialState} nameSatusText={nameSatusText}/>
            <Columns dispatchState={dispatchState} initialState={initialState} nameSatusText={nameSatusText}/>
        </div>
    )
};

function Header() {
    const [state, dispatch] = useState<Array<string>>(["Board wiew", "Table wiew", "Kanban"]);
    const [stateFilter, dispatchFilter] = useState<Array<string>>(["Filter item", "Filter item2", "Filter item3", "filter item4"]);

    return (
        <S.Header>
            <S.Options>
                <S.Groupoptions>
                    <S.Newoptions>
                        + Add new
                    </S.Newoptions>
                    <Select listOption={state}>
                        {state[0]}
                    </Select>
                    <Select listOption={stateFilter}>
                        {stateFilter[0]}
                    </Select>
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
        </S.Header>
    )
}


function Line({initialState,nameSatusText}:ILineProps) {
    return (
        <S.Line>
            <S.Grouptitle>
                {nameSatusText.map(el=>{
                    return(
                        <S.Titleline>
                        {el}
                        <S.Quantitytask>
                            {
                               initialState.filter(i=>i.statusTask===el).length 
                            }
                        </S.Quantitytask>
                    </S.Titleline>  
                    )
                })}
            </S.Grouptitle>
            <S.Create>
                + Create status
            </S.Create>

        </S.Line>
    )
}

function Columns({dispatchState,initialState,nameSatusText}:IColumnsProps) {
    return (
        <S.Columns >
            {
                nameSatusText.map(el => {
                    return (
                        <Column type={el} upDate={dispatchState} state={initialState}></Column>
                    )
                })
            }
        </S.Columns>
    )
}


function Column({ type, upDate, state }: IColumn) {
    const [, dropRef] = useDrop({
        accept: ['note'],
        drop: (item: IItem) => {
            let newState = state.map((i) => {
                if (i.id === item.id) {
                    return { ...i, statusTask: type }
                }
                return i
            });
            upDate(newState)
        },
    })

    const uddataState = useCallback((indexMove: number, indexHover: number) => {
        let objHover = state.find(i => i.id === indexHover);
        let objMove = state.find(i => i.id === indexMove);
        let restState = state.filter(i => i.id !== indexHover && i.id !== indexMove);
        upDate([...restState, { ...objHover, id: indexMove }, { ...objMove, id: indexHover }]);
    }, [state])

    return (
        <>
            <S.Column ref={dropRef} >
                {state.filter((item, index) => item.statusTask === type).
                    sort((prev, next) => prev.id - next.id).
                    map((el, index) => {
                        return (
                            <ContNode el={el} cb={uddataState}></ContNode>
                        )
                    })}
            </S.Column>
        </>
    )
}



function ContNode({ children, el, cb }: IContNodeProps) {
    let contanerNoteRef: React.RefObject<HTMLInputElement> = React.createRef();
    return (
        <>
            <S.ConternerNode ref={contanerNoteRef}>
                <Note
                    contanerNoteRef={contanerNoteRef}
                    color={el.color}
                    text={el.text}
                    id={el.id}
                    timeOnTask={el.timeOnTask}
                    statusTask={el.statusTask}
                    cb={cb}
                />
            </S.ConternerNode>
        </>
    )
}



function Note({ id, text, timeOnTask, statusTask, color, cb, contanerNoteRef }: INode) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'note',
        item: { id },
        collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    });

    const [{ isover }, dropRef] = useDrop({
        accept: ['note'],
        hover: (item: IItem, monitor) => {
            let dragIndex = item.id
            let hoverIndex = id
            let hoverNoteRect = contanerNoteRef.current?.getBoundingClientRect();

            if (hoverNoteRect) {
                let hoverMiddleY = (hoverNoteRect.bottom - hoverNoteRect.top) / 2
                let hoverActualY: number = monitor.getClientOffset()!.y - hoverNoteRect.top
                if (dragIndex === hoverIndex) return;
                if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
                if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return
                cb(dragIndex, hoverIndex)
                item.id = hoverIndex
            }
            return;
        },
        collect: (monitor) => ({
            isover: monitor.isOver()
        }),
    })

   return (
        < div ref={dropRef} >
            <S.Note
                style={statusTask === "Completed" ? { background: `#F0F0F0` } : { background: `${color}` }}
                key={id}
                ref={dragRef}
                draging={isover}>
                <S.Description strikethrough={statusTask === "Completed" ? true : false}>
                    {text}
                </S.Description>
                <S.Timetask>
                    {timeOnTask?.join(":")}h
                </S.Timetask>
            </S.Note>
        </div>
    )
}

export default React.memo(Bord);