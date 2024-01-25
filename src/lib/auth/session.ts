import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export function getSession() {
  return getServerSession(authOptions)
}