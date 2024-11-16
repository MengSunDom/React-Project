"use client"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Table,Input,Button } from 'antd';
import 'antd/dist/antd.css'
import { useState } from 'react';
import Loginform from '@/app/login/loginform';
const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
];

// Sample data for users
const data = [
  {
    key: '1',
    username: 'Admin',
    password: 'Admin',
    role: 'Admin',
  },
  {
    key: '2',
    username: 'Customer',
    password: 'Customer',
    role: 'Customer',
  },
  {
    key: '3',
    username: 'Seller',
    password: 'Seller',
    role: 'Seller',
  },
  {
    key: '4',
    username: 'Staff',
    password: 'Staff',
    role: 'Staff',
  },
];

export default function Home() {
  const [isInfoVisible, setInfoVisible] = useState(false);
  
  const showInfo = () => {
    setInfoVisible((prev) => !prev);
  };


  return (
    <main className="flex min-h-screen flex-col bg-[url('../public/bg.jpg')] bg-cover h-screen bg-center">
      <div className="flex items-center justify-center mx-auto my-auto bg-blue-50">
        {isInfoVisible&&(<div className="items-center justify-center p-6 ">
          <h2>User Permissions</h2>
          <Table columns={columns} dataSource={data} pagination={false}/>
        </div>)}
        <div className="flex flex-col justify-center gap-6 rounded-lg  bg-blue-200  login_form p-6">
          <p className={`text-xl text-gray-800 md:text-xl md:leading-normal`}>
            <strong>Welcome to My Website.</strong> <br></br>
            Discover amazing projects and get involved!
          </p>
          <Button type="primary"  onClick={showInfo}> User Info </Button>
          <Loginform/>
        </div>
      </div>
    </main>
  );
}
