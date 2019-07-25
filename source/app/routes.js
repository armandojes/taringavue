import Posts from './pages/posts';
import User from './pages/user';
import Post from './pages/Post';

const Routes = [
  {path: '/posts', component: Posts},
  {path: '/user', component: User},
  {path: '/post/:id', component: Post},

];

export default Routes
