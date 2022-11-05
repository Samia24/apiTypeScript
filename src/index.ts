import express, { Express, Request, Response } from "express"
import { type } from "os"

const server: Express = express()

type Animal = {
    especie: string;
    raca: string;
    idade: number;
    peso: number;
}

const listaAnimais : Animal[] = []

server.use(express.json())

server.get('/api/v1/animals', (req: Request, res: Response) => {
    res.json(listaAnimais)
})

server.post('/api/v1/animals', (req: Request, res: Response) => {
    const { especie, raca, idade, peso } = req.body

    console.log(especie)
    console.log(raca)
    console.log(idade)
    console.log(peso)

    const newAnimal: Animal = {
        especie,
        raca,
        idade,
        peso,
    }

    listaAnimais.push(newAnimal)

    console.log(newAnimal)

    res.json(listaAnimais)
})

server.listen(3000, () => {
    console.log("Servidor iniciado ...")
})