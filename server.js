const express = require('express');
require("dotenv").config();

const {
    toDoService, 
    todoServiceById,
} = require("./services/toDoService");
const {
    dogBreedListService,
    dogImageByBreed
} = require("./services/dogBreedServices");

const app = express();

// for localhost:3000/
app.get("/", (req, res, next) =>{
    res.status(200).send("Service is UP!!!")
})

// todo API

// get external service
// http://localhost:3000/todo
app.get("/todo", (req,res,next) => {
    toDoService()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
        message: err.message, 
        status: err.status
        }
    }))
})

// get external service by ID
// http://localhost:3000/todo/56
app.get("/todo/:todoId",(req,res,next) => {
    const todoId = req.params.todoId;
    todoServiceById(todoId)
    .then(result=> res.status(200).json(result))
    .catch(err => res.status(err.status || 501).json({
        error: {
            message: err.message,
            status: err.status,
            method: req.method
        }}))
})

// dog breed list API

// get external service
// http://localhost:3000/dog/breeds
app.get("/dog/breeds", (req,res,next) => {
    dogBreedListService()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
        message: err.message, 
        status: err.status
        }
    }))
})

// get external service by breed
// http://localhost:3000/dog/breed
app.get("/dog/:breed",(req,res,next) => {
    const breed = req.params.breed;
    dogImageByBreed(breed)
    .then(result=> res.status(200).json(result))
    .catch(err => res.status(err.status || 501).json({
        error: {
            message: err.message,
            status: err.status,
            method: req.method
        }}))
})

// add middleware to handle errors and bad url paths
app.use((error, req,res,next) => {
    res.status(error.status || 500).json({
        error: {
            message: err.message, 
            status: err.status
        }
    })
})


app.listen(process.env.port, ()=> {console.log(`Starting on port ${process.env.port}`)});