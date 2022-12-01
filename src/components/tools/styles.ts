import styled,{css} from "styled-components";

const style = css`
    background-color: #FFFFFF;
    margin-right: 16px;
    border-radius: 0px 8px 8px 0px;
`

export const Tools = styled.div`
    width: 154px;
    background: #F5F8FA;`


export const Header = styled.div`
    margin-left: 16px;
    margin-top: 24px;
    margin-bottom: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #222222;`



export const Item = styled.div<{isActive:boolean}>`

    display: flex;
    height: 50px;
    align-items: center;
    cursor: pointer;
    ${props => props.isActive?style:null}
   
`


export const Imgitem = styled.div`
    margin-right: 15px;
    margin-left: 16px;
`

export const TitleItem = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: inherit;`


export const Itemactive = styled(Item)`
    background-color: #FFFFFF;
    margin-right: 16px;
    border-radius: 0px 8px 8px 0px;
`


export const Marker = styled.div`
    background: #0094FF;
    border-radius: 0px 10px 10px 0px;
    height: inherit;
    width: 4px;
    position: absolute;`
