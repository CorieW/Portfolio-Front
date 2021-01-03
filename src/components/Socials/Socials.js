import React from 'react'
import './Socials.css'

export default function Socials() {
    return (
        <div className='socials'>
            <div className='socials-container'>
                <ul>
                    <li>
                        <a className='social fab fa-github' href='https://github.com/CorieW' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>My GitHub profile</span>
                        </a>
                    </li>
                    <li>
                        <a className='social fab fa-twitter' href='https://twitter.com/C_0_R_E_' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>My Twitter profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
