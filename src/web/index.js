import React from 'react';
import { render } from 'react-dom';
import { simpleRestClient, Admin, Category, ResourceGroup, Resource } from 'admin-on-rest';
import { getRes, getAppRes } from './res/local';
import oldManTheme from './style/old-man-theme';
import appData from '../data/data';
import { createResourceGroup } from './controller/controller';

console.log(Reflect.ownKeys(appData.data));
const appMenus = [];

for (let key of Object.keys(appData.data)) {
  appMenus.push({
    index: key,
    local: appData.data[key]['zh_CN'],

  });
}

const basePath = document.location.href;
const pathArray = basePath.split('/');
const currentPath = pathArray[3];


render(
  <Admin basePath={currentPath} title={getAppRes('title')} theme={oldManTheme} appMenus={appMenus} restClient={ simpleRestClient('http://localhost:3000')}>
    {createResourceGroup(currentPath)}
  </Admin>,
  document.getElementById('App')
);
