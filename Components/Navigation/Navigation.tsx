import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import './nav.scss';
const Navigation = ({ navigationPresenter }: any) => {
    return (
        <Navbar className="nav-custome" expand="lg">
                <Link href="/" passHref>
                    <Navbar.Brand >
                        <img src="/assets/images/logo/nattraphak.jpg" alt="nattraphak logo" className="img-logo" />
                    </Navbar.Brand>
                </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        navigationPresenter.navigationItems.map((navLinkList, idx: number) => {
                            return (
                                navLinkList.keyTitle !== "ประเภทสินค้า" ?
                                    <Link href={navLinkList.routePath} key={idx} passHref>
                                        <a className="nav-link">
                                            {navLinkList.keyTitle}
                                        </a>
                                    </Link>
                                    :
                                    <NavDropdown  title={navLinkList.keyTitle} id="basic-nav-dropdown">
                                        {
                                            navLinkList.routePath.map((items, index: number) => {
                                                return (
                                                    <Link
                                                        href={{
                                                            pathname: `/category/${items.path}`,
                                                        }}
                                                        passHref>
                                                        <NavDropdown.Item 
                                                        key={index}>
                                                            {items.type}
                                                        </NavDropdown.Item>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </NavDropdown>

                            )
                        })
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation