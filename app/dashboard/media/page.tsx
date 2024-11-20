"use client"
import React from 'react';
import { Tree, Modal } from 'antd';
import { DataNode } from 'antd/es/tree';

const Page: React.FC = () => {
  // Define your data structure for the tree
  const treeData: DataNode[] = [
    {
      title: 'Channels', // Parent node for the first level
      key: '0',
      children: [
        {
          title: 'Admin', // Child nodes for Channels
          key: '0-0',
        },
        {
          title: 'Staff', // Child nodes for Channels
          key: '0-1',
        },
        {
          title: 'Customer', // Child nodes for Channels
          key: '0-2',
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen p-4">
      {/* Left Section (Sidebar) */}
      <div className="w-[15%] h-full bg-gray-300">
        <Tree
          treeData={treeData} // Pass the tree data to the Tree component
          defaultExpandAll // Expands all nodes by default
          showLine // Shows lines connecting nodes
        />
      </div>

      {/* Right Section */}
      <div className="w-[85%] h-full bg-red-500">
        {/* Right content goes here */}
        
      </div>

      <Modal></Modal>

    </div>
  );
};

export default Page;
