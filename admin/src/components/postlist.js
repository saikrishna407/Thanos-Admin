import React from 'react';
import {List,Datagrid,TextField,EmailField,EditButton,DeleteButton} from 'react-admin'

const PostList=(props)=> {
  return <List {...props}>
      <Datagrid>
        <TextField  source="id"/>
        <TextField  source="Name"/>
        <TextField source="Adderss"/>
        <EmailField  source="Email"/>
        <TextField  source="Phone Number"/>
        <TextField  source="Website"/>
        <EditButton basePath='/Organization' />
        <DeleteButton basePath='/Organization' />
      </Datagrid>
  </List>
}

export default PostList;
