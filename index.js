const express = require("express")
const app = express()
const port = 3000

app.get("/api/:date_string?", (req, res) => {
  const { date_string } = req.params
  let dateObj
  if (!date_string) {
    dateObj = new Date()
  } else {
    const checkUnix = date_string * 1
    dateObj = isNaN(checkUnix) ? new Date(date_string) : new Date(checkUnix);
  }
  // check if valid format
  if (dateObj == "Invalid Date") {
    res.json({
      error: "Invalid Date"
    })
  } else {
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
