import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin'

const UserCreate = (props) => {
  return <Create title='Create a Roles' {...props}>
    <SimpleForm>
      <TextInput source='Name' />
      <TextInput source='Username' />
      <TextInput source='Email' />
      <TextInput source='Password' />
      <SelectInput source="Role" choices={[
        { id: 'admin', name: 'Admin' },
        { id: 'user', name: 'User' }
      ]} />
    </SimpleForm>
  </Create>
}

export default UserCreate;