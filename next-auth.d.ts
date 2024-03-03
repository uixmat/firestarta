// next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface User {
    jobTitle?: string;
    accounts: Account[];
    subscriptions: Subscription[];
  }

  interface Session {
    user: User;
  }

  interface JWT {
    jobTitle?: string;
  }

  interface Account {
    provider: string;
  }

  interface Subscription {
    customerId: ReactNode;
    id: number;
    lemonSqueezyId: number;
    orderId: number;
    name: string;
    email: string;
    status: string;
    renewsAt?: Date;
    endsAt?: Date;
    trialEndsAt?: Date;
    resumesAt?: Date;
    userId: string;
    isUsageBased: boolean;
    subscriptionItemId?: number;
  }
}
