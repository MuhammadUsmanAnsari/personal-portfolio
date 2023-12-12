import { useStateContext } from "context/StateContext"
import { Helmet } from "react-helmet"

export default function Skills() {
    const { darkMode } = useStateContext()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usman Arif | Skills</title>
                <meta name="description" content="Muhammad Usman Arif | Professional Web Developer, usmanarif" />
                <meta content="usmanarif, Muhammad Usman Arif, usman, usmanansari, Muhammad usman, muhammadusman, usman2913, myskills, my skills"
                    name="keywords"></meta>
            </Helmet>
            <div className="container" id="skills-section" data-aos="fade-left">
                <div className="row py-4 first">
                    <div className="col text-style position-relative d-flex justify-content-center">
                        <h1 className={`${darkMode ? "text-body" : "text-body-tertiary"} fw-bold `}>SKILLS</h1>
                        <h4 className='position-absolute align-self-center '>Expertise</h4>
                    </div>
                </div>

                {/* skills */}
                <div className="my-skills py-5">
                    <div className="row g-4 px-0  px-md-3 px-lg-5 row-cols-1 row-cols-sm-2 ">
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">HTML 5</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "93%" }}>93%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">CSS 3</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "90%" }}>90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">Bootstrap</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "95%" }}>95%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">JavaScript</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "80%" }}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">React JS</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "75%" }}>75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">Firebase</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "90%" }}>90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">Mongo DB</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "55%" }}>55%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-info shadow pt-3 overflow-hidden">
                                <h6 className="ps-3">Express JS</h6>
                                <div className="progress bg-transparent rounded-0" role="progressbar" aria-label="Info example"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info"
                                        style={{ width: "50%" }}>50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
