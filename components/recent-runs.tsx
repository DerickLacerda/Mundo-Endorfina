import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, ThumbsDown, MapPin } from "lucide-react"

interface Run {
  id: string
  user: {
    name: string
    avatar: string
  }
  distance: number
  time: string
  pace: string
  location: string
  date: string // Alterado de Date para string
  image: string
  likes: number
  dislikes: number
  points: number
}

export function RecentRuns() {
  // Dados simulados de corridas com datas como strings
  const runs: Run[] = [
    {
      id: "1",
      user: {
        name: "João Silva",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      distance: 5.2,
      time: "28:45",
      pace: "5:31",
      location: "Parque Ibirapuera",
      date: "18/03/2024", // Data como string já formatada
      image: "/placeholder.svg?height=200&width=400",
      likes: 24,
      dislikes: 0,
      points: 52,
    },
    {
      id: "2",
      user: {
        name: "João Silva",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      distance: 10.5,
      time: "58:20",
      pace: "5:33",
      location: "Marginal Pinheiros",
      date: "15/03/2024", // Data como string já formatada
      image: "/placeholder.svg?height=200&width=400",
      likes: 31,
      dislikes: 2,
      points: 105,
    },
    {
      id: "3",
      user: {
        name: "João Silva",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      distance: 8.7,
      time: "47:12",
      pace: "5:25",
      location: "Parque Villa-Lobos",
      date: "12/03/2024", // Data como string já formatada
      image: "/placeholder.svg?height=200&width=400",
      likes: 18,
      dislikes: 1,
      points: 87,
    },
  ]

  return (
    <div className="space-y-6">
      {runs.map((run) => (
        <div key={run.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={run.user.avatar} alt={run.user.name} />
              <AvatarFallback>{run.user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{run.user.name}</span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{run.location}</span>
                <span>•</span>
                <span>{run.date}</span>
              </div>
            </div>
            <Badge variant="secondary" className="ml-auto">
              +{run.points} pontos
            </Badge>
          </div>

          <div className="aspect-video relative rounded-md overflow-hidden">
            <img
              src={run.image || "/placeholder.svg"}
              alt={`Corrida de ${run.distance}km`}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-muted rounded-md p-2">
              <p className="text-xs text-muted-foreground">Distância</p>
              <p className="font-medium">{run.distance} km</p>
            </div>
            <div className="bg-muted rounded-md p-2">
              <p className="text-xs text-muted-foreground">Tempo</p>
              <p className="font-medium">{run.time}</p>
            </div>
            <div className="bg-muted rounded-md p-2">
              <p className="text-xs text-muted-foreground">Pace</p>
              <p className="font-medium">{run.pace} min/km</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4 text-primary" />
                <span className="text-sm">{run.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsDown className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{run.dislikes}</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Ver detalhes</div>
          </div>
        </div>
      ))}
    </div>
  )
}

