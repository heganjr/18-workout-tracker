const express = require(`express`);
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);

dotenv.config();

const app = express();
const PORT = 3000;


app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`MONGO: ${res.connection.host}`));

app.listen(PORT, console.log(`Server running on ${PORT}`));
