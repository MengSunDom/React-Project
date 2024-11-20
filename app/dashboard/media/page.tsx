"use client";
import React, { useState } from 'react';
import { Tree, Modal, Button } from 'antd';
import { DataNode } from 'antd/es/tree';
import { XOutlined } from '@ant-design/icons';

// Define your content interface
interface Content {
  contentID: string;
  username: string;
  content: string;
  publishTime: string;
  rating: number;
  feedbackID: Array<string>;
}

const Page: React.FC = () => {
  // Define tree data
  const treeData: DataNode[] = [
    {
      title: 'Channels', // Parent node for the first level
      key: '0',
      children: [
        { title: 'Admin', key: '0-0' },
        { title: 'Staff', key: '0-1' },
        { title: 'Customer', key: '0-2' },
      ],
    },
  ];

  // Sample content data
  const contentMap: Content[] = [
    {
      contentID: '123456789',
      username: 'staff',
      content: 'Hello World!',
      publishTime: '20/11/2024 11:00',
      rating: 10,
      feedbackID: ['', '', ''],
    },
    {
      contentID: '987654321',
      username: 'admin',
      content: 'New Update Available',
      publishTime: '20/11/2024 14:00',
      rating: 8,
      feedbackID: ['', ''],
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='p-4'>
      <div className="h-20 w-full bg-blue-300 p-4">
        <span style={{ fontSize: '2rem' }}>
          <XOutlined className="px-4" />
          Social Media
        </span>
        <Button type="primary" className='mx-10' style={{ float: 'right' }} onClick={showModal}>
          Publish
        </Button>
        <Button type="primary" className='' style={{ float: 'right' }}>
          Refresh
        </Button>
      </div>

      <div className="flex h-screen">
        <div className="w-[15%] h-full bg-gray-300">
          <Tree treeData={treeData} defaultExpandAll showLine />
        </div>

        <div className="w-[85%] h-full bg-red-500 p-4">
          {/* Map over the contentMap to display content */}
          {contentMap.map((item) => (
            <div key={item.contentID} className="mb-4 p-4 bg-white shadow-md">
              <h3>{item.username}</h3>
              <p>{item.content}</p>
              <small>Published: {item.publishTime}</small>
              <div>Rating: {item.rating}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for publishing content */}
      <Modal
        title="Publish Content"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Content publishing form will go here.</p>
      </Modal>
    </div>
  );
};

export default Page;
