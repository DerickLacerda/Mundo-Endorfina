import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, TrendingUp, Medal } from "lucide-react"
import { RecentRuns } from "@/components/recent-runs"
import { UserRanking } from "@/components/user-ranking"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 space-y-4 p-8 pt-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Pontos</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.250</div>
              <p className="text-xs text-muted-foreground">+150 pontos na última semana</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Metas Concluídas</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/5</div>
              <p className="text-xs text-muted-foreground">60% das metas concluídas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Distância Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42,5 km</div>
              <p className="text-xs text-muted-foreground">+8,2 km na última semana</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vitórias</CardTitle>
              <Medal className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Em 5 corridas virtuais</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-4">
            <CardHeader>
              <CardTitle>Progresso da Meta Atual</CardTitle>
              <CardDescription>Meta: Correr 100km em 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Progresso</div>
                    <div className="font-medium">42,5/100 km</div>
                  </div>
                  <Progress value={42.5} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Tempo Restante</div>
                    <div className="font-medium">18 dias</div>
                  </div>
                  <Progress value={40} className="bg-muted" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Sua Posição no Ranking</CardTitle>
              <CardDescription>Entre os 100 melhores corredores</CardDescription>
            </CardHeader>
            <CardContent>
              <UserRanking />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Corridas Recentes</CardTitle>
              <CardDescription>Suas últimas 5 corridas registradas</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentRuns />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

