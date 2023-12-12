import SocialMedia from 'components/sidebar/SocialMedia'
import { useStateContext } from 'context/StateContext'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { firestore } from 'config/Firebase';
import { Helmet } from 'react-helmet';


const initialState = {
    full_name: "",
    email: "",
    subject: "",
    message: "",
}

export default function Contact() {
    const { darkMode, handleButtonSound } = useStateContext()
    const [state, setState] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    // handle change
    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    // handle submit
    const handleSubmit = e => {
        e.preventDefault();

        var { full_name, email, subject, message } = state;
        full_name = full_name.trim()
        email = email.trim()
        subject = subject.trim()
        message = message.trim()
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (full_name.length < 5) {
            return toast.error('Minimum 5 characters required for full name', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (!email.match(mailformat)) {
            return toast.error('Invalid Email', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

        if (subject.length < 5) {
            return toast.error('Minimum 5 characters required for subject', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (message.length < 10) {
            return toast.error('Minimum 10 characters required for message', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


        let templateParams = {
            full_name: state.full_name,
            email: state.email,
            subject: state.subject,
            message: state.message,
        }

        let data = {
            dateCreated: serverTimestamp(),
            full_name: state.full_name,
            email: state.email,
            subject: state.subject,
            message: state.message,
        }
        setIsLoading(true)

        emailjs.send('service_yzgdd1o', 'template_667ee4f', templateParams, "Q2iJU5acHtKdCJIXF")
            .then(function (response) {
                setData(data)
            }, function (error) {
                return toast.success(error.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });


    }

    const setData = async (data) => {
        await setDoc(doc(firestore, "contact-us", data.email), data, { merge: true });
        setIsLoading(false)
        setState(initialState)
        toast.success('Submitted successfully', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }




    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usman Arif | Contact</title>
                <meta name="description" content="Muhammad Usman Arif | Professional Web Developer, usmanarif" />
                <meta content="usmanarif, Muhammad Usman Arif, usman, usmanansari, Muhammad usman, muhammadusman, usman2913, contact me, contact"
                    name="keywords"></meta>
            </Helmet>
            <div className='container' id='contact-section' data-aos="fade-right">
                <div className="row py-4 ">
                    <div className="col text-style position-relative d-flex justify-content-center">
                        <h1 className={`${darkMode ? "text-body" : "text-body-tertiary"} fw-bold `}>CONTACT</h1>
                        <h4 className='position-absolute align-self-center '>Let's Connect</h4>
                    </div>
                </div>

                {/* contact details */}
                <div className="row row-cols-1 row-cols-lg-2 mb-5 px-2 px-md-5 py-3">
                    <div className="col mt-4">
                        <h2 className='fw-bold'>Get in touch</h2>
                        <p className='my-4'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime.</p>
                        <div>
                            <a className='text-info' href="tel:+923007588836">+92 300 7588836</a>
                        </div>
                        <div className="my-2">
                            <a className='text-info' href="mailto:usmanarif2913@gmail.com">usmanarif2913@gmail.com</a>
                        </div>
                        <div className='pb-3'>
                            <a className='text-info' href="https://maps.app.goo.gl/vfzSc7MuKsdwJodm8" target='_blank'>2107-D Ghulamabad Faisalabad, Pakistan</a>
                        </div><hr className='w-75' />
                        <div className='mt-4 w-50'>
                            <SocialMedia justifyContent={"between"} />
                        </div>
                    </div>
                    <div className="col mt-5 mt-lg-2">
                        <div className="card border-0 shadow-lg p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className={`form-control border-0 text-info shadow-none bg-body-secondary`} id="full_name" onChange={handleChange} value={state.full_name} name='full_name' placeholder="Full name" required minLength={5} />
                                    <label className='text-secondary' htmlFor="full_name">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className={`form-control border-0 text-info shadow-none bg-body-secondary`} id="floatingInput" onChange={handleChange} value={state.email} name='email' placeholder="name@example.com" required />
                                    <label className='text-secondary' htmlFor="floatingInput">Email Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className={`form-control border-0 text-info shadow-none bg-body-secondary`} id="subject" onChange={handleChange} value={state.subject} name='subject' placeholder="subject" required minLength={5} />
                                    <label className='text-secondary' htmlFor="subject">Subject</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className={`form-control border-0 text-info shadow-none bg-body-secondary`} placeholder="message" onChange={handleChange} value={state.message} name='message' id="floatingTextarea2" style={{ height: 150 }} required minLength={10}></textarea>
                                    <label className='text-secondary' htmlFor="floatingTextarea2">Type Your Message</label>
                                </div>
                                <div className='mt-3'>
                                    <button type='submit' className='btn btn-info button-stylling px-5 py-2' onClick={handleButtonSound} disabled={isLoading}>
                                        {isLoading ? <div className='spinner-border spinner-border-sm'></div>
                                            : "Send Message"
                                        }
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                {/* map */}
                <div className="row px-2 px-md-5 mb-5">
                    <div className="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d880.092572020139!2d73.05093068178941!3d31.446436959461117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700586954593!5m2!1sen!2s" className='w-100 rounded-3 shadow-lg' height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div >
        </>
    )
}
