import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Space, Table, Button, Modal, Form, Input} from 'antd';
import {useDispatch, useSelector} from 'react-redux';

import Excel from 'components/Excel/Excel';

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const UsersTable = () => {
  const userLists = useSelector((state) => state.users.userLists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [dispatch.users]);
  // console.log('userLists', userLists);

  // const [dataTable, setDataTable] = useState(userLists);

  // Modal Edit user
  const [isEditOpen, setIsEditOpen] = useState(false);
  const showEditModal = () => {
    setIsEditOpen(true);
  };
  const handleEditOk = () => {
    setIsEditOpen(false);
  };
  const handleEditCancel = () => {
    setIsEditOpen(false);
  };
  //Modal Add User
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

  // add user by ham onFinish
  const onFinish = (user) => {
    console.log('user', user);
    const newUser = [
      ...userLists,
      {
        key: uuidv4(),
        id: uuidv4(),
        name: user.name,
        email: user.email,
        address: user.address,
      },
    ];
    //add user
    dispatch.users.setUserList(newUser);
    const form = document.querySelector('#validateOnly');
    form.reset();
  };

  // Delete user
  const onDelete = (record) => {
    const itemId = record.id;
    console.log('itemId', itemId);
    const newUserList = userLists.filter((item) => item.id !== itemId);
    dispatch.users.setUserList(newUserList);
  };

  // handleUpdateUser
  const handleUpdateUser = (values) => {
    console.log('values', values);
    const itemId = values.editForm_id;
    const items = userLists.find((item) => {
      return item.id === itemId;
    });
    // chua xong
    console.log('items', items);
    console.log('itemId', itemId);
  };

  // fill user data on edit form
  const onFill = (record) => {
    form.setFieldsValue({
      editForm_name: record.name,
      editForm_email: record.email,
      editForm_address: record.address.city,
      editForm_id: record.id,
    });
  };

  // Edit user
  const onEdit = (record) => {
    console.log('record', record);

    showEditModal();
    onFill(record);
    console.log('edited');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text) => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (address) => {
        return <span>{address.city}</span>;
      },
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => onEdit(record)}>
            <span style={{color: '#1677ff', cursor: 'pointer'}}>Edit</span>
          </button>
          <button onClick={() => onDelete(record)}>
            <span style={{color: '#1677ff', cursor: 'pointer'}}>Delete</span>
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>

      {/* export excel */}
      <Excel
        fileName="export-user"
        data={[
          {
            columns: [
              {
                title: 'User Id',
                dataIndex: 'id',
                width: 5,
              },
              {
                title: 'Name',
                dataIndex: 'name',
                width: 20,
              },
              {
                title: 'Email',
                dataIndex: 'email',
                width: 50,
              },
              {
                title: 'Address',
                dataIndex: 'address',
                width: 50,
              },
            ],
            data: userLists,
            tabName: 'info',
          },
          // {
          //   columns: [
          //     {
          //       title: 'Name',
          //       dataIndex: 'name',
          //       width: 30,
          //     },
          //     {
          //       title: 'Address',
          //       dataIndex: 'address',
          //       width: 30,
          //     },
          //   ],
          //   data: userLists,
          //   tabName: 'contact',
          // },
        ]}
      >
        <Button>Export users</Button>
      </Excel>

      {/* model add user */}
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
          {/* email */}
          <Form.Item
            name="email"
            label="Email"
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

      {/* model edit user */}
      <Modal
        title="Edit User"
        open={isEditOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        footer={null}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={handleUpdateUser}
        >
          {/* name */}
          <Form.Item
            name="editForm_name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              value=""
            />
          </Form.Item>
          {/* email */}
          <Form.Item
            name="editForm_email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value="" />
          </Form.Item>
          {/* Address */}
          <Form.Item
            name="editForm_address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value="" />
          </Form.Item>
          {/* Id */}
          <Form.Item style={{display: 'none'}} name="editForm_id">
            <Input className="idEditForm"></Input>
          </Form.Item>
          <Form.Item>
            <Space>
              {/* <SubmitButton form={form} /> */}
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={userLists}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  );
};

export default UsersTable;
