import express from 'express'
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','ejs')

import Animal from './entities/Animal.js'
import {animals} from './data/animals.js'

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/gallery', (req,res)=>{
    res.render('gallery')
})