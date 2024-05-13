const express = require('express')
const app = express()
const port = 3000

// ## Exercise 1
app.get('/greeting', (req, res) => {
    const greeting = req.query.greeting
    const name = req.query.name
  
    res.send(`${greeting} ${name}! Nice to meet you.`)
  })

// ## Exercise 2
app.get('/roll', (req, res) => {
    const roll = req.query.roll
    const number = req.query.number

    if (isNaN(number)) {
        return res.send('Please provide a number.')
      }

    res.send(`You rolled a ${Math.floor(Math.random()*17)}.`)

})

// ## Exercise 3
app.get('/collectible', (req, res) => {
  const collectible = req.query.collectible
  let i
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  collectibles.forEach((col) => {
    if (collectible === col.name){
      res.send(`So you want the ${col.name}? For ${col.price}, it can be yours!`)
    }else{
      i++
    }
    })

    if (i===3){
      res.send(`This item is not yet in stock. Check back soon!`)
    }
})

app.listen(port, ()=>{
  console.log('Express is running on port 3000')
})
