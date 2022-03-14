const axios = require("axios");

const toDoService = () => {
    console.log("Real Todos ");
    return axios.get(`${process.env.todosURL}`).then(result => {
        return result.data
    })
}

const todoServiceById = (id) => {
    console.log("Real Todos by Id");
    return axios.get(`${process.env.todosURL}${id}`).then(result => {
        return result.data
    })
}

module.exports={
    toDoService,
    todoServiceById
}