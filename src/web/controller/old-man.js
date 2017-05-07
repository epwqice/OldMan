import React from 'react';
import { SimpleForm, List, Datagrid, Edit, Create, TextField, TextInput, EditButton } from 'admin-on-rest/lib/mui';
import { getRes } from '../res/local';


export const OldManList = (props) => (
  <List {...props} title={getRes('old_man_title')}>
    <Datagrid>
      <TextField label={getRes('old_man_id')} source="id" />
      <TextField label={getRes('old_man_record_id')} source='recordID' />
      <TextField label={getRes('old_man_name')} source='name' />
      <TextField label={getRes('old_man_born_date')} source='bornDate' />
      <TextField label={getRes('old_man_certificate_id')} source='certificateID' />
      <TextField label={getRes('old_man_nation')} source='nation' />
      <TextField label={getRes('old_man_company')} source='company' />
      <EditButton />
    </Datagrid>
  </List>
);

export const OldManEdit = (props) => (
  <Edit {...props} title={getRes('old_man')}>
    <SimpleForm>
      <TextInput label={getRes('old_man_id')} source='id' />
      <TextInput label={getRes('old_man_record_id')} source='recordID' />
      <TextInput label={getRes('old_man_name')} source='name' />
      <TextInput label={getRes('old_man_born_date')} source='bornDate' />
      <TextInput label={getRes('old_man_certificate_id')} source='certificateID' />
      <TextInput label={getRes('old_man_nation')} source='nation' />
      <TextInput label={getRes('old_man_company')} source='company' />
    </SimpleForm>
  </Edit>
);

export const OldManCreate = (props) => (
  <Create {...props} title={getRes('old_man')}>
    <SimpleForm>
      <TextInput label={getRes('old_man_id')} source='id' />
      <TextInput label={getRes('old_man_record_id')} source='recordID' />
      <TextInput label={getRes('old_man_name')} source='name' />
      <TextInput label={getRes('old_man_born_date')} source='bornDate' />
      <TextInput label={getRes('old_man_certificate_id')} source='certificateID' />
      <TextInput label={getRes('old_man_nation')} source='nation' />
      <TextInput label={getRes('old_man_company')} source='company' />
    </SimpleForm>
  </Create>
);