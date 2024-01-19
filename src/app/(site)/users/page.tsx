import type { Metadata } from "next";
import { UsersList } from "./UsersList";

export const metadata: Metadata = {
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
