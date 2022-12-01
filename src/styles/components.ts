import styled from "styled-components";
interface IImg{
    mleft?:string;
    mright?:string;
}
export const Img = styled.img<IImg>`
    margin-right:${props=>props.mright?props.mright:0};
    margin-left: ${props=>props.mleft?props.mleft:0};
`;