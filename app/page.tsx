"use client"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Table,Input,Button } from 'antd';
import 'antd/dist/antd.css'
import { useState } from 'react';
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
        {isInfoVisible&&(<div className="items-center justify-center p-4 ">
          <h2>User Permissions</h2>
          <Table columns={columns} dataSource={data} pagination={false}/>
        </div>)}
        <div className="flex flex-col justify-center gap-6 rounded-lg  bg-blue-200  login_form p-4">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to My Website.</strong> <br></br>
            Discover amazing projects and get involved!
          </p>
          <Button onClick={showInfo}> User Info </Button>
          User Name: <Input className="w-80"></Input>
          PassWord: <Input className="w-80"></Input>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
