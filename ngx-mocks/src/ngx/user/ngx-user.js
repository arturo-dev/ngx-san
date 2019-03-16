const PATH_API = '/ngx-user-api';

module.exports = (router, fs) => {
  router.get(`${PATH_API}/v1/user`, (req, res) => {
    fs.readFile(`${__dirname}/user.json`, (error, file) => {
      res.send(file);
    });
  });
};
