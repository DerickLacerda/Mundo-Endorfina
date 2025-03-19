import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Tag, Target, BarChart3 } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 space-y-4 p-8 pt-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Painel Administrativo</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.284</div>
              <p className="text-xs text-muted-foreground">+24 usuários na última semana</p>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/admin/usuarios">Gerenciar Usuários</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cupons Ativos</CardTitle>
              <Tag className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">3 cupons resgatados esta semana</p>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/admin/cupons">Gerenciar Cupons</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Metas Ativas</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 metas concluídas esta semana</p>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/admin/metas">Gerenciar Metas</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Estatísticas da Plataforma</CardTitle>
              <CardDescription>Visão geral do desempenho da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">Gráficos de estatísticas da plataforma</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" asChild>
                <Link href="/admin/usuarios/novo">
                  <Users className="mr-2 h-4 w-4" />
                  Adicionar Novo Usuário
                </Link>
              </Button>
              <Button className="w-full justify-start" asChild>
                <Link href="/admin/cupons/novo">
                  <Tag className="mr-2 h-4 w-4" />
                  Criar Novo Cupom
                </Link>
              </Button>
              <Button className="w-full justify-start" asChild>
                <Link href="/admin/metas/nova">
                  <Target className="mr-2 h-4 w-4" />
                  Definir Nova Meta
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/admin/relatorios">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Gerar Relatórios
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

