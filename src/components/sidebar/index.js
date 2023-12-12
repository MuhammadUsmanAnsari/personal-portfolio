import './_sidebar.scss'
import { Link, NavLink } from 'react-router-dom';

import SocialMedia from './SocialMedia'
import profilePic from 'assets/profile.jpg'

// icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import { useStateContext } from 'context/StateContext';
import DarkMode from 'components/DarkMode/DarkMode';

export default function Index() {
    const { darkMode, setDarkMode } = useStateContext()

    return (
        <>
            <nav className={`navbar navbar-expand-md ${darkMode ? "bg-black" : "bg-body-tertiary"} py-0 shadow`}>
                <div className="container-fluid flex-row flex-md-column text-center h-100">
                    <div className="navbar-brand mt-0 mt-sm-1  " >
                        <div className="navbar-img">
                            <Link to='/'>
                                <img src={profilePic} alt="profile_pic" />
                            </Link>
                        </div>
                        {/* dark and light mode */}
                        <div className='dark-light-mode'>
                            <DarkMode />
                            {/* <Switch checkedChildren="light" unCheckedChildren="dark" size='medium' defaultChecked={localStorageMode ? true : false} onChange={handleChaneMode} /> */}
                            {/* <audio src={switchSound} ref={switchSoundRef}></audio> */}
                        </div>

                        <div className='d-none d-md-block'>
                            <h4 className="text-info mt-2 ">Usman Arif</h4>
                            <p className="text-dark-emphasis mt-2">MERN Stack Developer</p>
                            <SocialMedia justifyContent="around" />
                        </div><hr className='d-none d-md-block' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start d-flex justify-content-center align-self-stretch" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <div className="offcanvas-title" id="offcanvasScrollingLabel">
                                <img src={profilePic} alt="profile_pic" />
                            </div>
                            <h4 className="text-info ">Usman Arif</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-column me-auto text-start px-0 px-md-2 px-lg-4 px-xl-3  ">
                                <li className="nav-item rounded-3 py-1 " data-bs-dismiss="offcanvas" >
                                    <NavLink className="nav-link ps-2 ps-md-0 ps-lg-2 pe-3 text-info-emphasis  rounded-3 " to="/"><span className='icons rounded-3 p-1 ms-0 ms-md-2 ms-lg-0 me-2 me-md-1 me-lg-2'><HomeOutlinedIcon /></span> Home</NavLink>
                                </li>
                                <li className="nav-item rounded-3 py-1" data-bs-dismiss="offcanvas" >
                                    <NavLink className="nav-link ps-2 ps-md-0 ps-lg-2 pe-3 text-info-emphasis  rounded-3 " to="/about"><span className='icons rounded-3 p-1 ms-0 ms-md-2 ms-lg-0 me-2 me-md-1 me-lg-2'><PortraitOutlinedIcon /></span> About</NavLink>
                                </li>
                                <li className="nav-item rounded-3 py-1" data-bs-dismiss="offcanvas" >
                                    <NavLink className="nav-link ps-2 ps-md-0 ps-lg-2 pe-3 text-info-emphasis  rounded-3 " to="/skills"><span className='icons rounded-3 p-1 ms-0 ms-md-2 ms-lg-0 me-2 me-md-1 me-lg-2'><DevicesOutlinedIcon /></span> Skills</NavLink>
                                </li>
                                <li className="nav-item rounded-3 py-1" data-bs-dismiss="offcanvas" >
                                    <NavLink className="nav-link ps-2 ps-md-0 ps-lg-2 pe-3 text-info-emphasis  rounded-3 " to="/services"><span className='icons rounded-3 p-1 ms-0 ms-md-2 ms-lg-0 me-2 me-md-1 me-lg-2'><BusinessCenterOutlinedIcon /></span> Services</NavLink>
                                </li>
                                <li className="nav-item rounded-3 py-1" data-bs-dismiss="offcanvas" >
                                    <NavLink className="nav-link ps-2 ps-md-0 ps-lg-2 pe-3 text-info-emphasis  rounded-3 " to="/portfolio"><span className='icons rounded-3 p-1 ms-0 ms-md-2 ms-lg-0 me-2 me-md-1 me-lg-2'><WebOutlinedIcon /></span> Portfolio</NavLink>
                                </li>
                                <li className="nav-item rounded-3 py-1" data-bs-dismiss="offcanvas" >
                                    <NavLink className="nav-link ps-2 ps-md-0 ps-lg-2 pe-3 text-info-emphasis  rounded-3 " to="/contact"><span className='icons rounded-3 p-1 ms-0 ms-md-2 ms-lg-0 me-2 me-md-1 me-lg-2'><DraftsOutlinedIcon /></span> Contact</NavLink>
                                </li>
                            </ul><hr className='d-block d-md-none' />
                            {/* social media icons */}
                            <div className="d-block d-md-none mt-4 mt-md-0">
                                <SocialMedia justifyContent="evenly" />
                            </div>
                        </div>




                    </div>





                </div>
            </nav>
        </>
    )
}
