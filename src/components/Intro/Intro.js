import React from 'react'
import './Intro.css'

export default function Intro() {
    return (
        <div className='intro'>
            <p className='header'><span className='greeting'>Hello</span>, I'm <i>Corie Watson.</i></p>
            <p className='sub-header'>I'm a Software Developer.</p>

            <p className='info'>I taught myself basic HTML and CSS at the age of 13 years old, with a lot of trial and error and the assistance of online resources such 
                as <a href='https://www.codecademy.com/' target='_blank' rel='noreferrer'>Codecademy</a>. Being introduced to web development at such a young age allowed me to experiment with many areas of programming.
                <br/><br/>
                Game development I enjoy very much, as it allows me to express my creative side without any restraints on possibilities. I have worked on many game development projects 
                in the past, most being experiments for future projects that I plan on working on and projects that I am currently working on. One particular area of game development that 
                interests me is procedural generation. I have put in a lot of time playing around with procedural generation, as it's definitely one of the things I'll include in most of 
                my projects. The idea of not having to define what will be around the next corner in a video game is incredible to me.
                <br/><br/>
                Recently I have been focusing a lot of my time on web development. After learning HTML and CSS when I was 13, I took it very slow and eventually decided 
                to base much of my time around game development. However, within the past six months I have done a lot of experimenting with a bunch of web technologies. I have come to 
                enjoy using the MERN (MongoDB, Express, React, and Node.js) stack. I have also planned a few projects, small and large that I want to work on, some I am working on.
                <br/><br/>
                <i>Some of my own projects can be found on the next page...</i>
            </p>
        </div>
    )
}
