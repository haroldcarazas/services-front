import { auth } from '@/auth';
import DashboardLayout from '@/components/DashboardLayout';
import FormService from '@/components/FormService';

async function Page() {
  const session = await auth();
  return (
    <DashboardLayout>
      <section className='p-3 flex flex-col items-center gap-3'>
        <h1 className='text-xl'>Reportar horas de servicio</h1>
        <FormService token={session.accessToken} />
      </section>
    </DashboardLayout>
  );
}

export default Page;
