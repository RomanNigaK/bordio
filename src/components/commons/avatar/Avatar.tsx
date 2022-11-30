import React,{FC} from "react";
import css from './avatar.module.css';
const Avatar:FC=()=>{
    return(
        <div className={css.avatar}>
            <img src="img/app/avatar/foto.png" alt="" />
        </div>
    )
};

export default Avatar;