const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/students/:id', (req, res) => {
    console.log(req.params)
    if(process.env.MONGODB_URL==='abhishek'){
        res.send({
            name: "Abhishek",
            place: "Hyderabad",
            age: 27
        })
    }
    else{
        res.send({
            name: "Raghu",
            place: "Amberpet",
            age: 27
        })

    }

  })

app.listen(PORT, ()=>{
    console.log("Express is running on ", PORT)
})