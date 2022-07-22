import React from 'react';
import Navbar from '../common/components/navbar/Navbar';
import Sidebar from '../common/components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { CustomDiv, RowDiv } from './WrapperStyles';

function Wrapper() {
  return (
    <CustomDiv>
      <Navbar />
      <RowDiv>
        <Sidebar />
        <Outlet />
      </RowDiv>
    </CustomDiv>
  );
}

export default Wrapper;
