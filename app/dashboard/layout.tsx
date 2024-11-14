import SideNav from '@/app/dashboard/sidenav';
// import TopNav from '@/app/dashboard/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-14">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-6 bg-gray-200">
        {/* <TopNav /> */}
        {children}
      </div>
    </div>
  );
}