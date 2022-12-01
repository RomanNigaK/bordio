import React,{FC} from "react";
import styled from "styled-components";
import { Img } from "../../../styles/components";
const SAvatar = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 22px;   
`
const Avatar:FC=()=>{
    return(
        <SAvatar>
            <Img src="img/app/avatar/foto.png" alt="" />
        </SAvatar>
    )
};

export default Avatar;