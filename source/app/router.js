import VueRouter from 'vue-router';

import Posts from './pages/posts';
import Shouts from './pages/shouts';
import User from './pages/user';
import Post from './pages/Post';

import PostsUser from './pages/user/pages/posts';
import ComentsUser from './pages/user/pages/coments';

const Router = new VueRouter({
  routes: [
    {path: '/posts', component: Posts},
    {path: '/user/:username', component: User, children: [
      {path: '', component: PostsUser},
      {path: 'comments', component: ComentsUser},
    ]},
    {path: '/post/:id', component: Post},
    {path: '/', component: Shouts},
  ],
  mode: 'history',
});

export default Router
