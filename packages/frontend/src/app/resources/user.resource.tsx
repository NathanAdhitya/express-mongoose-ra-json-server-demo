import React from 'react';
import {
  Create,
  CreateProps,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  EditProps,
  EmailField,
  List,
  required,
  ResourceProps,
  Show,
  ShowProps,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';

const resourceName = 'user';
const options = {};
const icon = undefined;

const filters = [
  <TextInput key="q" source="q" label="Search" alwaysOn />,
  <TextInput source="company" />,
];

const ResourceList: React.FC = (props) => {
  return (
    <List {...props} filters={filters}>
      <Datagrid>
        <TextField source="username" />
        <TextField source="name" />
        <TextField source="company" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const ResourceCreate: React.FC<CreateProps> = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="username" validate={[required()]} />
        <DateInput source="birthDate" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Create>
  );
};

const ResourceEdit: React.FC<EditProps> = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="username" validate={[required()]} />
        <DateInput source="birthDate" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Edit>
  );
};
const ResourceShow: React.FC<ShowProps> = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <DateField source="birthDate" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="company" />
      </SimpleShowLayout>
    </Show>
  );
};

ResourceList.displayName = `${resourceName}List`;
ResourceCreate.displayName = `${resourceName}Create`;
ResourceEdit.displayName = `${resourceName}Edit`;
ResourceShow.displayName = `${resourceName}Show`;

export default {
  list: ResourceList,
  create: ResourceCreate,
  edit: ResourceEdit,
  show: ResourceShow,
  icon,
  options,
} as Omit<ResourceProps, 'name'>;
