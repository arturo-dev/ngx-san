const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8080;
const router = express.Router();
const CONTEXT_PATH = '/mocks';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./src/router')(router);

app.use(CONTEXT_PATH, router);

app.listen(port, () => {
  console.log(`Mocks listening on context ${CONTEXT_PATH} with port ${port}`);
});
