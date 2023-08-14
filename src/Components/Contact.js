import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
const Contact = () => {
    const [send, setsend] = useState(true)
    const [contactvalue, setcontactvalue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        msg: '',
    })
    const handleinp = (e) => {
        const { name, value } = e.target;
        setcontactvalue((allinp) => ({
            ...allinp,
            [name]: value

        }))
        console.log("name", name);
    }
    const formsubmit = (e) => {
        e.preventDefault();
        setsend(false)

        emailjs
            .sendForm('service_o7dtp1a', 'template_l0fxo5c', e.target, 'fVsE17VJyVluhQ8s5')
            .then((response) => {
                console.log('Email sent:', response);
                setsend(true)
                toast.success("You Message Has Been Send")
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error("Something Went Wrong")
            });
        setcontactvalue({
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            msg: '',
        })
        console.log(contactvalue);
    }


    return (
        <>
            <section className='' id='contact'>

                <div className="container">

                    <div className="contact">
                        <p className="heading mb-3">Contact</p>

                        <form className='needs-validation' id='contactform' onSubmit={formsubmit} novalidate>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="input-group flex-nowrap custom-form">
                                        <span class="input-group-text" id="">First Name</span>
                                        <input type="text" class="form-control" aria-label="FirstName" aria-describedby="addon-wrapping" name='firstname' value={contactvalue.firstname} onChange={handleinp} required />
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="input-group flex-nowrap custom-form">
                                        <span class="input-group-text" id="">Last Name</span>
                                        <input type="text" class="form-control" aria-label="LastName" aria-describedby="addon-wrapping" name='lastname' value={contactvalue.lastname} onChange={handleinp} required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="input-group flex-nowrap custom-form">
                                        <span class="input-group-text" id="">Email</span>
                                        <input type="email" class="form-control" aria-label="Email" aria-describedby="addon-wrapping" name='email' value={contactvalue.email} onChange={handleinp} required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="input-group flex-nowrap custom-form">
                                        <span class="input-group-text" id="">Subject</span>
                                        <input type="text" class="form-control" aria-label="Subject" aria-describedby="addon-wrapping" name='subject' value={contactvalue.subject} onChange={handleinp} required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="input-group flex-nowrap custom-form custom-form-ta">
                                        <span class="input-group-text text-area-span" id="" >Message</span>
                                        <textarea id="" className='form-control w-100' rows="10" name='msg' value={contactvalue.msg} onChange={handleinp} required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mx-auto mt-3">
                                <button type='submit' className='btn secondary-btn form-border'>
                                    {send ? 'send' : 'sending...'}
                                </button>
                            </div>
                        </form>
                        <div className="row border-0  mt-5">

                            <div className="col-md-3 col-sm-6">
                                <div className="contact-ref">
                                    <a href="tel:03352653956" className=' ' target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                        <div className=' py-2'>
                                            0335-2653956
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="contact-ref">
                                    <a href="mailto:hunainaslam.ha@gmail.com" className=' ' target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                        <div className=' py-2'>

                                            hunainaslam.ha@gmail.com
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="contact-ref">
                                    <a href="www.linkedin.com/in/hunain-aslam" className='' target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                        <div className=' py-2'>
                                            <in />hunain-aslam
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="contact-ref">
                                    <a href="https://github.com/MHunainAslam" className='' target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                        <div className=' py-2'>
                                            MHunainAslam
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

export default Contact