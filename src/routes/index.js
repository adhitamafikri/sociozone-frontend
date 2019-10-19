import Welcome from 'pages/Welcome'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Home from 'pages/Home'
import Search from 'pages/Search'
import Profile from 'pages/Profile'
import EditProfile from 'pages/EditProfile'
import Upload from 'pages/Upload'

export default [
  {
    path: '/',
    exact: true,
    component: Welcome,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/upload',
    exact: true,
    component: Upload,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/profile/edit',
    exact: true,
    component: EditProfile,
  },
  {
    path: '/user/:userID',
    exact: true,
    component: Profile,
  },
]
