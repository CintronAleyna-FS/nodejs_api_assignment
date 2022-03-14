const axios = require("axios");

const dogBreedListService = () => {
    console.log("Random generated picture of a dog");
    return axios.get(`${process.env.dogBreedListURL}`).then(result => {
        return result.data
    })
}

const dogImageByBreed = (breed) => {
    console.log("Randomly generated image of dog by breed");
    return axios.get(`${process.env.dogBreedURL}${breed}${process.env.dogBreedImage}`).then(result => {
        return result.data
    })
}

module.exports={
    dogBreedListService,
    dogImageByBreed
}