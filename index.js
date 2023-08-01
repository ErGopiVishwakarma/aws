const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.get('/post',(req,res)=>{
    res.send('post has been successfully uploaded..')
})

app.listen(8080,()=>{
    console.log('server is running at port 8080')
})