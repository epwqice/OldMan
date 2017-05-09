import React from 'react';
import Data from '../../data/data';
import { ResourceGroup, Resource } from 'admin-on-rest';
import { createList, createCreate, createEdit } from '../ui/operation-list'
import { getRes } from '../res/local';

const opertions = {};

const initOpertions = () => {
  const appData = Data.data;

  for (let [cKey, cValue] of Object.entries(appData)) {
    opertions[cKey] = {};
    for (let [rgKey, rgValue] of Object.entries(cValue)) {
      opertions[cKey][rgKey] = {};
      for (let [rKey, rValue] of Object.entries(rgValue)) {
        opertions[cKey][rgKey][rKey] = {};
        opertions[cKey][rgKey][rKey].list = (parentProps) => createList(cKey, rgKey, rKey, rValue, parentProps);
        opertions[cKey][rgKey][rKey].create = (parentProps) => createCreate(cKey, rgKey, rKey, rValue, parentProps);
        opertions[cKey][rgKey][rKey].edit = (parentProps) => createEdit(cKey, rgKey, rKey, rValue, parentProps);
      }
    }
  }
}

const create = (categoryKey, resourceGroupKey, resouceKey, fieldType) => {
  const appData = Data.data;
  if (opertions[categoryKey]) {
    return opertions[categoryKey][resourceGroupKey][resouceKey][fieldType];
  }

  initOpertions();

  return opertions[categoryKey][resourceGroupKey][resouceKey][fieldType];
}

const createResourceGroupElement = (resources, cKey, rgKey) => {

  return (
    <ResourceGroup name={rgKey} options={{label: getRes(cKey, rgKey)}}>
      {resources}
    </ResourceGroup>
  );
}

// 创建Resource元素
const createResourceElement = (cKey, rgKey, rKey) =>
  <Resource name={rKey} options={{label: getRes(cKey, rgKey, rKey)}} edit={resouceEdit(cKey, rgKey, rKey)}
            create={resouceCreate(cKey, rgKey, rKey)} list={resouceList(cKey, rgKey, rKey)} />;


export const createResourceGroup = (cKey) => {
  const cValue = Data.data[cKey];
  const resourceGroup = [];

  for (let [rgKey, rgValue] of Object.entries(cValue)) {
    const resourceElements = [];
    for (let [rKey, rValue] of Object.entries(rgValue)) {
      if (rKey !== 'zh_CN') {
        resourceElements.push(createResourceElement(cKey, rgKey, rKey));
      }
    }
    if (rgKey !== 'zh_CN') {
      resourceGroup.push(createResourceGroupElement(resourceElements, cKey, rgKey));
    }
  }

  return resourceGroup;
}

export const resouceList = (categoryKey, resourceGroupKey, resouceKey) => create(categoryKey, resourceGroupKey, resouceKey, 'list');
export const resouceEdit = (categoryKey, resourceGroupKey, resouceKey) => create(categoryKey, resourceGroupKey, resouceKey, 'edit');
export const resouceCreate = (categoryKey, resourceGroupKey, resouceKey) => create(categoryKey, resourceGroupKey, resouceKey, 'create');
