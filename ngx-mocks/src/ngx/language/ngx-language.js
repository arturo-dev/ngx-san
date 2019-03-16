const PATH_API = '/ngx-language-api';

module.exports = (router, fs) => {
  router.get(`${PATH_API}/v1/language/es_ES.json`, (req, res) => {
    fs.readFile(`${__dirname}/es_ES.json`, (error, file) => {
      res.send(file);
    });
  });
};
