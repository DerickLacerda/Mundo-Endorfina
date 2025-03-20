import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Redirecionar a rota raiz para /welcome
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/welcome", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}

