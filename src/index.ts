import express, { Express, Request, Response } from "express"

const server: Express = express()

server.use(express.json())

server.get('api/v1/animals', (req: Request, res: Response) => {
    res.json({
        "especie": "Cachorro",
        "raca": "Pinscher",
        "idade": "5 anos",
        "peso": "10 kg"
    })
})

server.post('api/v1/animals', (req: Request, res: Response) => {
    const dados = req.body

    console.log(dados.especie)
    console.log(dados.raca)
    console.log(dados.idade)
    console.log(dados.peso)

    res.json({
        "especie": dados.especie,
        "raca": dados.raca,
        "idade": dados.idade,
        "peso": dados.peso
    })
})

server.listen(3000, () => {
    console.log("Servidor iniciado ...")
})