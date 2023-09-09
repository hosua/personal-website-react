import React from 'react';
import { Image } from 'react-bootstrap';
import './Contact.css'

import EmailIcon from './assets/icons/email-icon.png';
import GithubIcon from './assets/icons/github-icon.png';
import GitlabIcon from './assets/icons/gitlab-icon.png';
import LeetcodeIcon from './assets/icons/leetcode-icon.png';



function Contact() {
    return (
        <>
            <div className="App-contact">
                <div className="contact-container">
                    <h2>Contact Information</h2>
                    <p> If you'd like to get in contact with me, please send me an email. </p>
                    <a href="mailto:jao43@njit.edu">
                        <Image className="icon" src={EmailIcon} />
                        jao43@njit.edu
                    </a>
                    <br />
                    <a href="https://github.com/hosua">
                        <Image className="icon" src={GithubIcon} />
                        Github
                    </a>
                    <br />
                    <a href="https://gitlab.com/hosua">
                        <Image className="icon" src={GitlabIcon} />
                        Gitlab
                    </a>
                    <br />
                    <a href="https://leetcode.com/hosua/">
                        <Image className="icon" src={LeetcodeIcon} />
                        Leetcode
                    </a>

                </div>
            </div>
        </>
    );
}

export default Contact;