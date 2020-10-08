import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import './nav.scss';
import { Fragment } from "react";
const Navigation = ({ navigationPresenter }: any) => {
    return (
        <Navbar className="nav-custome" expand="lg">
            <div className="h-100 d-flex align-items-center">
                <Link href="/" passHref>
                    <Navbar.Brand >
                        <img src="/assets/images/logo/nattraphak.jpg" alt="nattraphak logo" className="img-logo" />
                    </Navbar.Brand>
                </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        navigationPresenter.navigationItems.map((navLinkList, idx: number) => {
                            return (
                                navLinkList.keyTitle !== "ประเภทสินค้า" ?
                                    <Fragment key={idx}>

                                        <Link href={navLinkList.routePath} key={idx} passHref>
                                            <a className="nav-link">
                                                {navLinkList.keyTitle}
                                            </a>
                                        </Link>
                                    </Fragment>
                                    :
                                    <Fragment key={idx}>
                                        <NavDropdown title={navLinkList.keyTitle} id="basic-nav-dropdown">
                                            {
                                                navLinkList.routePath.map((items, index: number) => {
                                                    return (
                                                        <Link
                                                            key={index}
                                                            href={{
                                                                pathname: `/category/${items.path}`,
                                                            }}
                                                            passHref>
                                                            <NavDropdown.Item>
                                                                {items.type}
                                                            </NavDropdown.Item>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </NavDropdown>
                                    </Fragment>
                            )
                        })
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation