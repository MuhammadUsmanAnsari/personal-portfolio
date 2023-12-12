import { Route, Routes } from "react-router-dom";
import Frontend from 'pages/frontend'

export default function index() {    
    return (
        <>
            <Routes>
                <Route path="/*" element={<Frontend />} />
            </Routes>
        </>
    )
}
