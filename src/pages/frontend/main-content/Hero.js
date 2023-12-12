import 'pages/frontend/main-content/_mainContent.scss'

import myPic from 'assets/my_pic1.png'
import myCV from 'assets/cv/Usman-Arif.pdf'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import { useStateContext } from 'context/StateContext'
import { Helmet } from 'react-helmet'

export default function Hero() {
  const { handleButtonSound, handleButtonSound1 } = useStateContext()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Usman Arif</title>
        <meta name="description" content="Muhammad Usman Arif | Professional Web Developer, usmanarif" />
        <meta content="usmanarif, Muhammad Usman Arif, usman, usmanansari, Muhammad usman, muhammadusman, usman2913"
          name="keywords"></meta>
      </Helmet>
      <div className='px-2' id='hero-section' data-aos="fade-up">
        <div className="row ">
          <div className="col-12 col-lg-6 col-xl-7 d-flex align-items-center px-0 ">
            <div className="hero-inner px-4 px-sm-5 px-lg-4 px-xl-5 py-5">
              <h1>Hi, I'm <span>Usman Arif</span></h1>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Creative Designer', 'Mobile App Developer', 'Firebase Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 30,
                  deleteSpeed: 50,
                  wrapperClassName: "type-writer",
                  cursorClassName: "type-writer-cursor"
                }}
              />
              <p className='mt-4 mb-5'>
                I'm professional Web Developer & Web Designer based in Pakistan working on different projects. I can build awesome Designs with different programming languages.
              </p>
              <a className='btn btn-warning button-stylling me-3 py-2 px-3' onClick={handleButtonSound}
                href={myCV} download="Usman-Arif.pdf"
              >Download CV</a>
              <Link className='btn btn-outline-info shadow py-2 px-3 second-button-stylling' to="/about" onClick={handleButtonSound1}>About Me</Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 ">
            <div className="absolute-layer"></div>
            <img src={myPic} alt="my picture" />
          </div>
        </div>
      </div >
    </>
  )
}
