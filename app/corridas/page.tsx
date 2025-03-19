"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { RecentRuns } from "@/components/recent-runs"
import { Upload, Image, BarChart } from "lucide-react"
import { toast } from "sonner"

export default function CorridasPage() {
  const [isDataView, setIsDataView] = useState(false)
  const [formData, setFormData] = useState({
    distance: "",
    time: "",
    location: "",
    image: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.distance || !formData.time || !formData.location) {
      toast.error("Por favor, preencha todos os campos obrigatórios")
      return
    }

    if (!formData.image && !isDataView) {
      toast.error("Por favor, adicione uma foto da sua corrida")
      return
    }

    // Simulando envio
    toast.success("Corrida registrada com sucesso!")

    // Resetar formulário
    setFormData({
      distance: "",
      time: "",
      location: "",
      image: null,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 space-y-4 p-8 pt-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Corridas</h2>
        </div>

        <Tabs defaultValue="registrar" className="space-y-4">
          <TabsList>
            <TabsTrigger value="registrar">Registrar Corrida</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="registrar" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Nova Corrida</CardTitle>
                    <CardDescription>Registre sua corrida e ganhe pontos</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="data-view" className="text-sm">
                      {isDataView ? "Dados do Smartwatch" : "Foto da Corrida"}
                    </Label>
                    <Switch id="data-view" checked={isDataView} onCheckedChange={setIsDataView} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="distance">Distância (km)</Label>
                      <Input
                        id="distance"
                        type="number"
                        step="0.01"
                        placeholder="5.0"
                        value={formData.distance}
                        onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Tempo (mm:ss)</Label>
                      <Input
                        id="time"
                        placeholder="25:00"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Local</Label>
                    <Input
                      id="location"
                      placeholder="Parque Ibirapuera"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  {isDataView ? (
                    <div className="space-y-2">
                      <Label>Dados do Smartwatch</Label>
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                          <div className="text-center">
                            <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                            <p className="mt-2 text-sm text-muted-foreground">
                              Arraste o arquivo de dados do seu smartwatch
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              Selecionar Arquivo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="image">Foto da Corrida</Label>
                      <div className="border rounded-md p-4">
                        {formData.image ? (
                          <div className="relative aspect-video rounded-md overflow-hidden">
                            <img
                              src={URL.createObjectURL(formData.image) || "/placeholder.svg"}
                              alt="Preview"
                              className="object-cover w-full h-full"
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setFormData({ ...formData, image: null })}
                            >
                              Remover
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                            <div className="text-center">
                              <Image className="h-10 w-10 mx-auto text-muted-foreground" />
                              <p className="mt-2 text-sm text-muted-foreground">
                                Arraste uma foto ou clique para selecionar
                              </p>
                              <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-2"
                                onClick={() => document.getElementById("image")?.click()}
                              >
                                Selecionar Foto
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Registrar Corrida
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Corridas</CardTitle>
                <CardDescription>Visualize todas as suas corridas registradas</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentRuns />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

