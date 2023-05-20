const express = require("express")
const app = express()
const port = 3000

const thisdate = new Date()
const utcVar = thisdate.toUTCString()
const unixVar = Date.now()
console.log(unixVar)
app.get("/", (req, res) => {
  res.send({
    unix: unixVar,
    utc: utcVar
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
