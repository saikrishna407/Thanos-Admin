import React from 'react';
import {Create,SimpleForm,TextInput} from 'react-admin'

const PostCreate=(props)=> {
  return <Create title='Create a Organization' {...props}>
    <SimpleForm>
        <TextInput source='Nmae' />
        <TextInput multiline source='Adderss' />
        <TextInput source='Email' />
        <TextInput source='Phone Number' /> 
        <TextInput source='Website' /> 
    </SimpleForm>
  </Create>
}

export default PostCreate;
