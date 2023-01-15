import { Counter1 } from './features/counter1/Counter1'
import { Counter } from './features/counter/Counter'
import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import { AddUserForm } from './features/users/AddUserForm'
import { UsersList } from './features/users/UsersList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/">Posts</Link> | 
      <Link to="/users">Users</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Counter1 />
                <Counter />
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/users" 
          render={() => (
            <>
              <AddUserForm />
              <UsersList />
            </>
          )}
          />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
    </Router>    
  );
}
export default App;