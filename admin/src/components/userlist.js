import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton
} from 'react-admin'

const UserList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <EmailField source="Username" />
            <TextField source="Email" />
            <TextField source="Password" />
            <TextField source="Role" />
            <EditButton basePath='/Roles' />
            <DeleteButton basePath='/Roles' />
        </Datagrid>
    </List>
}

export default UserList;
