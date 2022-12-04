import React, { PropsWithChildren, useState } from "react";
import { Droparrow, Img } from "../../../styles/components";
import * as S from './styles';

interface ISelectProps extends PropsWithChildren {
    listOption: string[];

}


export default function Select({ listOption, children }: ISelectProps) {
    const [chekOption, setChekOption] = useState(children);
    const [isDeploy, setIsDeploy] = useState<boolean>(false);

    return (
        <div onClick={() => setIsDeploy(isDeploy ? false : true)}>
            <S.Select >
                {chekOption}
                <Droparrow arrow={isDeploy ? "up" : "dowm"} />
            </S.Select>
            {isDeploy ?
                <S.Options>
                    {
                        listOption.map(el => {
                            return (
                                <Option
                                    cheked={chekOption === el ? true : false}
                                    choiseOption={() => setChekOption(el)}
                                    key={el}>
                                    {el}
                                </Option>
                            )
                        })
                    }
                </S.Options> : null}

        </div>
    )
}

interface IOptionProps extends PropsWithChildren {
    cheked?: boolean;
    choiseOption: Function;
}
export function Option({ cheked, choiseOption, children }: IOptionProps) {
    return (
        <>
            <S.Option cheked={cheked} onClick={() => choiseOption(children)}>
                {children}
            </S.Option>
        </>
    )
}