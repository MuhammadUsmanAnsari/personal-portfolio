import { Route, Routes } from 'react-router-dom'
import About from './About'
import Hero from './Hero'
import Skills from './Skills'
import Services from './Services'
import Contact from './Contact'
import Portfolio from './Portfolio'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='about' element={<About />} />
                <Route path='skills' element={<Skills />} />
                <Route path='services' element={<Services />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </>
    )
}
