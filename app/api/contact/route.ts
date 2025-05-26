import { NextResponse } from 'next/server'
import { sendMail } from './mailer' // adjust path as per your folder structure


interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody
    const { name, email, message } = body

    // ✅ Step 1: Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // ✅ Step 2: Send email
    await sendMail({ name, email, message })

    // ✅ Step 3: Return success
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
}
