'use client';
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { usePathname } from 'next/navigation';  // Import from next/navigation

const DynamicBreadcrumb: React.FC = () => {
  const pathname = usePathname();  // Get the current pathname from next/navigation
  const pathnames = pathname?.split('/').filter(Boolean);  // Split the path into segments

  const breadcrumbItems = pathnames?.map((segment, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return {
      title: <a href={to}>{segment}</a>,  // Create clickable breadcrumb links
    };
  });

  return (
    <div className='Breadcrumb'>
      <Breadcrumb>
        <Breadcrumb.Item key={0}>Home</Breadcrumb.Item>
        {breadcrumbItems?.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item.title}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default DynamicBreadcrumb;