import { useStateContext } from 'context/StateContext'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Helmet } from 'react-helmet';

export default function About() {
    const { darkMode } = useStateContext()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usman Arif | About Me</title>
                <meta name="description" content="Muhammad Usman Arif | Professional Web Developer, usmanarif" />
                <meta content="usmanarif, Muhammad Usman Arif, usman, usmanansari, Muhammad usman, muhammadusman, usman2913, aboutme"
                    name="keywords"></meta>
            </Helmet>
            <div className="container" id='about-section' data-aos="fade-right">
                <div className="row py-4 ">
                    <div className="col text-style position-relative d-flex justify-content-center">
                        <h1 className={`${darkMode ? "text-body" : "text-body-tertiary"} fw-bold `}>ABOUT ME</h1>
                        <h4 className='position-absolute align-self-center '>Know Me More</h4>
                    </div>
                </div>

                {/* personal information */}
                <div className="row px-2 px-sm-4 px-lg-5 mt-4">
                    <div className="col-12 col-xl-5 d-flex align-items-center">
                        <p>Hello, I'm Usman, a passionate web and mobile app developer with over 2 years of hands-on experience in crafting digital solutions. I thrive on turning ideas into reality through clean, efficient code and user-centric design. My journey in the world of technology has been a dynamic adventure, marked by a commitment to staying at the forefront of industry trends.</p>
                    </div>
                    <div className="col mt-4 mt-xl-0 ps-auto ps-md-3 ps-xl-4">
                        <div className="row g-3 row-cols-1 row-cols-sm-2">
                            <div className="col">
                                <strong>First Name: </strong> Muhammad
                            </div>
                            <div className="col">
                                <strong>Last Name: </strong> Usman
                            </div>
                            <div className="col">
                                <strong>Birth Date: </strong> 13 Sep 2002
                            </div>
                            <div className="col">
                                <strong>Nationality: </strong> Pakistan
                            </div>
                            <div className="col">
                                <strong>Languages: </strong> English, Urdu
                            </div>
                            <div className="col">
                                <strong>Experience: </strong> 2+ years
                            </div>
                            <div className="col">
                                <strong>Address: </strong> Ghulamabad Faisalabad PK
                            </div>
                            <div className="col">
                                <strong>Freelance: </strong> Available
                            </div>
                            <div className="col">
                                <strong>Phone: </strong> <a className='text-body' href="tel:+923007588836">+92 300 7588836</a>
                            </div>
                            <div className="col">
                                <strong>Email: </strong> <a className='text-body' href="mailto:usmanarif2913@gmail.com">usmanarif2913 @gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* education */}
                <div className="row">
                    <div className="col px-0 px-md-2 px-lg-4 ">
                        <h2 className="fw-bold mt-5 mb-5 px-3 px-sm-4 ">Education</h2>
                        <div className="timeline mb-5 ">
                            <div className="container left" >
                                <div className="content shadow text-body">
                                    <p className='bg-body-secondary shadow-sm mb-4 rounded-pill px-2 d-flex gap-2 align-items-center'>
                                        <CalendarMonthOutlinedIcon fontSize='small' /> 2016 - 2017
                                    </p>
                                    <h5>Matric Degree - <span style={{ fontSize: "medium" }} className='text-info'>922/1100</span></h5>
                                    <h6 className='text-warning'>Govt. New Colony High School Faisalabad</h6>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="content shadow text-body">
                                    <p className='bg-body-secondary shadow-sm mb-4 rounded-pill px-2 d-flex gap-2 align-items-center'>
                                        <CalendarMonthOutlinedIcon fontSize='small' /> 2016 - 2017
                                    </p>
                                    <h5>Intermediate Degree - <span style={{ fontSize: "medium" }} className='text-info'>905/1100</span></h5>
                                    <h6 className='text-warning'>Chishti Group of College Faisalabad</h6>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="content shadow text-body">
                                    <p className='bg-body-secondary shadow-sm mb-4 rounded-pill px-2 d-flex gap-2 align-items-center'>
                                        <CalendarMonthOutlinedIcon fontSize='small' /> 2016 - 2017
                                    </p>
                                    <h5>BS (Computer Science) - <span style={{ fontSize: "medium" }} className='text-info'>continue</span></h5>
                                    <h6 className='text-warning'>University of Agriculture Faisalabad</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}
