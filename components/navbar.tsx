"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function Navbar() {
  const { user } = useAuth()

  // Extrair o primeiro nome com segurança
  const firstName = user?.name ? user.name.split(" ")[0] : "Usuário"

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Mundo Endorfina</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:inline-block">Olá, {firstName}</span>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

