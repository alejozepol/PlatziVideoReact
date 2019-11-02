import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NotFound from '../container/NotFound';
/* import Player from '../component/Player'; */

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/registro',
    component: Register,
    exact: true,
  },
/*   {
    path: '/player/:id',
    component: Player,
    exact: true,
  }, */
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
