import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    function sendemail(e){
        e.preventDefault();
        var x = document.forms["contact"]["Email"].value;
        if(!x.includes("@") && !x.includes("@.com")){
            document.getElementsByClassName("Email").innerHTML = "Please Check again";
        }
        emailjs.sendForm('service_6ddzctk', 'template_g6jj28q', e.target, 'user_iUfbyMaQ7nLQyQKp4xkV8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    
    return (
        <section className="Contact_Section">
            <form Name="contact" onSubmit={sendemail}>
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
                        
                        <button class="btn btn-md btn-info" type="submit">Hire/Proposal</button>
                   </div>

               </div>
           </div>
           </form>
        </section>
    )
}

export default Contact;