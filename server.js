const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST, HOST } = process.env;
const PORT = process.env.PORT || 4005;

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, HOST, () => {
      console.log("Server is listening on", HOST + ":" + PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// Define tus rutas aquí, después de la definición de app y antes de la llamada a app.listen
app.get("/", (req, res) => {
  res.send("Hello world!");
});
