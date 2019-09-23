import React from 'react';
import aboutAvatar from './about-avatar.jpeg'
import './About.css';

export default class About extends React.Component {

    render() {

        return (
                <section id="About">
                    <h2>About</h2>
                    <h3>Cody Wildtyto</h3>
                    <div className="about-profile">
                        <div className="about-block">
                            <div className="about-avatar" style={ { backgroundImage: `url(${ aboutAvatar })` } }></div>
                        </div>
                        <div className="about-block">
                            <div className="about-skills">
                                <span style={ { bottom: "100%", left: "100%" } }>JavaScript</span>
                                <span style={ { bottom: "90%", left: "100%" } }>Git</span>
                                <span style={ { bottom: "70%", left: "80%" } }>React</span>
                                <span style={ { bottom: "60%", left: "70%" } }>React Native</span>
                                <span style={ { bottom: "70%", left: "30%" } }>AngularJS</span>
                                <span style={ { bottom: "70%", left: "60%" } }>Vue.js</span>
                                <span style={ { bottom: "40%", left: "40%" } }>Vue Server Renderer</span>
                                <span style={ { bottom: "40%", left: "80%" } }>Webpack</span>
                                <span style={ { bottom: "50%", left: "80%" } }>NPM</span>
                                <span style={ { bottom: "50%", left: "30%" } }>Google Analytics</span>
                                <span style={ { bottom: "60%", left: "40%" } }>Express</span>
                                <span style={ { bottom: "80%", left: "40%" } }>LINE Bot SDK</span>
                                <span style={ { bottom: "50%", left: "60%" } }>PM2</span>
                                <span style={ { bottom: "80%", left: "90%" } }>XMLHttpRequest</span>
                                <span style={ { bottom: "30%", left: "50%" } }>Axios</span>
                                <span style={ { bottom: "30%", left: "30%" } }>Request</span>
                                <span style={ { bottom: "90%", left: "80%" } }>UX Design</span>
                                <span style={ { bottom: "90%", left: "50%" } }>UI Design</span>
                                <i>Experience</i>
                                <i>Frequency</i>
                            </div>
                        </div>
                    </div>
                    <div className="about-bio">
                        <p className="about-block">Since the first time I created my own website when I was 10 years old. I took a fancy to do creation of all about digital content. Such as animation, game and software. It defined my choice of my major in the future. Most of time, I am able to learn new skills of programming. However, I am concerned about the design and the thinking of the users. The point is the key I decided to major in media design. Because of that, I am good at both of web application development and user experience.</p>
                        <p className="about-block">Recently, my colleague and I designed a service in a hackathon. After that, we rebuilt the idea to a new chat bot -- noper. It helped people who usually have business conversation at messaging tools when they were working. To manage and notify progress of the tasks with team members. We released the service for public for few monthes. Although there are many users registered our service, it is hard to be main income.</p>
                        <p className="about-block">This years, I did full time front end developer jobs. And freelace full stack developer jobs for few times. That is interesting to have chance to create different kind of products. I like to work with people cooperatively. Also I am excited to face each challenge and solve them.</p>
                    </div>
                </section>
            );

    }

}