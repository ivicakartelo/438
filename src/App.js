import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
      <h1>React Redux Toolkit Router 6 CMS Admin</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/home">Home</Link> | {" "}
      <Link to="/">Admin</Link> | {" "}
      </nav>
      <Outlet />  
    </>
  );
}