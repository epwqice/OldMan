import React from 'react';
import { SimpleForm, List, Datagrid, Edit, Create, TextField, TextInput, EditButton } from 'admin-on-rest/lib/mui';
import { getRes } from '../res/local';
import Data from '../../data/data';
import { createList, createCreate, createEdit } from '../ui/operation-list'

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

export const resouceList = (categoryKey, resourceGroupKey, resouceKey) => create(categoryKey, resourceGroupKey, resouceKey, 'list');
export const resouceEdit = (categoryKey, resourceGroupKey, resouceKey) => create(categoryKey, resourceGroupKey, resouceKey, 'edit');
export const resouceCreate = (categoryKey, resourceGroupKey, resouceKey) => create(categoryKey, resourceGroupKey, resouceKey, 'create');