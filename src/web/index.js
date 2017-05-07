import React from 'react';
import { render } from 'react-dom';
import { simpleRestClient, Admin, Category, ResourceGroup, Resource } from 'admin-on-rest';
import { resouceCreate, resouceEdit, resouceList } from './controller/controller';
import { OldManList, OldManEdit, OldManCreate } from './controller/old-man';
import { getRes } from './res/local';
import getMuiTheme, { palette } from 'material-ui/styles/getMuiTheme';
import oldManTheme from './style/old-man-theme';
import appData from '../data/data';

console.log(Reflect.ownKeys(appData.data));
const appMenus = [];

for (let key of Object.keys(appData.data)) {
  appMenus.push({
    index: key,
    local: appData.data[key]['zh_CN']
  });
}

const create = resouceCreate('vip_manager', 'vip_system', 'reception_register');
const edit = resouceEdit('vip_manager', 'vip_system', 'reception_register');
const list = resouceList('vip_manager', 'vip_system', 'reception_register');


const vipManagerCreate = resouceCreate('vip_manager', 'vip_system', 'vip_manager');
const vipManagerEdit = resouceEdit('vip_manager', 'vip_system', 'vip_manager');
const vipManagerList = resouceList('vip_manager', 'vip_system', 'vip_manager');



render(
  <Admin title={getRes('app_title')} theme={oldManTheme} appMenus={appMenus} restClient={ simpleRestClient('http://localhost:3000')}>
      <ResourceGroup name="vip_system" options={{label: getRes('vip_manager', 'vip_system')}}>
        <Resource name='reception_register' options={{label: getRes('vip_manager', 'vip_system', 'reception_register')}} edit={edit} create={create} list={list} />
        <Resource name='vip_manager' options={{label: getRes('vip_manager', 'vip_system', 'vip_manager')}} edit={vipManagerEdit} create={vipManagerCreate} list={vipManagerList} />
      </ResourceGroup>
  </Admin>,
  document.getElementById('App')
);
