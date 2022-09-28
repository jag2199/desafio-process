import { Router } from "express"

const router = Router()

const info = {
    "Node version": process.version,
    "Platform": process.platform,
    "Directorio de ejecución": process.cwd(),
    "ID del proceso": process.pid,
    "Uso de la memoria": process.memoryUsage(),
    "Memoria total reservada (rss)": process.memoryUsage().rss,
    "path de ejecución": process.execPath, //donde está el ejecutable de node
    "Argumentos de entrada": process.argv,
}

router.get("/", (req, res) => {
    res.send(info)
})

export default router