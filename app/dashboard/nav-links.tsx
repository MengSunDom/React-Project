import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
  import Link from 'next/link';

  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Introducation',
      href: '/dashboard/introducation',
      icon: DocumentDuplicateIcon,
    },
    { name: 'Shopping', href: '/dashboard/shopping', icon: UserGroupIcon },
    { name: 'Dashboard', href: '/dashboard/dashboard', icon: UserGroupIcon },
    { name: 'Social Media', href: '/dashboard/media', icon: UserGroupIcon },
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="group flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="navContent boxContent hidden group-hover:block transition-opacity duration-200 ease-in-out">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  