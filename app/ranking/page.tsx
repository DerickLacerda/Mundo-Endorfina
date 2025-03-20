import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface RankingUser {
  id: string
  name: string
  avatar: string
  points: number
  position: number
  distance: number
  runs: number
}

export default function RankingPage() {
  // Dados simulados de ranking
  const rankingUsers: RankingUser[] = [
    {
      id: "1",
      name: "Ana Silva",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 2450,
      position: 1,
      distance: 245.8,
      runs: 32,
    },
    {
      id: "2",
      name: "Carlos Oliveira",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 2320,
      position: 2,
      distance: 232.5,
      runs: 29,
    },
    {
      id: "3",
      name: "Mariana Santos",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 2180,
      position: 3,
      distance: 218.3,
      runs: 27,
    },
    {
      id: "4",
      name: "Pedro Costa",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 2050,
      position: 4,
      distance: 205.2,
      runs: 25,
    },
    {
      id: "5",
      name: "Juliana Lima",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1980,
      position: 5,
      distance: 198.6,
      runs: 24,
    },
    {
      id: "6",
      name: "Roberto Alves",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1920,
      position: 6,
      distance: 192.4,
      runs: 23,
    },
    {
      id: "7",
      name: "Fernanda Dias",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1850,
      position: 7,
      distance: 185.7,
      runs: 22,
    },
    {
      id: "8",
      name: "Lucas Martins",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1780,
      position: 8,
      distance: 178.3,
      runs: 21,
    },
    {
      id: "9",
      name: "Camila Rocha",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1720,
      position: 9,
      distance: 172.5,
      runs: 20,
    },
    {
      id: "10",
      name: "João Silva",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1250,
      position: 10,
      distance: 125.8,
      runs: 15,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 space-y-4 p-8 pt-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Ranking de Corredores</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top 10 Corredores</CardTitle>
            <CardDescription>Os melhores corredores da plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankingUsers.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center gap-3 p-4 rounded-md border ${user.position === 10 ? "bg-muted" : ""}`}
                >
                  <Badge
                    variant={user.position <= 3 ? "secondary" : "outline"}
                    className="w-8 h-8 rounded-full flex items-center justify-center p-0 text-base font-semibold"
                  >
                    {user.position}
                  </Badge>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-muted-foreground">{user.points} pontos</span>
                  </div>
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-sm font-medium">{user.distance} km</span>
                    <span className="text-xs text-muted-foreground">{user.runs} corridas</span>
                  </div>
                  {user.position === 10 && (
                    <Badge variant="secondary" className="ml-auto md:ml-4">
                      Você
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

