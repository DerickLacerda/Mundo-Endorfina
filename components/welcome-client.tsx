"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Trophy, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"

export function WelcomeClient() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard")
    }
  }, [user, isLoading, router])

  // Se estiver carregando ou o usuário estiver logado, não mostra nada ainda
  if (isLoading || user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse-slow text-center">
          <h2 className="text-2xl font-bold">Carregando...</h2>
          <p className="text-muted-foreground">Aguarde um momento</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/40 p-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-center">Mundo Endorfina</h1>
          <p className="text-xl text-muted-foreground text-center mt-2">
            A rede social para corredores que buscam motivação e recompensas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Já tem uma conta?</CardTitle>
              <CardDescription>Faça login para acessar sua conta e continuar sua jornada</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Acesse sua conta para registrar corridas, acumular pontos e trocar por recompensas exclusivas.
                </p>
                <div className="border rounded-md p-3 bg-card">
                  <p className="text-sm font-medium">Contas para teste:</p>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <strong>Usuário:</strong> joao@exemplo.com / <strong>Senha:</strong> 123456
                    </p>
                    <p>
                      <strong>Admin:</strong> admin@exemplo.com / <strong>Senha:</strong> admin123
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Novo por aqui?</CardTitle>
              <CardDescription>Crie sua conta e comece a sua jornada de corridas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Junte-se à comunidade Mundo Endorfina e desfrute de:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Registro de corridas com fotos</li>
                  <li>Sistema de pontos e recompensas</li>
                  <li>Ranking de corredores</li>
                  <li>Metas personalizadas</li>
                  <li>Cupons exclusivos de parceiros</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Criar Conta
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} Mundo Endorfina. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

