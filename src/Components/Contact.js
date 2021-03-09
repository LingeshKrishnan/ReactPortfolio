import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    function sendemail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_g6jj28q', e.target, 'user_iUfbyMaQ7nLQyQKp4xkV8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <section className="Contact_Section">
            <form onSubmit={sendemail}>
           <div className="wrapper">
               <div className="contact_form" style={{opacity:"90%"}}>
                   <div className="input_fields">
                        <input type="text" className="input" placeholder="Name" name="Name"/>
                        <input type="text" className="input" placeholder="Email" name="Email"/>
                        <input type="text" className="input" placeholder="Contact Number" name="Number"/>
                        <input type="text" className="input" placeholder="Subject" name="Subject"/>

                   </div>
                   <div className="msg">
                        <textarea placeholder="Message" name="Message"/>
                        <div className="btn">Send to Hire/Assess</div>
                   </div>

               </div>
           </div>
           </form>
        </section>
    )
}

export default Contact;