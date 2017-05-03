import React from 'react';
import { render } from 'react-dom';
import { simpleRestClient, Admin, Category, ResourceGroup, Resource } from 'admin-on-rest';
import { OldManList, OldManEdit, OldManCreate } from './controller/old-man';
import getRes from './res/local';
import getMuiTheme, { palette } from 'material-ui/styles/getMuiTheme';
import oldManTheme from './style/old-man-theme';
import appData from '../data/vip_manager_data';

console.log(Reflect.ownKeys(appData.data));
const appMenus = [];

for (let key of Object.keys(appData.data)) {
  appMenus.push({
    index: key,
    local: appData.data[key]['zh_CN']
  });
}


render(
  <Admin title={getRes('app_title')} theme={oldManTheme} appMenus={appMenus} restClient={ simpleRestClient('http://localhost:3000')}>
    <Category name="vip_manager">
      <ResourceGroup name="vip_system">
        <Resource name='OldManManager' options={{label: getRes('old_man_title')}} edit={OldManEdit} create={OldManCreate} list={OldManList} />
        <Resource name='Test' options={{label: getRes('old_man_title')}} edit={OldManEdit} create={OldManCreate} list={OldManList} />
      </ResourceGroup>
    </Category>

  </Admin>,
  document.getElementById('App')
);
