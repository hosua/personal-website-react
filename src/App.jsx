import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

import Contact from './Contact.jsx';
import Home from './Home.jsx';
import { Forum } from './forum/src/forum.jsx';
import Portfolio from './Portfolio.jsx';
import { YFMDuelCommonStratsApp } from './yugioh-fm-tools/src/YFMDuelCommonStrats.jsx';
import { YFMDuelCalcApp } from './yugioh-fm-tools/src/YFMDuelCalc.jsx';
import { YFMDatabaseCardList, YFMDatabaseCardDrops } from './yugioh-fm-tools/src/YFMDatabase.jsx';
import { YFMGuardianStarChart } from './yugioh-fm-tools/src/YFMGuardianStars';

function AppNavBar() {
    return (
        <>
            <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">Hoswoo's Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <NavDropdown title="Yu-Gi-Oh - FM">
                                <NavDropdown.Item as={Link} to="/yugioh-fm-tools/duel-calculator">Duel Points Calculator</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/yugioh-fm-tools/duel-common-strats">Duel Common Strategies</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/yugioh-fm-tools/guardian-stars">Guardian Star Chart</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/yugioh-fm-tools/database/card-list">Card List</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/yugioh-fm-tools/database/card-drops">Card Drops</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default function App() {
    return (
        <>
            <div className="App-body">
                <HashRouter>
                    <AppNavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/forum" element={<Forum />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/yugioh-fm-tools/guardian-stars" element={<YFMGuardianStarChart />} />
                        <Route path="/yugioh-fm-tools/duel-common-strats" element={<YFMDuelCommonStratsApp />} />
                        <Route path="/yugioh-fm-tools/duel-calculator" element={<YFMDuelCalcApp />} />
                        <Route path="/yugioh-fm-tools/database/card-list" element={<YFMDatabaseCardList />} />
                        <Route path="/yugioh-fm-tools/database/card-drops" element={<YFMDatabaseCardDrops />} />
                    </Routes>
                </HashRouter>
            </div>
        </>
    )
}
