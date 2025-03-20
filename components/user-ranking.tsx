import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface RankingUser {
  id: string
  name: string
  avatar: string
  points: number
  position: number
}

export function UserRanking() {
  // Dados simulados de ranking
  const topUsers: RankingUser[] = [
    { id: "1", name: "Ana Silva", avatar: "/placeholder.svg?height=32&width=32", points: 2450, position: 1 },
    { id: "2", name: "Carlos Oliveira", avatar: "/placeholder.svg?height=32&width=32", points: 2320, position: 2 },
    { id: "3", name: "Mariana Santos", avatar: "/placeholder.svg?height=32&width=32", points: 2180, position: 3 },
    { id: "10", name: "João Silva", avatar: "/placeholder.svg?height=32&width=32", points: 1250, position: 10 },
  ]

  return (
    <div className="space-y-4">
      {topUsers.map((user) => (
        <div
          key={user.id}
          className={`flex items-center gap-3 p-3 rounded-md ${user.position === 10 ? "bg-muted" : ""}`}
        >
          <Badge
            variant={user.position <= 3 ? "secondary" : "outline"}
            className="w-6 h-6 rounded-full flex items-center justify-center p-0"
          >
            {user.position}
          </Badge>
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.points} pontos</span>
          </div>
          {user.position === 10 && (
            <Badge variant="secondary" className="ml-auto">
              Você
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}

