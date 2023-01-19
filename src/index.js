import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import PostsListTitles from "./features/posts/PostsListTitles";
import SinglePostPage from "./features/posts/SinglePostPage";
import AddPostForm from "./features/posts/AddPostForm";
import AddPostForm1 from "./features/posts/AddPostForm1";
import EditPostForm from "./features/posts/EditPostForm";
import { Link } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddUserForm from "./features/users/AddUserForm"
import UsersList from "./features/users/UsersList"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
        index
        element={
          <>
          <h1>Admin</h1>
            <Link to="/posts">Posts</Link> | {" "}
            <Link to="/users">Users</Link> | {" "}
            <Link to="/comments">Comments</Link> | {" "}
            <Link to="/Replies">Replies</Link> | {" "}
            <Link to="/replies1">replies1</Link> | {" "}
          </>
        }
      />
        <Route path="posts" element={<PostsListTitles />}>
        
        <Route path=":postId" element={<SinglePostPage />}/>
        </Route>
        <Route path="editPost/:postId" element={<EditPostForm />} />
        <Route
        path="*"
        element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        <Route path="addpost" element={<AddPostForm />}></Route>
        <Route path="users" element={<UsersList />} />
        <Route path="adduser" element={<AddUserForm />} />
        <Route path="home" element={<AddPostForm1 />} />
        <Route path="post/:postId" element={<SinglePostPage />} />

    </Route> 
  </Routes>
</BrowserRouter>
  </Provider>
</React.StrictMode>
);