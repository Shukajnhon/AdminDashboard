import React from 'react';
import {LayoutAdmin} from 'components/Layout';
import UsersTable from 'components/UsersTable/UsersTable';

const UserPage = () => {
  return (
    <div>
      <LayoutAdmin>
        <UsersTable></UsersTable>
      </LayoutAdmin>
    </div>
  );
};

export default UserPage;
