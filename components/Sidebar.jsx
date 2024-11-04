import Image from 'next/image';
import Link from 'next/link';

function Sidebar({ role }) {
  const nameRole = role.toLowerCase();
  return (
    <section className='h-screen w-[350px] bg-blue-400 absolute top-0 flex flex-col items-center gap-6 pt-1'>
      <Image
        className='mix-blend-multiply mb-10'
        src='/images/logo-funval-fondo.png'
        alt='FUNVAL Logo'
        priority
        width={300}
        height={100}
      />
      <Link className='sidebar-btn' href='/services'>
        Horas de servicio
      </Link>
      {nameRole === 'admin' && (
        <>
          <Link className='sidebar-btn' href='/schools'>
            Escuelas
          </Link>
          <Link className='sidebar-btn' href='/countries'>
            Países
          </Link>
          <Link className='sidebar-btn' href='/users'>
            Usuarios
          </Link>
        </>
      )}
    </section>
  );
}

export default Sidebar;
