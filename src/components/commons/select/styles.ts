import styled from "styled-components";

export const Select = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:119px;
height: 40px;
background: #F5F8FA;
border-radius: 40px;
margin-left: 16px;
`

export const Options = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    position: absolute;
    margin-top: 10px;
    margin-left: 16px;
    padding: 6px;
`

interface IOptionProps{
    cheked?:boolean,
    bg?:"#F5F8FA"|"#FFFFFF",
}

export const Option = styled.div.attrs<IOptionProps>((props)=>({
    bg:(props.cheked?"#F5F8FA":"#FFFFFF"),

}))<IOptionProps>`
    width: 120px;
    height: 40px;
    background: ${({bg})=>bg};
    border-radius: 4px;
    display: flex;
    align-items: center;
    :hover{
        background:#F5F8FA;
        cursor: pointer;
    }

`