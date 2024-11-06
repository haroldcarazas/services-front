import { auth } from '@/auth';
import DashboardLayout from '@/components/DashboardLayout';
import { createService } from '@/services/apiServices';

const handleSubmit = async formData => {
  'use server';
  const session = await auth();
  try {
    const res = await createService(session.accessToken, formData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

function Page() {
  return (
    <DashboardLayout>
      <section className='p-3 flex flex-col items-center gap-3'>
        <h1 className='text-xl'>Reportar horas de servicio</h1>
        <form
          method='POST'
          action={handleSubmit}
          className='flex flex-col gap-3 w-max-[600px] p-2'
        >
          <label className='form-label'>
            Selecciona una categoría:
            <select name='category_id' className='form-input'>
              <option value='1'>Servicios de salud</option>
              <option value='2'>Servicios de transporte</option>
              <option value='3'>Servicios de alimentación</option>
            </select>
          </label>
          <label className='form-label'>
            Horas reportadas:
            <input
              className='form-input'
              type='number'
              name='amount_reported'
            />
          </label>
          <label className='form-label'>
            Descripción:
            <textarea className='form-input' name='description'></textarea>
          </label>
          <label className='form-label'>
            Sube la evidencia (PDF o Word):
            <input className='form-input' type='file' name='evidence' />
          </label>
          <button
            type='submit'
            className='bg-green-400 rounded-md self-center px-3 py-2 text-white'
          >
            Enviar
          </button>
        </form>
      </section>
    </DashboardLayout>
  );
}

export default Page;
