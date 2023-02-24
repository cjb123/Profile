import React from "react";
import '../styles/introTexts.scss'

const IntroTexts = ({ coverOpen }) => {
    return (
        <div className="intro-texts">
            <div className={`introducing ${coverOpen ? 'intro-animation intro-animation-2': ''}`}>Introducing..</div>
            <div className={'name'}>
                <div className="kantora">KANTORA</div>
                <img src='kantara.jpeg' width='200px' height='200px'/>
            </div>
        </div>
    )
}


export default IntroTexts