const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_URI, HOST } = process.env;
const PORT = process.env.PORT || 3001;

const app = require('./app');

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, HOST, () => {
      console.log('Server is listening on', HOST + ':' + PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
  

app.get('/', (req, res) => {
  res.send('Hello world!');
});
