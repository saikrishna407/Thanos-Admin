import React from 'react';
import {Edit,SimpleForm,TextInput} from 'react-admin'

const PostEdit=(props)=> {
  return <Edit title='Create a Post' {...props}>
    <SimpleForm>
        <TextInput source='id' />
        <TextInput source='Name' />
        <TextInput multiline source='Adderss' />
        <TextInput source='Email' />
        <TextInput source='Phone Number' /> 
        <TextInput source='Website' /> 
    </SimpleForm>
  </Edit>
}

export default PostEdit;