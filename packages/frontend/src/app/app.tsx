import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import userResource from './resources/user.resource';
import postResource from './resources/post.resource';

const dataProvider = jsonServerProvider('/api');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="user" {...userResource} />
    <Resource name="post" {...postResource} />
  </Admin>
);

export default App;
