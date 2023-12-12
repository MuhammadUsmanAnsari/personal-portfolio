import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StateContext = createContext()
const pages = ["/", "/about", "/skills", "/services", "/portfolio", "/contact"]

export default function StateContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)
    const [isDsabledNext, setIsDsabledNext] = useState(false)
    const [isDsabledPrevious, setIsDsabledPrevious] = useState(false)
    const buttonSoundRef = useRef()
    const buttonSoundRef1 = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        setDarkMode(JSON.parse(localStorage.getItem("mode")))
        if (window.location.pathname === "/") {
            setIsDsabledPrevious(true)
        }
    }, [])

    // useEffect to change light and dark mode
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-bs-theme', darkMode ? 'dark' : 'light'
        );
    }, [darkMode])

    // handle button sound
    const handleButtonSound = () => {
        // buttonSoundRef.current.pause()
        buttonSoundRef.current.play()
    }
    const handleButtonSound1 = () => {
        // buttonSoundRef1.current.pause()
        buttonSoundRef1.current.play()
    }




    // next page
    const handleNextPage = (type) => {
        const currentIndex = pages.indexOf(window.location.pathname)
        switch (type) {
            case "next":
                if (currentIndex !== -1 && currentIndex < pages.length - 1) {
                    navigate(pages[currentIndex + 1])
                    setIsDsabledNext(false)
                    setIsDsabledPrevious(false)
                } else {
                    setIsDsabledNext(true)
                }
                break;
            case "previous":
                if (currentIndex !== 0 && currentIndex < pages.length) {
                    navigate(pages[currentIndex - 1])
                    setIsDsabledPrevious(false)
                    setIsDsabledNext(false)
                } else {
                    setIsDsabledPrevious(true)
                }
                break;

            default:
                if (currentIndex !== -1 && currentIndex < pages.length - 1) {
                    navigate(pages[currentIndex + 1])
                }
                break;
        }

    }




    return (
        <StateContext.Provider value={{ darkMode, setDarkMode, handleNextPage, isDsabledNext, isDsabledPrevious, buttonSoundRef, buttonSoundRef1, handleButtonSound, handleButtonSound1 }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => {
    return useContext(StateContext)
}