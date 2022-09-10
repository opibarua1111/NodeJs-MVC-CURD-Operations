const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

const usersRoutes = require("./routes/v1/users.route");

const { errorHandler } = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", usersRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs", {
    id: 1,
    user: {
      name: "Opi",
    },
  });
});

app.all("*", (req, res) => {
  res.send("No Route found");
});

//Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(` listening at ${port}`);
});

//working when express not handle error

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
