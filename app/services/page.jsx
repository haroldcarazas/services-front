import { auth } from '@/auth';
import DashboardLayout from '@/components/DashboardLayout';
import TableServices from '@/components/TableServices';
import { getServices } from '@/services/apiServices';

async function Page() {
  const session = await auth();
  const services = await getServices(session.accessToken);

  return (
    <DashboardLayout>
      <section className='flex flex-col items-center p-2'>
        <button className='bg-green-400 rounded-md px-3 py-2 text-white self-end'>
          Registrar servicio
        </button>
        <TableServices services={services} />
      </section>
    </DashboardLayout>
  );
}

export default Page;
