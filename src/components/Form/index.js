import {useRef} from 'react'
import './index.scss'
import emailjs from '@emailjs/browser';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
    const form = useRef(null);
    const notify = () => toast("Wow so easy !");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tbaf532', 'template_z9xp7ar', form.current, 'ugJ0DyhSmYB93zMz-')
            .then((result) => {
                toast.success('Message successfully sent!', {
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                });

                const timeout = setTimeout(() => {
                    window.location.reload(false)
                }, 3900)

                return () => clearTimeout(timeout)
            }, (error) => {

                toast.error('Failed to send the message, please try again', {
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });

            });
    }

    return (
        <>
            <ToastContainer/>
            <div className="contact-form">
                <form ref={form} className="form" autoComplete="off" onSubmit={sendEmail}>
                    <div className="input-container ic1">
                        <input required name="user_name" id="firstname" className="input" type="text" placeholder=" "/>
                        <label htmlFor="firstname" className="placeholder">Your name *</label>
                    </div>
                    <div className="input-container ic2">
                        <input name="user_email" required id="lastname" className="input" type="email" placeholder=" "/>
                        <label htmlFor="lastname" className="placeholder">Your email *</label>
                    </div>
                    <div className="ic2" style={{position: "relative"}}>
                        <textarea name="message" rows="6" required id="email" className="input" type="text"
                                  placeholder=" "/>
                        <label htmlFor="email" className="placeholder">Message *</label>
                    </div>
                    <button type="text" className="submit">send</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm