require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passportSetup = require("./config/passport/passport-setup");


mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Allow Cross-Origin Resource Sharing (cors)
// (access the API from the frontend JavaScript on a different domain/origin)
app.use(
  cors({
    // allow other domains/origins to send cookies
    credentials: true,
    // this is the domain we want cookies from (our React app)
    origin: ["http://localhost:3000"]
  })
);

app.use(
  session({
    secret: process.env.SESSIONSECRET,
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

passportSetup(app);

const index = require("./routes/index.js");
app.use("/api", index);

const authRouter = require("./routes/auth-router");
app.use("/api", authRouter);

const searchRouter = require("./routes/searchResult-router");
app.use("/api", searchRouter);

const categoryRouter = require("./routes/category-router");
app.use("/api", categoryRouter);

const fileRouter = require("./routes/file-router");
app.use("/api", fileRouter);

const quizzRouter = require("./routes/quizz-router");
app.use("/api", quizzRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
