import React from "react";



function SocialItem(prop) {

    return(

        <li className="list-group-item">
            <img src={prop.p.img} alt={' "icon of" ${prop.media}'}/>
            <input type="checkbox" id={prop.p.media}/>
            <label htmlFor={prop.p.media}>{prop.p.media}</label>
            </li>
            
    )

}

export default SocialItem 