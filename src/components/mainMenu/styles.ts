import styled,{css} from "styled-components"
const fontStyles = css`
        font-family: 'Roboto';
        font-style: normal;
`

export const Logo = styled.div`
margin-left: 16px;
margin-top: 26px;
margin-bottom: 26px;
`
export const Search = styled.div`
    width: 187px;
    height: 32px;
    background: #2D4071;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 19px;  
`
export const Input = styled.input`
    background: inherit;
    padding-left: 10px;
    width: 143px;
    font-weight: 400;
    font-size: 14px;
    ${fontStyles}
`

export const Header = styled.div`
    background-color: #2D4071;
    padding-left: 16px;
    display: flex;
    align-items: center;
    
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    height: 34px; 
    ${fontStyles}
`
export const Title = styled.div`
    margin-left: 8px;
`
export const Dropdownlist = styled.div`
     margin-left: 16px;
    margin-top: 17px;
`
export const Mainmenu = styled.div`
    height: inherit;
    left: 0px;
    top: 0px;
    width: 230px;
    background: #0F1D40;
`