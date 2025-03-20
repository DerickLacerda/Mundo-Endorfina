"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

// Tipos de usuário
export type UserRole = "user" | "admin"

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  points: number
  role: UserRole
}

// Contas de teste pré-configuradas
export const TEST_USERS = {
  user: {
    id: "user1",
    name: "João Silva",
    email: "joao@exemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    points: 1250,
    role: "user" as UserRole,
  },
  admin: {
    id: "admin1",
    name: "Admin Endorfina",
    email: "admin@exemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    points: 3500,
    role: "admin" as UserRole,
  },
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

// Criar o contexto com um valor padrão
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  isLoading: true,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Verificar se o usuário está logado ao carregar a página
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("currentUser")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Erro ao carregar usuário:", error)
      } finally {
        setIsLoading(false)
      }
    }

    // Executar apenas no cliente
    if (typeof window !== "undefined") {
      loadUser()
    } else {
      setIsLoading(false)
    }
  }, [])

  // Função de login
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulando uma chamada de API
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Verificar se é uma das contas de teste
          if (email === TEST_USERS.user.email && password === "123456") {
            setUser(TEST_USERS.user)
            localStorage.setItem("currentUser", JSON.stringify(TEST_USERS.user))
            setIsLoading(false)
            resolve(true)
            return
          }

          if (email === TEST_USERS.admin.email && password === "admin123") {
            setUser(TEST_USERS.admin)
            localStorage.setItem("currentUser", JSON.stringify(TEST_USERS.admin))
            setIsLoading(false)
            resolve(true)
            return
          }

          setIsLoading(false)
          resolve(false)
        } catch (error) {
          console.error("Erro no login:", error)
          setIsLoading(false)
          resolve(false)
        }
      }, 1000)
    })
  }

  // Função de registro
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulando uma chamada de API
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Criar um novo usuário
          const newUser: User = {
            id: `user${Date.now()}`,
            name,
            email,
            avatar: "/placeholder.svg?height=32&width=32",
            points: 0,
            role: "user",
          }

          setUser(newUser)
          localStorage.setItem("currentUser", JSON.stringify(newUser))
          setIsLoading(false)
          resolve(true)
        } catch (error) {
          console.error("Erro no registro:", error)
          setIsLoading(false)
          resolve(false)
        }
      }, 1000)
    })
  }

  // Função de logout
  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem("currentUser")
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
    router.push("/welcome")
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

