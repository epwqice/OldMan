import React from 'react';
import { SimpleForm, List, Datagrid, Edit, Create, TextField, TextInput, EditButton, SelectInput } from 'admin-on-rest/lib/mui';
import * as Type from '../../data/type_defined';
import { getRes, getEnum } from '../res/local';

const create = (id, label, element) => {

  const newElement = React.createElement(TextInput, {label:label, source:id});
  return React.cloneElement(newElement);
}

const createFieldFactory = {
  list: {
    'string': (id, label) => <TextField label={label} source={id} />,
    'enum': (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    string: (id, label) => <TextField label={label} source={id} />,
    default: (id, label) => <TextField label={label} source={id} />,
  },
  edit: {
    'string': (id, label) => <TextInput label={label} source={id} />,
    'enum': (id, label, options) => <SelectInput label={label} source={id} choices={options.choices} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    // string: (id, label) => <TextInput label={label} source={id} />,
    default: (id, label) => <TextInput label={label} source={id} />,
  },
};

export const createListField = (cKey, rgKey, rKey, fgKey, key, field) => {
  const fType = field.type && createFieldFactory.list[field.type] ? field.type : 'default';

  return createFieldFactory.list[fType](fgKey ? (fgKey + '_' + key):key, getRes(cKey, rgKey, rKey, fgKey, key));
}

export const createEditField = (cKey, rgKey, rKey, fgKey, key, field) => {
  const fType = field.type && createFieldFactory.list[field.type] ? field.type : 'default';
  const options = {};
  if (field && 'enum' === field.type) {
    options['choices'] = getEnum(key);
  }
  const r = getRes(cKey, rgKey, rKey, fgKey, key);
  return createFieldFactory.edit[fType](fgKey ? (fgKey + '_' + key):key, getRes(cKey, rgKey, rKey, fgKey, key), options);
}

export const createCreateField = (cKey, rgKey, rKey, fgKey, key, field) => {
  return createEditField(cKey, rgKey, rKey, fgKey, key, field);
}