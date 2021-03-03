import React from 'react'
import './Intro.css'

export default function Intro() {
    return (
        <div id='intro-container'>
            <h1><span className='greeting'>Hello</span>, I'm <i>Corie Watson.</i></h1>
            <h2>I'm a Software Developer.</h2>

            <p>I've been programming for 3 years now and have worked on multiple
                personal projects. Website and game development have been my main
                focus of those projects. Within these areas I have worked with many
                technologies that you'll find below.
            </p>

            <div className='tables-container'>
                <div className='table-container'>
                    <h3>Programming Languages</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Language</th>
                                <th>Experience</th>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>3 years</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>3 years</td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td>1 year</td>
                            </tr>
                            <tr>
                                <td>C#</td>
                                <td>3 years</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>3 years</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>3 years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-container'>
                    <h3>Web Technologies</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Technology</th>
                                <th>Experience</th>
                            </tr>
                            <tr>
                                <td>Node.js</td>
                                <td>8 months</td>
                            </tr>
                            <tr>
                                <td>Express</td>
                                <td>8 months</td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>6 months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-container'>
                    <h3>Game Technologies</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Technology</th>
                                <th>Experience</th>
                            </tr>
                            <tr>
                                <td>Unity</td>
                                <td>2+ years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-container'>
                    <h3>Database Technologies</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Technology</th>
                                <th>Experience</th>
                            </tr>
                            <tr>
                                <td>MySQL</td>
                                <td>8 months</td>
                            </tr>
                            <tr>
                                <td>Mongo.js</td>
                                <td>2 months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p><i>Some of my projects can be found on the next page...</i></p>
        </div>
    )
}
