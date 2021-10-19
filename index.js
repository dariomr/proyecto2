import express from 'express'
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','ejs')

import Animal from './entities/Animal.js'
import {animals} from './data/animals.js'

app.get('/',(req,res)=>{
    let arrayAnimales = []
    let nombre = req.query.animal
    console.log(nombre)
    if(nombre) {
        for (let i = 0; i < animals.length; I++) {
            let animal = animals[i]
            if (animal.nombre == nombre) {
                arrayAnimales = [animal]
            }
        }
    }
    else {
        arrayAnimales = [...animals]
    }
    res.render('index',{animals: arrayAnimales})
})

app.get('/gallery', (req,res)=>{
    res.render('gallery')
})

app.listen(8080,()=>{
    console.log('server started')
})