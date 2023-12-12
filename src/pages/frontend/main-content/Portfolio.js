import { useStateContext } from 'context/StateContext'
import { Image } from 'antd'

import one from 'assets/portfolio/furniture.jpg'
import two from 'assets/portfolio/final.png'
import three from 'assets/portfolio/online-course.jpg'
import four from 'assets/portfolio/blogs.png'
import five from 'assets/portfolio/text-to-speech.png'
import { Helmet } from 'react-helmet'


export default function Portfolio() {
    const { darkMode } = useStateContext()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usman Arif | Portfolio</title>
                <meta name="description" content="Muhammad Usman Arif | Professional Web Developer, usmanarif" />
                <meta content="usmanarif, Muhammad Usman Arif, usman, usmanansari, Muhammad usman, muhammadusman, usman2913, portfolio, my abilities"
                    name="keywords"></meta>
            </Helmet>
            <div className='container' id='portfolio-section' data-aos="fade-left">
                <div className="row py-4 first">
                    <div className="col text-style position-relative d-flex justify-content-center">
                        <h1 className={`${darkMode ? "text-body" : "text-body-tertiary"} fw-bold `}>PORTFOLIO</h1>
                        <h4 className='position-absolute align-self-center '>My work</h4>
                    </div>
                </div>
                {/* portfolio section */}
                <div className="row g-4 g-md-3 g-xl-4 px-2 px-md-5 row-cols-1 row-cols-md-2 row-cols-lg-3 mt-1 mb-5">
                    <Image.PreviewGroup>
                        <div className="col">
                            <div className="row g-3 row-cols-1 h-100">
                                <div className="col" style={{ height: "65%" }}>
                                    <div className="card shadow border-info  rounded-3">
                                        <Image width={"100%"} src={one} />
                                        <div className="overlay-layer px-3 ">
                                            <h2>Furniture Website</h2>
                                            <p>Web Design & Development</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ height: "33%" }}>
                                    <div className="card shadow border-info  rounded-3">
                                        <Image width={"100%"} src={three} />
                                        <div className="overlay-layer px-3 ">
                                            <h2>Online Courses</h2>
                                            <p>Web Design & Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow border-info  rounded-3">
                                <Image height={"100%"} src={two} />
                                <div className="overlay-layer px-3 ">
                                    <h2>Trend Trove</h2>
                                    <p>Web Design & Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="row g-3 row-cols-1   h-100">
                                <div className="col" style={{ height: "35%" }}>
                                    <div className="card shadow border-info  rounded-3">
                                        <Image width={"100%"} height={'100%'} src={five} />
                                        <div className="overlay-layer px-3 ">
                                            <h2>Speech to Text</h2>
                                            <p>Web Design & Development</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ height: "63%" }}>
                                    <div className="card shadow border-info  rounded-3">
                                        <Image width={"100%"} src={four} />
                                        <div className="overlay-layer px-3 ">
                                            <h2>Blog Website</h2>
                                            <p>Web Design & Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Image.PreviewGroup>
                </div>
            </div>
        </>
    )
}
