
import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Breadcrumb from './breadcrumb';
import SearchBar from './searchBar';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Personalbar from './personalBar';


interface TopNavProps {
  isSideNavVisible: boolean;
  toggleSideNav: () => void;
}

export default function TopNav({ isSideNavVisible, toggleSideNav }: TopNavProps) {
  return (
    <div className="topNav p-5">
      <div className="showSideNav cursor-pointer" onClick={toggleSideNav}>
        {isSideNavVisible?<MenuFoldOutlined />:<MenuUnfoldOutlined />}
      </div>
      <Personalbar />
      <Breadcrumb />
      {/* <SearchBar /> */}
    </div>
  );
}
