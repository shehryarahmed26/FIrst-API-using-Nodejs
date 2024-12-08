import chalk from "chalk";
import express, { json } from "express";
import DBConnection from './DB/DBconnect.js'
import 'dotenv/config'
import model from "./DB/Model.js";
import { Get_Students } from "./Students/get.js";
import { Add_Student } from "./Students/post.js";
import { Update_Student } from "./Students/put.js";
import { Delete_Student } from "./Students/delete.js";
import { Get_Users } from "./Users/get.js";
import { Add_Users } from "./Users/post.js";
import { update_Users } from "./Users/put.js";
import { Delete_Users } from "./Users/delete.js";
import { User_login } from "./Login/login.js";

const app = express()
let tasks = [
    { id: 1, taskName: "Complete project report", status: "pending" },
    { id: 2, taskName: "Attend team meeting", status: "completed" },
    { id: 3, taskName: "Design new logo", status: "onhold" },
    { id: 4, taskName: "Submit expense reports", status: "completed" },
    { id: 5, taskName: "Update website content", status: "pending" },
    { id: 6, taskName: "Fix bug in the app", status: "onhold" },
    { id: 7, taskName: "Write code documentation", status: "pending" },
    { id: 8, taskName: "Plan marketing strategy", status: "completed" },
    { id: 9, taskName: "Organize team building event", status: "onhold" },
    { id: 10, taskName: "Review contract terms", status: "completed" }
  ];
  // body parser 
  app.use(express.json())

  // DB Connected 
  // console.log(process.env.DB_USER);
  
  app.get('/healthcheck', (req, res) => {
    res.send("all good")
  }) 
  // Students >>
  app.get('/students', Get_Students)
  app.post('/students', Add_Student)
  app.put('/students/:id', Update_Student)
  app.delete('/students/:id', Delete_Student)

  // Users >>
  app.get('/users', Get_Users)
  app.post('/users', Add_Users)
  app.put('/users/:id', update_Users)
  app.delete('/users/:id', Delete_Users)

  // User login 
  app.post('/users/login', User_login)
  // middleware
  function middleware (req, res, next) {
    const auth = req.query.auth
    
    if (auth) {
        next()
    }
    else {
        res.send('Authorizarion Failed')
    }
    
  }
  // Port Created
  const port = process.env.PORT || 4000;

  // Server Listen Start

  app.listen(port, ()=> console.log(chalk.white.bgGreen('Server Start')))
  DBConnection()
  
  


  // Get Request Call

  app.get('/', middleware, (req, res) => {
    res.send(tasks)
  }) 

  

//   Post Request Call

  app.post('/', middleware, (req, res) => {
    const task = req.body
    tasks.push(task)
    res.send({status: 200, message: 'User Created'})
  }) 

  // Delete Request CALL

  app.delete('/:id', middleware, (req, res) => {
    const {id} = req.params
    const filtertask = tasks.filter(taskobj => taskobj.id != id)        
    tasks = filtertask
    res.send({status: 200, message: 'Task Deleted'})
  }) 

  // Put Request Call

  app.put('/:id', middleware, (req, res) => {
    const {id} = req.params
    res.send(tasks)
  }) 
 