const express = require("express"),
        app = express(),
        path = require("path"),
        DB_NAME = "beltdb",
        port = 8000,
        cors = require("cors");

app.use(express.json());
app.use(cors());

require("./utils/mongoose")(DB_NAME)
require("./utils/routes")(app)

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/build/index.html'));
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
