import React from 'react';
import { RESOURCE_GOURP } from '../../data/type_defined';
import { createListField, createEditField, createCreateField } from './field-factory';
import { SimpleForm, List, Datagrid, Edit, Create, TextField, TextInput, EditButton } from 'admin-on-rest/lib/mui';
import { getRes } from '../res/local';

export const createList = (cKey, rgKey, rKey, rValue, props) => {
  return create(cKey, rgKey, rKey, rValue, props, 'list', createListField, List, Datagrid);
}

export const createCreate = (cKey, rgKey, rKey, rValue, props) => {
  return create(cKey, rgKey, rKey, rValue, props, 'create', createCreateField, Create, SimpleForm);
}

export const createEdit = (cKey, rgKey, rKey, rValue, props) => {
  return create(cKey, rgKey, rKey, rValue, props, 'edit', createEditField, Edit, SimpleForm);
}

export const create = (cKey, rgKey, rKey, rValue, props, opertionType, createFieldMethod, opertionTypeElement, formElement) => {

  const childNodes = [];
  const listKey = rValue[opertionType];
  for (let [listKey, listValue] of Object.entries(listKey)) {
    if (listKey === 'key') {
      for (let [fKey, fValue] of listValue.entries()) {
        childNodes.push(createFieldMethod(cKey, rgKey, rKey, undefined, fValue, rValue[fValue]));
      }
    } else {
      for (let [fKey, fValue] of listValue.entries()) {
        childNodes.push(createFieldMethod(cKey, rgKey, rKey, listKey, fValue, rValue[listKey][fValue]));
      }
    }
  }
  const formElementUI = React.createElement(formElement, {}, childNodes);
  return React.createElement(opertionTypeElement, {title:getRes(cKey, rgKey, rKey), ...props }, formElementUI);
}

// export const createList = (cKey, rgKey, rKey, rValue, props) => {
//
//   const childNodes = [];
//   const listKey = rValue['list'];
//   for (let [listKey, listValue] of Object.entries(listKey)) {
//     if (listKey === 'key') {
//       for (let [fKey, fValue] of listValue.entries()) {
//         childNodes.push(createListField(cKey, rgKey, rKey, undefined, fValue, rValue[fValue]));
//       }
//     } else {
//       for (let [fKey, fValue] of listValue.entries()) {
//         childNodes.push(createListField(cKey, rgKey, rKey, listKey, fValue, rValue[listKey][fValue]));
//       }
//     }
//   }
//
//   return (
//     <List {...props} title={getRes(cKey, rgKey, rKey)}>
//       <Datagrid>
//         {childNodes}
//       </Datagrid>
//     </List>
//   );
// }

// export const createCreate = (cKey, rgKey, rKey, rValue, props) => {
//
//   const childNodes = [];
//   for (let [fgKey, fgValue] of Object.entries(rValue)) {
//     if (fgValue['type'] === RESOURCE_GOURP) {
//       for (let [key, value] of Object.entries(fgValue)) {
//         childNodes.push(createCreateField(cKey, rgKey, rKey, fgKey, key, value));
//       }
//     }
//     childNodes.push(createCreateField(cKey, rgKey, rKey, undefined, fgKey, fgValue));
//   }
//   return (
//     <Create {...props} title={getRes(cKey, rgKey, rKey)}>
//       <SimpleForm>
//         {childNodes}
//       </SimpleForm>
//     </Create>
//   );
// }

// export const createEdit = (cKey, rgKey, rKey, rValue, props) => {
//   const childNodes = [];
//   for (let [fgKey, fgValue] of Object.entries(rValue)) {
//     if (fgValue['type'] === RESOURCE_GOURP) {
//       for (let [key, value] of Object.entries(fgValue)) {
//         if (key === 'type' || key === 'zh_CN') {
//           continue;
//         }
//         childNodes.push(createEditeField(cKey, rgKey, rKey, fgKey, key, value));
//       }
//     }
//     childNodes.push(createEditField(cKey, rgKey, rKey, undefined, fgKey, fgValue));
//   }
//
//   return (
//     <Edit {...props} title={getRes(cKey, rgKey, rKey)}>
//       <SimpleForm>
//         {childNodes}
//       </SimpleForm>
//     </Edit>
//   );
// }