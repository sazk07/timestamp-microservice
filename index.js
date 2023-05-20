const express = require("express")
const app = express()
const port = 3000

const thisdate = new Date()
const utcVar = thisdate.toUTCString()
const unixVar = Date.now()
console.log(unixVar)

app.get("/api/2023-05-20", (req, res) => {
  res.send({
    unix: unixVar,
    utc: utcVar
  })
})

app.get("/api/1684603518875", (req, res) => {
  res.send({
    unix: unixVar,
    utc: utcVar
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
