import './App.css'
import { Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div className="App-body" style={{ textAlign: 'center' }}>
            <h1>Home Page</h1>
            <br />
            <br />
            <Container style={{ textAlign: 'left', fontSize: '20px' }}>
                <p> Welcome to my website! </p>
                <p>My name is Josh, and I am currently a Computer Science major at <a href="https://www.njit.edu/" className="link">NJIT</a>. </p>
                <p>I am an <a href="https://archlinux.org/" className="link">Arch Linux</a> enthusiast and enjoy playing a wide-range of games during my free time when I am not programming, I also enjoy developing my own games as well as hobby. If you're interested, please check out my <a href="#/portfolio" className="link">portfolio</a> to see some of the work I have done.
                </p>
                <p>Professionally, I have interned as a firmware engineer at two companies: <a href="https://meraki.cisco.com/" className="link">Cisco Meraki</a>, and <a href="https://www.crestron.com/" className="link">Crestron Electronics</a>. However, I am always keen on learning and exploring different areas of software development. Lately, I have been experimenting with more web development (as you may have guessed by the website).
                </p>

                <p>If you're hiring or simply would like to discuss something, please send me an email at: <a href="mailto:jao43@njit.edu" className="link">jao43@njit.edu</a>. I will get back to you as soon as possible.
                </p>
            </Container>
        </div>
    );
}
