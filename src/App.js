import { Link, Outlet } from "react-router-dom"
import './App.css'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap'
import { Footer } from './app/Footer'

export default function App() {
  return (
    <>
  <Navbar dark color="primary">
    <div className="container">
      <NavbarBrand href="/">React Redux Toolkit Router 6 CMS Admin version 2</NavbarBrand>
    </div>
  </Navbar>
      <Nav className="container">
        <NavItem>
        <NavLink href="/home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Admin</NavLink>
      </NavItem>
      </Nav>
      <Outlet />
      <hr />
      <Footer />  
    </>
  );
}