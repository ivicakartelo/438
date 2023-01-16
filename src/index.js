import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import PostsListTitles from "./features/posts/PostsListTitles";
import SinglePostPage from "./features/posts/SinglePostPage";
import AddPostForm from "./features/posts/AddPostForm"; 
import EditPostForm from "./features/posts/EditPostForm";
import { Link } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddUserForm from "./features/users/AddUserForm";

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
            <p><Link to="/posts">Posts</Link> | {" "}
            <Link to="/users">Users</Link> | {" "}</p>
          </>
        }
      />
        <Route path="posts" element={<PostsListTitles />}>
        <Route
        index
        element={
          <main style={{ padding: '1rem' }}>
          <h1>Post Terms of use</h1>
            <p>Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam.</p>
            <p>Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam.</p>
          </main>
        }
        />
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
        <Route path="users" element={<AddUserForm />} />    
    </Route> 
  </Routes>
</BrowserRouter>
  </Provider>
</React.StrictMode>
);