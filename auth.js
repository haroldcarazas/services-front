import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        const { email, password } = credentials;
        const res = await fetch(
          'https://funval-api.onrender.com/api/v1/auth/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const data = await res.json();
        console.log(data);

        localStorage.setItem('token', data.token);

        if (res.ok && data) {
          return data;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
