import { auth } from '@/auth';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { redirect } from 'next/navigation';

async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) {
    return redirect('/login');
  }
  return (
    <>
      <Navbar fName={session.user.name} />
      <Sidebar role={session.user.role.name} />
      <main className='ms-[350px] mt-[70px] h-[calc(100vh_-_70px)]'>
        {children}
      </main>
    </>
  );
}

export default DashboardLayout;