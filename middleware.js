// middleware.js
import { NextResponse } from "next/server"

export function middleware(req) {
  const token = req.cookies.get("token")?.value // get cookie value safely

  // If user has no token, redirect to sign-up
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!sign-in|sign-up|_next|favicon.ico).*)"], 
}
