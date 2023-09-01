// next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface User {
    jobTitle?: string;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    jobTitle?: string;
  }
}