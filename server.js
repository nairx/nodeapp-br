import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => console.log("Server started"))

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 120 },
    { id: 3, name: "Product 3", price: 140 }
]

app.get("/", (req, res) => {
    res.json(products)
})