import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

const ManyUserList = () => (
 <>
    <UserList />
    <UserList />
    <UserList />
 </> 
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ManyUserList} path="/" exact />
      <Route component={UserDetail} path="/users/:id" />
    </BrowserRouter>
  );
}

export default Routes;