'use client';
import { createService } from '@/services/apiServices';

function FormService({ token }) {
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await createService(token, formData);
      alert(res.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form
      method='POST'
      onSubmit={handleSubmit}
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
        <input className='form-input' type='number' name='amount_reported' />
      </label>
      <label className='form-label'>
        Nivel:
        <input className='form-input' type='number' name='level' />
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
  );
}

export default FormService;
