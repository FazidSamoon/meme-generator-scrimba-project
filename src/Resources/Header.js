import React from "react";
import Logo from "../../../meme-generator-project-scrimba/src/images/Meme-Face.png"
export default function Header(){
    return(
        <header className="header">
            <img src={Logo} className="header-logo"/>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - project3</h4>
        </header>
    )
}