// Next.js Route Handlers
// Docs: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextResponse, NextRequest } from 'next/server'
import { createUser, getUsers } from "@/lib/prisma/users"

// Exported GET request
export async function GET() {
  try {
    const { users, error } = await getUsers()
    if (error) throw new Error("Error getting users")
    return NextResponse.json({ users }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" }, 
      { status: 500 }
    )
  }
}

// Exported POST request
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { user, error } = await createUser(data)
    if (error) throw new Error("Error creating user")
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" }, 
      { status: 500 }
    )
  }
}
