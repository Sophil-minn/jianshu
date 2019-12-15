import React from "react";
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/detail/loadable';
import Login from '../pages/login';
import Hoc from '../pages/hoc';
import Write from '../pages/write';
const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/write',
    component: Write
  }, {
    path: '/hoc',
    component: Hoc
  }, {
    path: '/detail/:id',
    component: Detail
  },
];
const Routers = () => {
  return (
    routes.map((route, key) => {
      if (route.exact) {
        return <Route key={key} exact path={route.path} component={route.component} />
      } else {
        return <Route key={key} path={route.path} component={route.component} />
      }
    })
  )
}
export default Routers;