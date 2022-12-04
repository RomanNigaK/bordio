import styled from "styled-components";
import dropup from './svg/dropup.svg';
import dropdown from './svg/dropdown.svg';
interface IImg{
    mleft?:string;
    mright?:string;
}


export const Img = styled.img<IImg>`
    margin-right:${props=>props.mright?props.mright:0};
    margin-left: ${props=>props.mleft?props.mleft:0};
`;

interface IDroparrowProps {
    arrow:string;
}
export const Droparrow = styled.img.attrs<IDroparrowProps>((props)=>({
    src:(props.arrow==="up"?dropup:dropdown),
}))<IDroparrowProps>`
    margin-left: 15px;
    color:#8C939F;
`

