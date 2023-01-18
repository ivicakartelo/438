import { Link, Outlet } from "react-router-dom"
import './App.css';

export default function App() {
  return (
    <>
      <h1>React Redux Toolkit Router 6 CMS Admin version 2</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/home">Home</Link> | {" "}
      <Link to="/">Admin</Link> | {" "}
      </nav>
      <Outlet />  
    </>
  );
}