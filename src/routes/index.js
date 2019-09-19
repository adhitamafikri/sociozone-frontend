import Welcome from 'pages/Welcome'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Home from 'pages/Home'

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
]
