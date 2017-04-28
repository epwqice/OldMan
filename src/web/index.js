import React from 'react';
import { render } from 'react-dom';
import { simpleRestClient, Admin, Resource } from 'admin-on-rest';
import { OldManList, OldManEdit, OldManCreate } from './controller/old-man';
import getRes from './res/local';

render(
  <Admin title={ getRes('app_title') } restClient={ simpleRestClient('http://localhost:3000')}>
    <Resource name='OldManManager' options={{label: getRes('old_man_title')}} edit={OldManEdit} create={OldManCreate} list={OldManList} />
  </Admin>,
  document.getElementById('App')
);