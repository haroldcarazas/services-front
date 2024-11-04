import { auth, signOut } from '@/auth';
import DashboardLayout from '@/components/DashboardLayout';
import { redirect } from 'next/navigation';

async function Page() {
  return (
    <DashboardLayout>
      <section className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-2xl'>Bienvenido</h1>
      </section>
    </DashboardLayout>
  );
}

export default Page;
