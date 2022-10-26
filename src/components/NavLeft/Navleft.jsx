import React from 'react'
import './navleft.style.css'
import {
    BsFillPersonFill,
    BsHouseDoorFill,
    BsFillChatFill,
    BsFillImageFill,
    BsFillLightningFill,
    BsBarChartFill,
    BsDice3
} from "react-icons/bs";

function Navleft() {
    return (
        <div className="nav-left">
            <div className="container-icons" >
                <BsHouseDoorFill className="icons-nav active" />
            </div>
            <div className="container-icons">
                <BsFillChatFill className="icons-nav" />
            </div>
            <div className="container-icons">
                <BsFillLightningFill className="icons-nav" />
            </div>
            <div className="container-icons">
                <BsFillPersonFill className="icons-nav" />
            </div>
            <div className="container-icons">
                <BsFillImageFill className="icons-nav" />
            </div>
            <div className="container-icons">
                <BsBarChartFill className="icons-nav" />
            </div>
            <div className="container-icons">
                <BsDice3 className="icons-nav" />
            </div>
        </div>
    )
}

export default Navleft