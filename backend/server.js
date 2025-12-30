import express from "express";

const port = process.env.PORT || 3001

const app = express()

const motivate = [
    {id : 1,
        title: 'start where you are in past' ,
        content : 'you dont need perfection just begin and clarity with follow'
    },
    {id : 2,
        title: 'consistency beat talent' ,
        content : 'small efforts done daily create big result over time'
    },
    {id : 3,
        title: 'struggle is a sign of growth' ,
        content : 'if it feel hard it means you are leveling up'
    },
    {id : 4,
        title: 'learn today lead tomorrow' ,
        content : 'the skills you build now decide your future tomorrow'
    },
    {id : 5,
        title: 'dont quit on day one' ,
        content : 'every exerpt was once confused and begineer like you'
    },

]

app.get('/login', (req, res)=>{
    res.send('welcome to login page 404')
})

app.get('/api/motivate', (req, res)=>{
    res.json(motivate)
})

app.listen(port, ()=>{
    console.log(`server is running on local host ${port}`)
})
