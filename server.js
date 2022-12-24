const mongoose = require("mongoose");

const app = require("./app");

const { PORT = 3000 } = process.env;
const DB_HOST =
  "mongodb+srv://valentina:5aMX7R4KOAEC7U4A@cluster0.gpimnpq.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log("Server running. Use our API on port: 3000");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
