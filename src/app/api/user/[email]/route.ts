// Next.js Route Handlers
// Docs: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextResponse, NextRequest } from 'next/server'
import { deleteUser, updateUser } from "@/lib/prisma/users"

// Exported DELETE request
export async function DELETE(
    request: NextRequest,
    { params }: { params: { email: string } }
  ) {
  try {
    const id = params.email;
    await deleteUser(id)
    return NextResponse.json(
      { message: "User deleted" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" }, 
      { status: 500 }
    )
  }
}

// Exported PUT request
export async function PUT(
  request: NextRequest,
  { params }: { params: { email: string } }
  ) {
  const email = params.email;
  const { ...data } = await request.json();

  try {
    const result = await updateUser(email, data);
    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" }, 
      { status: 500 }
    )
  }
}
