const express = require("express")
const app = express()
const port = 3000

app.get("/api/:date_string?", (req, res) => {
  let dateObj
  let unixVal
  let utcVal
  let resObj
  const { date_string } = req.params
  // check if string is date using regex tests
  const dateRegEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  const isValidDate = dateRegEx.test(date_string)
  const unixRegEx = /^[0-9]+$/;
  const isValidUnixDate = unixRegEx.test(date_string)

  try {
    dateObj = new Date(date_string)
    // is it in yyyy-mm-dd format
    if (isValidDate) {
      unixVal = dateObj.valueOf()
    } else if (isValidUnixDate) {
      // is it in all numbers format
      unixVal = Number(date_string)
      dateObj = new Date(unixVal)
    } else if (!date_string) {
      unixVal = Date.now()
      dateObj = new Date(unixVal)
    } else {
      throw new Error
    }
    utcVal = dateObj.toUTCString()
    resObj = {
      unix:unixVal,
      utc:utcVal
    }
  } catch (err) {
    resObj = {
      error: "Invalid Date"
    }
  }
  res.json(resObj)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
