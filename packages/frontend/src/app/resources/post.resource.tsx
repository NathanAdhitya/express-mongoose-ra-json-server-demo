import { RichTextInput } from 'ra-input-rich-text';
import React from 'react';
import {
  AutocompleteInput,
  Create,
  CreateProps,
  Datagrid,
  Edit,
  EditButton,
  EditProps,
  List,
  ReferenceField,
  ReferenceInput,
  required,
  ResourceProps,
  RichTextField,
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
  <ReferenceInput source="userId" reference="user" label="Writer">
    <AutocompleteInput optionText="name" optionValue="id" label="Writer" />
  </ReferenceInput>,
];

const ResourceList: React.FC = (props) => {
  return (
    <List {...props} filters={filters}>
      <Datagrid>
        <ReferenceField source="userId" reference="user" label="Writer">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const ResourceCreate: React.FC<CreateProps> = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="user" label="Writer">
          <AutocompleteInput
            optionText="name"
            optionValue="id"
            validate={[required()]}
          />
        </ReferenceInput>
        <TextInput source="title" validate={[required()]} />
        <RichTextInput source="content" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

const ResourceEdit: React.FC<EditProps> = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="user" label="Writer">
          <AutocompleteInput
            optionText="name"
            optionValue="id"
            validate={[required()]}
          />
        </ReferenceInput>
        <TextInput source="title" validate={[required()]} />
        <RichTextInput source="content" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
const ResourceShow: React.FC<ShowProps> = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField source="userId" reference="user" label="Writer">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <RichTextField source="content" />
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
