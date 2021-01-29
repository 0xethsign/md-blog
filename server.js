const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors')
const users = require("./routes/api/users")
const posts = require("./routes/api/posts")
const app = express();
app.use(cors())
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db 
console.log("connecting to db")
const MONGO_URI = process.env.MONGODB_URI;
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection is up and running."))
    .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;



app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users", users);
app.use("/api/posts", posts);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 8000;
console.log("Starting server...")
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));