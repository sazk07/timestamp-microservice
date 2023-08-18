'use strict'
const express = require("express")
const app = express()
const port = 3000

app.get("/api/:date_string?", (req, res) => {
  const { date_string } = req.params
  let dateObj
  // if empty
  if (!date_string) {
    dateObj = new Date()
  } else {
    // check if number
    const checkUnix = Number(date_string)
    dateObj = isNaN(checkUnix) ? new Date(date_string) : new Date(checkUnix);
  }
  // check if valid format
  if (dateObj.toString() === "Invalid Date") {
    res.json({
      error: "Invalid Date"
    })
  } else {
    // get unix and utc times
    const unix = dateObj.getTime()
    const utc = dateObj.toUTCString()
    res.json({
      unix,
      utc
    })
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
