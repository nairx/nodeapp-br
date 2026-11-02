import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => console.log("Server started"))

app.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})