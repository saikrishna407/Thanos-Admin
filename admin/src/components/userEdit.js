import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin'

const UserEdit = (props) => {
  return <Edit title='Create a User' {...props}>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='Name' />
      <TextInput source='Username' />
      <TextInput source='Email' />
      <TextInput source='Password' />
      <SelectInput source="Role" choices={[
        { id: 'admin', name: 'Admin' },
        { id: 'user', name: 'User' }
      ]} />
    </SimpleForm>
  </Edit>
}

export default UserEdit;