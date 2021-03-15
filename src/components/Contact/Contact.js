import { useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import { getAxiosRequestConfig, getAxiosRequestErrorMessage } from '../../utils'
import './Contact.css'

export default function Contact() {

    const [loaded, setLoaded] = useState(true)
    const [error, setError] = useState()
    const [message, setMessage] = useState()

    function submit(e)
    {
        e.preventDefault()

        setLoaded(false)

        setError()
        setMessage()

        const data = {
            'email': $('#email')[0].value.trim(),
            'subject': $('#subject')[0].value.trim(),
            'message': $('#message')[0].value.trim()
        }

        axios(getAxiosRequestConfig(
            'POST',
            `${process.env.REACT_APP_API_ORIGIN}/api/contact`,
            data
          )
        ).then((response) => {
            if (response.data.error)
            {
              setError(response.data.message)
              return setLoaded(true)
            }
            
            setMessage(response.data.message)
            setLoaded(true)
        }, (error) => {
            setError(getAxiosRequestErrorMessage(error))

            setLoaded(true)
        });
    }

    return (
        <div id='contact-container'>
            <h1>Contact Me</h1>
            <p>Alternatively, email me directly through <i>Watson.Corie@Gmail.com</i>.</p>
            <form className='form' name='contact' onSubmit={ submit } method="post" enctype="text/plain">
                <p className={ `loading-msg ${!loaded ? '' : 'hidden'}` }>Loading...</p>
                <p className={ `error-msg ${error ? '' : 'hidden'}` }>{ error }</p>
                <p className={ `success-msg ${message ? '' : 'hidden'}` }>{ message }</p>

                <label className='info' for='email-address'>Email Address</label>
                <input id='email' name='email' type='text' placeholder='Enter your email address' />
                
                <label className='info' for='subject'>Subject</label>
                <input id='subject' name='subject' type='text' placeholder='Enter subject' />
                
                <label className='info' for='subject'>Message</label>
                <textarea id='message' name='message' placeholder='Enter message' rows='8'></textarea>

                <button class='submit'>Submit</button>
            </form>
        </div>
    )
}
