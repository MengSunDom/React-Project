import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <div className="h-16 bg-blue-600"></div>
      <div className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <button className="group down flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="font-medium navContent hidden group-hover:block transition-opacity duration-200 ease-in-out">Sign Out</div>
        </button>
      </div>
    </div>
  );
}
