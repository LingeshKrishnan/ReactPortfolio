import React from "react";

const Contact = () => {
    return (
        <section className="Contact_Section">
           <div className="wrapper">
               <div className="contact_form">
                   <div className="input_fields">
                        <input type="text" className="input" placeholder="Name"/>
                        <input type="text" className="input" placeholder="Email"/>
                        <input type="text" className="input" placeholder="Subject"/>
                        <input type="text" className="input" placeholder="Contact Number"/>
                   </div>
                   <div className="msg">
                        <textarea placeholder="Message" />
                        <div className="btn">Send to Hire/Assess</div>
                   </div>

               </div>
           </div>
        </section>
    )
}

export default Contact;