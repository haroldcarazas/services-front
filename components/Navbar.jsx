import { signOut } from '@/auth';

function Navbar({ fName }) {
  return (
    <nav className='fixed top-0 right-0 w-[calc(100vw_-_350px)] bg-blue-400 h-[70px] flex items-center justify-end px-4 text-white text-lg gap-4'>
      <p>{fName}</p>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type='submit' className='bg-red-400 px-2 py-1 rounded-md'>
          Cerrar sesión
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
