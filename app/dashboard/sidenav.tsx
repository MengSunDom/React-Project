import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation'; 
import { Alert } from 'antd'; 
import { useState } from 'react';

export default function SideNav() {
  const [alertVisible, setAlertVisible] = useState(false);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('user');
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
    router.push('/');
  };

  return (
    <div className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background sm:flex">
      <div className="h-16 bg-blue-600"></div>
      <div className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        {alertVisible && (
          <Alert
            message="You have successfully logged out"
            type="success"
            showIcon
            closable
            className="mb-4"
          />
        )}

        <button
          className="group down flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3"
          onClick={logout}
        >
          <PowerIcon className="w-6" />
          <div className="font-medium boxContent navContent hidden group-hover:block transition-opacity duration-200 ease-in-out">Sign Out</div>
        </button>
      </div>
    </div>
  );
}
