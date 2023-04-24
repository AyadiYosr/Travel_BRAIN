const express = require("express");
const xss = require("xss-clean");
const rateLimiting = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const { errorHandler, notFound } = require("./middlewares/error");
const cors = require("cors");
const mongoose = require('mongoose');
require ("dotenv").config();



// Init App
const app = express();

// Middlewares
app.use(express.json());

// Security Headers (helmet)
app.use(helmet());

// Prevent Http Param Pollution
app.use(hpp());

// Prevent XSS(Cross Site Scripting) Attacks
app.use(xss());

// Rate Limiting
app.use(rateLimiting({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max:200,
}));

// Cors Policy
app.use(cors({
  origin: "http://localhost:3000"
}));

// Routes
app.get('/favicon.ico', (req, res) => res.status(204));

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/posts", require("./routes/postsRoute"));
app.use("/api/comments", require("./routes/commentsRoute"));
app.use("/api/categories", require("./routes/categoriesRoute"));
app.use("/api/password",require("./routes/passwordRoute"));


// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);


// // Running The Server
// const PORT = process.env.PORT || 4000;

// app.listen(PORT,()=>
// console.log(
//   `Server is running in ${process.env.NODE_ENV} mode on port${PORT}`
// )
// );

const DB_CONNECTION = "mongodb+srv://Seif:Seif123@cluster0.gldpckq.mongodb.net/blog?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.set('strictQuery', false);

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error));