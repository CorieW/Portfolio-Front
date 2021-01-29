import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <div className='projects'>
            <p className='header'>Projects</p>
            <div className='project-list-container'>
                <div className='project'>
                    <p className='project-name'>Tilt It</p>
                    <p className='short-description'>A unique Android game, published on the Google Play Store. To win tilt the balls into their correct goals.</p>
                    <div className='links'>
                        <a className='link fab fa-google-play' href='https://play.google.com/store/apps/details?id=com.CoreStep.TiltIt' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project on Google Play Store</span>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <p className='project-name'>2D World Generator</p>
                    <p className='short-description'>A software that generates 2D worlds using Perlin Noise. Includes: biomes, chunk generation, world map generation, biome features (trees, rocks, grass...), etc...</p>
                    <div className='links'>
                        <a className='link fab fa-github' href='https://github.com/CorieW/WorldGenerator' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project's GitHub repository</span>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <p className='project-name'>Multiplayer RTS Game</p>
                    <p className='short-description'>A multiplayer RTS game that is currently being worked on. I'm working with the Unity game engine and the Mirror networking library.</p>
                    <div className='links'>
                        <a className='link fab fa-github' href='https://github.com/CorieW/Multiplayer-RTS-Game' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project's GitHub repository</span>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <p className='project-name'>IMustAsk.com</p>
                    <p className='short-description'>A small website development project using the MERN stack. Ask and answer questions faster and easier than ever!</p>
                    <div className='links'>
                        <a className='link fab fa-github' href='https://github.com/CorieW/IMustAsk.com' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project's GitHub repository</span>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <p className='project-name'>WordyURL.com</p>
                    <p className='short-description'>Create small redirection urls that are rememberable. Built using MySQL, Express, React, and Node.js.</p>
                    <div className='links'>
                        <a className='link fab fa-github' href='https://github.com/CorieW/URLWords.com' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project's GitHub repository</span>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <p className='project-name'>Portfolio</p>
                    <p className='short-description'>This website that you are on right now was developed by myself.</p>
                    <div className='links'>
                        <a className='link fab fa-github' href='https://github.com/CorieW/Portfolio-Front' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project's GitHub repository</span>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <p className='project-name'>Projects4Devs</p>
                    <p className='short-description'>Discover and share cool project ideas with other developers!</p>
                    <div className='links'>
                        <a className='link fab fa-github' href='https://github.com/CorieW/Projects4Devs' target='_blank' rel='noreferrer'>
                            <span className='screen-reader-text'>Project's GitHub repository</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
