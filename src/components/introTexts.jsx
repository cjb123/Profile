import React from "react";
import '../styles/introTexts.scss'

const IntroTexts = ({ coverOpen }) => {
    return (
        <div className="">
            { coverOpen && 
            <div className="intro-texts">
            <div className={`introducing ${coverOpen ? 'intro-animation': ''}`}>Introducing..</div>
            <div className='intro-user-name'>
                Chinmoy Jyoti Borah
            </div>
            </div>
            }
        </div>
    )
}


export default IntroTexts