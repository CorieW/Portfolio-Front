import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div id='contact-container'>
            <h1>Contact Me</h1>
            <p>Got some cool project you want to work on together? Get in touch with me!<br/>
                                Use the contact form below or contact me directly through <i>Watson.Corie@Gmail.com</i>.</p>
            <form className='form' name='contact' action="mailto:watson.corie@Gmail.com" method="post" enctype="text/plain">
                <label className='info' for='email-address'>Email Address</label>
                <input id='email-address' name='email-address' type='text' placeholder='Enter email address' />
                
                <br/>

                <label className='info' for='subject'>Subject</label>
                <input id='subject' name='subject' type='text' placeholder='Enter subject' />
                
                <br/>

                <label className='info' for='subject'>Message</label>
                <textarea id='message' name='message' placeholder='Enter message' rows='4'></textarea>

                <button class='submit'>Submit</button>
            </form>
        </div>
    )
}
