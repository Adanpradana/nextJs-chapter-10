"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import imgUser from "public/assets/user.png";
import Image from "next/image";

function LandingPageLayout({ children }) {
    const navbarData = [
        { name: "home", path: "/" },
        { name: "games", path: "/games" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ];
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">GoodGame</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {navbarData.map((route, key) => (
                                <Nav.Link key={key} href={route.path}>
                                    {route.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/auth/login">
                                <Image src={imgUser} alt="yas" width={40} height={40} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
        </>
    );
}

export default LandingPageLayout;
