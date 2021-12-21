import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6ddzctk', 'template_g6jj28q', form.current, 'user_iUfbyMaQ7nLQyQKp4xkV8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <section className="Contact_Section" id="Contact_Section">
            <form ref={form} onSubmit={sendEmail}>
                <div className="wrapper">
                    <div className="contact_form" style={{ opacity: "90%" }}>
                        <div className="input_fields">
                            <input type="text" className="input" placeholder="Name" name="Name" />
                            <input type="text" className="input" placeholder="Email" name="Email" />
                            <input type="text" className="input" placeholder="Contact Number" name="Number" />
                            <input type="text" className="input" placeholder="Subject" name="Subject" />

                        </div>
                        <div className="msg">
                            <textarea placeholder="Message" name="Message" />
                            <button className="btn" type="submit">Send to Hire/Assess</button>
                        </div>

                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact
