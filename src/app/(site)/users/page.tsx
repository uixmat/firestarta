import type { Metadata } from "next";
import { UsersList } from "./UsersList";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "User list",
  description: "All users enjoying Firestarta.dev",
};

export default function UsersPage() {
  return (
    <div className="container py-20">
      <UsersList />
    </div>
  );
}
