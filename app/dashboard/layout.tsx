"use client";
import SideNav from '@/app/dashboard/sidenav';
import TopNav from '@/app/dashboard/topnav';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {

  const [isSideNavVisible, setIsSideNavVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);  // 用于检测是否客户端环境
  
  const toggleSideNav = () => {
    setIsSideNavVisible((prev) => !prev);
  };

  const router = useRouter();

  useEffect(() => {
    // 只在客户端进行 localStorage 检查
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
    if (!localStorage.getItem('user')) {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        if (window.innerWidth <= 784) {
          setIsSideNavVisible(false);  // 小于 784px 隐藏侧边栏
        } else {
          setIsSideNavVisible(true);   // 大于 784px 显示侧边栏
        }
      };

      // 初始检测屏幕宽度
      handleResize();

      // 监听窗口尺寸变化
      window.addEventListener("resize", handleResize);

      // 清理事件监听
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  if (!isClient) {
    return null;  // 服务器端渲染时不渲染组件，避免水合错误
  }

  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden md:overflow-hidden">
      {isSideNavVisible && (<div className="w-full flex-none md:w-14">
        <SideNav />
      </div>)}
      <div className="flex-grow bg-gray-200 overflow-scroll">
        <TopNav isSideNavVisible={isSideNavVisible} toggleSideNav={toggleSideNav} />
        {children}
      </div>
    </div>
  );
}
