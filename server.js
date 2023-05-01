'use strict';
 let error404={
    "status": 404,
    "responseText": "Sorry, page not found "
    };
const express = require('express');
const cors = require('cors');
const movieData = require('./Movie Data/data.json');

const server = express();
server.use(cors());

server.get('/',handelHome);
server.get('/favorite',handelFavorite);
server.get('*',handelNotFound);
server.use(errorHandler);



function Movie(title,poster_path,overview){
    this.title=title;
    this.poster_path=poster_path;
    this.overview=overview;
   
 }

function handelHome(req,res){
        let obj ;
        obj = new Movie(movieData.title, movieData.poster_path, movieData.overview);
    
    return res.status(200).json(obj);
    
}
function handelNotFound(req,res){
    res.status(404).json(error404)
 }
function handelFavorite(req,res){
    return res.status(200).send("Welcome to Favorite Page");
}
function errorHandler (error,req,res){
    const err ={
        status : 500,
        message : error

    }
    res.status(500).send(err);
}

server.listen(3000, ()=>{
    console.log("listinig to port 3000");})