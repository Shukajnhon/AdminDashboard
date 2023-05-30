import React from 'react';
import styled from 'styled-components';

import {Input} from 'antd';
const {Search} = Input;

export const SearchInput = () => {
  const onSearch = (value) => console.log(value);
  return (
    <SearchInputStyle className="search">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </SearchInputStyle>
  );
};

const SearchInputStyle = styled.div`
  display: flex;
`;
