import { Router } from "express"

import moviesschema from '../sqlschema/movie.js'


const router = Router()


router.post('/', async(req, res)=>{
   try {
    console.log(req.body)
    await moviesschema.create({
        name: req.body.name,
        genre: req.body.genre
    })
    res.status(201).json({message: 'create'})
   } catch (error) {
       console.log(error)
   }
})



export default router