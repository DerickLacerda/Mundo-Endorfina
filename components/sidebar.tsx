"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Trophy, ShoppingBag, BarChart3, LogOut, Settings, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [user] = useState({
    name: "João Silva",
    email: "joao@exemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    points: 1250,
  })

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Meu Perfil",
      icon: User,
      href: "/perfil",
      active: pathname === "/perfil",
    },
    {
      label: "Corridas",
      icon: Trophy,
      href: "/corridas",
      active: pathname === "/corridas",
    },
    {
      label: "Ranking",
      icon: Award,
      href: "/ranking",
      active: pathname === "/ranking",
    },
    {
      label: "Cupons",
      icon: ShoppingBag,
      href: "/cupons",
      active: pathname === "/cupons",
    },
    {
      label: "Estatísticas",
      icon: BarChart3,
      href: "/estatisticas",
      active: pathname === "/estatisticas",
    },
  ]

  const adminRoutes = [
    {
      label: "Painel Admin",
      icon: Settings,
      href: "/admin",
      active: pathname === "/admin",
    },
  ]

  const isAdmin = true // Simulando usuário admin

  return (
    <div className={cn("pb-12 w-64 border-r bg-card", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Trophy className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">Mundo Endorfina</h1>
          </Link>
        </div>
        <div className="px-4">
          <div className="flex items-center gap-4 mb-4">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.points} pontos</p>
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground px-2 py-1">Menu Principal</p>
            <nav className="grid gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    route.active ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {isAdmin && (
          <div className="px-3">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-2 py-1">Administração</p>
              <nav className="grid gap-1">
                {adminRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      route.active ? "bg-accent text-accent-foreground" : "transparent",
                    )}
                  >
                    <route.icon className="h-4 w-4" />
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
        <div className="px-3 mt-auto pt-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/login">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

