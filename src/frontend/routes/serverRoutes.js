import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NotFound from '../container/NotFound';
import Player from '../components/Player';

const serverRoutes = [
  {
    path: '/',
    components: Home,
    exact: true,
  },
  {
    path: '/login',
    components: Login,
    exact: true,
  },
  {
    path: '/registro',
    components: Register,
    exact: true,
  },
  {
    path: '/player/:id',
    components: Player,
    exact: true,
  },
  {
    name: 'NotFound',
    components: NotFound,
  },
];

export default serverRoutes;
