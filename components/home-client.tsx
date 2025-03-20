"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export function HomeClient() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    // Só redireciona quando o carregamento inicial terminar
    if (!isLoading) {
      if (user) {
        router.push("/dashboard") // Redireciona para dashboard quando logado
      } else {
        router.push("/welcome") // Redireciona para welcome quando não logado
      }
    }
  }, [user, isLoading, router])

  // Mostra tela de carregamento enquanto decide para onde redirecionar
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse-slow text-center">
        <h2 className="text-2xl font-bold">Carregando...</h2>
        <p className="text-muted-foreground">Aguarde um momento</p>
      </div>
    </div>
  )
}

