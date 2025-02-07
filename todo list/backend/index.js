import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import TodoModel from './Models/Todo.js'
// import { config } from 'dotenv'

// config()
const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://mylapuramakshaikumar:Akshai@cluster0.aov0p6q.mongodb.net/test")

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post("/add", async(req, res)=>{
    const task = req.body.task
    try{
    const result = await TodoModel.create({ task })
    res.json(result)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: "Error in creating a todo"})
        }
    })



app.listen(3001, () => {
    console.log("Server is running")
    })
