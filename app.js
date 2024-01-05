const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config({ path: "./config.env" });
//import routes
const tasks = require("./routes/task");
const port = process.env.PORT || 3000;
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//middleware
app.use(express.json());
app.use(express.static("public"));
//routes
//v1 means version`1`
app.use("/api/v1/tasks", tasks);

//custom middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
//connect to db

const db = process.env.URI.replace("<PASSWORD>", process.env.PASSWORD);

const start = async () => {
  try {
    await connectDB(db);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
