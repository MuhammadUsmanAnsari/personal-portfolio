import Aos from 'aos'
import './_frontend.scss'
import Sidebar from 'components/sidebar'
import { useStateContext } from 'context/StateContext'
import { useEffect, useRef } from 'react'
import MainContent from 'pages/frontend/main-content/Routes'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import buttonSound from 'assets/sounds/mouse-click.mp3'
import buttonSound1 from 'assets/sounds/mouse-click2.mp3'

export default function Index() {
  const { darkMode, handleNextPage, isDsabledNext, isDsabledPrevious, buttonSoundRef, buttonSoundRef1 } = useStateContext()
  const divRef = useRef()

  useEffect(() => {
    Aos.init()
  }, [])

  useEffect(() => {
    divRef.current.scrollTo(0, 0);
  }, [window.location.pathname])


  return (
    <>
      {/* audio sounds */}
      <audio src={buttonSound} ref={buttonSoundRef}></audio>
      <audio src={buttonSound1} ref={buttonSoundRef1}></audio>


      {/* body content */}
      <div className={`container-fluid main-screen p-0 p-md-2 p-lg-3  ${darkMode ? "bg-body-tertiary" : "bg-body-secondary"} `}>
        {/* mobile screen navbar */}
        <div className="d-block d-md-none">
          <Sidebar />
        </div>
        <div className="row mx-0">
          <div className="col-12 col-md-3 col-xl-2 rounded-4 p-0 shadow sidebar bg-info d-none d-md-block" data-aos="fade-down">
            <Sidebar />
          </div>
          <div ref={divRef} className={`col rounded-4 ms-0 ms-md-2 ms-lg-3 shadow  px-0 ${darkMode ? "bg-black" : "bg-body-tertiary"} main-content`}>
            <MainContent />
          </div>
        </div>
        <div className="bottom-buttons d-block d-md-none">
          <button className='btn btn-light bg-body text-body shadow p-1 btn-sm me-2' disabled={isDsabledPrevious} onClick={() => handleNextPage("previous")}><KeyboardArrowLeftOutlinedIcon /></button>
          <button className='btn btn-light bg-body text-body shadow p-1 btn-sm' disabled={isDsabledNext} onClick={() => handleNextPage("next")}><KeyboardArrowRightOutlinedIcon /></button>
        </div>
      </div>
    </>
  )
}
