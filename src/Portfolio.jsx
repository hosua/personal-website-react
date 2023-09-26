import React from 'react';
import { Image, Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import './Portfolio.css';

import Chip8 from "./assets/chip8.gif";
import CalcPP from "./assets/Calc++.gif";
import FolderOrganizerTool from "./assets/FOT.png";
import MinecraftFisher from "./assets/Minecraft-Fisher.png"
import TetriC from "./assets/TetriC.gif";
import SnakePP from "./assets/Snake++.gif"

function WorkExperience(props) {
    return (
        <div className="portfolio-section">
            <hr />
            <div className="mb-3">
                <h3 className="porfolio-title" style={{ display: 'inline' }}>
                    {props.company} - {props.title}
                </h3>
                {props.url !== 'undefined' &&
                    <Button variant="success" href={props.url} style={{ float: 'right' }}>
                        Website
                    </Button>
                }
                <br />
                <br />
                <div className='portfolio-description'>
                    <ul>
                        {props.items.map(item => (
                            <li><strong>{item.name}</strong> - {item.desc}</li>
                        ))}
                    </ul>
                </div>
                <span style={{ float: 'right' }}>
                    <p>{props.employmentDates}</p>
                </span>
            </div>
        </div>
    );
}

function PersonalProject(props) {
    return (
        <div className="portfolio-section">
            <hr />
            <div className="mb-3">
                <h3 className="porfolio-title">
                    {props.company}
                    {typeof props.src !== 'undefined' &&
                        <Button href={props.src} className='portfolio-button'>Source Code</Button>}
                </h3>
                <div className='portfolio-description'>
                    {parse(props.description)}
                </div>
                <Image className="portfolio-img" src={props.img} fluid />
            </div>
        </div >
    );
}

function Portfolio() {
    return (
        <>
            <div className="App-portfolio">
                <h1>Portfolio</h1>
                <h2>Work Experience</h2>
                <WorkExperience
                    company="Cisco Meraki"
                    url="https://meraki.cisco.com/"
                    title="Firmware Engineer Intern"
                    items={[
                        {
                            name: 'Optimized Yocto Structure',
                            desc: 'Reorganized Meraki’s Yocto structure to separate open source and proprietary software into different layers, allowing for easier distribution of the open source components of Meraki’s software.'
                        },
                        {
                            name: 'Enhanced gRPC Client Logging',
                            desc: 'Extended logging for a multi-threaded gRPC client, offering more insight into some causes of potential segmentation faults which contributed towards more effective debugging and issue resolution.'
                        },
                        {
                            name: 'Worked on CPU-Monitoring Plugin',
                            desc: 'Contributed to the creation of a plugin to monitor and report instances of excessive CPU consumption, in effort to pinpoint resource-intensive processes in remote devices',
                        }

                    ]}
                    employmentDates="May 2023 - August 2023"
                />

                <WorkExperience
                    company="Crestron Electronics"
                    url="https://www.crestron.com/"
                    title="Firmware Engineer Intern"
                    items={[
                        {
                            name: 'Video Streaming Security',
                            desc: 'Collaborated closely with engineers to implement an initial API framework, implementing an interface for Crestron’s Rx/Tx devices with gRPC C++ for a robust and secure API.'
                        },
                        {
                            name: 'Simplified Build Process Using CMake',
                            desc: 'Utilized CMake to simplify the building process, resulting in efficient and user-friendly development experience.'
                        },
                        {
                            name: 'Streamlined Environment Setup',
                            desc: 'Took the initiative to author a comprehensive bash script, automating the entire setup and environment configuration and ensuring a smooth continuation of my work beyond my employment.'
                        }
                    ]}
                    employmentDates="May 2022 - September 2022"
                />

                <h2>Personal Projects</h2>
                <PersonalProject
                    title="hoswoo.xyz"
                    description={`This website is currently a work in progress, and considered part of my portfolio.

                    It uses ReactJS & Bootstrap 5 for the front-end.`}
                />
                <PersonalProject
                    title="TetriC"
                    description={`This is a Tetris clone with mechanics based on the NES version of Tetris.
                    
                    Written in C with SDL2.`}
                    img={TetriC}
                    src="https://github.com/hosua/TetriC"
                />
                <PersonalProject
                    title="CHIP-8 Emulator"
                    description={`I have always been interested in learning about how video game emulation works, and creating a <a href="https://en.wikipedia.org/wiki/CHIP-8">CHIP-8</a> emulator is a great place to start! 
                    
                    Written in C++ with SDL2.`}
                    img={Chip8}
                    src="https://github.com/hosua/chip8"
                />
                <PersonalProject
                    title="Snake++"
                    img={SnakePP}
                    description={`A Snake clone written in C++ with SDL2. Features simple menus, difficulty settings, and high score saving.`}
                    src="https://github.com/hosua/SnakePlusPlus"
                />
                <PersonalProject
                    title="Calc++"
                    img={CalcPP}
                    description={`A text-based scientific calculator written in C++. 
                    
                    Functionally, it works properly, though it does not catch every syntax error (which will sometimes result in erroneous and potentially misleading output). Please do not use this for anything important, it's more-so a proof of concept, and not something you should rely on.

                    Uses the <a href="https://en.wikipedia.org/wiki/Shunting_yard_algorithm">shunting yard algorithm</a> to parse input.`}
                    src="https://github.com/hosua/CalcPlusPlus"
                />
                <PersonalProject
                    title="Blackjack Simulator"
                    description={`This is text-based Blackjack simulator created in Python.

                    The game features betting money (not actual money) and rules that are true to real Blackjack, with the exception that you cannot double down your bets. This was a planned feature but I never got around to implementing it.

                    <div class="ratio ratio-16x9">
		                <iframe src="https://replit.com/@hosuao/Blackjack?embed=1&amp;outputonly=1"></iframe>
		            </div>
                    `}
                    src="https://github.com/hosua/Blackjack"
                />
                <PersonalProject
                    title="Folder Organizer Tool"
                    description={`This tool is a Python script that is used to manage my ROMs and put them into alphabetical folders.

                    It can also separate betas and romhacks from official releases, provided that the ROMs follow naming conventions. I don't have any use for it anymore since I have found better ways to manage all of my ROMs, but it is still available to use.`}
                    img={FolderOrganizerTool}
                    src="https://github.com/hosua/Folder-Organizer-Tool/"
                />

                <PersonalProject
                    title="Minecraft Fisher"
                    description={`This is a fishing bot that I created in Python. It is heavily inspired by another fishing bot called <a href="https://github.com/FairfieldTekLLC/McFishing">McFishing</a>.

                    The original was created in C# however, I wanted to recreate a version in Python from scratch. The way the bot works is simple. It scans an array of pixels for a very specific shade of red on the screen (the fishing bobber). When that color disappears from the screen, that must mean that the bobber went underwater, indicating that a fish can be reeled in.`}
                    img={MinecraftFisher}
                    src="https://github.com/hosua/Minecraft-Fisher"
                />
                <hr />
            </div>
        </>
    );
}

export default Portfolio;