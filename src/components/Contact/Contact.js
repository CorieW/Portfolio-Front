import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <p className='header'>Contact Me</p>
            <p className='info'>Got some cool project you want to work on together? Get in touch with me!<br/>
                                Use the contact form below or contact me directly through <i>Watson.Corie@Gmail.com</i>.</p>
            <form className='contact-me-form' name='contact' action="mailto:watson.corie@Gmail.com" method="post" enctype="text/plain">
                <label className='info' for='email-address'>Email Address</label>
                <input id='email-address' name='email-address' type='text' placeholder='Enter email address' />
                
                <br/>

                <label className='info' for='subject'>Subject</label>
                <input id='subject' name='subject' type='text' placeholder='Enter subject' />
                
                <br/>

                <label className='info' for='subject'>Message</label>
                <textarea id='message' name='message' placeholder='Enter message' rows='4'></textarea>

                <button id='submit'>Submit</button>
            </form>
        </div>
    )
}
