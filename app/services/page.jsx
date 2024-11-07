import { auth } from '@/auth';
import DashboardLayout from '@/components/DashboardLayout';
import TableServices from '@/components/TableServices';
import { getServices } from '@/services/apiServices';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function Page() {
  const session = await auth();
  console.log(session);
  // if (session.user.role.name === 'Student') {
  //   return redirect('/services/new');
  // }

  const services = await getServices(session.accessToken);

  return (
    <DashboardLayout>
      <section className='flex flex-col items-center p-2'>
        <Link
          className='bg-green-400 rounded-md px-3 py-2 text-white self-end'
          href='/services/new'
        >
          Registrar servicio
        </Link>
        <TableServices services={services} />
      </section>
    </DashboardLayout>
  );
}

export default Page;
