import { useStateContext } from "context/StateContext"
import uiux from 'assets/gifs/u.gif'
import frontend from 'assets/gifs/web-developement.gif'
import responsive from 'assets/gifs/responsive.gif'
import mobile from 'assets/gifs/mobile.gif'
import webDev from 'assets/gifs/frontend.gif'
import consult from 'assets/gifs/consult.gif'
import { Helmet } from "react-helmet"


export default function Services() {
    const { darkMode } = useStateContext()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usman Arif | Services</title>
                <meta name="description" content="Muhammad Usman Arif | Professional Web Developer, usmanarif" />
                <meta content="usmanarif, Muhammad Usman Arif, usman, usmanansari, Muhammad usman, muhammadusman, usman2913, services, myservices, my services"
                    name="keywords"></meta>
            </Helmet>
            <div className='container' id="services-section" data-aos="fade-right">
                <div className="row py-4 ">
                    <div className="col text-style position-relative d-flex justify-content-center">
                        <h1 className={`${darkMode ? "text-body" : "text-body-tertiary"} fw-bold `}>SERVICES</h1>
                        <h4 className='position-absolute align-self-center '>What I Do?</h4>
                    </div>
                </div>

                {/* services */}
                <div className="row gx-4 gx-md-3 gx-xl-4 gy-5 row-cols-1 row-cols-sm-2 row-cols-xl-3 px-0 px-md-3 px-lg-5 mt-1 mb-5">
                    <div className="col">
                        <div className="card py-4 px-3 shadow">
                            <div className={`rounded-circle  p-1 bg-body`} style={{ boxShadow: `${darkMode ? "0 10px 20px rgba(255,255,255,0.09)" : "0 10px 20px rgba(0,0,0,0.1)"}` }}>
                                <img src={uiux} className="w-100" alt="" />
                            </div>
                            <h5 className="text-info mb-3 mt-4">UI/UX Design</h5>
                            <p>A user-friendly interface is key to a successful digital product. I focus on creating intuitive and visually appealing designs that enhance user engagement and leave a lasting impression.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-4 px-3 shadow">
                            <div className={`rounded-circle  p-2 bg-body`} style={{ boxShadow: `${darkMode ? "0 10px 20px rgba(255,255,255,0.09)" : "0 10px 20px rgba(0,0,0,0.1)"}` }}>
                                <img src={webDev} className="w-100" alt="" />
                            </div>
                            <h5 className="text-info mb-3 mt-4">Web Developement</h5>
                            <p>I bring your ideas to life by creating responsive and user-friendly websites. From static sites to dynamic web applications, I leverage the latest technologies to deliver seamless online experiences.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-4 px-3 shadow">
                            <div className={`rounded-circle  p-1 bg-body`} style={{ boxShadow: `${darkMode ? "0 10px 20px rgba(255,255,255,0.09)" : "0 10px 20px rgba(0,0,0,0.1)"}` }}>
                                <img src={responsive} className="w-100" alt="" />
                            </div>
                            <h5 className="text-info mb-3 mt-4">Responsive Design</h5>
                            <p>In a multi-gadget world, responsiveness is significant. I design and develop websites and applications that adjust flawlessly to different screen sizes, giving a steady and charming client experience.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-4 px-3 shadow">
                            <div className={`rounded-circle  p-2 bg-body`} style={{ boxShadow: `${darkMode ? "0 10px 20px rgba(255,255,255,0.09)" : "0 10px 20px rgba(0,0,0,0.1)"}` }}>
                                <img src={mobile} className="w-100" alt="" />
                            </div>
                            <h5 className="text-info mb-3 mt-4">Mobile App Developement</h5>
                            <p>Turn your mobile app vision into reality. I design and develop native and cross-platform mobile applications that not only look great but also provide exceptional performance and user satisfaction.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-4 px-3 shadow">
                            <div className={`rounded-circle  p-1 bg-body`} style={{ boxShadow: `${darkMode ? "0 10px 20px rgba(255,255,255,0.09)" : "0 10px 20px rgba(0,0,0,0.1)"}` }}>
                                <img src={frontend} className="w-100" alt="" />
                            </div>
                            <h5 className="text-info mb-3 mt-4">Front-End Developement</h5>
                            <p>I spend significant time in making interactive and dynamic front-end encounters. Utilizing modern frameworks and libraries, I guarantee your site or application is both practical and tastefully satisfying.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-4 px-3 shadow">
                            <div className={`rounded-circle  p-0 bg-body`} style={{ boxShadow: `${darkMode ? "0 10px 20px rgba(255,255,255,0.09)" : "0 10px 20px rgba(0,0,0,0.1)"}` }}>
                                <img src={consult} className="w-100" alt="" />
                            </div>
                            <h5 className="text-info mb-3 mt-4">Consulting and Collaboration</h5>
                            <p>Whether you're searching for specialized guidance or looking for a cooperative accomplice for your project, I'm here to help. We should talk about your thoughts, and together, we'll bring them to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
