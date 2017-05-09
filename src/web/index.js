import React from 'react';
import { render } from 'react-dom';
import { simpleRestClient, Admin, Category, ResourceGroup, Resource } from 'admin-on-rest';
import { getRes } from './res/local';
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


render(
  <Admin title={getRes('app_title')} theme={oldManTheme} appMenus={appMenus} restClient={ simpleRestClient('http://localhost:3000')}>
    {createResourceGroup('vip_manager')}
  </Admin>,
  document.getElementById('App')
);
