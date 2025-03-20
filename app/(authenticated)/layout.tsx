import type React from "react"
import { AuthenticatedLayoutClient } from "@/components/authenticated-layout-client"

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthenticatedLayoutClient>{children}</AuthenticatedLayoutClient>
}

