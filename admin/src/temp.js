// {
//     "id": "1",
//     "Name": "sai",
//     "Adderss": "This is the post body",
//     "Email": "06-03-2021",
//     "Phone Number": "999999999",
//     "Website": "www.saikrishna.com"
//   },




// {
//     "id": "2",
//     "title": "Name Two",
//     "body": "This is the post body Two",
//     "publishAt": "06-03-2021"
//   }
///////////////////////////


// import React from 'react';
// import {Edit,SimpleForm,TextInput,DateInput} from 'react-admin'

// const PostEdit=(props)=> {
//   return <Edit title='Create a Post' {...props}>
//     <SimpleForm>
//         <TextInput disabled source='id' />
//         <TextInput source='Name' />
//         <TextInput  source='Adderss' />
//         <TextInput  source='Email' />
//         <TextInput  source='Phone Number' />
//         <TextInput multiline source='Website' />
//     </SimpleForm>
//   </Edit>
// }

// export default PostEdit;






// import React from 'react';
// import {Create,SimpleForm,TextInput,DateInput} from 'react-admin'

// const PostCreate=(props)=> {
//   return <Create title='Create a Post' {...props}>
//     <SimpleForm>
//         <TextInput source='Name' />
//         <TextInput  source='Adderss' />
//         <TextInput  source='Email' />
//         <TextInput  source='Phone Number' />
//         <TextInput multiline source='Website' />
//     </SimpleForm>
//   </Create>
// }

// export default PostCreate;




// import React from 'react';
// import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, TextInput } from 'react-admin'

// const PostList = (props) => {
//     return <List {...props}>
//         <Datagrid>
//             <TextField source="id" />
//             <TextField source="Name" />
//             <TextField source="Adderss" />
//             <EmailField source="Email" />
//             <TextField source="Phone Number" />
//             <TextField source="Website" />
//             <EditButton basePath='/posts' />
//             <DeleteButton basePath='/posts' />
//         </Datagrid>
//     </List>
// }

// export default PostList;
