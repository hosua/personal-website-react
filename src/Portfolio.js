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

function PortfolioSection(props) {
    return (
        <div className="portfolio-section">
            <hr />
            <div className="mb-3">
                <h3 className="porfolio-title">
                    {props.title}
                    {typeof props.src !== 'undefined' &&
                        <Button href={props.src} className='portfolio-button'>Source Code</Button>}
                </h3>
                <div className='portfolio-description'>
                    {parse(props.description)}
                </div>
                {typeof props.img !== 'undefined' &&
                    <><br /><Image className="portfolio-img" src={props.img} fluid /></>}
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <>
            <div className="App-portfolio">
                <h1>Portfolio</h1>
                <PortfolioSection
                    title="hoswoo.xyz"
                    description={`This website is currently a work in progress, and considered part of my portfolio.

                    It uses ReactJS & Bootstrap 5 for the front-end.`}
                />
                <PortfolioSection
                    title="TetriC"
                    description={`This is a Tetris clone with mechanics based on the NES version of Tetris.
                    
                    Written in C with SDL2.`}
                    img={TetriC}
                    src="https://github.com/hosua/TetriC"
                />
                <PortfolioSection
                    title="CHIP-8 Emulator"
                    description={`I have always been interested in learning about how video game emulation works, and creating a <a href="https://en.wikipedia.org/wiki/CHIP-8">CHIP-8</a> emulator is a great place to start! 
                    
                    Written in C++ with SDL2.`}
                    img={Chip8}
                    src="https://github.com/hosua/chip8"
                />
                <PortfolioSection
                    title="Snake++"
                    img={SnakePP}
                    description={`A Snake clone written in C++ with SDL2. Features simple menus, difficulty settings, and high score saving.`}
                    src="https://github.com/hosua/SnakePlusPlus"
                />
                <PortfolioSection
                    title="Calc++"
                    img={CalcPP}
                    description={`A text-based scientific calculator written in C++. 
                    
                    Functionally, it works properly, though it does not catch every syntax error (which will sometimes result in erroneous and potentially misleading output). Please do not use this for anything important, it's more-so a proof of concept, and not something you should rely on.

                    Uses the <a href="https://en.wikipedia.org/wiki/Shunting_yard_algorithm">shunting yard algorithm</a> to parse input.`}
                    src="https://github.com/hosua/CalcPlusPlus"
                />
                <PortfolioSection
                    title="Blackjack Simulator"
                    description={`This is text-based Blackjack simulator created in Python.

                    The game features betting money (not actual money) and rules that are true to real Blackjack, with the exception that you cannot double down your bets. This was a planned feature but I never got around to implementing it.

                    <div class="ratio ratio-16x9">
		                <iframe src="https://replit.com/@hosuao/Blackjack?embed=1&amp;outputonly=1"></iframe>
		            </div>
                    `}
                    src="https://github.com/hosua/Blackjack"
                />
                <PortfolioSection
                    title="Folder Organizer Tool"
                    description={`This tool is a Python script that is used to manage my ROMs and put them into alphabetical folders.

                    It can also separate betas and romhacks from official releases, provided that the ROMs follow naming conventions. I don't have any use for it anymore since I have found better ways to manage all of my ROMs, but it is still available to use.`}
                    img={FolderOrganizerTool}
                    src="https://github.com/hosua/Folder-Organizer-Tool/"
                />

                <PortfolioSection
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