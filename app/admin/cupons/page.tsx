"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"

interface Coupon {
  id: string
  code: string
  description: string
  pointsRequired: number
  expiresAt: Date
  isActive: boolean
}

export default function CuponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: "1",
      code: "ENDORFINA10",
      description: "10% de desconto em tênis de corrida",
      pointsRequired: 500,
      expiresAt: new Date(2024, 5, 30),
      isActive: true,
    },
    {
      id: "2",
      code: "CORRIDA20",
      description: "20% de desconto em roupas esportivas",
      pointsRequired: 800,
      expiresAt: new Date(2024, 4, 15),
      isActive: true,
    },
    {
      id: "3",
      code: "FRETE0",
      description: "Frete grátis em qualquer compra",
      pointsRequired: 300,
      expiresAt: new Date(2024, 3, 10),
      isActive: false,
    },
  ])

  const [newCoupon, setNewCoupon] = useState<Omit<Coupon, "id">>({
    code: "",
    description: "",
    pointsRequired: 0,
    expiresAt: new Date(),
    isActive: true,
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCouponId, setEditingCouponId] = useState<string | null>(null)

  const handleAddCoupon = () => {
    if (!newCoupon.code || !newCoupon.description || newCoupon.pointsRequired <= 0) {
      toast.error("Preencha todos os campos obrigatórios")
      return
    }

    if (editingCouponId) {
      // Editar cupom existente
      setCoupons(
        coupons.map((coupon) => (coupon.id === editingCouponId ? { ...newCoupon, id: editingCouponId } : coupon)),
      )
      toast.success("Cupom atualizado com sucesso")
    } else {
      // Adicionar novo cupom
      const id = Math.random().toString(36).substring(2, 9)
      setCoupons([...coupons, { ...newCoupon, id }])
      toast.success("Cupom adicionado com sucesso")
    }

    // Resetar formulário
    setNewCoupon({
      code: "",
      description: "",
      pointsRequired: 0,
      expiresAt: new Date(),
      isActive: true,
    })
    setEditingCouponId(null)
    setIsDialogOpen(false)
  }

  const handleEditCoupon = (coupon: Coupon) => {
    setNewCoupon({
      code: coupon.code,
      description: coupon.description,
      pointsRequired: coupon.pointsRequired,
      expiresAt: coupon.expiresAt,
      isActive: coupon.isActive,
    })
    setEditingCouponId(coupon.id)
    setIsDialogOpen(true)
  }

  const handleDeleteCoupon = (id: string) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id))
    toast.success("Cupom removido com sucesso")
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR").format(date)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Cupons</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Cupom
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingCouponId ? "Editar Cupom" : "Adicionar Novo Cupom"}</DialogTitle>
                <DialogDescription>Preencha os detalhes do cupom abaixo</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Código do Cupom</Label>
                  <Input
                    id="code"
                    placeholder="ENDORFINA10"
                    value={newCoupon.code}
                    onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Input
                    id="description"
                    placeholder="10% de desconto em tênis de corrida"
                    value={newCoupon.description}
                    onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="points">Pontos Necessários</Label>
                  <Input
                    id="points"
                    type="number"
                    placeholder="500"
                    value={newCoupon.pointsRequired || ""}
                    onChange={(e) =>
                      setNewCoupon({ ...newCoupon, pointsRequired: Number.parseInt(e.target.value) || 0 })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expires">Data de Expiração</Label>
                  <Input
                    id="expires"
                    type="date"
                    value={newCoupon.expiresAt.toISOString().split("T")[0]}
                    onChange={(e) => setNewCoupon({ ...newCoupon, expiresAt: new Date(e.target.value) })}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="active"
                    checked={newCoupon.isActive}
                    onChange={(e) => setNewCoupon({ ...newCoupon, isActive: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="active">Cupom Ativo</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddCoupon}>{editingCouponId ? "Salvar Alterações" : "Adicionar Cupom"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Cupons</CardTitle>
            <CardDescription>Gerencie os cupons disponíveis para resgate</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Pontos</TableHead>
                  <TableHead>Expiração</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                    <TableCell className="font-medium">{coupon.code}</TableCell>
                    <TableCell>{coupon.description}</TableCell>
                    <TableCell>{coupon.pointsRequired}</TableCell>
                    <TableCell>{formatDate(coupon.expiresAt)}</TableCell>
                    <TableCell>
                      <Badge variant={coupon.isActive ? "secondary" : "outline"}>
                        {coupon.isActive ? "Ativo" : "Inativo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEditCoupon(coupon)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteCoupon(coupon.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

