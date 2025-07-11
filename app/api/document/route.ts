import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { title, driveLink } = await req.json();
    
    if (!title || !driveLink) {
      return new NextResponse("Title and Drive Link are required", { status: 400 });
    }

    const user = await prisma.user.findUnique({ 
      where: { email: session.user.email } 
    });
    
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const document = await prisma.document.create({
      data: { 
        title, 
        driveLink, 
        userId: user.id 
      }
    });

    return NextResponse.json(document, { status: 201 });

  } catch (error) {
    console.error("Error creating document:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const documents = await prisma.document.findMany({
      where: {
        userId: (await prisma.user.findUnique({
          where: { email: session.user.email }
        }))?.id
      },
      orderBy: {
        createdAt: 'desc'  // Now this will work
      },
      select: {
        id: true,
        title: true,
        driveLink: true,
        createdAt: true  // Now this will work
      }
    });

    return NextResponse.json(documents);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}


// Add this to your existing API file (likely at /api/document/route.ts)
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return new NextResponse("Document ID is required", { status: 400 });
    }

    // Verify the document belongs to the current user
    const user = await prisma.user.findUnique({ 
      where: { email: session.user.email } 
    });
    
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const document = await prisma.document.findUnique({
      where: { id }
    });

    if (!document) {
      return new NextResponse("Document not found", { status: 404 });
    }

    if (document.userId !== user.id) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await prisma.document.delete({
      where: { id }
    });

    return new NextResponse(null, { status: 204 });

  } catch (error) {
    console.error("Error deleting document:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}