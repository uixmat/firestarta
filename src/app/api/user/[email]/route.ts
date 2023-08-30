import { NextResponse, NextRequest } from 'next/server'
import { deleteUser } from "@/lib/prisma/users"

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