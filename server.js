const path = require('path');
const express = require('express');
const app = express();
const uniqid = require('uniqid');
const PORT = process.env.PORT || 3000;
let noteCount = 1;



console.log(uniqid()); // -> 4n5pxq24kpiob12og9
console.log(uniqid(), uniqid()); // -> 4n5pxq24kriob12ogd, 4n5pxq24ksiob12ogl

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//  console.log("server started on port 3000");

app.listen(PORT, function () {
    console.log("App listening on http://localhost: " + PORT);
});