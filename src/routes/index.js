import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Register from '../pages/Register'

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
]
