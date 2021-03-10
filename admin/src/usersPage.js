import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/postlist';
import PostCreate from './components/postCreate';
import PostEdit from './components/postEdit';

import UserList from './components/userlist';
import UserCreate from './components/userCreate';
import UserEdit from './components/userEdit';
import './App.css';
import MyLogoutButton from './redux/containers/logout';

function UsersPage() {
  return <Admin logoutButton={MyLogoutButton}  dataProvider={restProvider('http://localhost:3000')}>
    <Resource
      name='Organization'
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource
      name='Roles'
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
}

export default UsersPage;
