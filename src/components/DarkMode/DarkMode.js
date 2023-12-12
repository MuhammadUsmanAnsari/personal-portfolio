import React, { useRef, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { useStateContext } from "context/StateContext";
import switchSound from 'assets/sounds/switch.mp3'
import "./DarkMode.css";

const DarkMode = () => {
    const { darkMode, setDarkMode } = useStateContext()
    const [localStorageMode, setLocalStorageMode] = useState(JSON.parse(localStorage.getItem("mode")))
    const switchSoundRef = useRef()


    const handleChaneMode = (val) => {
        switchSoundRef.current.play()
        setDarkMode(!darkMode)
        localStorage.setItem("mode", val.target.checked)
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleChaneMode}
                checked={darkMode}
                defaultChecked={localStorageMode ? true : false}
            />
            <label className='dark_mode_label shadow' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
            <audio src={switchSound} ref={switchSoundRef}></audio>

        </div>
    );
};

export default DarkMode;
