import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>Redux</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/posts">Posts</Link> | {" "}
        <Link to="/addpost">Add Post</Link> | {" "}
        <Link to="/users">Add Users</Link> | {" "}
        <Link to="/counter">Counter</Link> | {" "}
        <Link to="/counter1">Counter1</Link> | {" "}
        
      </nav>
      <Outlet />  
    </>
  );
}