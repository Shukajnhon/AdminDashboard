import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Space, Table, Tag, Button, Modal, Form, Input} from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/#">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, {tags}) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href="/#">Invite {record.name}</a>
        <a href="/#">Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const UsersTable = () => {
  const [dataTable, setDataTable] = useState(data);
  //   const [formValues, setFormValues] = useState({
  //     name: '',
  //     age: '',
  //     key: '',
  //     address: '',
  //     tags: '',
  //   });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('values', values);
    const newValues = {
      name: values.name,
      age: values.age,
      key: uuidv4(),
      address: values.address,
      tags: ['cool', 'teacher'],
    };
    setDataTable((prevItem) => {
      return [...prevItem, newValues];
    });
    // reset form
    const form = document.querySelector('#validateOnly');
    form.reset();
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>

      <Modal
        title="Add New User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          {/* name */}
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* age */}
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Address */}
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              {/* <SubmitButton form={form} /> */}
              <Button type="primary" htmlType="submit">
                Add User
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={dataTable}></Table>
    </div>
  );
};

export default UsersTable;
